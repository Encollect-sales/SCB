import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_013 - Blank or Null Agent ID Validation', () => {

  let loginPage;
  let trailpage;

  before(() => {

    // Login Page
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Trail Page
    getLocators('trails').then(locators => {
      trailpage = new TrailPage(locators);
    });

  });

  it('Reject rows with blank or null Agent ID and create no trails', () => {

    getTestData('loginData', '').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Download Template ----------------
      trailpage.trailpagedowload_template();

      const sheetName = 'Sheet1';

      Cypress.on('uncaught:exception', err => {
        if (err.message.includes('ResizeObserver loop')) {
          return false;
        }
      });

      // ---------------- Common Data ----------------
      const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Excel Data ----------------
      const data = {

        // ❌ Blank Agent ID
        'A2': 'DMI0009810001',
        'B2': '',                   // Blank Agent ID
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Blank agent ID',
        'J2': faker.phone.number('9#########'),
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': faker.internet.email(),
        'N2': 'Permanent',
        'O2': 'New',

        // ❌ Null Agent ID
        'A3': 'DMI0009810002',
        'B3': null,                 // Null Agent ID
        'C3': 'Yes',
        'D3': 'PTP',
        'E3': 'PTP',
        'F3': '2025/12/26',
        'G3': ptpAmount,
        'H3': '',
        'I3': 'Null agent ID',
        'J3': faker.phone.number('9#########'),
        'K3': 'HSR',
        'L3': 'Bangalore',
        'M3': faker.internet.email(),
        'N3': 'Permanent',
        'O3': 'New'
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const templateFile = 'Bulktrail.xlsx';
      const templatePath = path.join(downloadsFolder, templateFile);

      cy.task('updateBulktrailTemplateCell', {
        filePath: templatePath,
        sheetName,
        data
      });

      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Upload & Process ----------------
      trailpage.bulkupload_failed_003();




    });
  });
});
