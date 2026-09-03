import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

// ===========================================================================
// NOTE: This is a FILE-LEVEL scenario (TC_EDG_18), not a single-record field
// validation. It requires building/modifying a multi-row or structurally
// different upload file rather than editing a single cell.
//
// Automation note from the test matrix: None.
//
// This spec assumes a cy.task named 'buildLegalBulkFile' exists (or is added)
// in cypress/plugins/index.js, accepting a description of how to construct
// the file (rows to write, columns to drop/duplicate/reorder, extension to
// use, target size, etc.). Update the task name/args to match your actual
// plugin implementation before running.
// ===========================================================================

describe('Notice Bulk Upload - Upload a file with an extra, unrecognized column added', () => {

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

    it('TC_EDG_18 - Upload a file with an extra, unrecognized column added', () => {

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
            // Rows/structure: an extra 'Remarks' column added to the template
            //====================================================

            cy.task('buildLegalBulkFile', {

                filePath: sourceFilePath,
                sheetName,
                scenario: 'TC_EDG_18',
                description: 'an extra Remarks column added to the template'

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);

            // Expectation: System is expected to either ignore the unknown column or throw a template mismatch error - confirm expected behavior.
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
                        // TC_EDG_18 once the expected per-row outcome is
                        // finalized. See the description above:
                        // System is expected to either ignore the unknown column or throw a template mismatch error - confirm expected behavior.

                    });

                });

            });

        });

    });

});
