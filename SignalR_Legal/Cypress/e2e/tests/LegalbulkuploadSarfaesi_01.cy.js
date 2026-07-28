import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Customer Id Validation', () => {

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

    it('TC_001 - Verify that valid existing Customer Id is accepted in Legal Bulk Upload', () => {

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

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            //====================================================
            // Dynamic Test Data
            //====================================================

            const partyName = faker.person.fullName();

            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;

            const trackingId = `TRK${faker.string.numeric(10)}`;

            const uploadDate = '2026-07-17';

            const formattedDate = new Date(uploadDate)
                .toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: '2-digit'
                })
                .replace(/ /g, '-');

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
                'J2': 'Delivered',
                'K2': uploadDate,
                'L2': 'Delivered',
                'M2': uploadDate,
                'N2': 'Delivered',
                'O2': uploadDate,
                'P2': trackingId

            };

            //====================================================
            // Update Excel
            //====================================================

            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, fileName);

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data

            }).then(() => {

                cy.log('Excel updated successfully');

            });

            //====================================================
            // Move File
            //====================================================

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalTemplate(fileName);

            //====================================================
            // Verify Upload Status
            //====================================================

            legalPage.BulkLegalUpload_Processed();

            //====================================================
            // Navigate to Account Details
            //====================================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber('68210000005802');

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            //====================================================
            // Verify Uploaded Data
            //====================================================

            legalPage.VerifyLegalDetails({

                noticeReferenceNo,

                partyName,

                sarfaesiStage: 'Demand Notice Issued',

                sarfaesiStatus: 'In Progress',

                noticeDate: formattedDate,

                whatsappStatus: 'Delivered',

                whatsappDate: formattedDate,

                smsStatus: 'Delivered',

                smsDate: formattedDate,

                physicalStatus: 'Delivered',

                physicalDate: formattedDate,

                trackingId

            });

        });

    });

});