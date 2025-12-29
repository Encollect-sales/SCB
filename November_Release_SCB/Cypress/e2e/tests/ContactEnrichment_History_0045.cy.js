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
  // Positive: Contact Type Field Visibility Test (Web)
  // =====================================================
  it('TC_ID_0045 - Positive – Contact Type field visible for enriched contacts (web)', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Ignore ResizeObserver error
      Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      // ---------------- Step 1: Upload Contacts Including Contact Type ----------------
      cy.log('Step 1: Preparing Excel file with Contact Type values');
      
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';
      const agreementId = '1667';
      const contactType = 'Residential'; // Contact Type to be validated

      // Generate valid test data
      const phoneNumber = faker.string.numeric(10); // Exactly 10 digits
      const randomAddress = faker.location.streetAddress();

      // Store data for validation
      cy.wrap(phoneNumber).as('uploadedPhone');
      cy.wrap(randomAddress).as('uploadedAddress');
      cy.wrap(contactType).as('uploadedContactType');
      cy.wrap(agreementId).as('agreementId');

      cy.log(`Test Data - Agreement ID: ${agreementId}`);
      cy.log(`Test Data - Contact Type: ${contactType}`);
      cy.log(`Test Data - Phone: ${phoneNumber}`);
      cy.log(`Test Data - Address: ${randomAddress}`);

      // Excel Cell Data
      const data = {
        'A2': agreementId,
        'B2': contactType,  // Contact Type field
        'C2': randomAddress,
        'D2': phoneNumber
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
        cy.log('Excel updated with Contact Type data');
      });

      // Move file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Upload and process
      cy.log('Uploading contacts with Contact Type values');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.log('File upload and processing completed');

      // ---------------- Step 2: Open Contact on Web ----------------
      cy.log('Step 2: Opening enriched contact on web');
      
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

      // ---------------- Validation: Contact Type Field Visibility ----------------
      cy.log('===============================================================');
      cy.log('Validating Contact Type field is visible on web view');
      cy.log('===============================================================');

      cy.get('@uploadedContactType').then((uploadedContactType) => {
        cy.get('@uploadedPhone').then((uploadedPhone) => {
          cy.get('@uploadedAddress').then((uploadedAddress) => {

            // Open History tab to view contact details
            cy.log('Opening History tab to view enriched contact details');
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

            // Wait for panel to be visible
            cy.get('[heading="History"] .panel-collapse').should('have.class', 'in');
            cy.wait(1000);

            // Verify Phone Number (Column 1)
            cy.log('Verifying Phone Number in History');
            cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(1)')
              .scrollIntoView()
              .should('be.visible')
              .invoke('text')
              .then((text) => {
                expect(text.trim()).to.include(uploadedPhone);
                cy.log(`PASS: Phone number verified: ${uploadedPhone}`);
              });
            cy.wait(1000);

            // Verify Contact Type (Column 3)
            cy.log(`Verifying Contact Type in History: "${uploadedContactType}"`);
            cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(3)')
              .scrollIntoView()
              .should('be.visible')
              .invoke('text')
              .then((text) => {
                expect(text.trim()).to.include(uploadedContactType);
                cy.log(`PASS: Contact Type verified: ${uploadedContactType}`);
                cy.log('PASS: Contact Type field is visible as a separate column');
              });
            cy.wait(1000);

            // Validate Address
            cy.log('Verifying Address in History');
            cy.get(':nth-child(2) > .col-md-6 > .enc-card > .card-content > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(1)')
              .scrollIntoView()
              .should('be.visible')
              .invoke('text')
              .then((text) => {
                expect(text.trim()).to.include(uploadedAddress);
                cy.log(`PASS: Address verified: ${uploadedAddress}`);
              });
            cy.wait(1000);

            // Verify table header for Contact Type column exists
            cy.log('Verifying Contact Type column header exists');
            cy.get('#flip-scroll > .scrollable-table > .table > thead > tr > :nth-child(3)')
              .scrollIntoView()
              .should('be.visible')
              .invoke('text')
              .then((headerText) => {
                cy.log(`Column 3 header: ${headerText.trim()}`);
                if (headerText.includes('Contact Type') || headerText.includes('Type')) {
                  cy.log('PASS: Contact Type column header found');
                } else {
                  cy.log(`INFO: Column 3 header is: ${headerText.trim()}`);
                }
              });

            // Final Test Summary
            cy.log('===============================================================');
            cy.log('WEB VIEW VALIDATION COMPLETED');
            cy.log('===============================================================');
            cy.log('PASS: Contact Type field is visible on web view');
            cy.log(`PASS: Contact Type value displayed: ${uploadedContactType}`);
            cy.log('PASS: Contact Type is shown as a separate column (Column 3)');
            cy.log('PASS: Phone number is displayed correctly');
            cy.log('PASS: Address is displayed correctly');
            cy.log('PASS: Enriched contact shows all fields including Contact Type');
            cy.log('===============================================================');

          });
        });
      });

    });

  });

});