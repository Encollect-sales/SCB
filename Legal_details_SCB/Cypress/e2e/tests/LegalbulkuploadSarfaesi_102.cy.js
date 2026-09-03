import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Legal Bulk Upload - Maximum Record Limit Validation', () => {

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

    it('TC_CF_009 - Verify upload fails when file exceeds maximum allowed records', () => {

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

            const MAX_LIMIT = 1000;

            Cypress.on('uncaught:exception', (err) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            const data = {};

            //=========================================
            // Create 1001 Records
            //=========================================

            for (let row = 2; row <= MAX_LIMIT + 2; row++) {

                data[`A${row}`] = '210000001692';
                data[`B${row}`] = '68210000005802';
                data[`C${row}`] = faker.person.fullName();
                data[`D${row}`] = 'Father';
                data[`E${row}`] = 'Create';
                data[`F${row}`] = 'Demand Notice Issued';
                data[`G${row}`] = 'In Progress';
                data[`H${row}`] = `NRN${faker.string.numeric(10)}`;
                data[`I${row}`] = '2026-07-17';
                data[`J${row}`] = 'Delivered';
                data[`K${row}`] = '2026-07-17';
                data[`L${row}`] = 'Delivered';
                data[`M${row}`] = '2026-07-17';
                data[`N${row}`] = 'Delivered';
                data[`O${row}`] = '2026-07-17';
                data[`P${row}`] = `TRK${faker.string.numeric(10)}`;

            }

            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, fileName);

            cy.task('updateLegalBulkCell', {

                filePath: sourceFilePath,
                sheetName,
                data

            }).then(() => {

                cy.log('1001 Records Generated Successfully');

            });

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Error
            //=========================================

            legalPage.VerifyBulkUploadError(

                'File exceeds maximum allowed records'

            );

            // OR
            // legalPage.VerifyBulkUploadError(
            //     'Maximum upload limit exceeded'
            // );

        });

    });

});