import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class AccountSearchPage {
  constructor(locators) {
    this.locators = locators;
  }



  TC_57(){
    cy.wait(5000);
    cy.get(this.locators.accountsearch_btn).click({force:true});
    cy.wait(2000);
    // cy.get('.ng-select-container').click({ force: true });
    // cy.wait(1000);
    // cy.get('.ng-input > input').type('Customer Name', { force: true });
    // cy.wait(1000);
    // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
    // cy.wait(2000);
    cy.get(this.locators.customer_name).type("a");
    cy.wait(2000);
    cy.get(this.locators.search_btn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.pagecount_dropdown).select("50");
    cy.wait(2000);
   cy.get('#grid-table tbody tr')
  .then(($rows) => {

    const randomIndex = Math.floor(Math.random() * $rows.length);

    cy.wrap($rows[randomIndex])
      .find('td:nth-child(4) a')
      .scrollIntoView()
      .click({ force: true });
  });

   cy.contains('button', 'Previous').should('be.visible');
   cy.contains('button', 'Next').should('be.visible');


   



  }
  TC_58() {
  cy.wait(5000);
  cy.get(this.locators.accountsearch_btn).click({ force: true });
  cy.wait(2000);
  // cy.get('.ng-select-container').click({ force: true });
  // cy.wait(1000);
  // cy.get('.ng-input > input').type('Customer Name', { force: true });
  // cy.wait(1000);
  // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
  // cy.wait(2000);
  cy.get(this.locators.customer_name).type("a");
  cy.wait(2000);
  cy.get(this.locators.search_btn).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pagecount_dropdown).select("50");
  cy.wait(2000);
 cy.get('#grid-table tbody tr')
  .first()
  .find('td:nth-child(4) a')
  .should('exist')          
  .scrollIntoView()         
  .click({ force: true });  

  cy.contains('button', 'Previous')
    .should('be.visible')
    .and('be.disabled');

  cy.contains('button', 'Next')
    .should('be.visible')
    .and('not.be.disabled');
}

TC_59() {

 
  cy.wait(5000);
  cy.get(this.locators.accountsearch_btn).click({ force: true });
  cy.wait(2000);
  // cy.get('.ng-select-container').click({ force: true });
  // cy.wait(1000);
  // cy.get('.ng-input > input').type('Customer Name', { force: true });
  // cy.wait(1000);
  // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
  // cy.wait(2000);
  cy.get(this.locators.customer_name).type('a');
  cy.wait(2000);
  cy.get(this.locators.search_btn).click({ force: true });

  // cy.wait(2000);
  // cy.get(this.locators.pagecount_dropdown).select('50');
  cy.get(this.locators.last_page).click({force:true});
  cy.wait(2000);
  cy.get(':nth-child(5) > :nth-child(4) > a > [style="text-wrap-mode: nowrap;"] > :nth-child(1)').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.prev_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.next_button).click({force:true});
  cy.wait(2000);
  cy.contains('button', 'Next')
    .should('exist')
    .and('be.disabled');


  cy.contains('button', 'Previous')
    .should('exist')
    .and('not.be.disabled');

}

TC_60() {
  cy.wait(5000);
  cy.get(this.locators.accountsearch_btn).click({ force: true });
  cy.wait(2000);
  // cy.get('.ng-select-container').click({ force: true });
  // cy.wait(1000);
  // cy.get('.ng-input > input').type('Customer Name', { force: true });
  // cy.wait(1000);
  // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
  // cy.wait(2000);
  cy.get(this.locators.customer_name).type('a');
  cy.wait(2000);
  cy.get(this.locators.search_btn).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pagecount_dropdown).select('5');
  cy.wait(2000);


    cy.get('tbody > :nth-child(1) > :nth-child(4) > a')
      .should('exist')
      .scrollIntoView()
      .click({ force: true });
      cy.wait(2000);
    cy.get(this.locators.next_btn).click({force:true}); 
 
  cy.wait(2000);
  cy.contains('button', 'Previous')
    .should('exist')
    .and('not.be.disabled');

  cy.contains('button', 'Next')
    .should('exist')
    .and('not.be.disabled');

}


