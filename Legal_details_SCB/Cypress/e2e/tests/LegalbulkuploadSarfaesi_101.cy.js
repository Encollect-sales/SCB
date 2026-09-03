import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';

describe('Legal Bulk Upload - Unsupported File Format Validation', () => {

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

    it('TC_CF_008 - Verify upload fails for unsupported file format', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(

                user.Companyname,
                user.email,
                user.password

            );

            cy.wait(2000);

            Cypress.on('uncaught:exception', (err) => {

                if (
                    err.message.includes(
                        'ResizeObserver loop completed with undelivered notifications.'
                    )
                ) {
                    return false;
                }

            });

            //=========================================
            // Upload Unsupported File (.pdf/.docx)
            //=========================================

            legalPage.UploadLegalTemplate('InvalidBulkUpload.pdf');

            // OR

            // legalPage.UploadLegalTemplate('InvalidBulkUpload.docx');

            //=========================================
            // Verify Validation Message
            //=========================================

            legalPage.VerifyBulkUploadError(

                'Unsupported file format. Please upload a valid .csv/.xlsx file.'

            );

        });

    });

});