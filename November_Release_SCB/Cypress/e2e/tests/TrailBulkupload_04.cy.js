import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
const path = require('path');

describe('Bulk Trail Upload - Only Non-Approved Users', () => {

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

  
  it('BULKTRL_004 - Process file with only non-Approved users', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Download Template ----------------
      trailpage.trailpagedowload_template();

      const sheetName = 'Sheet1';

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Excel Data (ALL columns, Non-Approved only) ----------------
      const data = {

        // ❌ Disabled Agent
        'A2': 'DMI0009590401',
        'B2': '1213',
        'C2': 'ss',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': '50',
        'H2': '',
        'I2': 'Disabled agent upload',
        'J2': '9876543210',
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': 'disabled@yopmail.com',
        'N2': 'permanent',
        'O2': 'new',

      
        
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

      // ---------------- Assertions ----------------

     

    });

  });

});
