import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_021 - Negative – Agreement ID blank while other fields filled', () => {

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

  it('CE_BCU_021 - Reject rows with blank Agreement ID and process valid rows', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Step 1: Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // ---------------- Step 2: Navigate & Download Template ----------------
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const data = {
        // Invalid row – Agreement ID BLANK
        'A2': '',
        'B2': 'Office',
        'C2': faker.location.streetAddress(),
        'D2': faker.number.int({ min: 1000000000, max: 9999999999 }).toString(),

       
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Excel updated with mixed valid & invalid Agreement IDs');
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Step 3: Upload Excel ----------------
      // Mixed result → use processed (not failed)
      contactenrichmentpage.contacttemplate_failed();

     
    });

  });

});
