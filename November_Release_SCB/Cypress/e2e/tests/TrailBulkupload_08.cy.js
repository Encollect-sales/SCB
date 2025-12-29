import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_008 - Rejected Agent Validation', () => {

  let loginPage;
  let trailpage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('trails').then(locators => {
      trailpage = new TrailPage(locators);
    });
  });

  // =====================================================
  // BULKTRL_008 - Rejected Agents Only
  // =====================================================
  it('Process file with Rejected agents', () => {

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

      // ---------------- Faker Data ----------------
      const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Excel Data (ONLY Rejected Agents) ----------------
      const data = {
        'A2': 'DMI0009603001',
        'B2': '2005',                 // ❌ Rejected
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Rejected agent test',
        'J2': faker.phone.number('9#########'),
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': faker.internet.email(),
        'N2': 'Permanent',
        'O2': 'New',

        'A3': 'DMI0009603002',
        'B3': '2005',                 // ❌ Rejected
        'C3': 'Yes',
        'D3': 'PTP',
        'E3': 'PTP',
        'F3': '2025/12/26',
        'G3': ptpAmount,
        'H3': '',
        'I3': 'Rejected agent test',
        'J3': faker.phone.number('9#########'),
        'K3': 'BTM',
        'L3': 'Bangalore',
        'M3': faker.internet.email(),
        'N3': 'Permanent',
        'O3': 'New'
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'Bulktrail.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulktrailTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      });

      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Upload & Process ----------------
      trailpage.bulkupload_failed_003();

      
    });
  });
});
