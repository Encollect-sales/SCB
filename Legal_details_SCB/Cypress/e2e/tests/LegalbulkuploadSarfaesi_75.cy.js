import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Party Name Leading and Trailing Spaces Validation', () => {

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

    it('TC_075 - Verify upload succeeds when Party Name contains leading and trailing spaces', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // Download Legal Template
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
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            // Date format used in Excel
            const excelDate = '2026-07-17';

            // Date format displayed in Frontend
            const expectedDate = '17-Jul-26';

            const data = {

                // Customer ID
                'A2': '210000001692',

                // Loan Account Number
                'B2': '68210000005802',

                // Party Name with leading and trailing spaces
                'C2': '  John Smith  ',

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

            // Update Excel file
            cy.task('updateLegalBulkCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            }).then(() => {

                cy.log('Excel updated successfully');

                // Move updated Excel file to fixtures
                cy.task('moveAllDownloadsToFixtures').then(result => {

                    cy.log(result);

                    // Upload Template
                    legalPage.UploadLegalTemplate(fileName);

                    // Verify Upload Processed
                    legalPage.BulkLegalUpload_Processed();

                    // Navigate to Account Details
                    legalPage.OpenAccountDetailsScreen();

                    // Enter Loan Account Number
                    legalPage.EnterLoanAccountNumber(
                        '68210000005802'
                    );

                    // Open Customer Account
                    legalPage.OpenCustomerAccount();

                    // Click Legal Details Tab
                    legalPage.ClickLegalDetailsTab();

                    // Verify Legal Details
                    legalPage.VerifyLegalDetails({

                        noticeReferenceNo,

                        sarfaesiStage: 'Demand Notice Issued',

                        sarfaesiStatus: 'In Progress',

                        // Frontend displays: 17-Jul-26
                        noticeDate: expectedDate,

                        whatsappStatus: 'Delivered',

                        // Frontend displays: 17-Jul-26
                        whatsappDate: expectedDate,

                        smsStatus: 'Delivered',

                        // Frontend displays: 17-Jul-26
                        smsDate: expectedDate,

                        physicalStatus: 'Delivered',

                        // Frontend displays: 17-Jul-26
                        physicalDate: expectedDate,

                        trackingId

                    });

                });

            });

        });

    });

});