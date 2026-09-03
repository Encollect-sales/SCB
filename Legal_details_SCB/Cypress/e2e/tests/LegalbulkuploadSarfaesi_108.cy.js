import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Mandatory Field Validation With Valid Optional Fields', () => {

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

    it('TC_CF_015 - Verify row fails only for mandatory field validation', () => {

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

            const data = {

                'A2': '210000001692',
                'B2': '68210000005802',

                // Optional fields populated correctly

                'C2': faker.person.fullName(),
                'D2': 'Father',
                'E2': 'Create',

                // Mandatory field intentionally blank

                'F2': '',

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
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Upload Result (Status = Failed)
            //=========================================

            legalPage.BulkLegalUpload_Failed();

            //=========================================
            // Capture the dynamic Transaction ID from the
            // Search Result row, then download the error/status file
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

                    expect(filePath, 'downloaded status file should exist').to.not.be.null;

                    //=========================================
                    // Parse the CSV and assert on the error column
                    //=========================================

                cy.task('readCsv', filePath).then((rows) => {

    const errorRow = rows[0];

    expect(errorRow['Remarks']).to.contain('Sarfaesi Stage Is Required');
    expect(errorRow['Remarks']).to.not.contain('Party Name');
    expect(errorRow['Remarks']).to.not.contain('Relationship');




                    });

                });

            });

        });

    });

});