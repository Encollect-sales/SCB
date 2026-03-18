import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('CE_BCU_022 - All fields should be filled', () => {

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

  it('CE_BCU_0022 - Verify all allowed Contact Type values are accepted', () => {

    getTestData('loginData', 'login2').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(3000);

      // Step 2 & 3: Navigate to Bulk Contact Upload and download template
      contactenrichmentpage.CE_BCU_002();

      const sheetName = 'Sheet1';

      // ---------------- Test Data ----------------
      const mobileNumber = faker.number
        .int({ min: 6000000000, max: 9999999999 })
        .toString();
      const randomAddress = faker.location.streetAddress();  

      const data = {
        'A2': '1667',     // Agreement ID
        'B2': 'Office',     // Contact Type
        'C2': randomAddress,           // Address BLANK
        'D2': mobileNumber  // Mobile PRESENT
      };

      // ---------------- Excel Handling ----------------
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      // Update Excel
      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      }).then(() => {
        cy.log('Excel updated with Mobile only');
      });

      // Move updated file to fixtures
      cy.task('moveAllDownloadsToFixtures');

      // Step 4: Upload file
      contactenrichmentpage.contacttemplate_processed_001();
      cy.wait(5000);
      cy.get('.account-search > a.ng-star-inserted').click({force:true});
    cy.wait(2000);
    cy.get('#search-account-number').type('1667');
    cy.wait(2000);
    cy.get('#search-submit-button').click({force:true});
    cy.wait(2000);
    cy.get("tbody tr[class='ng-star-inserted'] td:nth-child(4) a:nth-child(1)").click({force:true});
    cy.wait(2000);
    cy.get('#toggleButton').click({force:true});
    cy.wait(2000);
    cy.contains("Customer Contact Hub").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(8000);
    cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
    cy.wait(2000);
   
const firstTwo = mobileNumber.slice(0, 2)
const lastTwo = mobileNumber.slice(-2)

cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(1) > [style="text-wrap-mode: nowrap; position: relative;"] > span')
  .scrollIntoView()
  .invoke('text')
  .then((rawText) => {

    const text = rawText.replace(/\s/g, '')   // remove spaces + new lines
    cy.log('UI Masked Mobile:', text)

    expect(text).to.match(new RegExp(`^${firstTwo}.*${lastTwo}$`))
  })

cy.wait(2000);
 cy.get(':nth-child(2) > .col-md-6 > .enc-card > .card-content > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(1)').scrollIntoView().contains(randomAddress).should('be.visible');
  cy.wait(2000);
 
  cy.get('#flip-scroll > .scrollable-table > .table > tbody > :nth-child(1) > :nth-child(2)')
  .invoke('text')
  .then(text => {
    const uiTime = new Date(text.trim());
    const now = new Date();

    // Check same date
    expect(uiTime.toDateString()).to.eq(now.toDateString());

    // Check time difference within 4 minutes (240000 ms)
    const diff = Math.abs(uiTime.getTime() - now.getTime());
    expect(diff).to.be.lessThan(240000);
  });

 cy.wait(2000);

     

    });
  });

});
