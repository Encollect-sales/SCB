import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableUploadPage from '../pages/ReceivableUploadPage';

describe('TC_142_POS - Bulk Receivable Upload', () => {
    let loginPage;
    let receivableUploadPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('ReceivableUpload').then(locators => {
            receivableUploadPage = new ReceivableUploadPage(locators);
        });
    });

    it('Verify Bulk Receivable Upload page loads successfully', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableUploadPage.navigateToBulkReceivableUpload();
        });
    });
});