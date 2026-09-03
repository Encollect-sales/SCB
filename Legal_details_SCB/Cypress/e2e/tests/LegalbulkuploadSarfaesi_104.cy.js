import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Update Customer Id and Loan Account Number Validation', () => {

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

    it('TC_CF_011 - Verify Customer Id and Loan Account Number cannot be updated', () => {

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

            const existingNoticeReferenceNo = 'NRN10000001';

            const updatedTrackingId = `TRK${faker.string.numeric(10)}`;

            const data = {

                // Attempt to change Customer Id
                'A2': '210000009999',

                // Attempt to change Loan Account Number
                'B2': '68210000999999',

                'C2': 'Ramesh Gupta',

                'D2': 'Father',

                'E2': 'Update',

                'F2': 'Possession Notice',

                'G2': 'Completed',

                'H2': existingNoticeReferenceNo,

                'I2': '2026-08-01',

                'J2': 'Delivered',

                'K2': '2026-08-01',

                'L2': 'Delivered',

                'M2': '2026-08-01',

                'N2': 'Delivered',

                'O2': '2026-08-01',

                'P2': updatedTrackingId

            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            const sourceFilePath = path.join(

                downloadsFolder,

                fileName

            );

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,

                sheetName,

                data

            });

            cy.task('moveAllDownloadsToFixtures');

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Upload Result
            //=========================================

            // If business allows upload but ignores Customer Id/Loan No changes

            legalPage.BulkLegalUpload_Processed();

            // If business rejects the update instead, replace with:
            // legalPage.BulkLegalUpload_Failed();

            //=========================================
            // Navigate to Original Account
            //=========================================

            legalPage.OpenAccountDetailsScreen();

            legalPage.EnterLoanAccountNumber(

                '68210000005802'

            );

            legalPage.OpenCustomerAccount();

            legalPage.ClickLegalDetailsTab();

            //=========================================
            // Verify Update Applied
            //=========================================

            legalPage.VerifyLegalDetails({

                noticeReferenceNo: existingNoticeReferenceNo,

                sarfaesiStage: 'Possession Notice',

                sarfaesiStatus: 'Completed',

                noticeDate: '01/08/2026',

                whatsappStatus: 'Delivered',

                whatsappDate: '01/08/2026',

                smsStatus: 'Delivered',

                smsDate: '01/08/2026',

                physicalStatus: 'Delivered',

                physicalDate: '01/08/2026',

                trackingId: updatedTrackingId

            });

            //=========================================
            // Verify Original Customer Id & Loan Account Remain Unchanged
            //=========================================

            legalPage.VerifyCustomerId(

                '210000001692'

            );

            legalPage.VerifyLoanAccountNumber(

                '68210000005802'

            );

        });

    });

});