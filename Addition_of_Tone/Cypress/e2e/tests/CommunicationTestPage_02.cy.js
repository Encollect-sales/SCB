import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Communication Template - TC02', () => {

    let loginPage;
    let communicationPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Communication').then(locators => {
            communicationPage = new CommunicationPage(locators);
        });

    });

    it('TC02 - Verify Tone dropdown contains all 4 options', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Execute TC02
            communicationPage.CommunicationTestPage_02();

        });

    });

});