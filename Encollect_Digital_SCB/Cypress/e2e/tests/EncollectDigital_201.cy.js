import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableSearchPage from '../pages/ReceivableSearchPage';

describe('TC_201_NEG - Online Payment Requests when no records are available', () => {
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

    it('Verify Online Payment Requests section when no records are available', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableSearchPage.verifyOnlinePaymentRequestsNoRecords();
        });
    });
});