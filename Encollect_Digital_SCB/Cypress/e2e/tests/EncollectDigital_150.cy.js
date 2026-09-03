import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableUploadPage from '../pages/ReceivableUploadPage';

describe('TC_150_POS - Navigate to Upload Status', () => {
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

    it('Verify Bulk Receivable Upload Status navigation', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableUploadPage.navigateToUploadStatus();
        });
    });
});