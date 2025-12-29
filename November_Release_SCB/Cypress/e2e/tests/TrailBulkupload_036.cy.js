import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_036 - Display of progress indicator during long‑running processing', () => {

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
  '10047',
  '10036',
  '10031',
  '1936',
  '1654',
  '1591',
  '1586',
  '1585',
  '1584',
  '1526'
];

// ---------------- Excel Data Builder ----------------
const excelData = {};

agentCodes.forEach((agentCode, index) => {

  const row = index + 2; // Start from row 2

  const phoneNumber = faker.number
    .int({ min: 6000000000, max: 9999999999 })
    .toString();

  const randomEmail = faker.internet.email();

  const ptpAmount = faker.number.int({ min: 1, max: 100 });

  excelData[`A${row}`] = `DMI00095903${50 + index}`; // Agreement ID
  excelData[`B${row}`] = agentCode;                  // Agent Code
  excelData[`C${row}`] = 'ss';                        // RightPartyContact
  excelData[`D${row}`] = 'PTP';                       // Action Code
  excelData[`E${row}`] = 'PTP';                       // Result Code
  excelData[`F${row}`] = '2025/12/26';                // Next Action Date
  excelData[`G${row}`] = ptpAmount;                   // PTP Amount
  excelData[`H${row}`] = '';                          // NextActionCode
  excelData[`I${row}`] = 'Bulk upload automation';    // Remarks
  excelData[`J${row}`] = phoneNumber;                 // Phone
  excelData[`K${row}`] = 'btm';                       // Area
  excelData[`L${row}`] = 'bangalore';                 // Address
  excelData[`M${row}`] = randomEmail;                 // Email
  excelData[`N${row}`] = 'permanent';                 // Address Type
  excelData[`O${row}`] = 'new';                       // Pickup Address
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
  cy.log('Excel updated with multiple agent entries');
});

// Move to fixtures
cy.task('moveAllDownloadsToFixtures');

// Upload file
trailpage.bulkupload_approved_001();


      
    });

  });

});
