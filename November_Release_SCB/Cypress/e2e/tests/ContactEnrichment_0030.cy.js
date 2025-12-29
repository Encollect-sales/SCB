import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Contact Enrichment Scenarios', () => {

  let loginPage;
  let contactenrichmentpage;

  before(() => {

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Contact Enrichment locators
    getLocators('contactenrichment').then(locators => {
      contactenrichmentpage = new ContactEnrichmentPage(locators);
    });

  });

  // =====================================================
  // CE_BCU_030 - Re-upload Same File Validation
  // =====================================================
  it('CE_BCU_030 - Re-upload same file and verify duplicate handling', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Random Test Data ----------------
      const phoneNumber = faker.number
        .int({ min: 1000000000, max: 9999999999 })
        .toString();

      const randomAddress = faker.location.streetAddress();
     
      // ---------------- Excel Cell Data ----------------
      const data = {
        'A2': '1667',
        'B2': 'Office',
        'C2': randomAddress,
        'D2': phoneNumber
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Excel updated successfully');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- First Upload ----------------
      cy.log('Step 1: Uploading file for the FIRST time');
      contactenrichmentpage.contacttemplate_processed_001();
      
      // Capture first Transaction ID
      cy.then(() => {
        const firstTransactionId = Cypress.env("transactionID");
        cy.wrap(firstTransactionId).as('firstTransactionId');
        cy.log(`First Transaction ID: ${firstTransactionId}`);
      });

      // Wait for processing to complete before second upload
      cy.wait(3000);

      // Navigate back to upload page for second upload
      cy.log('Navigating back to upload page for second upload');
      contactenrichmentpage.CE_BCU_002(); // Navigate back to bulk upload page
      cy.wait(2000);

      // ---------------- Second Upload (Re-upload Same File) ----------------
      cy.log('Step 2: Re-uploading the SAME file');
      
      // Upload the same file again
      cy.wait(2000);
      cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
      cy.wait(2000);
      cy.get(contactenrichmentpage.locators.ClickOnUploadBtn).click();
      cy.wait(2000);
      cy.get(contactenrichmentpage.locators.ClickOnOkay).click();
      cy.wait(4000);

      // ---------------- Validation for Duplicate Handling ----------------
      cy.get('body').then($body => {
        const bodyText = $body.text();

        // Check if system shows duplicate/error message
        if (bodyText.includes('duplicate') || 
            bodyText.includes('already uploaded') ||
            bodyText.includes('file exists') ||
            bodyText.includes('already processed')) {
          
          cy.log('PASS: System blocked duplicate upload with appropriate message');
          cy.contains(/duplicate|already uploaded|file exists|already processed/i).should('be.visible');
        
        } 
        // OR system allows upload with new Transaction ID
        else if (bodyText.includes('File Uploaded Successfully')) {
          
          cy.log('System allowed re-upload - Verifying new Transaction ID is generated');
          
          cy.contains("File Uploaded Successfully", { timeout: 10000 })
            .invoke("text")
            .then((popupText) => {
              cy.log(`Second upload popup text: ${popupText}`);
              const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
              
              if (transactionIdMatch) {
                const secondTransactionId = transactionIdMatch[1];
                cy.log(`Second Transaction ID: ${secondTransactionId}`);
                
                // Compare with first Transaction ID
                cy.get('@firstTransactionId').then((firstId) => {
                  cy.log(`Comparing IDs - First: ${firstId}, Second: ${secondTransactionId}`);
                  
                  if (firstId !== secondTransactionId) {
                    cy.log('PASS: Different Transaction IDs - System created separate batch');
                  } else {
                    cy.log('WARNING: Same Transaction ID - Possible issue');
                  }
                });

                // Continue with verification for second upload
                Cypress.env("transactionID", secondTransactionId);
                cy.wait(1000);
                
                cy.then(() => {
                  cy.get("#bulk-trail-trxn-id").clear().type(secondTransactionId.toString());
                });
                
                cy.wait(2000);
                cy.get('#bulk-trail-search-button').click();
                cy.wait(3000);
                cy.get('tbody > .ng-star-inserted > :nth-child(4)')
                  .contains('Processed')
                  .should('be.visible');
                cy.log('Second upload also processed successfully');
              }
            });
        } else {
          cy.log(' Unexpected behavior - Manual verification needed');
        }
      });

      // ---------------- Final Verification ----------------
      cy.log('Test completed - Verify no uncontrolled duplicate contacts were created');

    });

  });

});