import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PermissionsPage from '../pages/PermissionsPage';

describe('ENCollect Digital - Unauthorized Permissions Access', () => {

    let loginPage;
    let permissionsPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Permissions').then(locators => {
            permissionsPage = new PermissionsPage(locators);
        });

    });

    it('TC_059_NEG - Verify Permissions menu is not visible for unauthorized user', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            permissionsPage.verifyPermissionsMenuNotVisible();

        });

    });

});