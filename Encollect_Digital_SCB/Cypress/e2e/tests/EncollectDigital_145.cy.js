import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReceivableUploadPage from '../pages/ReceivableUploadPage';

describe('TC_145_POS - Verify Upload File section is visible', () => {
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

    it('Verify Upload File section is visible', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            receivableUploadPage.verifyUploadFileSectionVisible();
        });
    });
});