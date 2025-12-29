import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_023 - Blank Contact Type not allowed', () => {

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

  it('CE_BCU_023 - Verify error when Contact Type is blank', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Navigate & download Bulk Contact Upload template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const mobileNumber = faker.number
        .int({ min: 6000000000, max: 9999999999 })
        .toString();
      const randomAddress = faker.location.streetAddress();

      const data = {
        'A2': '1667',           // Agreement ID PRESENT
        'B2': '',               // ❌ Contact Type BLANK
        'C2': randomAddress,    // Address PRESENT
        'D2': mobileNumber      // Mobile PRESENT
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
        cy.log('Excel updated with blank Contact Type');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 3: Upload file
      contactenrichmentpage.contacttemplate_failed();

      // Step 4: Verify validation error
      // cy.contains(
      //   'Contact Type is mandatory',
      //   { timeout: 20000 }
      // ).should('exist');

    });
  });

});
