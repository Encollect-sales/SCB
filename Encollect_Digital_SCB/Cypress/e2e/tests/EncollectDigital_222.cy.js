import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AccountDetailsPage from '../pages/AccountDetailsPage';

describe('TC_222_NEG - PTP records less than five', () => {
    let loginPage;
    let accountDetailsPage;

    before(() => {
        getLocators('loginPage').then(locators => { loginPage = new LoginPage(locators); });
        getLocators('AccountDetails').then(locators => { accountDetailsPage = new AccountDetailsPage(locators); });
    });

    it('Verify system behavior when PTP records are less than five', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            accountDetailsPage.navigateToAccountDetails();
            accountDetailsPage.verifyPTPRecordsLessThanFive();
        });
    });
});