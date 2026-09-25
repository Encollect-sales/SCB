import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import MastersUploadPage from '../pages/MasterUploadPage';

describe('ENCollect Digital - Product Hierarchy Pan Drag', () => {

    let loginPage;
    let mastersUploadPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('MastersUpload').then(locators => {
            mastersUploadPage = new MastersUploadPage(locators);
        });

        Cypress.on('uncaught:exception', (err) => {

            if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                return false;
            }

        });

    });

    it('TC_038_POS - Verify pan/drag functionality of hierarchy', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            mastersUploadPage.verifyProductHierarchyScreen();

            mastersUploadPage.verifyProductHierarchyPan();

        });

    });

});