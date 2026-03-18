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

 

  // =====================================================
  // TC_ID_01 - Excel Update & Upload Validation
  // =====================================================
  it('TC_ID_0004 - Positive – Search by Transaction ID shows correct record', () => {

    getTestData('loginData', 'login2').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

    
// ---------------- Random VALID Test Data ----------------
const data = {
  // Row 2
  'A2': '1667',
  'B2': 'Residential',
  'C2': faker.location.streetAddress(),
  'D2': faker.number.int({ min: 6000000000, max: 9999999999 }).toString(),

  // Row 3
  'A3': '1667',
  'B3': 'Office',
  'C3': faker.location.streetAddress(),
  'D3': faker.number.int({ min: 6000000000, max: 9999999999 }).toString(),

  // Row 4
  'A4': '1667',
  'B4': 'Permanent',
  'C4': faker.location.streetAddress(),
  'D4': faker.number.int({ min: 6000000000, max: 9999999999 }).toString(),

  
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
        cy.log('Excel updated successfully');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Upload updated Excel
      contactenrichmentpage.contacttemplate_processed_001();
      contactenrichmentpage.CE_CCH_0006()


    });

  });

});
