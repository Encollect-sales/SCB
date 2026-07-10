import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_014 - Negative – Mobile number with incorrect length', () => {

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

  it('CE_BCU_014 - Upload template with incorrect length mobile number', () => {

    getTestData('loginData', 'login2').then(user => {

      // ---------------- Step 1: Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Step 2: Navigate & Download Template ----------------
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Test Data ----------------

      // Generate random invalid mobile number (1–9 digits)
      const shortMobileNumber = faker.string.numeric(
        faker.number.int({ min: 1, max: 9 })
      );

      const randomAddress = faker.location.streetAddress();

      cy.log(`Generated Invalid Mobile Number: ${shortMobileNumber}`);

      const data = {
        'A2': '1667',             // Agreement ID
        'B2': 'Office',           // Contact Type
        'C2': randomAddress,      // Address
        'D2': shortMobileNumber   // Invalid mobile length
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
        cy.log('Excel updated with incorrect length mobile number');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Step 3: Upload Excel ----------------
      contactenrichmentpage.contacttemplate_failed();

    });

  });

});