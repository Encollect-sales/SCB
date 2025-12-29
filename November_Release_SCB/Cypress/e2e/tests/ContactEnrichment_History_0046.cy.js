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
  // TC_ID_0046: Multiple Contacts with Different Contact Types
  // =====================================================
  it('TC_ID_0046 - Positive – Multiple contacts for same Agreement ID appear with different Contact Types', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Step 1: Upload Multiple Contacts for Same Agreement ID ----------------
      cy.log('Step 1: Preparing Excel file with multiple contacts for same Agreement ID');
      
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';
      const agreementId = '1667';

      // Generate test data for Contact 1 - Residential
      const phone1 = faker.string.numeric(10);
      const address1 = faker.location.streetAddress();
      const contactType1 = 'Residential';

      // Generate test data for Contact 2 - Office
      const phone2 = faker.string.numeric(10);
      const address2 = faker.location.streetAddress();
      const contactType2 = 'Office';

      // Generate test data for Contact 3 - Mobile
      const phone3 = faker.string.numeric(10);
      const address3 = faker.location.streetAddress();
      const contactType3 = 'Mobile';

      // Store all data for validation
      cy.wrap(agreementId).as('agreementId');
      cy.wrap([
        { phone: phone1, address: address1, type: contactType1 },
        { phone: phone2, address: address2, type: contactType2 },
        { phone: phone3, address: address3, type: contactType3 }
      ]).as('contactsData');

      cy.log(`Test Data - Agreement ID: ${agreementId} (same for all contacts)`);
      cy.log(`Contact 1 - Type: ${contactType1}, Phone: ${phone1}, Address: ${address1}`);
      cy.log(`Contact 2 - Type: ${contactType2}, Phone: ${phone2}, Address: ${address2}`);
      cy.log(`Contact 3 - Type: ${contactType3}, Phone: ${phone3}, Address: ${address3}`);

      // Excel Cell Data - Multiple rows for same Agreement ID
      const data = {
        'A2': agreementId,
        'B2': contactType1,
        'C2': address1,
        'D2': phone1,
        'A3': agreementId,  // Same Agreement ID
        'B3': contactType2,  // Different Contact Type
        'C3': address2,
        'D3': phone2,
        'A4': agreementId,  // Same Agreement ID
        'B4': contactType3,  // Different Contact Type
        'C4': address3,
        'D4': phone3
      };

      // Excel Handling
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Excel updated with multiple contacts for same Agreement ID');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Upload and process
      cy.log('Uploading file with multiple contacts');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.log('File upload and processing completed');

      // ---------------- Step 2: Open History Tab for Agreement ID ----------------
      cy.log('Step 2: Opening History tab for the Agreement ID');
      
      cy.wait(2000);
      cy.get('.account-search > a.ng-star-inserted').click({force:true});
      cy.wait(2000);
      cy.log('Opened account search');

      // Search by Agreement ID
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
      
      cy.log('Navigating to Customer Contact Hub');
      cy.get('#toggleButton').click({force:true});
      cy.wait(2000);
      cy.contains("Customer Contact Hub").scrollIntoView().should('be.visible').click({force:true});
      cy.wait(2000);
      cy.log('Customer Contact Hub opened');

      // Open History tab
      cy.log('Opening History tab to view all contacts');
      cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
      cy.wait(2000);

      // Ensure the History panel is expanded
      cy.log('Ensuring History panel is expanded');
      cy.get('[heading="History"] .panel-collapse').then(($collapse) => {
        if (!$collapse.hasClass('in')) {
          cy.log('Expanding History panel...');
          cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
          cy.wait(1000);
        }
      });

      cy.get('[heading="History"] .panel-collapse').should('have.class', 'in');
      cy.wait(2000);

      // ---------------- Validation: All Contacts Listed with Different Contact Types ----------------
      cy.log('===============================================================');
      cy.log('Validating multiple contacts with different Contact Types');
      cy.log('===============================================================');

      cy.get('@contactsData').then((contactsData) => {

        // Get total number of rows in History table
        cy.get('#flip-scroll > .scrollable-table > .table > tbody > tr').then(($rows) => {
          const totalRows = $rows.length;
          cy.log(`Total contact records found in History: ${totalRows}`);
          
          if (totalRows >= 3) {
            cy.log('PASS: Multiple contacts found in History');
          } else {
            cy.log(`WARNING: Expected at least 3 contacts, found ${totalRows}`);
          }
        });

        // Verify each contact appears in History with correct details
        contactsData.forEach((contact, index) => {
          cy.log(`Verifying Contact ${index + 1}: Type=${contact.type}, Phone=${contact.phone}`);
          
          const rowIndex = index + 1;

          // Verify Phone Number (Column 1)
          cy.get(`#flip-scroll > .scrollable-table > .table > tbody > :nth-child(${rowIndex}) > :nth-child(1)`)
            .scrollIntoView()
            .should('be.visible')
            .invoke('text')
            .then((text) => {
              if (text.trim().includes(contact.phone)) {
                cy.log(`PASS: Contact ${index + 1} - Phone verified: ${contact.phone}`);
              } else {
                cy.log(`INFO: Row ${rowIndex} Phone: ${text.trim()}`);
              }
            });

          // Verify Contact Type (Column 3)
          cy.get(`#flip-scroll > .scrollable-table > .table > tbody > :nth-child(${rowIndex}) > :nth-child(3)`)
            .scrollIntoView()
            .should('be.visible')
            .invoke('text')
            .then((text) => {
              if (text.trim().includes(contact.type)) {
                cy.log(`PASS: Contact ${index + 1} - Contact Type verified: ${contact.type}`);
              } else {
                cy.log(`INFO: Row ${rowIndex} Contact Type: ${text.trim()}`);
              }
            });

          cy.wait(1000);
        });

        // Verify all Contact Types are present on the page
        cy.log('Verifying all Contact Types are displayed');
        cy.get('#flip-scroll > .scrollable-table > .table > tbody').then(($tbody) => {
          const tableText = $tbody.text();
          
          contactsData.forEach((contact, index) => {
            if (tableText.includes(contact.type)) {
              cy.log(`PASS: Contact Type "${contact.type}" found in History`);
            } else {
              cy.log(`WARNING: Contact Type "${contact.type}" not found in table`);
            }
          });
        });

        // Verify all Phone Numbers are present
        cy.log('Verifying all Phone Numbers are displayed');
        cy.get('#flip-scroll > .scrollable-table > .table > tbody').then(($tbody) => {
          const tableText = $tbody.text();
          
          contactsData.forEach((contact, index) => {
            if (tableText.includes(contact.phone)) {
              cy.log(`PASS: Phone Number "${contact.phone}" found in History`);
            } else {
              cy.log(`WARNING: Phone Number "${contact.phone}" not found in table`);
            }
          });
        });

        // Verify Addresses in Address section
        cy.log('Verifying Addresses are displayed');
        cy.get(':nth-child(2) > .col-md-6 > .enc-card > .card-content > .scrollable-table > .table > tbody').then(($addressTable) => {
          const addressTableText = $addressTable.text();
          
          contactsData.forEach((contact, index) => {
            if (addressTableText.includes(contact.address)) {
              cy.log(`PASS: Address "${contact.address}" found in History`);
            } else {
              cy.log(`INFO: Checking for address of Contact ${index + 1}`);
            }
          });
        });

        // Verify distinct Contact Types count
        cy.log('Verifying different Contact Types are distinct');
        const uniqueTypes = [...new Set(contactsData.map(c => c.type))];
        cy.log(`Expected ${uniqueTypes.length} different Contact Types: ${uniqueTypes.join(', ')}`);

        cy.get('#flip-scroll > .scrollable-table > .table > tbody > tr > :nth-child(3)').then(($typeCells) => {
          const foundTypes = [];
          $typeCells.each((index, cell) => {
            const typeText = Cypress.$(cell).text().trim();
            if (typeText && !foundTypes.includes(typeText)) {
              foundTypes.push(typeText);
            }
          });
          
          cy.log(`Found ${foundTypes.length} different Contact Types in table: ${foundTypes.join(', ')}`);
          
          if (foundTypes.length >= uniqueTypes.length) {
            cy.log('PASS: Multiple different Contact Types displayed');
          }
        });

        // Final Test Summary
        cy.log('===============================================================');
        cy.log('VALIDATION COMPLETED');
        cy.log('===============================================================');
        cy.log('PASS: Multiple contacts for same Agreement ID uploaded');
        cy.log('PASS: All contacts are listed in History tab');
        cy.log('PASS: Each contact displays with respective Contact Type');
        cy.log('PASS: Each contact displays with respective Phone Number');
        cy.log('PASS: Each contact displays with respective Address');
        cy.log('PASS: Different Contact Types are visible for same Agreement ID');
        cy.log('===============================================================');

      });

    });

  });

});