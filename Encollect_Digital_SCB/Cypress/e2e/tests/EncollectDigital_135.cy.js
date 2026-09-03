import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentsPage from '../pages/PaymentsPage';

describe('TC_135_NEG - From Date Greater Than To Date', () => {
    let loginPage;
    let paymentsPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('Payments').then(locators => {
            paymentsPage = new PaymentsPage(locators);
        });
    });

    it('Verify validation when From Date is greater than To Date', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            paymentsPage.verifyFromDateGreaterThanToDate();
        });
    });
});