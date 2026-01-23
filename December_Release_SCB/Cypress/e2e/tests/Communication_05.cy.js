import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Body Mandatory Validation', () => {
    let loginPage;
    let communicationPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('communication').then(locators => {
            communicationPage = new CommunicationPage(locators);
        });
    });

    it('Verify Body field is mandatory for Notification template', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);

            communicationPage.Communication_05(); // COM-NOT-005
        });
    });
});
