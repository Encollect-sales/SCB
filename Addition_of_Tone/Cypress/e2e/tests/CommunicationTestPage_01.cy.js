import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Communication Template -', () => {

    let loginPage;
    let communicationPage;

    before(() => {

        // Load login locators
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        // Load Communication locators
        getLocators('Communication').then(locators => {
            communicationPage = new CommunicationPage(locators);
        });

    });

    it('Communication - Create Template - TC_ID_01', () => {

        getTestData('loginData', 'login').then(user => {

            // Login to application
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Execute TC01
            communicationPage.CommunicationTestPage_01();

        });

    });

});