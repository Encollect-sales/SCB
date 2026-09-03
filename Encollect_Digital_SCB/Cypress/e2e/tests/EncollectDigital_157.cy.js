import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableSearchPage from '../pages/ReceivableSearchPage';

describe('TC_157_NEG - Verify search fields are fixed', () => {
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

    it('Verify search fields are non-editable', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableSearchPage.verifySearchFieldsNonEditable();
        });
    });
});