import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Contact Enrichment Scenarios', () => {

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

  
  it('TC_ID_007 - Download template, update Excel with large number of entries and upload', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------- Login ----------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------- Navigate ----------
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------- Ignore ResizeObserver error ----------
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------- Generate 5000 rows ----------
      const data = {};

      for (let i = 2; i < 5002; i++) {

        const phoneNumber = faker.number
          .int({ min: 1000000000, max: 9999999999 })
          .toString();

        const randomAddress = faker.location.streetAddress();

        // Column mapping
        data[`A${i}`] = i % 2 === 0 ? '14007' : '1667'; // Allowed values only
        data[`B${i}`] = 'Office';
        data[`C${i}`] = randomAddress;
        data[`D${i}`] = phoneNumber;
      }

      // ---------- Excel file paths ----------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // ---------- Update Excel ----------
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Excel updated with 5000 records successfully');
      });

      // ---------- Move file to fixtures ----------
      cy.task('moveAllDownloadsToFixtures');

      // ---------- Upload Excel ----------
      contactenrichmentpage.contacttemplate_processed_001();

    });

  });

});
