import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Mixed Valid And Invalid Records', () => {

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

    it('TC_CF_002 - Upload file containing 8 valid rows and 2 invalid rows', () => {

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

            const data = {};

            //==================================================
            // Create 10 Rows
            //==================================================

            for (let row = 2; row <= 11; row++) {

                const noticeReferenceNo = `NRN${faker.string.numeric(8)}`;
                const trackingId = `TRK${faker.string.numeric(10)}`;

                data[`A${row}`] = '210000001692';
                data[`B${row}`] = '68210000005802';
                data[`C${row}`] = faker.person.fullName();
                data[`D${row}`] = 'Father';
                data[`E${row}`] = 'Create';
                data[`F${row}`] = 'Demand Notice Issued';
                data[`G${row}`] = 'In Progress';
                data[`H${row}`] = noticeReferenceNo;
                data[`I${row}`] = '2026-07-17';
                data[`J${row}`] = 'Delivered';
                data[`K${row}`] = '2026-07-17';
                data[`L${row}`] = 'Delivered';
                data[`M${row}`] = '2026-07-17';
                data[`N${row}`] = 'Delivered';
                data[`O${row}`] = '2026-07-17';
                data[`P${row}`] = trackingId;

            }

            //==================================================
            // Row 10 Invalid
            // Mandatory Field Blank
            //==================================================

            data['F10'] = '';

            //==================================================
            // Row 11 Invalid
            // Mandatory Field Blank
            //==================================================

            data['H11'] = '';

            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, fileName);

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            }).then(() => {

                cy.log('Excel updated successfully');

            });

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Upload Completed
            //=========================================

            legalPage.BulkLegalUpload_PartiallyProcessed();

            // Optional Summary Validation
            // legalPage.VerifySuccessCount(8);
            // legalPage.VerifyFailureCount(2);

        });

    });

});