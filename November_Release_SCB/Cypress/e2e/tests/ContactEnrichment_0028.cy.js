import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_028 - Mobile Number exceeds allowed length', () => {

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

  it('CE_BCU_028 - Reject mobile number exceeding max length', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Go to Bulk Contact Upload & download template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // -------- Test Data --------
      const longMobileNumber = '123456789012345'; // exceeds allowed length
      const address = faker.location.streetAddress();

      const data = {
        'A2': '1667',               // Agreement ID
        'B2': 'Office',             // Contact Type
        'C2': address,              // Address
        'D2': longMobileNumber      // Invalid Mobile
      };

      // -------- Excel Handling --------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      }).then(() => {
        cy.log('Excel updated with invalid mobile number');
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 3: Upload file
      contactenrichmentpage.contacttemplate_failed();

      // // Step 4: Validation
      // cy.contains(
      //   'Mobile number exceeds allowed length',
      //   { timeout: 20000 }
      // ).should('be.visible');

      // // Optional: verify status
      // // cy.contains('Failed').should('exist');

    });
  });

});
