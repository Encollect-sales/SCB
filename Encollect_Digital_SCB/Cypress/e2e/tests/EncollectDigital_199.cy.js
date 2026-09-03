import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_199_POS - Next page navigation', () => {
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

    it('Verify user can navigate to next page', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.verifyNavigationToAccountDetails();
            accountDetailsPage.verifyNextPageNavigation();
            // accountDetailsPage.verifyNextPageDisplayed();
        });
    });
});
