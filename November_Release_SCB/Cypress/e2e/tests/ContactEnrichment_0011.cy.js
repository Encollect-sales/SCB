import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_011 - Invalid Contact Type', () => {

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

  it('CE_BCU_011 - Upload file with invalid Contact Type', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Navigate & Download Template
      contactenrichmentpage.CE_BCU_002(); // navigation + download

      const sheetName = 'Sheet1';

      // Step 3: Prepare test data
      const invalidContactType = 'InvalidType'; // ❌ not allowed
      const validAddress = faker.location.streetAddress();
      const validMobile = faker.number.int({
        min: 6000000000,
        max: 9999999999
      }).toString();

      const data = {
        'A2': '1667',
        'B2': invalidContactType,   
        'C2': validAddress,
        'D2': validMobile
      };

      // Step 4: Update Excel
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      });

      // Step 5: Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 6: Upload file
      contactenrichmentpage.contacttemplate_failed();

      // // Step 7: Verify error message
      // cy.contains(/Invalid Contact Type/i, { timeout: 10000 })
      //   .should('be.visible');

    });
  });

});
