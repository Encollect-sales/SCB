import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_027 - Address with special characters', () => {

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

 describe('CE_BCU_027 - Address with special characters and Arabic text', () => {

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

  it('Should accept special characters and Arabic text in Address', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      const arabicAddress = `
        شارع الملك فهد، مبنى رقم 12
        Apt #45, @Business-Center!
      `;

      const data = {
        'A2': '1667',
        'B2': 'Residential',
        'C2': arabicAddress,
        'D2': faker.number.int({ min: 6000000000, max: 9999999999 }).toString()
      };

      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      });

      cy.task('moveAllDownloadsToFixtures');

      contactenrichmentpage.contacttemplate_processed_001();

      // Expected: Upload succeeds
      // cy.contains('Processed').should('be.visible');
    });
  });
});
});