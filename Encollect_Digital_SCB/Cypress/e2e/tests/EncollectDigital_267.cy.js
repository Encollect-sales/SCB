import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableSearchPage from '../pages/ReceivableSearchPage';

describe('TC_267_POS - Verify Drawee Branch column', () => {
    let loginPage;
    let receivableSearchPage;

    before(() => {
        getLocators('loginPage').then(locators => { loginPage = new LoginPage(locators); });
        getLocators('ReceivableSearch').then(locators => { receivableSearchPage = new ReceivableSearchPage(locators); });
    });

    it('Verify Drawee Branch column is displayed', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableSearchPage.navigateToAccountDetails();
            receivableSearchPage.verifyDraweeBranchColumnDisplayed();
        });
    });
});