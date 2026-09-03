import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Loan Account Number Leading and Trailing Spaces Validation', () => {

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

    it('TC_072 - Verify upload succeeds when Loan Account Number contains leading and trailing spaces', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Download Legal Bulk Upload Template
            legalPage.DownloadLegalTemplate();

            const sheetName = 'Sheet1';
            const fileName = 'BulkUploadOfSarfaesiDetails.xlsx';

            // Handle ResizeObserver exception
            Cypress.on('uncaught:exception', (err) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            // Generate dynamic test data
            const partyName = faker.person.fullName();
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            /*
             * Excel date format
             * This value will be entered into the Excel file.
             */
            const excelDate = '2026-07-17';

            /*
             * Frontend date format
             * Frontend displays: 17-Jul-26
             */
            const expectedDate = '17-Jul-26';

            const data = {

                // Customer ID
                'A2': '210000001692',

                // Loan Account Number with leading and trailing spaces
                'B2': ' 68210000005802 ',

                // Party Name
                'C2': partyName,

                // Relationship
                'D2': 'Father',

                // Action
                'E2': 'Create',

                // Sarfaesi Stage
                'F2': 'Demand Notice Issued',

                // Sarfaesi Status
                'G2': 'In Progress',

                // Notice Reference Number
                'H2': noticeReferenceNo,

                // Notice Date
                'I2': excelDate,

                // WhatsApp Delivery Status
                'J2': 'Delivered',

                // WhatsApp Delivery Date
                'K2': excelDate,

                // SMS Delivery Status
                'L2': 'Delivered',

                // SMS Delivery Date
                'M2': excelDate,

                // Physical Delivery Status
                'N2': 'Delivered',

                // Physical Delivery Date
                'O2': excelDate,

                // Tracking ID
                'P2': trackingId

            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            // Update downloaded Excel file
            cy.task('updateLegalBulkCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            }).then(() => {

                cy.log('Excel updated successfully');

                // Move updated Excel to fixtures
                cy.task('moveAllDownloadsToFixtures').then(result => {

                    cy.log(result);

                    // Upload Template
                    legalPage.UploadLegalTemplate(fileName);

                    // Verify Upload is Processed
                    legalPage.BulkLegalUpload_Processed();

                    // Navigate to Account Details
                    legalPage.OpenAccountDetailsScreen();

                    // Search Loan Account Number without spaces
                    legalPage.EnterLoanAccountNumber(
                        '68210000005802'
                    );

                    // Open Customer Account
                    legalPage.OpenCustomerAccount();

                    // Open Legal Details tab
                    legalPage.ClickLegalDetailsTab();

                    // Verify Legal Details
                    legalPage.VerifyLegalDetails({

                        noticeReferenceNo,

                        sarfaesiStage: 'Demand Notice Issued',

                        sarfaesiStatus: 'In Progress',

                        // Frontend displays 17-Jul-26
                        noticeDate: expectedDate,

                        whatsappStatus: 'Delivered',

                        // Frontend displays 17-Jul-26
                        whatsappDate: expectedDate,

                        smsStatus: 'Delivered',

                        // Frontend displays 17-Jul-26
                        smsDate: expectedDate,

                        physicalStatus: 'Delivered',

                        // Frontend displays 17-Jul-26
                        physicalDate: expectedDate,

                        trackingId

                    });

                });

            });

        });

    });

});