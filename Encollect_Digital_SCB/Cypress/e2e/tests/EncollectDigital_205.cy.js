import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_205_POS - Verify Last 5 PTP records are displayed', () => {
    let loginPage;
    let accountDetailsPage;

    before(() => {
        getLocators('loginPage').then(locators => { loginPage = new LoginPage(locators); });
        getLocators('AccountDetails').then(locators => { accountDetailsPage = new AccountDetailsPage(locators); });
    });

    it('Verify Last 5 PTP records are displayed in tabular format', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.navigateToAccountDetails();
            accountDetailsPage.verifyLast5PTPRecordsDisplayed();
        });
    });
});