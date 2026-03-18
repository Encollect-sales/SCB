import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_030 - Re-upload Same File Validation', () => {

  let loginPage;
  let contactenrichmentpage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('contactenrichment').then(locators => {
      contactenrichmentpage = new ContactEnrichmentPage(locators);
    });
  });

  it('Upload same file twice and validate duplicate behaviour', () => {

    getTestData('loginData', 'login2').then(user => {

      // LOGIN
      loginPage.login(user.Companyname, user.email, user.password);

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver')) return false;
      });

      // Open bulk upload page
      contactenrichmentpage.CE_BCU_002();

      // Download template ONLY ONCE
      contactenrichmentpage.downloadTemplate();

      // ---------- Generate Random Excel Data ----------
      const phoneNumber = faker.number.int({ min: 1000000000, max: 9999999999 }).toString();
      const randomAddress = faker.location.streetAddress();

      const data = {
        'A2': '1667',
        'B2': 'Office',
        'C2': randomAddress,
        'D2': phoneNumber
      };

      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: 'Sheet1',
        data: data
      });

      // Move to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ================= FIRST UPLOAD =================
      cy.log("FIRST UPLOAD");
      contactenrichmentpage.uploadBulkFileAndCaptureTxn().then((firstTxnId) => {

        cy.wrap(firstTxnId).as('firstTxnId');
        contactenrichmentpage.verifyFileProcessed(firstTxnId);

      });

      // Go back to upload page (NO download again)
      cy.wait(3000);
      contactenrichmentpage.CE_BCU_002();

      // ================= SECOND UPLOAD (SAME FILE) =================
      cy.log("SECOND UPLOAD - SAME FILE");

      contactenrichmentpage.uploadBulkFileAndCaptureTxn().then((secondTxnId) => {

        cy.get('@firstTxnId').then(firstTxnId => {

          cy.log("First Txn ID: " + firstTxnId);
          cy.log("Second Txn ID: " + secondTxnId);

          if(firstTxnId === secondTxnId){
            cy.log("System blocked duplicate upload or reused batch");
          }else{
            cy.log("System allowed re-upload and created new batch");
          }

        });

        contactenrichmentpage.verifyFileProcessed(secondTxnId);
      });

    });

  });

});
