import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_0017 -Invalid Agreement ID validation', () => {

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

 it('CE_BCU_017 - Address filled, Mobile blank accepted', () => {

  getTestData('loginData', 'login').then(user => {

    loginPage.login(user.Companyname, user.email, user.password);
    cy.wait(3000);

    contactenrichmentpage.CE_BCU_002();

    const sheetName = 'Sheet1';

    const data = {
      'A2': '1667',
      'B2': 'Office',
      'C2': faker.location.streetAddress(), 
      'D2': ''                              // Mobile blank
    };

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
  
      });
  
    });
  
  });
  