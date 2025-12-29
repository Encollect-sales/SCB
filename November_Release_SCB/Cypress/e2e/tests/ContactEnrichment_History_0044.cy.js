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
  // TC_ID_0044 - Negative Test: Failed Contacts Don't Appear in History
  // =====================================================
  it('TC_ID_0044 - Negative – Contacts from failed upload do not appear in History', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Step 1: Prepare File with Invalid Data ----------------
      cy.log('Step 1: Preparing Excel file with INVALID contact data (should fail validation)');
      
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';
      const agreementId = '1667';

      // Generate INVALID test data that will fail validation
      const invalidPhone = `${faker.number.int({ min: 10, max: 99 })}${faker.string.alpha(2)}${faker.number.int({ min: 10, max: 99 })}@${faker.number.int({ min: 100, max: 999 })}`;
      const invalidAddress = faker.string.fromCharacters('@#$%^&*', 8);

      // Store invalid data for validation
      cy.wrap(invalidPhone).as('invalidPhone');
      cy.wrap(invalidAddress).as('invalidAddress');
      cy.wrap(agreementId).as('agreementId');

      cy.log(`Invalid Test Data - Agreement ID: ${agreementId}`);
      cy.log(`Invalid Phone: ${invalidPhone} (contains letters and special chars)`);
      cy.log(`Invalid Address: ${invalidAddress} (only special characters)`);

      // Excel Cell Data with INVALID values
      const data = {
        'A2': agreementId,
        'B2': 'Residential',
        'C2': invalidAddress,   // ❌ Invalid address format
        'D2': invalidPhone      // ❌ Invalid phone number format
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
        cy.log('Excel updated with INVALID data');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // ---------------- Upload File and Verify Failure ----------------
      cy.log(' Uploading file with invalid data (expecting validation failure)');
      contactenrichmentpage.contacttemplate_failed();
      cy.log('File processed - validation failures expected');

      // ---------------- Step 2: Navigate to History for Failed Agreement ID ----------------
      cy.log('Step 2: Navigating to Customer Contact Hub for failed Agreement ID');
      
      cy.wait(2000);
      cy.get('.account-search > a.ng-star-inserted').click({force:true});
      cy.wait(2000);
      cy.log('Opened account search');

      // Search by Agreement ID
      cy.log('Searching for Agreement ID from failed row');
      cy.get('@agreementId').then((agreementId) => {
        cy.log(`Searching for Agreement ID: ${agreementId}`);
        cy.get('#search-account-number').clear().type(agreementId);
        cy.wait(2000);
        cy.get('#search-submit-button').click({force:true});
        cy.wait(2000);
      });
      
      cy.log('Opening account details');
      cy.get("tbody tr[class='ng-star-inserted'] td:nth-child(4) a:nth-child(1)").click({force:true});
      cy.wait(2000);
      
      cy.log('Opening Customer Contact Hub');
      cy.get('#toggleButton').click({force:true});
      cy.wait(2000);
      cy.contains("Customer Contact Hub").scrollIntoView().should('be.visible').click({force:true});
      cy.wait(2000);
      
      cy.log('Opening History tab');
      cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
      cy.wait(2000);

      // ---------------- Validation: Verify Failed Contacts DO NOT Appear ----------------
      cy.log('Step 3: Validating that FAILED contacts do NOT appear in History');

      cy.get('@invalidPhone').then((invalidPhone) => {
        cy.get('@invalidAddress').then((invalidAddress) => {
          
          // Verify Invalid Phone Number does NOT appear in History
          cy.log(`Verifying Invalid Phone does NOT appear: ${invalidPhone}`);
          cy.get('#flip-scroll > .scrollable-table > .table > tbody').then(($tbody) => {
            const phoneTableText = $tbody.text();
            
            if (phoneTableText.includes(invalidPhone)) {
              cy.log('FAIL: Invalid phone number found in History (should NOT be there)');
              expect(phoneTableText).to.not.include(invalidPhone);
            } else {
              cy.log('PASS: Invalid phone number NOT found in History (as expected)');
            }
          });
          cy.wait(2000);

          // Verify Invalid Address does NOT appear in History
          cy.log(`Verifying Invalid Address does NOT appear: ${invalidAddress}`);
          cy.get(':nth-child(2) > .col-md-6 > .enc-card > .card-content > .scrollable-table > .table > tbody').then(($tbody) => {
            const addressTableText = $tbody.text();
            
            if (addressTableText.includes(invalidAddress)) {
              cy.log('FAIL: Invalid address found in History (should NOT be there)');
              expect(addressTableText).to.not.include(invalidAddress);
            } else {
              cy.log('PASS: Invalid address NOT found in History (as expected)');
            }
          });
          cy.wait(2000);

          // Optional: Verify History is either empty or contains only old valid records
          cy.log('🔍 Checking History table state');
          cy.get('#flip-scroll > .scrollable-table > .table > tbody').then(($tbody) => {
            const rowCount = $tbody.find('tr').length;
            cy.log(`Number of records in History: ${rowCount}`);
            
            if (rowCount === 0) {
              cy.log('History is empty (no records found)');
            } else {
              cy.log('ℹHistory contains records, but failed upload data is not present');
            }
          });

          // Final Summary
          cy.log('═══════════════════════════════════════════════════════');
          cy.log('TEST PASSED: Negative validation successful');
          cy.log('Failed contacts do NOT appear in History');
          cy.log('Invalid phone number NOT found in History');
          cy.log('Invalid address NOT found in History');
          cy.log('Only successfully processed contacts appear in History');
          cy.log('═══════════════════════════════════════════════════════');

        });
      });

    });

  });

});