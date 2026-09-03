import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_192_POS - Online Payment Requests list', () => {
    let loginPage;
    let accountDetailsPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('AccountDetails').then(locators => {
            accountDetailsPage = new AccountDetailsPage(locators);
        });
    });

    it('Verify Online Payment Requests list is displayed', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.verifyNavigationToAccountDetails();
            accountDetailsPage.verifyOnlinePaymentRequestsList();
        });
    });
});