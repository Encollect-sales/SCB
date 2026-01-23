import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Entry Point Validation', () => {
    let loginPage;
    let communicationPage;

    before(() => {
        // Load locators
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('communication').then(locators => {
            communicationPage = new CommunicationPage(locators);
        });
    });

    it('Verify User appears as Entry Point for Notification templates', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);

            communicationPage.Communication_02();   // Second test case flow
        });
    });
});
