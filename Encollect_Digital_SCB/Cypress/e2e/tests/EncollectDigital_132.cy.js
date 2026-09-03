import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentsPage from '../pages/PaymentsPage';

describe('TC_132_POS - Bank Staff User Type', () => {
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

    it('Verify user can select Bank Staff user type', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            paymentsPage.selectBankStaff();
        });
    });
});