import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Re-upload Same File Validation', () => {

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

    it('TC_CF_014 - Verify duplicate upload of same file is rejected', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

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

            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            const data = {
                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': faker.person.fullName(),
                'D2': 'Father',
                'E2': 'Create',
                'F2': 'Demand Notice Issued',
                'G2': 'In Progress',
                'H2': noticeReferenceNo,
                'I2': '2026-07-17',
                'J2': 'Delivered',
                'K2': '2026-07-17',
                'L2': 'Delivered',
                'M2': '2026-07-17',
                'N2': 'Delivered',
                'O2': '2026-07-17',
                'P2': trackingId
            };

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

            //=========================================
            // FIRST UPLOAD
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            legalPage.BulkLegalUpload_Processed();

            //=========================================
            // SECOND UPLOAD (Same File)
            //=========================================
            cy.wait(20000);
            cy.reload();
            legalPage.UploadLegalTemplate107(fileName);

            //=========================================
            // VERIFY FAILED STATUS
            //=========================================

            legalPage.BulkLegalUpload_Failed();

            //=========================================
            // DOWNLOAD STATUS FILE
            //=========================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log(`Captured Transaction ID: ${txnId}`);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {
                    folder: downloadsFolder,
                    pattern: `BulkUploadOfSarfaesiDetails_${txnId}`
                }).then((filePath) => {

                    expect(
                        filePath,
                        'Downloaded status file should exist'
                    ).to.not.be.null;

                    //=========================================
                    // READ CSV & VERIFY ERROR
                    //=========================================

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.be.greaterThan(0);

                        const errorRow = rows[0];

                        expect(errorRow).to.not.be.undefined;

                        expect(errorRow['Remarks'])
                            .to.contain('Reference Number should be unique');

                    });

                });

            });

        });

    });

});