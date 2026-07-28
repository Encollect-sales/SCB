import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Extra Column Validation', () => {

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

    it('TC_CF_007 - Verify upload succeeds when file contains an extra column', () => {

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

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
            const trackingId = `TRK${faker.string.numeric(10)}`;

            const data = {

                'A2': '210000001692',
                'B2': '68210000005802',
                'C2': faker.person.fullName(),
                'D2': 'Father',
                'E2': 'Create',
                'F2': 'Demand Notice Issued',
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
            const sourceFilePath = path.join(downloadsFolder, fileName);

            //=========================================
            // Populate Template
            //=========================================

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            });

            //=========================================
            // Add Extra Column (Q)
            //=========================================

            cy.task('addLegalColumn', {

                filePath: sourceFilePath,
                sheetName,
                column: 'Q',
                header: 'Extra Column',
                value: 'Test Data'

            });

            cy.task('moveAllDownloadsToFixtures');

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Upload Successful
            //=========================================

            legalPage.BulkLegalUpload_Processed();

            //=========================================
            // Verify Record
            //=========================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber('68210000005802');

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            legalPage.VerifyLegalDetails({

                noticeReferenceNo,
                sarfaesiStage: 'Demand Notice Issued',
                sarfaesiStatus: 'In Progress',
                noticeDate: '17/07/2026',
                whatsappStatus: 'Delivered',
                whatsappDate: '17/07/2026',
                smsStatus: 'Delivered',
                smsDate: '17/07/2026',
                physicalStatus: 'Delivered',
                physicalDate: '17/07/2026',
                trackingId

            });

        });

    });

});