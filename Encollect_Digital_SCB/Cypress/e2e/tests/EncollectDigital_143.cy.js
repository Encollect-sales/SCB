import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableUploadPage from '../pages/ReceivableUploadPage';

describe('TC_143_POS - Download Template', () => {
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

    it('Verify Download Template button functionality', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableUploadPage.downloadTemplate();
        });
    });
});