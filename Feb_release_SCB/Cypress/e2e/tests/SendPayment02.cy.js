import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import SendPaymentPage from '../pages/SendPaymentPage.js';

describe('Send Payment - Verify expired payment link behavior - Insta pay', () => {

    let loginPage;
    let sendPaymentPage;

    before(() => {

        // Load LoginPage locators
        getLocators('loginPage').then((locators) => {
            loginPage = new LoginPage(locators);
        });

        // Load SendPaymentPage locators
        getLocators('sendpayment').then((locators) => {
            sendPaymentPage = new SendPaymentPage(locators);
        });

    });

    it('Verify expired payment link behavior', () => {

        getTestData('loginData', 'login').then((user) => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            sendPaymentPage.sendpayment02();

        });

    });

});