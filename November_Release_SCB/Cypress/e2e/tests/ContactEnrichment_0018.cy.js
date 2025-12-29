import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_018 - Mobile filled, Address blank accepted', () => {

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

  it('CE_BCU_018 - Upload file with Mobile only (Address blank)', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2 & 3: Navigate to Bulk Contact Upload and download template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const mobileNumber = faker.number
        .int({ min: 6000000000, max: 9999999999 })
        .toString();

      const data = {
        'A2': '1667',     // Agreement ID
        'B2': 'Office',     // Contact Type
        'C2': '',           // Address BLANK
        'D2': mobileNumber  // Mobile PRESENT
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
        cy.log('Excel updated with Mobile only');
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 4: Upload file
      contactenrichmentpage.contacttemplate_processed_001();

      // Step 5: Verify success message / status
      // cy.contains('Processed', { timeout: 20000 }).should('exist');

    });
  });

});
