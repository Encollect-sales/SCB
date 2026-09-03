import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Sarfaesi Stage Special Characters Validation', () => {

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

    it('TC_085 - Verify upload succeeds when Sarfaesi Stage contains special characters', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            legalPage.DownloadLegalTemplate();

            const sheetName = 'Sheet1';
            const fileName = 'BulkUploadOfSarfaesiDetails.xlsx';

            Cypress.on('uncaught:exception', (err) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            const partyName = faker.person.fullName();
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            // Excel date format
            const excelDate = '2026-07-17';

            // Frontend date format
            const expectedDate = '17-Jul-26';

            const data = {

                // Customer ID
                'A2': '210000001692',

                // Loan Account Number
                'B2': '68210000005802',

                // Party Name
                'C2': partyName,

                // Relationship
                'D2': 'Father',

                // Upload Type
                'E2': 'Create',

                // Sarfaesi Stage with Special Character
                'F2': 'Demand Notice Issued@',

                // Sarfaesi Status
                'G2': 'In Progress',

                // Notice Reference Number
                'H2': noticeReferenceNo,

                // Notice Date
                'I2': excelDate,

                // WhatsApp
                'J2': 'Delivered',
                'K2': excelDate,

                // SMS
                'L2': 'Delivered',
                'M2': excelDate,

                // Physical
                'N2': 'Delivered',
                'O2': excelDate,

                // Tracking ID
                'P2': trackingId

            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            // Update Excel file
            cy.task('updateLegalBulkCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            }).then(() => {

                cy.log('Excel updated successfully');

                // Move updated file to fixtures
                return cy.task('moveAllDownloadsToFixtures');

            }).then(result => {

                cy.log(result);

                // Upload Template
                legalPage.UploadLegalTemplate(fileName);

                // Verify Upload Processed
                legalPage.BulkLegalUpload_Processed();

                // Navigate to Account Details
                legalPage.OpenAccountDetailsScreen();

                legalPage.EnterLoanAccountNumber(
                    '68210000005802'
                );

                legalPage.OpenCustomerAccount();

                legalPage.ClickLegalDetailsTab();

                // Verify Record Exists
                legalPage.VerifyLegalDetails({

                    noticeReferenceNo,

                    sarfaesiStage: 'Demand Notice Issued@',

                    sarfaesiStatus: 'In Progress',

                    noticeDate: expectedDate,

                    whatsappStatus: 'Delivered',

                    whatsappDate: expectedDate,

                    smsStatus: 'Delivered',

                    smsDate: expectedDate,

                    physicalStatus: 'Delivered',

                    physicalDate: expectedDate,

                    trackingId

                });

            });

        });

    });

});
