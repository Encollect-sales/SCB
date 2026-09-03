
import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Today Notice Date Validation', () => {

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

    it('TC_039 - Verify upload succeeds when Notice Date is today', () => {

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

            // Get today's date in YYYY-MM-DD format for Excel
            const today = new Date();

            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');

            const todayExcel = `${year}-${month}-${day}`;

            // Get today's date in DD-MMM-YY format
            // Example: 02-Sep-26
            const monthNames = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sept',
                'Oct',
                'Nov',
                'Dec'
            ];

            const todayDisplay =
                `${day}-${monthNames[today.getMonth()]}-${String(year).slice(-2)}`;

            const partyName = faker.person.fullName();
            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            const data = {

                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': partyName,
                'D2': 'Father',
                'E2': 'Create',
                'F2': 'Demand Notice Issued',
                'G2': 'In Progress',

                'H2': noticeReferenceNo,

                // Today's date - Excel format
                'I2': todayExcel,

                'J2': 'Delivered',

                // Today's date - Excel format
                'K2': todayExcel,

                'L2': 'Delivered',

                // Today's date - Excel format
                'M2': todayExcel,

                'N2': 'Delivered',

                // Today's date - Excel format
                'O2': todayExcel,

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
                cy.log(`Excel Date: ${todayExcel}`);
                cy.log(`Expected Display Date: ${todayDisplay}`);

            });

            // Move updated file to fixtures
            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // Upload Legal Template
            legalPage.UploadLegalTemplate(fileName);

            // Verify upload is processed
            legalPage.BulkLegalUpload_Processed();

            // Open Account Details
            legalPage.OpenAccountDetailsScreen();

            // Enter Loan Account Number
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

                // Application displays: DD-MMM-YY
                noticeDate: todayDisplay,

                whatsappStatus: 'Delivered',

                whatsappDate: todayDisplay,

                smsStatus: 'Delivered',

                smsDate: todayDisplay,

                physicalStatus: 'Delivered',

                physicalDate: todayDisplay,

                trackingId

            });

        });

    });

});
