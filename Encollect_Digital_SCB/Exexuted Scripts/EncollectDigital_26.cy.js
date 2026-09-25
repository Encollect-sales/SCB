import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import MastersUploadPage from '../pages/MasterUploadPage';

describe('ENCollect Digital - Bulk Upload Masters - Upload Action', () => {

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

    it('TC_026_POS - Verify upload action triggers on clicking upload', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

                mastersUploadPage.NavigateToBulkUploadMasters();
                cy.wait(2000);
                mastersUploadPage.uploadBankMasterFile();

        

        });

    });

});