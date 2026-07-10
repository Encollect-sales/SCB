import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_013 - Negative – Mobile number with non-numeric characters', () => {

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

  it('CE_BCU_013 - Upload template with non-numeric mobile number', () => {

    getTestData('loginData', 'login2').then(user => {

      // ---------------- Step 1: Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // ---------------- Step 2: Navigate & Download Template ----------------
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Generate Random Invalid Mobile Number ----------------
      const invalidMobileNumber =
        faker.string.numeric(2) +
        faker.string.alpha(2).toUpperCase() +
        faker.string.numeric(2) +
        '@#' +
        faker.string.numeric(2);

      cy.log(`Generated Invalid Mobile Number: ${invalidMobileNumber}`);

      // ---------------- Generate Random Address ----------------
      const randomAddress = faker.location.streetAddress();

      const data = {
        'A2': '1667',                // Agreement ID
        'B2': 'Office',              // Contact Type
        'C2': randomAddress,         // Address
        'D2': invalidMobileNumber    // Invalid Mobile Number
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
        cy.log('Excel updated with random address and invalid mobile number');
      });

      // ---------------- Move File to Fixtures ----------------
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Step 3: Upload File ----------------
      contactenrichmentpage.contacttemplate_failed();

    });

  });

});