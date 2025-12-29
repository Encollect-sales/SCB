import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
const path = require('path');

describe('CE_BCU_019 - Negative – Both Address and Mobile blank not allowed', () => {

  let loginPage;
  let contactenrichmentpage;

  before(() => {

    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('contactenrichment').then(locators => {
      contactenrichmentpage = new ContactEnrichmentPage(locators);
    });

  });

  it('CE_BCU_019 - Upload template with both Address and Mobile blank', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Step 1: Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // ---------------- Step 2: Navigate & Download Template ----------------
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const data = {
        'A2': '1667',     // Agreement ID
        'B2': 'Office',   // Contact Type
        'C2': '',         // Address BLANK
        'D2': ''          // Mobile BLANK
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Excel updated with Address & Mobile blank');
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Step 3: Upload Excel ----------------
      contactenrichmentpage.contacttemplate_failed();

    

    });

  });

});
