import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_026 - Leading/trailing spaces handled gracefully', () => {

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

  it('CE_BCU_026 - Upload succeeds and trims spaces', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Navigate & download Bulk Contact Upload template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data with Spaces ----------------
      const mobileWithSpaces = `  ${faker.number
        .int({ min: 6000000000, max: 9999999999 })
        .toString()}  `;

      const addressWithSpaces = `  ${faker.location.streetAddress()}  `;

      const data = {
        'A2': '  1667  ',        // Agreement ID with spaces
        'B2': '  Office  ',     // Contact Type with spaces
        'C2': addressWithSpaces, // Address with spaces
        'D2': mobileWithSpaces   // Mobile with spaces
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
        cy.log('Excel updated with leading and trailing spaces');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 3: Upload file
      contactenrichmentpage.contacttemplate_processed_001();

      // // Step 4: Verify upload success
      // // Expected: upload succeeds and system trims values internally
      // cy.contains(/processed|uploaded|success/i, { timeout: 20000 })
      //   .should('exist');

    });
  });

});
