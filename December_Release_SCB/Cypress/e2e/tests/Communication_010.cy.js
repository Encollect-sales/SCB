import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Body Length Boundary Validation', () => {
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

    it('Verify body with exactly 100 characters is allowed', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);

            communicationPage.Communication_10(); // COM-NOT-010
        });
    });
});
