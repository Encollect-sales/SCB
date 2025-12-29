import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_015 - Processing Summary Validation for Mixed Results', () => {

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

  it('Validate processing summary after mixed upload results', () => {

    getTestData('loginData', 'login').then(user => {

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

      // ---------------- Common Test Data ----------------
      const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Excel Data (Mixed Results) ----------------
      const data = {

        // ✅ Approved Agent
        'A2': 'DMI0009590352',
        'B2': '1936',                   // Approved
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Approved agent',
        'J2': faker.phone.number('9#########'),
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': faker.internet.email(),
        'N2': 'Permanent',
        'O2': 'New',

        // ❌ Non-Approved Agent (Disabled)
        'A3': 'DMI0009801001',
        'B3': '1515',
        'C3': 'Yes',
        'D3': 'PTP',
        'E3': 'PTP',
        'F3': '2025/12/26',
        'G3': ptpAmount,
        'H3': '',
        'I3': 'Disabled agent',
        'J3': faker.phone.number('9#########'),
        'K3': 'HSR',
        'L3': 'Bangalore',
        'M3': faker.internet.email(),
        'N3': 'Permanent',
        'O3': 'New',

        // ❌ Invalid Agent ID
        'A4': 'DMI9999999999',
        'B4': '999999',
        'C4': 'Yes',
        'D4': 'PTP',
        'E4': 'PTP',
        'F4': '2025/12/26',
        'G4': ptpAmount,
        'H4': '',
        'I4': 'Invalid agent ID',
        'J4': faker.phone.number('9#########'),
        'K4': 'Whitefield',
        'L4': 'Bangalore',
        'M4': faker.internet.email(),
        'N4': 'Permanent',
        'O4': 'New',

        // ❌ Blank Agent ID
        'A5': 'DMI0009810001',
        'B5': '',                       // Blank
        'C5': 'Yes',
        'D5': 'PTP',
        'E5': 'PTP',
        'F5': '2025/12/26',
        'G5': ptpAmount,
        'H5': '',
        'I5': 'Blank agent ID',
        'J5': faker.phone.number('9#########'),
        'K5': 'Indiranagar',
        'L5': 'Bangalore',
        'M5': faker.internet.email(),
        'N5': 'Permanent',
        'O5': 'New'
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
