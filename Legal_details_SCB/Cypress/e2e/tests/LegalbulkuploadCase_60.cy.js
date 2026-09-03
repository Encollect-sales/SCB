import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Case Bulk Upload - Verify upload of unsupported file format is rejected', () => {

    let loginPage;
    let legalPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('LegalBulkUpload').then(locators => {
            legalPage = new LegalBulkUploadPage(locators);
        });

    });

    it('TC_060 - Verify upload of .csv file is rejected', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            //====================================================
            // Copy unsupported file to fixtures
            //====================================================

            const fileName = 'BulkUploadOfCaseDetails.csv';

            // Place this CSV file inside cypress/fixtures manually
            // or create it using a task before upload.

            //====================================================
            // Upload Unsupported File
            //====================================================

            legalPage.UploadCaseTemplate(fileName);
                        //====================================================
            // Verify Upload Failed
            //====================================================

            legalPage.VerifyUploadFailed();

            //====================================================
            // Verify Unsupported File Format Error
            //====================================================

            legalPage.VerifyErrorMessage(
                'Unsupported file format'
            );

            // If your application displays a different message,
            // replace the above with the exact text, for example:
            //
            // legalPage.VerifyErrorMessage('Invalid file format');
            //
            // OR
            //
            // legalPage.VerifyErrorMessage('Only .xlsx files are allowed');

        });

    });

});