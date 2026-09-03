import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';

const path = require('path');

describe('Legal Bulk Upload - Empty File With Header Only', () => {

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

    it('TC_CF_003 - Verify empty file with header only gets Failed status', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Download Legal Bulk Upload Template
            legalPage.DownloadLegalTemplate();

            const fileName = 'BulkUploadOfSarfaesiDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            // =====================================================
            // Remove all data rows and keep only the header
            // =====================================================

            cy.task('clearLegalBulkDataRows', {

                filePath: sourceFilePath,
                sheetName: sheetName

            }).then(() => {

                cy.log('All data rows removed. Header only file created.');

                // =====================================================
                // Move modified file to fixtures
                // =====================================================

                return cy.task('moveAllDownloadsToFixtures');

            }).then(result => {

                cy.log(result);

                // =====================================================
                // Upload Header-Only File
                // =====================================================

                legalPage.UploadLegalTemplate(fileName);

                // =====================================================
                // Verify Upload Status
                // =====================================================

                legalPage.BulkLegalUpload_Failed();

            });

        });

    });

});
