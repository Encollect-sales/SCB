import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Audit trail created for each bulk upload attempt', () => {

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

  it('TC_ID_042 - Successful & failed bulk upload should create audit trail', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Download Template ----------------
      trailpage.trailpagedowload_template();
      cy.wait(2000);

      // ---------------- Config ----------------
      const agentCodes = [
        '10047', '10036', '10031', '1936', '1654',
        '1296', '1294', '1241', '1238', '1237'
      ];

      const TOTAL_ROWS = 10000;
      const BATCH_SIZE = 500;
      const sheetName = 'Sheet1';

      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'Bulktrail.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // ---------------- Batch Writer ----------------
      function writeBatch(startIndex) {
        const excelData = {};

        for (let i = startIndex; i < Math.min(startIndex + BATCH_SIZE, TOTAL_ROWS); i++) {

          const row = i + 2;
          const agentCode = agentCodes[i % agentCodes.length];

          excelData[`A${row}`] = `DMI0009${100000 + i}`;
          excelData[`B${row}`] = agentCode;
          excelData[`C${row}`] = 'ss';
          excelData[`D${row}`] = 'PTP';
          excelData[`E${row}`] = 'PTP';
          excelData[`F${row}`] = '2025/12/26';
          excelData[`G${row}`] = faker.number.int({ min: 1, max: 100 });
          excelData[`H${row}`] = '';
          excelData[`I${row}`] = 'Bulk upload automation';
          excelData[`J${row}`] = faker.number
            .int({ min: 6000000000, max: 9999999999 })
            .toString();
          excelData[`K${row}`] = 'BTM';
          excelData[`L${row}`] = 'Bangalore';
          excelData[`M${row}`] = faker.internet.email();
          excelData[`N${row}`] = 'permanent';
          excelData[`O${row}`] = 'new';
        }

        return cy.task('updateBulktrailTemplateCell', {
          filePath: sourceFilePath,
          sheetName,
          data: excelData
        });
      }

      // ---------------- Sequential Batch Execution ----------------
      let chain = cy.wrap(null);

      for (let i = 0; i < TOTAL_ROWS; i += BATCH_SIZE) {
        chain = chain.then(() => writeBatch(i));
      }

      chain.then(() => {

        cy.log('10,000 rows written successfully');

        // Move file to fixtures
        cy.task('moveAllDownloadsToFixtures');

        // Upload file
        trailpage.BULKTRL_042();

        
      });

    });
  });
});
