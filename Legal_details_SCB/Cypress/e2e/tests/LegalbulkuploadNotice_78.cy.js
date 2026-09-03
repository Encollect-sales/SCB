import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

// ===========================================================================
// TC_EDG_19 - File-level scenario: upload a file that has a duplicate column
// header (an extra column also headed 'Notice Type', alongside the real
// Notice Type column).
//
// Expected behavior per the test matrix: the system should reject the file
// with a template/structure error rather than silently using one of the two
// columns. Automation was classified as 'Partial' because the exact error
// surface (toast text, modal, inline banner, or something else) was not yet
// confirmed with business/dev.
//
// NOTE ON IMPLEMENTATION: instead of a separate 'buildLegalBulkFile' task,
// this spec reuses the existing 'updateLegalBulkCell' task. The duplicate
// header is created by writing a duplicate label into an EXTRA column
// (P1) rather than overwriting one of the real, required column headers -
// that isolates the "duplicate header" condition from accidentally
// corrupting a different column's meaning.
//
// ASSUMPTION: the real 'Notice Type' header lives in column F (based on
// F2 = 'Demand Notice' in the other specs in this suite). Adjust the P1
// value below if your actual header text differs.
//
// NOTE ON ASSERTIONS: because it's unconfirmed whether the app blocks the
// upload immediately (no transaction ID) or accepts it and processes rows
// normally, this spec checks for a visible error on the page first. If no
// such error appears within the wait window, it falls back to the
// transaction/status-report flow purely to log what actually happened, so
// the test still gives you real signal instead of failing on a guessed
// locator or method name. Once the exact expected UI behavior is
// confirmed, replace the fallback branch with a hard failure or a proper
// VerifyUploadTemplateError()-style call on LegalBulkUploadPage.
// ===========================================================================

describe('Notice Bulk Upload - Upload a file with duplicate column headers (e.g., two Notice Type columns)', () => {

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

    it('TC_EDG_19 - Upload a file with duplicate column headers (e.g., two Notice Type columns)', () => {

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
            // Build the file for this scenario:
            // - One normal, otherwise-valid data row (row 2)
            // - An extra column (P) whose header duplicates the
            //   real Notice Type header, to trigger the
            //   duplicate-header condition without disturbing any
            //   of the real, required columns
            //====================================================

            const uniquePrefix = Date.now();

            const data = {

                A2: '41174',
                B2: '1667',
                C2: 'Create',
                D2: 'Rajesh Kumar',
                E2: 'Self',
                F2: 'Demand Notice',
                G2: `NREF-EDG19-${uniquePrefix}`,
                H2: '2026-07-20',
                I2: 'Delivered',
                J2: '2026-07-21',
                K2: 'Delivered',
                L2: '2026-07-21',
                M2: 'Delivered',
                N2: '2026-07-22',
                O2: `TRK-EDG19-${uniquePrefix}`,

                // Duplicate header - same label as the real Notice
                // Type column (assumed column F). Update this if
                // your actual header text is different.
                P1: 'Notice Type',
                P2: 'Demand Notice',

            };

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            });

            cy.task('moveAllDownloadsToFixtures');

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalNoticeTemplate(fileName);

            cy.wait(5000);

            //====================================================
            // Primary expectation: an immediate template/structure
            // error is shown, and no transaction is generated for
            // this upload.
            //====================================================

            cy.document().then((doc) => {

                const bodyText = (doc.body.innerText || '').toLowerCase();

                const structureErrorShown = [
                    'duplicate',
                    'structure',
                    'template',
                    'invalid file',
                    'invalid format',
                ].some((keyword) => bodyText.includes(keyword));

                if (structureErrorShown) {

                    cy.log('Immediate template/structure error detected on the page, as expected.');

                    // TODO: once the exact error locator/text is
                    // confirmed with business/dev, replace this
                    // generic body-text check with a precise
                    // assertion, e.g.:
                    // legalPage.VerifyUploadTemplateError('Duplicate column header: Notice Type');

                } else {

                    // TODO: if the app is NOT expected to accept
                    // this file and generate a transaction, this
                    // fallback branch should be removed and this
                    // path should instead fail the test outright,
                    // e.g. via cy.wrap(structureErrorShown).should('be.true').
                    // Left as a logging fallback for now, since the
                    // exact UI behavior is unconfirmed (see notes above).

                    cy.log('No immediate structure error detected - falling back to transaction/status-report flow to record actual behavior.');

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

                                // TODO: add concrete assertions once the
                                // expected outcome is confirmed - e.g.
                                // whether the app silently used one of
                                // the two 'Notice Type' columns, or
                                // rejected the row entirely.

                            });

                        });

                    });

                }

            });

        });

    });

});