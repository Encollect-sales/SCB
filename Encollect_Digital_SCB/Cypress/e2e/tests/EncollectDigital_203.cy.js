import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableSearchPage from '../pages/ReceivableSearchPage';

describe('TC_203_NEG - Next button on last page', () => {
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

    it('Verify Next button on the last page of Online Payment Requests', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableSearchPage.verifyNextButtonOnLastPage();
        });
    });
});