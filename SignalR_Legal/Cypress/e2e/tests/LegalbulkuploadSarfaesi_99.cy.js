import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';
const path = require('path');

describe('Legal Bulk Upload - Reordered Columns Validation', () => {

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

    it('TC_CF_006 - Verify upload with columns in different order', () => {

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

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            const downloadsFolder = Cypress.config('downloadsFolder');
            const sourceFilePath = path.join(downloadsFolder, fileName);

            //=========================================
            // Reorder Template Columns
            //=========================================

            cy.task('reorderLegalColumns', {

                filePath: sourceFilePath,
                sheetName,

                /*
                    Example:

                    Original:
                    A B C D E F G H I J K L M N O P

                    Reordered:
                    B A C D E F G H I J K L M N O P
                */

                order: [
                    'B',
                    'A',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L',
                    'M',
                    'N',
                    'O',
                    'P'
                ]

            });

            cy.task('moveAllDownloadsToFixtures');

            //=========================================
            // Upload File
            //=========================================

            legalPage.UploadLegalTemplate(fileName);

            //=========================================
            // Verify Result
            //=========================================

            legalPage.VerifyBulkUploadError(

                'Invalid file format'

            );

            // OR
            // legalPage.VerifyBulkUploadError('Template mismatch');

            /*
            If your application maps columns using
            header names instead of position,
            replace the above with:

            legalPage.BulkLegalUpload_Processed();
            */

        });

    });

});