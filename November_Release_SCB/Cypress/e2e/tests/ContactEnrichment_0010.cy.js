import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_010 - Invalid Agreement ID validation', () => {

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

  it('CE_BCU_010 - Invalid Agreement ID format', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Download template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // Test data
      const validPhone = faker.number
        .int({ min: 6000000000, max: 9999999999 })
        .toString();

      const address = faker.location.streetAddress();

      // Invalid Agreement ID
      const data = {
        A2: '###123',   // ❌ Invalid format
        B2: 'Office',
        C2: address,
        D2: validPhone
      };

      // Excel path
      const downloadsFolder = Cypress.config('downloadsFolder');
      const fileName = 'BulkContactTemplate.xlsx';
      const filePath = `${downloadsFolder}/${fileName}`;

      // Step 3: Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath,
        sheetName,
        data
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 4: Upload file
      contactenrichmentpage.contacttemplate_failed();

     

    });
  });

});
