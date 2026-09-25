import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import MastersUploadPage from '../pages/MasterUploadPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital - Bulk Upload Masters', () => {

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

    it('TC_015_POS - Verify Bulk Upload Masters screen is accessible', () => {

        getTestData('loginData', 'login').then(user => {

            // Login to application
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            // Navigate to Bulk Upload Masters
            mastersUploadPage.NavigateToBulkUploadMasters();

            // Verify Bulk Upload Masters screen
            mastersUploadPage.VerifyBulkUploadMastersScreen();

        });

    });

});