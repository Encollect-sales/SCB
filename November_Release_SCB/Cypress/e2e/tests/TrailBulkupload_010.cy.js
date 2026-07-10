import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_010 - Failure Reason Text Validation (Mixed Entries)', () => {

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

  it('Validate exact failure reason text for non-approved users with mixed file', () => {

    getTestData('loginData', 'login2').then(user => {

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
      const phone1 = faker.string.numeric(10);
      const phone2 = faker.string.numeric(10);
      const email1 = faker.internet.email();
      const email2 = faker.internet.email();

      // ---------------- Excel Data (BOTH Entries) ----------------
      const data = {
        // ✅ Approved Agent
        'A2': '1667',
        'B2': '54535',               // Approved
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2026/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Approved agent',
        'J2': phone1,
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': email1,
        'N2': 'Permanent',
        'O2': 'New',

        // ❌ Non-Approved Agent
        'A3': 'DMI0009801001',
        'B3': '1933',               // Non-Approved
        'C3': 'Yes',
        'D3': 'PTP',
        'E3': 'PTP',
        'F3': '2026/12/26',
        'G3': ptpAmount,
        'H3': '',
        'I3': 'Failure reason validation',
        'J3': phone2,
        'K3': 'BTM',
        'L3': 'Bangalore',
        'M3': email2,
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
      trailpage.bulkupload_approved_002();

    
    });
  });
});
