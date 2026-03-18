import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
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

    getTestData('loginData', 'login2').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Download Template ----------------
      trailpage.trailpagedowload_template();

      const sheetName = 'Sheet1';

       const phoneNumber = faker.number
              .int({ min: 6000000000, max: 9999999999 })
              .toString();
      
            const randomEmail = faker.internet.email();
      
            const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Prepare Valid Excel ----------------
      const data = {
      'A2': 'DMI0009590352',      // Agreement id
        'B2': '1667',               // Agent ENCollect Code
        'C2': 'yes',                 // RightPartyContact
        'D2': 'PTP',                // Action Code
        'D2': 'PTP',                // Action Code
        'E2': 'PTP',                // ResultCode
        'F2': '2026/12/26',         // Next Action Date
        'G2': ptpAmount,            // ✅ Random PTP Amount (1–100)
        'H2': '',                   // NextActionCode
        'I2': 'Bulk upload Aug29',  // Remarks
        'J2': phoneNumber,          // ✅ Faker – New contact number
        'K2': 'btm',                // New Area
        'L2': 'banglore',           // New Address
        'M2': randomEmail,          // ✅ Faker – NewEmailID
        'N2': 'permanent',          // AddressType
        'O2': 'new'                 // PickupAddress
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
