import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_230_POS - Verify PTP Amount column in Trail History', () => {
    let loginPage;
    let accountDetailsPage;

    before(() => {
        getLocators('loginPage').then(locators => { loginPage = new LoginPage(locators); });
        getLocators('AccountDetails').then(locators => { accountDetailsPage = new AccountDetailsPage(locators); });
    });

    it('Verify PTP Amount column is displayed', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.navigateToAccountDetails();
            accountDetailsPage.verifyTrailHistoryPTPAmountDisplayed();
        });
    });
});