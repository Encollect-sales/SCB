import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import '@4tw/cypress-drag-drop';


class DashboardPage {
  constructor(locators) {
    this.locators = locators;
  }

  CreditCardRadioBtn(){
    cy.wait(5000);
    cy.get('#cc-account-type').click();
  }

  AccountDashboardScreen468(){

    cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Credit Card Last 4 Digits').click();
    cy.wait(1000);
    cy.get("#search-cc-number").type("7990");
    cy.wait(1000);
    cy.get('.btn-secondary').click();
  } 

  Dashboard982(){
    cy.get('#cc-account-type').click();
    cy.wait(2000);
     cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label','Credit Card Last 4 Digits').click();
    cy.wait(2000);
  cy.get('#search-cc-number').type('7990');
    cy.wait(500);
    cy.get(this.locators.search_btn).click();
    cy.wait(2000);
  cy.contains("Search Results").should("be.visible");
  }
  
  Accountloan_563(){
  
    cy.get('#loan-account-type').click();
    cy.wait(500);
    cy.get('#search-customer-name').type('a');
    cy.wait(500);
    cy.get(this.locators.search).click();
    cy.wait(500);
    cy.get('.pagination-next > .page-link').click();
    

  } 
  Dashboard1517(){
    cy.wait(5000);
    cy.get('[role="alert"]').should('contain.text', 'Last Successful Login :');

     cy.wait(500);
     cy.log("Last Successful Login :   +00:00. Last Failed Login :  +00:00.");
   
  }
 
  Dashboard1518(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
     
    cy.get('#radios-0').click();
     cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();
    cy.wait(500);
    cy.get(this.locators.customer_Name).type('R anupriya', { force: true });
    cy.get('.btn').click();
    cy.get(this.locators.clickOn_CustName).click();
     
    // Log the parent HTML to see the structure
    cy.get(':nth-child(5) > #tab-selectbyid8-link > span').parent().then(($parent) => {
      console.log('Parent HTML:', $parent.html());
    });
     
    // Use waitUntil to wait for the element to be visible and then click
    cy.waitUntil(() =>
      cy.get('div[class="main-content-wrap sidenav-open"] li:nth-child(9) a:nth-child(1) span:nth-child(1)').should('be.visible')
    ).then(($el) => {
      cy.wrap($el).click();
    });
 
    cy.wait(500);
    cy.get('tab[id="tab-selectbyid21"] tr:nth-child(10) th:nth-child(1)').should('contain', 'Field Agent Name/Staff Name:');
    cy.wait(500);
    cy.get('tab[id="tab-selectbyid21"] tr:nth-child(11) th:nth-child(1)').should('contain', 'Field Agent Code/Staff Code:')
 
    // cy.wait(1000);
    // cy.get('#radios-0').click();
    // cy.wait(500);
    // cy.get('input[placeholder="Customer Name"]').type('R anupriya');
    // cy.wait(500);
    // cy.get('button[type="submit"]').click();
    // cy.wait(500);
    // cy.get('tbody tr[class="ng-star-inserted"] td:nth-child(1) a:nth-child(1)').click();
  }
 
  Dashboard1523(){
    cy.wait(1000);
    cy.get('#loan-account-type').should('be.checked');
    cy.wait(500);
 
  }

}

export default DashboardPage;
