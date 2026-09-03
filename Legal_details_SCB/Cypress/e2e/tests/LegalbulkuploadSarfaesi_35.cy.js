
import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Blank Physical Tracking ID Validation', () => {

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

    it('TC_035 - Verify upload fails when Physical Tracking ID is blank', () => {

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

            // Excel date
            const uploadDate = '2026-07-17';

            // Handle ResizeObserver exception
            Cypress.on('uncaught:exception', (err) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

                return true;
            });

            // Generate dynamic test data
            const partyName = faker.person.fullName();
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;

            const data = {

                // Account Number
                'A2': '210000001692',

                // Loan Account Number
                'B2': '68210000005802',

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
                'I2': uploadDate,

                // WhatsApp Delivery Status
                'J2': 'Delivered',

                // WhatsApp Delivery Date
                'K2': uploadDate,

                // SMS Delivery Status
                'L2': 'Delivered',

                // SMS Delivery Date
                'M2': uploadDate,

                // Physical Delivery Status
                'N2': 'Delivered',

                // Physical Delivery Date
                'O2': uploadDate,

                // Physical Tracking ID - intentionally blank
                'P2': ''

            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(
                downloadsFolder,
                fileName
            );

            // Update Excel file
            cy.task('updateLegalBulkCell', {
                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data
            }).then(() => {

                cy.log('Excel updated successfully');

            });

            // Move updated file to fixtures
            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // Upload Legal Template
            legalPage.UploadLegalTemplate(fileName);

            // Verify upload failed
            legalPage.BulkLegalUpload_Failed();

            // Open Account Details
            legalPage.OpenAccountDetailsScreen();

            // Enter Loan Account Number
            legalPage.EnterLoanAccountNumber(
                '68210000005802'
            );

            // Open Customer Account
            legalPage.OpenCustomerAccount();

            // Click Legal Details tab
            legalPage.ClickLegalDetailsTab();

            // Verify that the failed record was not created.
            // Do not pass trackingId because it is intentionally blank.
            legalPage.VerifyLegalDetailsNotExists({
                noticeReferenceNo: noticeReferenceNo
            });

        });

    });

});
