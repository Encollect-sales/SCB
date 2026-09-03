import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Notice Bulk Upload - Enter Notice Reference Number with special characters (if allowed)', () => {

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

    it('TC_EDG_16 - Verify Notice Reference Number (special chars): Enter Notice Reference Number with special characters (if allowed)', () => {

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

            //====================================================
            // Build row data for: Notice Reference Number (special chars)
            // Scenario: Enter Notice Reference Number with special characters (if allowed)
            // Automation note: AMBIGUOUS: confirm allowed character set for this field with business team.
            //====================================================

            const uniquePrefix = Date.now();

            // Dynamic reference number: keeps the '/' and '#' special
            // characters under test, but appends a timestamp so the
            // value is unique on every run and doesn't collide with
            // data left over from a previous run.
            const noticeReferenceNo = `NREF/2026#${uniquePrefix}`;

            const data = {
                A2: '41174',
                B2: '1667',
                C2: 'Create',
                D2: 'Rajesh Kumar',
                E2: 'Self',
                F2: 'Demand Notice',
                G2: noticeReferenceNo,
                H2: '2026-07-20',
                I2: 'Delivered',
                J2: '2026-07-21',
                K2: 'Delivered',
                L2: '2026-07-21',
                M2: 'Delivered',
                N2: '2026-07-22',
                O2: `TRK${uniquePrefix}`,
            };

            //====================================================
            // Update Excel
            //====================================================

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

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

            legalPage.VerifyUploadNoticeSuccess();

            //====================================================
            // Verify Status Report
            //====================================================

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

                        expect(rows.length).to.equal(1);

                        const row = rows[0];

                        expect(row['Status']).to.equal('Success');

                        cy.log('Remarks : ' + row['Remarks']);

                        // For a passing row, Remarks is typically empty - relax/adjust if your report format differs.
                        expect(row['Remarks'] || '').to.equal('');

                    });

                });

            });

        });

    });

});