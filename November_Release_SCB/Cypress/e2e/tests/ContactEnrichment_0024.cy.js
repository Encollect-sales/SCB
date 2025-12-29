import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_024 - Invalid Contact Type value', () => {

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

  it('CE_BCU_024 - Upload file with invalid Contact Type', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2 & 3: Navigate + Download template (inside JS method)
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const validPhone = faker.number.int({
        min: 6000000000,
        max: 9999999999
      }).toString();

      const randomAddress = faker.location.streetAddress();

      // ❌ Invalid Contact Type
      const data = {
        'A2': '1667',
        'B2': 'InvalidType',     // ❌ Not allowed
        'C2': randomAddress,
        'D2': validPhone
      };

      // ---------------- Excel Update ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      }).then(() => {
        cy.log('Excel updated with invalid Contact Type');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 4: Upload file
      contactenrichmentpage.contacttemplate_failed();

      // // Step 5: Validate error message
      // cy.contains('Invalid Contact Type', { timeout: 15000 })
      //   .should('be.visible');

    });

  });

});
