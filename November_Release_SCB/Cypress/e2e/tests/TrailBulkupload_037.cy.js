import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_037 - Display of progress indicator during long‑running processing', () => {

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

  it('Verify that a progress indicator is shown to the user during long-running bulk trail file processing until completion.', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

       trailpage.trailpagedowload_template();

// ---------------- Agent Codes ----------------
const agentCodes = [
  '1935',
  '1934',
  '1933',
  '1932',
  '1931',
  '1930',
  '1929',
  '1920',
  '1917',
  '1913'
];

// ---------------- Excel Data Builder ----------------
const excelData = {};

agentCodes.forEach((agentCode, index) => {

  const row = index + 2; // start from row 2

  excelData[`B${row}`] = agentCode; // ✅ Agent Code only
});

// ---------------- Excel Update ----------------
const downloadsFolder = Cypress.config('downloadsFolder');
const excelFileName = 'Bulktrail.xlsx';
const sourceFilePath = path.join(downloadsFolder, excelFileName);

cy.task('updateBulktrailTemplateCell', {
  filePath: sourceFilePath,
  sheetName: 'Sheet1',
  data: excelData
}).then(() => {
  cy.log('Excel updated with agent codes only');
});

// Move to fixtures
cy.task('moveAllDownloadsToFixtures');

// Upload file
trailpage.bulkupload_failed_003();

      
    });

  });

});
