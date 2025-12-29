import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_029 - Invalid mobile number with characters', () => {

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

  it('CE_BCU_029 - Reject mobile number containing characters', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Navigate & download template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const invalidMobile = '98AB@12345';   // ❌ Invalid mobile
      const validAddress = faker.location.streetAddress();

      const data = {
        'A2': '1667',          // Agreement ID
        'B2': 'Office',        // Contact Type
        'C2': validAddress,    // Address present
        'D2': invalidMobile    // Mobile with characters
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
        cy.log('Excel updated with invalid mobile number');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 3: Upload file
      contactenrichmentpage.contacttemplate_failed();

      // Step 4: Validate rejection (example assertions)
      // Adjust text based on actual UI message
      // cy.contains(/invalid mobile/i, { timeout: 20000 }).should('exist');

      // OR verify status
      // cy.contains('Failed').should('exist');
      // cy.contains('Partially Processed').should('exist');

    });
  });

});
