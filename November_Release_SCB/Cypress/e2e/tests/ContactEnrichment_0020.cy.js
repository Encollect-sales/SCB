import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_020 - Negative – Agreement ID does not exist in core system', () => {

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

  it('CE_BCU_020 - Upload template with non-existent Agreement ID', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Step 1: Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // ---------------- Step 2: Navigate & Download Template ----------------
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const nonExistentAgreementId = faker.number
        .int({ min: 900000, max: 999999 }) // ensure unlikely to exist
        .toString();

      const data = {
        'A2': nonExistentAgreementId,      // ❌ Invalid Agreement ID
        'B2': 'Office',                    // Valid Contact Type
        'C2': faker.location.streetAddress(), // Valid Address
        'D2': faker.number
          .int({ min: 1000000000, max: 9999999999 })
          .toString()                      // Valid Mobile
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
        cy.log('Excel updated with non-existent Agreement ID');
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Step 3: Upload Excel ----------------
      contactenrichmentpage.contacttemplate_failed();

    

    });

  });

});
