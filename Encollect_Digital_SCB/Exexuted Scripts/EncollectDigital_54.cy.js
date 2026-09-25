import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PermissionsPage from '../pages/PermissionsPage';

describe('ENCollect Digital - Permissions Menu', () => {

    let loginPage;
    let permissionsPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Permissions').then(locators => {
            permissionsPage = new PermissionsPage(locators);
        });

        Cypress.on('uncaught:exception', (err) => {

            if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                return false;
            }

        });

    });

    it('TC_054_POS - Verify Permissions menu is visible in left navigation', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            permissionsPage.verifyPermissionsMenu();

        });

    });

});