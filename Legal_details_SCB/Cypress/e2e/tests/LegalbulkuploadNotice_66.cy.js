import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';

const path = require('path');

describe('Notice Bulk Upload - Enter Notice Reference Number with leading/trailing spaces', () => {

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

    it('TC_EDG_07 - Verify Notice Reference Number (whitespace): Enter Notice Reference Number with leading/trailing spaces', () => {

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

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            //====================================================
            // Generate Dynamic Notice Reference Number
            // Example: NREF-20260901-193945123
            //====================================================

            const now = new Date();

            const referenceNumber =
                `NREF-${now.getFullYear()}` +
                `${String(now.getMonth() + 1).padStart(2, '0')}` +
                `${String(now.getDate()).padStart(2, '0')}-` +
                `${String(now.getHours()).padStart(2, '0')}` +
                `${String(now.getMinutes()).padStart(2, '0')}` +
                `${String(now.getSeconds()).padStart(2, '0')}` +
                `${String(now.getMilliseconds()).padStart(3, '0')}`;

            cy.log('Dynamic Notice Reference Number: ' + referenceNumber);

            //====================================================
            // Build row data
            // G2 contains leading and trailing spaces intentionally
            //====================================================

            const data = {
                A2: '41174',
                B2: '1667',
                C2: 'Create',
                D2: 'Rajesh Kumar',
                E2: 'Self',
                F2: 'Demand Notice',

                // Leading and trailing spaces intentionally added
                G2: ` ${referenceNumber} `,

                H2: '2026-07-20',
                I2: 'Delivered',
                J2: '2026-07-21',
                K2: 'Delivered',
                L2: '2026-07-21',
                M2: 'Delivered',
                N2: '2026-07-22',
                O2: 'TRK20260722001'
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
                sheetName: sheetName,
                data: data

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

                cy.log('Transaction ID: ' + txnId);

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

                        //====================================================
                        // Verify Status
                        //====================================================

                        expect(row['Status']).to.equal('Success');

                        cy.log('Notice Reference Number: ' + referenceNumber);
                        cy.log('Status: ' + row['Status']);
                        cy.log('Remarks: ' + row['Remarks']);

                        //====================================================
                        // Verify Remarks
                        //====================================================

                        expect(row['Remarks'] || '').to.equal('');

                    });

                });

            });

        });

    });

});