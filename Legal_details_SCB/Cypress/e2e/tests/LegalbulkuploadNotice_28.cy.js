import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

// ===========================================================================
// TC_NRN_04 - File-level scenario: a single upload file where rows 2, 5 and 9
// all use the SAME Notice Reference Number.
//
// Expected behavior: row 2 (first occurrence) succeeds; rows 5 and 9 fail
// with 'Reference Number should be unique'.
//
// NOTE ON IMPLEMENTATION: instead of a separate 'buildLegalBulkFile' task,
// this spec reuses the existing 'updateLegalBulkCell' task (already used
// elsewhere in this project) by writing a full data object covering every
// cell for rows 2-9 in one call. That task already knows how to write
// arbitrary cell addresses, so no new plugin task is required.
//
// NOTE ON ASSERTIONS: the status-report row-matching below assumes the
// status CSV preserves the same row order as the uploaded file (i.e. CSV
// row 0 = Excel row 2, CSV row 3 = Excel row 5, CSV row 7 = Excel row 9).
// If the status report instead includes an identifying column (e.g. a
// 'Tracking Number' or 'Notice Reference Number' column), switch the
// matching below to look up rows by that column instead of by index -
// that will be more robust than relying on row order.
// ===========================================================================

describe('Notice Bulk Upload - Upload a file with the same Notice Reference Number repeated across multiple rows (rows 2, 5, 9)', () => {

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

    it('TC_NRN_04 - Upload a file with the same Notice Reference Number repeated across multiple rows (rows 2, 5, 9)', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(3000);

            legalPage.DownloadLegalNoticeTemplate();

            cy.wait(3000);

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
            // Build one row's worth of cell data for a given
            // Excel row number, with sensible defaults that can
            // be overridden per row (e.g. to force a shared
            // reference number).
            //====================================================

            const buildRow = (rowNum, overrides = {}) => {

                const base = {
                    A: '41174',
                    B: '1667',
                    C: 'Create',
                    D: 'Rajesh Kumar',
                    E: 'Self',
                    F: 'Demand Notice',
                    G: `NREF-ROW${rowNum}-${Date.now()}`,
                    H: '2026-07-20',
                    I: 'Delivered',
                    J: '2026-07-21',
                    K: 'Delivered',
                    L: '2026-07-21',
                    M: 'Delivered',
                    N: '2026-07-22',
                    O: `TRK-ROW${rowNum}-${Date.now()}`,
                };

                const merged = { ...base, ...overrides };

                const row = {};

                Object.keys(merged).forEach((col) => {
                    row[`${col}${rowNum}`] = merged[col];
                });

                return row;

            };

            //====================================================
            // Rows 2, 5 and 9 share the same Notice Reference
            // Number. Rows 3, 4, 6, 7, 8 are filler rows with
            // their own unique reference numbers so the file
            // structure is realistic (rows in between the
            // duplicates).
            //====================================================

            const sharedReferenceNo = `NREF-DUP-${Date.now()}`;

            const fileData = {

                ...buildRow(2, { G: sharedReferenceNo, O: `TRK-ROW2-${Date.now()}` }),
                ...buildRow(3),
                ...buildRow(4),
                ...buildRow(5, { G: sharedReferenceNo, O: `TRK-ROW5-${Date.now()}` }),
                ...buildRow(6),
                ...buildRow(7),
                ...buildRow(8),
                ...buildRow(9, { G: sharedReferenceNo, O: `TRK-ROW9-${Date.now()}` }),

            };

            //====================================================
            // Write all rows to the downloaded template
            //====================================================

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data: fileData

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);
           cy.get('#confirm-dialog-okay').click({force:true});
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

                        expect(rows.length).to.equal(8);

                        // Assumes CSV row order mirrors upload row order:
                        // index 0 -> Excel row 2, index 3 -> Excel row 5,
                        // index 7 -> Excel row 9. Adjust if the report
                        // instead exposes an identifying column.

                        const row2 = rows[0];
                        const row5 = rows[3];
                        const row9 = rows[7];

                        expect(row2['Status']).to.equal('Success');
                        expect(row2['Remarks'] || '').to.equal('');

                        expect(row5['Status']).to.equal('Failed');
                        expect(row5['Remarks']).to.contain('Reference Number should be unique');

                        expect(row9['Status']).to.equal('Failed');
                        expect(row9['Remarks']).to.contain('Reference Number should be unique');

                    });

                });

            });

        });

    });

});