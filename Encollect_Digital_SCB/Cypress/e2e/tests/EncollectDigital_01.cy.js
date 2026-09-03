import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Verify Login Page Loads Successfully', () => {

    let loginPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

    });

    it('TC_001_POS - Verify login page loads successfully', () => {

        loginPage.openLoginPage();

        loginPage.verifyLoginPageLoaded();

    });

});