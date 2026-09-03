import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_185_POS - Fixed 360 Degree View cards', () => {
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

    it('Verify all four cards are fixed and visible', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.verifyNavigationToAccountDetails();
            accountDetailsPage.verifyCardsAreFixed();
        });
    });
});