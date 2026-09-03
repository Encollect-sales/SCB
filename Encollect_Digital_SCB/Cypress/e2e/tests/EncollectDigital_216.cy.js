import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_216_POS - Verify latest five PTP records', () => {
    let loginPage;
    let accountDetailsPage;

    before(() => {
        getLocators('loginPage').then(locators => { loginPage = new LoginPage(locators); });
        getLocators('AccountDetails').then(locators => { accountDetailsPage = new AccountDetailsPage(locators); });
    });

    it('Verify only latest five PTP records are displayed', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.navigateToAccountDetails();
            accountDetailsPage.verifyOnlyLatestFivePTPRecordsDisplayed();
        });
    });
});