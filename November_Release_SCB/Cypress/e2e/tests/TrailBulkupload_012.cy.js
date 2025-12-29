import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_012 - Invalid & Non-Approved Agent ID Validation', () => {

  let loginPage;
  let trailpage;

  before(() => {

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Trail Page locators
    getLocators('trails').then(locators => {
      trailpage = new TrailPage(locators);
    });

  });

  it('Reject invalid and non-approved Agent IDs and create no trail entries', () => {

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

      // ---------------- Excel Cell Data ----------------
      const data = {

        // ❌ Invalid Agent ID (Not in user master)
        'A2': 'DMI9999999999',
        'B2': '999999',
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Invalid agent ID',
        'J2': faker.phone.number('9#########'),
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': faker.internet.email(),
        'N2': 'Permanent',
        'O2': 'New',

        // ❌ Disabled Agent
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

        // ❌ Pending Approval Agent
        'A4': 'DMI0009801002',
        'B4': '1907',
        'C4': 'Yes',
        'D4': 'PTP',
        'E4': 'PTP',
        'F4': '2025/12/26',
        'G4': ptpAmount,
        'H4': '',
        'I4': 'Pending approval',
        'J4': faker.phone.number('9#########'),
        'K4': 'Whitefield',
        'L4': 'Bangalore',
        'M4': faker.internet.email(),
        'N4': 'Permanent',
        'O4': 'New',

        // ❌ Rejected Agent
        'A5': 'DMI0009801003',
        'B5': '2005',
        'C5': 'Yes',
        'D5': 'PTP',
        'E5': 'PTP',
        'F5': '2025/12/26',
        'G5': ptpAmount,
        'H5': '',
        'I5': 'Rejected agent',
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
