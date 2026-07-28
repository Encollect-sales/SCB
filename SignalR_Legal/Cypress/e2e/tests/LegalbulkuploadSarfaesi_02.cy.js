import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Blank Customer Id Validation', () => {

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

    it('TC_002 - Verify upload fails when Customer Id is left blank', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            //====================================================
            // Download Template
            //====================================================

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

            const data = {

                'A2': '',                                // Blank Customer Id
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
            // Move File To Fixtures
            //====================================================

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            //====================================================
            // Upload File
            //====================================================

            legalPage.UploadLegalTemplate(fileName);

            //====================================================
            // Verify Upload Failed
            //====================================================

            legalPage.BulkLegalUpload_Failed();

            //====================================================
            // Open Account Details
            //====================================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber('68210000005802');

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            //====================================================
            // Verify Record Is Not Created
            //====================================================

            legalPage.VerifyLegalDetailsNotExists({

                noticeReferenceNo,
                trackingId

            });

        });

    });

});