import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
const path = require('path');

describe('BULKTRL_028 - Session timeout during bulk upload', () => {

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

  it('should stop processing safely and notify user when session expires', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Download Template ----------------
      trailpage.trailpagedowload_template();

      const sheetName = 'Sheet1';

      // ---------------- Prepare Valid Excel ----------------
      const data = {
        'A2': 'DMI0009590352',
        'B2': '1936',
        'C2': 'ss',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': '50',
        'I2': 'Session timeout test'
      };

      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'Bulktrail.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulktrailTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      });

      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Start Upload ----------------
      trailpage.bulkupload_approved_001();

      // ---------------- Simulate Session Timeout ----------------
      cy.wait(1000);
      cy.clearCookies();
      cy.clearLocalStorage();

     
    });
  });

});
