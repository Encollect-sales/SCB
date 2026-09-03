import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

// ===========================================================================
// NOTE: This is a FILE-LEVEL scenario (TC_E2E_01), not a single-record field
// validation. It requires building/modifying a multi-row or structurally
// different upload file rather than editing a single cell.
//
// Automation note from the test matrix: Requires multi-row file build step (not single record).
//
// This spec assumes a cy.task named 'buildLegalBulkFile' exists (or is added)
// in cypress/plugins/index.js, accepting a description of how to construct
// the file (rows to write, columns to drop/duplicate/reorder, extension to
// use, target size, etc.). Update the task name/args to match your actual
// plugin implementation before running.
// ===========================================================================

describe('Notice Bulk Upload - Upload a file where every row has all mandatory fields correctly filled', () => {

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

    it('TC_E2E_01 - Upload a file where every row has all mandatory fields correctly filled', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            legalPage.DownloadLegalNoticeTemplate();

            const fileName = 'BulkUploadOfNoticeDetails.xlsx';
            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            //====================================================
            // Build the file for this scenario
            // Rows/structure: all data rows fully valid
            //====================================================

            cy.task('buildLegalBulkFile', {

                filePath: sourceFilePath,
                sheetName,
                scenario: 'TC_E2E_01',
                description: 'all data rows fully valid'

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);

            // Expectation: All records are expected to process successfully with no errors (overall status Passed).
            // TODO: replace with a concrete VerifyNoticeUploadStatus(...) call
            // and status-report assertions once the exact expected behavior
            // is confirmed with the business/dev team (see note above).

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log('Transaction ID : ' + txnId);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {

                    folder: downloadsFolder,
                    pattern: `BulkUploadOfNoticeDetails_${txnId}`

                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        cy.log(`Status report rows: ${JSON.stringify(rows)}`);

                        // TODO: add row-by-row assertions specific to
                        // TC_E2E_01 once the expected per-row outcome is
                        // finalized. See the description above:
                        // All records are expected to process successfully with no errors (overall status Passed).

                    });

                });

            });

        });

    });

});
