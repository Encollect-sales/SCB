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

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Trail Page locators
    getLocators('trails').then(locators => {
      trailpage = new TrailPage(locators); // ✅ FIXED
    });

  });

  
  it('TC_ID_039 - Perform a successful bulk upload.Perform a failed bulk upload.Check audit logs or monitoring screen.', () => {

    getTestData('loginData', 'login2').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Navigate & Download Template ----------------
      trailpage.trailpagedowload_template();

      const sheetName = 'Sheet1';

      
      // ---------------- Faker Test Data ----------------
      const phoneNumber = faker.number
        .int({ min: 6000000000, max: 9999999999 })
        .toString();

      const randomEmail = faker.internet.email();

      const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Excel Cell Data ----------------
      const data = {
        'A2': 'DMI0009590352',      // Agreement id
        'B2': '1174',               // Agent ENCollect Code
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
        'O2': 'new'     ,            // PickupAddress

      
        'A3': 'DMI0009590352',      // Agreement id
        'B3': '118974',               // Agent ENCollect Code
        'C3': 'yes',                 // RightPartyContact
        'D3': 'PTP',                // Action Code
        'D3': 'PTP',                // Action Code
        'E3': 'PTP',                // ResultCode
        'F3': '2026/12/26',         // Next Action Date
        'G3': ptpAmount,            // ✅ Random PTP Amount (1–100)
        'H3': '',                   // NextActionCode
        'I3': 'Bulk upload Aug29',  // Remarks
        'J3': phoneNumber,          // ✅ Faker – New contact number
        'K3': 'btm',                // New Area
        'L3': 'banglore',           // New Address
        'M3': randomEmail,          // ✅ Faker – NewEmailID
        'N3': 'permanent',          // AddressType
        'O3': 'new'                 // PickupAdd
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'Bulktrail.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulktrailTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Excel updated successfully');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Upload Updated Excel ----------------
      trailpage.bulkupload_approved_002();

    });

  });

});
