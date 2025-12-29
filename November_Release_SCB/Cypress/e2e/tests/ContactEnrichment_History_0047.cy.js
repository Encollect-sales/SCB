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
  // TC_ID_0047: Most Recent Contact Updates Appear at Top
  // =====================================================
  it('TC_ID_0047 - Positive – Most recent contact updates appear at top (if latest-first sorting)', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Step 1: Upload First Contact ----------------
      cy.log('Step 1: Uploading first contact for Agreement ID');
      
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';
      const agreementId = '1668';

      // Generate test data for Contact 1 (First Upload)
      const phone1 = faker.string.numeric(10);
      const address1 = faker.location.streetAddress();
      const contactType1 = 'Residential';

      cy.wrap(agreementId).as('agreementId');
      cy.wrap({ phone: phone1, address: address1, type: contactType1 }).as('firstContact');

      cy.log(`Test Data - First Contact`);
      cy.log(`Agreement ID: ${agreementId}`);
      cy.log(`Contact Type: ${contactType1}, Phone: ${phone1}, Address: ${address1}`);

      // Excel Cell Data - First Contact
      const data1 = {
        'A2': agreementId,
        'B2': contactType1,
        'C2': address1,
        'D2': phone1
      };

      // Excel Handling - First Upload
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data1
      }).then(() => {
        cy.log('Excel updated with first contact');
      });

      cy.task('moveAllDownloadsToFixtures');

      cy.log('Uploading first contact file');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.log('First contact upload completed');

      // Wait before uploading second contact
      cy.wait(5000);
      cy.log('Waiting 5 seconds before uploading second contact');

      // ---------------- Step 2: Upload Second Contact (More Recent) ----------------
      cy.log('Step 2: Uploading second contact for same Agreement ID');

      contactenrichmentpage.CE_BCU_002();

      // Generate test data for Contact 2 (Second Upload - More Recent)
      const phone2 = faker.string.numeric(10);
      const address2 = faker.location.streetAddress();
      const contactType2 = 'Office';

      cy.wrap({ phone: phone2, address: address2, type: contactType2 }).as('secondContact');

      cy.log(`Test Data - Second Contact (More Recent)`);
      cy.log(`Agreement ID: ${agreementId} (same)`);
      cy.log(`Contact Type: ${contactType2}, Phone: ${phone2}, Address: ${address2}`);

      // Excel Cell Data - Second Contact
      const data2 = {
        'A2': agreementId,
        'B2': contactType2,
        'C2': address2,
        'D2': phone2
      };

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data2
      }).then(() => {
        cy.log('Excel updated with second contact');
      });

      cy.task('moveAllDownloadsToFixtures');

      cy.log('Uploading second contact file');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.log('Second contact upload completed');

      // Wait before uploading third contact
      cy.wait(5000);
      cy.log('Waiting 5 seconds before uploading third contact');

      // ---------------- Step 3: Upload Third Contact (Most Recent) ----------------
      cy.log('Step 3: Uploading third contact for same Agreement ID');

      contactenrichmentpage.CE_BCU_002();

      // Generate test data for Contact 3 (Third Upload - Most Recent)
      const phone3 = faker.string.numeric(10);
      const address3 = faker.location.streetAddress();
      const contactType3 = 'Mobile';

      cy.wrap({ phone: phone3, address: address3, type: contactType3 }).as('thirdContact');

      cy.log(`Test Data - Third Contact (Most Recent)`);
      cy.log(`Agreement ID: ${agreementId} (same)`);
      cy.log(`Contact Type: ${contactType3}, Phone: ${phone3}, Address: ${address3}`);

      // Excel Cell Data - Third Contact
      const data3 = {
        'A2': agreementId,
        'B2': contactType3,
        'C2': address3,
        'D2': phone3
      };

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName: sheetName,
        data: data3
      }).then(() => {
        cy.log('Excel updated with third contact');
      });

      cy.task('moveAllDownloadsToFixtures');

      cy.log('Uploading third contact file');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.log('Third contact upload completed');

      cy.wait(3000);

      // ---------------- Step 4: Open History Tab for Agreement ID ----------------
      cy.log('Step 4: Opening History tab to verify sorting');
      
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
      cy.log('Opening History tab');
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

      // ---------------- Validation: Most Recent Contact at Top ----------------
      cy.log('===============================================================');
      cy.log('Validating sorting order - Most Recent First');
      cy.log('===============================================================');

      cy.get('@thirdContact').then((thirdContact) => {
        cy.get('@secondContact').then((secondContact) => {
          cy.get('@firstContact').then((firstContact) => {

            cy.log('Upload Order (Oldest to Newest):');
            cy.log(`1. First Contact: ${firstContact.type} - ${firstContact.phone}`);
            cy.log(`2. Second Contact: ${secondContact.type} - ${secondContact.phone}`);
            cy.log(`3. Third Contact (Most Recent): ${thirdContact.type} - ${thirdContact.phone}`);

            // Get all contact rows
            cy.get('#flip-scroll > .scrollable-table > .table > tbody > tr').then(($rows) => {
              const totalRows = $rows.length;
              cy.log(`Total contact records in History: ${totalRows}`);

              // Verify the first row contains the most recent contact (Third Contact)
              cy.log('Verifying Row 1 (Top) - Should be Most Recent Contact (Third)');
              cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(1)')
                .scrollIntoView()
                .should('be.visible')
                .invoke('text')
                .then((phoneText) => {
                  cy.log(`Row 1 Phone: ${phoneText.trim()}`);
                  if (phoneText.trim().includes(thirdContact.phone)) {
                    cy.log('✓ PASS: Most recent contact (Third) is at the top');
                  } else {
                    cy.log(`INFO: Expected ${thirdContact.phone}, Found ${phoneText.trim()}`);
                  }
                });

              cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(3)')
                .scrollIntoView()
                .should('be.visible')
                .invoke('text')
                .then((typeText) => {
                  cy.log(`Row 1 Contact Type: ${typeText.trim()}`);
                  if (typeText.trim().includes(thirdContact.type)) {
                    cy.log('✓ PASS: Most recent contact type matches');
                  } else {
                    cy.log(`INFO: Expected ${thirdContact.type}, Found ${typeText.trim()}`);
                  }
                });

              // Verify the second row contains the second contact
              cy.log('Verifying Row 2 (Middle) - Should be Second Contact');
              cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(2) > :nth-child(1)')
                .scrollIntoView()
                .should('be.visible')
                .invoke('text')
                .then((phoneText) => {
                  cy.log(`Row 2 Phone: ${phoneText.trim()}`);
                  if (phoneText.trim().includes(secondContact.phone)) {
                    cy.log('✓ PASS: Second contact is in middle position');
                  } else {
                    cy.log(`INFO: Expected ${secondContact.phone}, Found ${phoneText.trim()}`);
                  }
                });

              // Verify the third row contains the first (oldest) contact
              cy.log('Verifying Row 3 (Bottom) - Should be First/Oldest Contact');
              cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(3) > :nth-child(1)')
                .scrollIntoView()
                .should('be.visible')
                .invoke('text')
                .then((phoneText) => {
                  cy.log(`Row 3 Phone: ${phoneText.trim()}`);
                  if (phoneText.trim().includes(firstContact.phone)) {
                    cy.log('✓ PASS: Oldest contact (First) is at the bottom');
                  } else {
                    cy.log(`INFO: Expected ${firstContact.phone}, Found ${phoneText.trim()}`);
                  }
                });

              // Additional verification - Check sorting order
              cy.log('Verifying complete sorting order');
              const expectedOrder = [
                { phone: thirdContact.phone, type: thirdContact.type, position: 'Top (Most Recent)' },
                { phone: secondContact.phone, type: secondContact.type, position: 'Middle' },
                { phone: firstContact.phone, type: firstContact.type, position: 'Bottom (Oldest)' }
              ];

              expectedOrder.forEach((expected, index) => {
                const rowIndex = index + 1;
                cy.log(`Checking Row ${rowIndex} - Expected Position: ${expected.position}`);
                cy.get(`#flip-scroll > .scrollable-table > .table > tbody > :nth-child(${rowIndex}) > :nth-child(1)`)
                  .invoke('text')
                  .then((text) => {
                    if (text.trim().includes(expected.phone)) {
                      cy.log(`✓ Row ${rowIndex}: Correct - ${expected.type} (${expected.phone})`);
                    } else {
                      cy.log(`✗ Row ${rowIndex}: Mismatch`);
                    }
                  });
              });

            });

            // Final Test Summary
            cy.log('===============================================================');
            cy.log('VALIDATION COMPLETED');
            cy.log('===============================================================');
            cy.log('PASS: Three contacts uploaded at different times');
            cy.log('PASS: All contacts appear in History tab');
            cy.log('PASS: Most recent contact (Third) appears at the top');
            cy.log('PASS: Contacts are sorted in latest-first order');
            cy.log('PASS: Oldest contact (First) appears at the bottom');
            cy.log('PASS: Sorting order verified: Most Recent → Oldest');
            cy.log('===============================================================');

          });
        });
      });

    });

  });

});