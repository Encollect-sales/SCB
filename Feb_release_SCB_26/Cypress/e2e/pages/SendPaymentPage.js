import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class SendPaymentPage {
  constructor(locators) {
    this.locators = locators;
  }
  sendpayment01(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get("#search-submit-button").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get('#selectOption').click({force:true});
    cy.wait(5000);
    cy.get(this.locators.send_payment_link).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.razor_pay).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.enter_amount).clear().type('500');
    cy.wait(2000);
    cy.get("#aend").click({force:true});
    cy.wait(2000);
     // ✅ Capture reference number
  cy.contains(/Payment Link sent successfully with reference number:\s*\d+/)
    .should('be.visible')
    .invoke('text')
    .then((text) => {

      const refNumber = text.match(/\d+/)[0];
      cy.log('Captured Ref Number: ' + refNumber);
      cy.wait(2000);
    cy.get('#toggleButton').click();
      cy.wait(2000);
      cy.get(this.locators.send_payment).click();
      cy.wait(2000);
      cy.get('tbody > :nth-child(1) > :nth-child(2)', { timeout: 10000 })
        .should('be.visible')
        .and('contain', refNumber);
    });


  }
  sendpayment02(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get("#search-submit-button").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.selectoption).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.send_payment_link).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.insta_pay).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.enter_amount).clear().type('500');
    cy.wait(2000);
    cy.get("#aend").click({force:true});
    cy.wait(2000);
     // ✅ Capture reference number
  cy.contains(/Payment Link sent successfully with reference number:\s*\d+/)
    .should('be.visible')
    .invoke('text')
    .then((text) => {

      const refNumber = text.match(/\d+/)[0];
      cy.log('Captured Ref Number: ' + refNumber);
      cy.wait(2000);
    cy.get('#toggleButton').click();
      cy.wait(2000);
      cy.get(this.locators.send_payment).click();
      cy.wait(2000);
      cy.get('tbody > :nth-child(1) > :nth-child(2)', { timeout: 10000 })
        .should('be.visible')
        .and('contain', refNumber);
    });


  }

  sendpayment03(){
    cy.wait(9000);
    cy.wait(3000);
    cy.get('#search-customer-name', { timeout: 10000 })
  .should('be.visible')
  .should('have.value', '') // ensures ready
  .type('a');
    cy.wait(2000);
    cy.get("#search-submit-button").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(4) a').first().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.selectoption).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.send_payment_link).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.amber_pay).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.enter_amount).clear().type('500');
    cy.wait(2000);
    cy.get("#aend").click({force:true});
    cy.wait(2000);
     // ✅ Capture reference number
  cy.contains(/Payment Link sent successfully with reference number:\s*\d+/)
    .should('be.visible')
    .invoke('text')
    .then((text) => {

      const refNumber = text.match(/\d+/)[0];
      cy.log('Captured Ref Number: ' + refNumber);
      cy.wait(2000);
    cy.get('#toggleButton').click();
      cy.wait(2000);
      cy.get(this.locators.send_payment).click();
      cy.wait(2000);
      cy.get('tbody > :nth-child(1) > :nth-child(2)', { timeout: 10000 })
        .should('be.visible')
        .and('contain', refNumber);
    });


  }
   }
 
export default SendPaymentPage;