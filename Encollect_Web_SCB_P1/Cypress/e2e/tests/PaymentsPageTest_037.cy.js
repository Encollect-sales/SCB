import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments Module - Receive money from collector - Logged in user should be able to view "Payments Module" and its Sub Module "Receive Money from collector"', () => {
    let loginPage;
    let paymentsPage;

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('paymentsPage').then(locators => {
            paymentsPage = new PaymentsPage(locators);
        });
    });

    it('Payment - TC_ID_037', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);
            paymentsPage.PaymentModule();
            cy.wait(5000);

        });
    });

    

});