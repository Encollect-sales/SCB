
import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';

const path = require('path');

describe('Legal Bulk Upload - Invalid WhatsApp Delivery Status Validation', () => {

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

    it('TC_021 - Verify upload processes when invalid WhatsApp Delivery Status is entered', () => {

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

            // Date displayed in Account Details
            const formattedDate = '17-Jul-26';

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

            // Dynamic test data
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
                'I2': uploadDate,

                // Invalid WhatsApp Delivery Status
                'J2': 'Completed',

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

            // Update Excel file
            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data

            }).then(() => {

                cy.log('Excel updated successfully');

            });

            // Move file to fixtures
            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            // Upload file
            legalPage.UploadLegalTemplate(fileName);

            // Verify file is processed
            legalPage.BulkLegalUpload_Processed();

            // Open Account Details
            legalPage.OpenAccountDetailsScreen();

            // Enter Loan Account Number
            legalPage.EnterLoanAccountNumber(
                '68210000005802'
            );

            // Open Customer Account
            legalPage.OpenCustomerAccount();

            // Open Legal Details
            legalPage.ClickLegalDetailsTab();

            // Verify Legal Details
            legalPage.VerifyLegalDetails({

                noticeReferenceNo: noticeReferenceNo,

                partyName: partyName,

                sarfaesiStage: 'Demand Notice Issued',

                sarfaesiStatus: 'In Progress',

                noticeDate: formattedDate,

                whatsappStatus: 'Completed',

                whatsappDate: formattedDate,

                smsStatus: 'Delivered',

                smsDate: formattedDate,

                physicalStatus: 'Delivered',

                physicalDate: formattedDate,

                trackingId: trackingId

            });

        });

    });

});


