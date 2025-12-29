import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Bulk Trail Upload - Dormant Agent Validation', () => {

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
  // BULKTRL_005 - Dormant Agent Only
  // =====================================================
  it('BULKTRL_005 - Process file with only Dormant users', () => {

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
      const phoneNumber = faker.number.int({ min: 6000000000, max: 9999999999 }).toString();
      const email = faker.internet.email();

      // ---------------- Excel Data (ONLY Dormant Agents) ----------------
      const data = {
        // Row 2
        'A2': 'DMI0009590401',   // Agreement ID
        'B2': '1917',            // ❌ Dormant Agent Code
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Dormant agent test',
        'J2': phoneNumber,
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': email,
        'N2': 'Permanent',
        'O2': 'New',

       
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

      // ---------------- Upload File ----------------
      trailpage.bulkupload_failed_003();

    


    });
  });
});
