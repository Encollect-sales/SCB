import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_009 - Missing Agreement ID validation', () => {

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

  it('CE_BCU_009 - Upload file with blank Agreement ID in some rows', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Navigate & download template (handled in JS page)
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // Ignore ResizeObserver issue
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Test Data ----------------
      const validPhone = faker.number.int({ min: 6000000000, max: 9999999999 }).toString();
      const validAddress = faker.location.streetAddress();

      const data = {
        // Valid row
        'A2': '',
        'B2': 'Office',
        'C2': validAddress,
        'D2': validPhone,

      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      }).then(() => {
        cy.log('Excel updated with missing Agreement ID');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

     

      // Step 5: Verify file status (Failed or Partially Processed)
     contactenrichmentpage.contacttemplate_failed();
     
    });

  });

});
