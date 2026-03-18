import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');


// ======================================================
// ⭐ HELPER → VERIFY MASKED PHONE
// ======================================================
function verifyMaskedPhoneInRow(rowIndex, originalPhone) {

  const firstTwo = originalPhone.slice(0, 2);
  const lastTwo = originalPhone.slice(-2);

  cy.get(`#flip-scroll tbody tr:nth-child(${rowIndex}) td:nth-child(1)`)
    .invoke('text')
    .then((text) => {
      const phoneUI = text.replace(/\s/g, '');
      const regex = new RegExp(`^${firstTwo}.*${lastTwo}$`);
      expect(phoneUI).to.match(regex);
    });
}



describe('Contact Enrichment Scenarios', () => {

  let loginPage;
  let contactenrichmentpage;

  before(() => {
    getLocators('loginPage').then(locators => loginPage = new LoginPage(locators));
    getLocators('contactenrichment').then(locators => contactenrichmentpage = new ContactEnrichmentPage(locators));
  });



  it('TC_ID_0047 - Latest contact appears at top', () => {

    getTestData('loginData', 'login2').then(user => {

      // LOGIN
      loginPage.login(user.Companyname, user.email, user.password);

      Cypress.on('uncaught:exception', () => false);

      const agreement1 = '68190000222635';
      const agreement2 = '19680000183219';
      const agreement3 = '1667';   // third random id

      const sheetName = 'Sheet1';
      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'BulkContactTemplate.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);



      // ======================================================
      // UPLOAD 1 → AGREEMENT 1
      // ======================================================
      const phone1 = faker.string.numeric(10);
      const type1 = 'Residential';
      const address1 = faker.location.streetAddress();
      cy.wrap({ phone: phone1, type: type1 }).as('contact1');

      contactenrichmentpage.CE_BCU_002();

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data: { A2: agreement1, B2: type1, C2: address1, D2: phone1 }
      });

      cy.task('moveAllDownloadsToFixtures');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.wait(5000);



      // ======================================================
      // UPLOAD 2 → AGREEMENT 2
      // ======================================================
      const phone2 = faker.string.numeric(10);
      const type2 = 'Office';
      const address2 = faker.location.streetAddress();
      cy.wrap({ phone: phone2, type: type2 }).as('contact2');

      contactenrichmentpage.CE_BCU_002();

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data: { A2: agreement2, B2: type2, C2: address2, D2: phone2 }
      });

      cy.task('moveAllDownloadsToFixtures');
      contactenrichmentpage.contacttemplate_processed_001();
      cy.wait(5000);



      // ======================================================
      // UPLOAD 3 → AGREEMENT 3 (MOST RECENT)
      // ======================================================
      const phone3 = faker.string.numeric(10);
      const type3 = 'Communication';
      const address3 = faker.location.streetAddress();
      cy.wrap({ phone: phone3, type: type3 }).as('contact3');

      contactenrichmentpage.CE_BCU_002();

      cy.task('updateBulkContactTemplateCell', {
        filePath: sourceFilePath,
        sheetName,
        data: { A2: agreement3, B2: type3, C2: address3, D2: phone3 }
      });

      cy.task('moveAllDownloadsToFixtures');
      contactenrichmentpage.contacttemplate_processed_001();



      // ======================================================
      // 🔎 SEARCH USING ANY AGREEMENT (USE MOST RECENT)
      // ======================================================
      cy.get('.account-search > a').click({force:true});
      cy.get('#search-account-number').type(agreement3);
      cy.get('#search-submit-button').click({force:true});

      cy.get("tbody tr td:nth-child(4) a").click({force:true});
      cy.get('#toggleButton').click({force:true});
      cy.contains("Customer Contact Hub").click({force:true});

      cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
      cy.get('[heading="History"] .panel-collapse').should('have.class','in');



      // ======================================================
      // ⭐ VALIDATION → LATEST FIRST
      // ======================================================
      cy.get('@contact3').then((contact3) => {

        verifyMaskedPhoneInRow(1, contact3.phone);
        cy.get('#flip-scroll tbody tr:nth-child(1) td:nth-child(3)')
          .should('contain', contact3.type);

        cy.log('Latest contact is at top');
      });

    });

  });

});
