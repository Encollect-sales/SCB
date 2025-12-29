import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('BULKTRL_009 - Staff & Agency Agent Rule Validation', () => {

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
  // BULKTRL_009 - Staff & Agency (Approved + Non-Approved)
  // =====================================================
  it('Validate consistent rules across Staff and Agency agents', () => {

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

      const ptpAmount = faker.number.int({ min: 1, max: 100 });

      // ---------------- Excel Data ----------------
      const data = {
     
        'A2': 'DMI0009701001',
        'B2': '1166',        // Agency - Approved
        'C2': 'Yes',
        'D2': 'PTP',
        'E2': 'PTP',
        'F2': '2025/12/26',
        'G2': ptpAmount,
        'I2': 'Approved Agency agent',

        'A3': 'DMI0009701002',
        'B3': '2005',        // Agency - Rejected
        'C3': 'Yes',
        'D3': 'PTP',
        'E3': 'PTP',
        'F3': '2025/12/26',
        'G3': ptpAmount,
        'I3': 'Rejected Agency agent',

    
        'A4': 'DMI0009701003',
        'B4': '787868',      // Staff - Approved
        'C4': 'Yes',
        'D4': 'PTP',
        'E4': 'PTP',
        'F4': '2025/12/26',
        'G4': ptpAmount,
        'I4': 'Approved Staff agent',

    
        'A5': 'DMI0009701004',
        'B5': '2003',        // Staff - Pending Approval
        'C5': 'Yes',
        'D5': 'PTP',
        'E5': 'PTP',
        'F5': '2025/12/26',
        'G5': ptpAmount,
        'I5': 'Pending Staff agent'
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

      // ---------------- Upload & Process ----------------
      trailpage.bulkupload_failed_003();

     
       

    });
  });
});
