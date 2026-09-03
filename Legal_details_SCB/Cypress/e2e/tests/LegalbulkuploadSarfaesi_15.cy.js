
import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Blank Notice Reference Number Validation', () => {

    let loginPage;
    let legalPage;

    before(() => {

        // Initialize Login Page
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        // Initialize Legal Bulk Upload Page
        getLocators('LegalBulkUpload').then(locators => {
            legalPage = new LegalBulkUploadPage(locators);
        });

    });

    it('TC_015 - Verify upload fails when Notice Reference Number is blank', () => {

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

                return true;
            });

            // Generate dynamic test data
            const partyName = faker.person.fullName();
            const trackingId = `TRK${faker.string.numeric(10)}`;
            const uploadDate = '2026-07-17';

            // Excel test data
            const data = {

                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': partyName,
                'D2': 'Father',
                'E2': 'Create',
                'F2': 'Demand Notice Issued',
                'G2': 'In Progress',

                // Intentionally kept blank
                'H2': '',

                'I2': uploadDate,
                'J2': 'Delivered',
                'K2': uploadDate,
                'L2': 'Delivered',
                'M2': uploadDate,
                'N2': 'Delivered',
                'O2': uploadDate,
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
                sheetName: sheetName,
                data: data

            }).then(() => {

                cy.log('Excel updated successfully');

            });

            // Move updated file to fixtures
            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // Upload modified Excel file
            legalPage.UploadLegalTemplate(fileName);

            // Verify upload failed
            legalPage.BulkLegalUpload_Failed();

            // Open Account Details
            legalPage.OpenAccountDetailsScreen();

            // Search Loan Account
            legalPage.EnterLoanAccountNumber('68210000005802');

            // Open Customer Account
            legalPage.OpenCustomerAccount();

            // Open Legal Details tab
            legalPage.ClickLegalDetailsTab();

            /*
             * Notice Reference Number was intentionally left blank.
             *
             * Do NOT use cy.contains('') because Cypress does not
             * allow an empty string in cy.contains().
             *
             * We only verify that the Tracking ID does not exist.
             */
           legalPage.VerifyLegalDetailsNotExistsdata({
    noticeReferenceNo: '',
    trackingId: trackingId
});
            });

        });

    });