TC_61() {
  cy.wait(5000);
  cy.get(this.locators.accountsearch_btn).click({ force: true });
  cy.wait(2000);
  // cy.get('.ng-select-container').click({ force: true });
  // cy.wait(1000);
  // cy.get('.ng-input > input').type('Customer Name', { force: true });
  // cy.wait(1000);
  // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
  // cy.wait(2000);
  cy.get(this.locators.customer_name).type('a');
  cy.wait(2000);
  cy.get(this.locators.search_btn).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pagecount_dropdown).select('5');
  cy.wait(2000);

cy.get('#grid-table tbody tr')
  .then(($rows) => {

    const randomIndex = Math.floor(Math.random() * $rows.length);

    cy.wrap($rows[randomIndex])
      .find('td:nth-child(4) a')
      .scrollIntoView()
      .click({ force: true });
  });
    cy.get(this.locators.next_btn).click({force:true}); 
 
  cy.wait(2000);


  cy.contains('button', 'Next')
    .should('exist')
    .and('not.be.disabled').click();

}


TC_62() {
  cy.wait(5000);
  cy.get(this.locators.accountsearch_btn).click({ force: true });
  cy.wait(2000);
  // cy.get('.ng-select-container').click({ force: true });
  // cy.wait(1000);
  // cy.get('.ng-input > input').type('Customer Name', { force: true });
  // cy.wait(1000);
  // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
  // cy.wait(2000);
  cy.get(this.locators.customer_name).type('a');
  cy.wait(2000);
  cy.get(this.locators.search_btn).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pagecount_dropdown).select('5');
  cy.wait(2000);

cy.get('#grid-table tbody tr')
  .then(($rows) => {

    const randomIndex = Math.floor(Math.random() * $rows.length);

    cy.wrap($rows[randomIndex])
      .find('td:nth-child(4) a')
      .scrollIntoView()
      .click({ force: true });
  });
    cy.get(this.locators.next_btn).click({force:true}); 
 
  cy.wait(2000);


  cy.contains('button', 'Previous')
    .should('exist')
    .and('not.be.disabled').click();

}

TC_63() {
  cy.wait(5000);
  cy.get(this.locators.accountsearch_btn).click({ force: true });
  cy.wait(2000);
  cy.contains("Bird's Eye View for the Month")
  .should('be.visible');
    // cy.get('.ng-select-container').click({ force: true });
    // cy.wait(1000);
    // cy.get('.ng-input > input').type('Customer Name', { force: true });
    // cy.wait(1000);
    // cy.contains('.ng-option-label', 'Customer Name').click({ force: true });
    // cy.wait(2000);
    cy.get(this.locators.customer_name).type("a");
    cy.wait(2000);
    cy.get(this.locators.search_btn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.pagecount_dropdown).select("50");
    cy.wait(2000);
   cy.get('#grid-table tbody tr')
  .then(($rows) => {

    const randomIndex = Math.floor(Math.random() * $rows.length);

    cy.wrap($rows[randomIndex])
      .find('td:nth-child(4) a')
      .scrollIntoView()
      .click({ force: true });
  });

 cy.contains('button', 'Previous')
  .should('be.visible')
  .click({ force: true });

cy.contains('button', 'Next')
  .should('be.visible')
  .click({ force: true });


}


InboundCallTestPage_01(){

  // cy.get('.ng-arrow-wrapper').click();
  //   cy.wait(1000);
  //   cy.contains('span.ng-option-label', 'Customer Name').click();
  //   cy.wait(1000);
    cy.get(this.locators.customer_name).type("a");
    cy.wait(2000);
    cy.get(this.locators.search_btn).click({force:true});
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click({ force: true });
    cy.wait(4000);
    cy.get(this.locators.ClickOn_Toggle).click({ force: true });
    cy.wait(2000);
    cy.contains("Dialer").scrollIntoView().should('be.visible').click();
    cy.wait(2000);
     cy.contains("Dialer").should('be.visible');
     cy.wait(2000);
    
      cy.get('#mobile_number').then($select => {
  const options = $select.find('option');
  const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1; 
  const randomValue = options[randomIndex].value;

  cy.wrap($select).select(randomValue);
});
cy.wait(2000);

cy.get(this.locators.ClickOnCall_Btn).click({ force: true });
cy.wait(2000);

cy.contains('[role="alert"]', 'Call Feature Not Available - Contact System Admin').should('be.visible');
cy.wait(2000);

}









}

export default AccountSearchPage;

