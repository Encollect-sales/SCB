import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Contact Enrichment Scenarios', () => {

  let loginPage;
  let contactenrichmentpage;

  before(() => {

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Contact Enrichment locators
    getLocators('contactenrichment').then(locators => {
      contactenrichmentpage = new ContactEnrichmentPage(locators);
    });

  });

 

  // =====================================================
  // TC_ID_01 - Excel Update & Upload Validation
  // =====================================================
  it('TC_ID_005 - Mixed valid and invalid rows result in Partially Processed status', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Download template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Random Test Data ----------------
     const validPhone = faker.number.int({ min: 6000000000, max: 9999999999 }).toString();

     const validPhone1 = faker.number.int({ min: 6000000000, max: 9999999999 }).toString();
      const invalidPhone = '12345'; 
      const validAddress = faker.location.streetAddress();
     
      const data = {
        // Valid row
        'A2': '1667',
        'B2': 'Office',
        'C2': validAddress,
        'D2': validPhone,

        // Invalid row
        'A3': '1668987',
        'B3': 'Office',
        'C3': validAddress,
        'D3': validPhone1
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
        cy.log('Excel updated successfully');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Upload updated Excel
      contactenrichmentpage.contacttemplate_partiallyprocessed();

    });

  });

});
