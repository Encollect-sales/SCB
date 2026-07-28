import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Duplicate Record In Same File Validation', () => {

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

    it('TC_CF_013 - Verify duplicate record in same upload file is rejected', () => {

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
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;
            const partyName = faker.person.fullName();

            const data = {

                //===========================
                // Row 2 (Valid)
                //===========================

                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': partyName,
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
                'P2': trackingId,

                //===========================
                // Row 3 (Duplicate)
                //===========================

                'A3': '210000001692',
                'B3': '68210000005802',
                'C3': partyName,
                'D3': 'Father',
                'E3': 'Create',
                'F3': 'Demand Notice Issued',
                'G3': 'In Progress',
                'H3': noticeReferenceNo,
                'I3': '2026-07-17',
                'J3': 'Delivered',
                'K3': '2026-07-17',
                'L3': 'Delivered',
                'M3': '2026-07-17',
                'N3': 'Delivered',
                'O3': '2026-07-17',
                'P3': trackingId

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
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Partial Success
            //=========================================

            legalPage.BulkLegalUpload_PartiallyProcessed();

            //=========================================
            // Download Status File
            //=========================================

            legalPage.getTransactionId().then((txnIdRaw) => {

                const txnId = txnIdRaw.trim();

                cy.log('Captured Transaction ID: ' + txnId);

                legalPage.downloadStatusFile(txnId);

                cy.wait(8000);

                cy.task('findLatestFile', {
                    folder: downloadsFolder,
                    pattern: `BulkUploadOfSarfaesiDetails_${txnId}`
                }).then((filePath) => {

                    expect(filePath).to.not.be.null;

                    cy.task('readCsv', filePath).then((rows) => {

                        expect(rows.length).to.be.greaterThan(0);

                        const errorRow = rows.find(
                            row =>
                                row['Remarks'] &&
                                row['Remarks'].includes('Reference Number should be unique')
                        );

                        expect(errorRow).to.not.be.undefined;

                        expect(errorRow['Remarks'])
                            .to.contain('Reference Number should be unique');

                    });

                });

            });

        });
    });
});