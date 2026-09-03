import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';

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

            // ==========================================
            // Login
            // ==========================================

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(2000);

            // ==========================================
            // File already prepared
            // Notice Reference No column is missing
            // ==========================================

            const fileName = 'BulkUploadOfSarfaesiDetailsMissingColumn.xlsx';

            // ==========================================
            // Upload File
            // ==========================================

            legalPage.uploadMissingColumnFile(fileName);

            // ==========================================
            // Verify Upload Status = Failed
            // ==========================================

            legalPage.BulkLegalUpload_Failed();

            // ==========================================
            // Verify Mandatory Column Error
            // ==========================================

           

        });

    });

});
