import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Communication Template - TC04', () => {

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

    it('TC04 - Verify Tone field appears dynamically when Channel = SMS', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Execute TC04
            communicationPage.CommunicationTestPage_04();

        });

    });

});