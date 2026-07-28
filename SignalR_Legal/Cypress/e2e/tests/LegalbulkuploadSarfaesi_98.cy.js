import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Legal Bulk Upload - Missing Mandatory Column Validation', () => {

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

    it('TC_CF_005 - Verify upload fails when Notice Reference No column is missing', () => {

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

            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, fileName);

            //=========================================
            // Remove Mandatory Column (Notice Reference No)
            //=========================================

            cy.task('removeLegalColumn', {

                filePath: sourceFilePath,
                sheetName,
                column: 'H'

            }).then(() => {

                cy.log('Notice Reference No column removed.');

            });

            cy.task('moveAllDownloadsToFixtures').then(result => {

                cy.log(result);

            });

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Upload Failed
            //=========================================

            legalPage.VerifyBulkUploadError(

                'Mandatory column Notice Reference No is missing'

            );

        });

    });

});