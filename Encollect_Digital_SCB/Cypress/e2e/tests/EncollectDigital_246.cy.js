import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableSearchPage from '../pages/ReceivableSearchPage';

describe('TC_246_POS - Verify Email ID column is displayed', () => {
    let loginPage;
    let receivableSearchPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('ReceivableSearch').then(locators => {
            receivableSearchPage = new ReceivableSearchPage(locators);
        });
    });

    it('Verify Email ID column is displayed', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            //receivableSearchPage.navigateToAccountDetails();
            receivableSearchPage.verifyCommunicationEmailIdColumn();
        });
    });
});