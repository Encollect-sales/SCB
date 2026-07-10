import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Bulk Trail Upload - Mixed Agent Status Validation', () => {

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

 
  it('BULKTRL_003 - Process mixed file with Approved and non-Approved users', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Download Template ----------------
      trailpage.trailpagedowload_template();

      const sheetName = 'Sheet1';

      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Faker ----------------
      const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Excel Data (ALL columns) ----------------
      const data = {

        // ✅ Approved Agent → SUCCESS
        'A2': 'DMI0009590352',
        'B2': '54535',
        'C2': 'ss',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'H2': '',
        'I2': 'Approved agent',
        'J2': '9876543200',
        'K2': 'BTM',
        'L2': 'Bangalore',
        'M2': 'approved@yopmail.com',
        'N2': 'permanent',
        'O2': 'new',

        // ❌ Disabled
        'A3': 'DMI0009590353',
        'B3': '2001',
        'C3': 'ss',
        'D3': 'PTP',
        'E3': 'PTP',
        'F3': '2025/12/26',
        'G3': '40',
        'H3': '',
        'I3': 'Disabled agent',
        'J3': '9876543201',
        'K3': 'HSR',
        'L3': 'Bangalore',
        'M3': 'disabled@yopmail.com',
        'N3': 'permanent',
        'O3': 'new',

        // ❌ Dormant
        'A4': 'DMI0009590354',
        'B4': '2002',
        'C4': 'ss',
        'D4': 'PTP',
        'E4': 'PTP',
        'F4': '2025/12/26',
        'G4': '50',
        'H4': '',
        'I4': 'Dormant agent',
        'J4': '9876543202',
        'K4': 'Whitefield',
        'L4': 'Bangalore',
        'M4': 'dormant@yopmail.com',
        'N4': 'permanent',
        'O4': 'new',

        // ❌ Pending Approval
        'A5': 'DMI0009590355',
        'B5': '2003',
        'C5': 'ss',
        'D5': 'PTP',
        'E5': 'PTP',
        'F5': '2025/12/26',
        'G5': '60',
        'H5': '',
        'I5': 'Pending approval',
        'J5': '9876543203',
        'K5': 'Indiranagar',
        'L5': 'Bangalore',
        'M5': 'pending@yopmail.com',
        'N5': 'permanent',
        'O5': 'new',

        // ❌ Saved as Draft
        'A6': 'DMI0009590356',
        'B6': '2004',
        'C6': 'ss',
        'D6': 'PTP',
        'E6': 'PTP',
        'F6': '2025/12/26',
        'G6': '70',
        'H6': '',
        'I6': 'Draft agent',
        'J6': '9876543204',
        'K6': 'Yelahanka',
        'L6': 'Bangalore',
        'M6': 'draft@yopmail.com',
        'N6': 'permanent',
        'O6': 'new',

        // ❌ Rejected
        'A7': 'DMI0009590357',
        'B7': '2005',
        'C7': 'ss',
        'D7': 'PTP',
        'E7': 'PTP',
        'F7': '2025/12/26',
        'G7': '80',
        'H7': '',
        'I7': 'Rejected agent',
        'J7': '9876543205',
        'K7': 'KR Puram',
        'L7': 'Bangalore',
        'M7': 'rejected@yopmail.com',
        'N7': 'permanent',
        'O7': 'new'
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

      // ---------------- Upload ----------------
      trailpage.bulkupload_failed_003();

     
    });

  });

});
