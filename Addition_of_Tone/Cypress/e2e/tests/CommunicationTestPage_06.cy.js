import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Communication Template - TC06', () => {

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

    it('TC06 - Verify Tone field is hidden dynamically when Channel = Notification', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Execute TC06
            communicationPage.CommunicationTestPage_06();

        });

    });

});