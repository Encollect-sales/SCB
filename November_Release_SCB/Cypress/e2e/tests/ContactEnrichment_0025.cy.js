import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
const path = require('path');

describe('CE_BCU_025 - Invalid Template Structure', () => {

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

  it('CE_BCU_025 - Upload file with renamed mandatory column', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2: Navigate & Download template
      contactenrichmentpage.CE_BCU_002(); 
      // (this method should: navigate → Bulk Contact Upload → Download Template)

      const sheetName = 'Sheet1';
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Step 3: Rename mandatory column "Agreement ID" → "AgreementId"
      const invalidHeaderData = {
        'A1': 'AgreementId'   //  renamed header
      };

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: invalidHeaderData
      }).then(() => {
        cy.log('Mandatory column renamed');
      });

      // Step 4: Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 5: Upload modified file
      contactenrichmentpage.contacttemplate_failed(); 
      // (this method should select file & click Upload)

      

    });
  });
});
