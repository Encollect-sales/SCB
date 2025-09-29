import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import '@4tw/cypress-drag-drop';
import 'cypress-wait-until';




class UpdateTrailPage{
  constructor(locators) {
    this.locators = locators;
  }

  

  UpdateTrailPage01(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message);
        console.error(err);
        // returning false here prevents Cypress from failing the test
        return false;
    });
    // cy.get(this.locators.Dashboard).click();
    // cy.wait(900);
    // cy.get(this.locators.AgentDashboard).click();
    // cy.wait(900);
     cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();
    cy.wait(500);
    cy.get(this.locators.Name).type("a", {force: true} );
    cy.wait(400);
    cy.get('#search-submit-button').click();
    cy.wait(900);
    cy.get(this.locators.Cname).click();
    cy.wait(900);
    // Log the parent HTML to see the structure
    
          // Log the parent HTML to see the structure
          cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').parent().then(($parent) => {
            console.log('Parent HTML:', $parent.html());
        });
      
        // Use waitUntil to wait for the element to be visible and then click
        cy.waitUntil(() =>
            cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').should('be.visible')
        ).then(($el) => {
            cy.wrap($el).click();
        });
        cy.get(this.locators.PlaceOfVisit).should("be.visible");
        cy.wait(400);

} 
  UpdateTrailPage02(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message);
        console.error(err);
        // returning false here prevents Cypress from failing the test
        return false;
    });
    // cy.get(this.locators.Dashboard).click();
    // cy.wait(900);
    // cy.get(this.locators.AgentDashboard).click();
    // cy.wait(900);
     cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();
    cy.wait(500);
    cy.get(this.locators.Name).type("a", {force: true} );
    cy.wait(400);
    cy.get('#search-submit-button').click();
    cy.wait(900);
    cy.get(this.locators.Cname).click();
    cy.wait(900);
    // Log the parent HTML to see the structure
    
          // Log the parent HTML to see the structure
          cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').parent().then(($parent) => {
            console.log('Parent HTML:', $parent.html());
        });
      
        // Use waitUntil to wait for the element to be visible and then click
        cy.waitUntil(() =>
            cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').should('be.visible')
        ).then(($el) => {
            cy.wrap($el).click();
        });
        cy.get(this.locators.AgentContactNumber).should("be.visible");
        cy.wait(400);
    
    } 
  UpdateTrailPage03(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message);
        console.error(err);
        // returning false here prevents Cypress from failing the test
        return false;
    });
    // cy.get(this.locators.Dashboard).click();
    // cy.wait(900);
    // cy.get(this.locators.AgentDashboard).click();
    // cy.wait(900);
     cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();
    cy.wait(500);
    cy.get(this.locators.Name).type("a", {force: true} );
    cy.wait(400);
    cy.get('#search-submit-button').click();
    cy.wait(900);
    cy.get(this.locators.Cname).click();
    cy.wait(900);
    // Log the parent HTML to see the structure
    
          // Log the parent HTML to see the structure
          cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').parent().then(($parent) => {
            console.log('Parent HTML:', $parent.html());
        });
      
        // Use waitUntil to wait for the element to be visible and then click
        cy.waitUntil(() =>
            cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').should('be.visible')
        ).then(($el) => {
            cy.wrap($el).click();
        });
        cy.get(this.locators.ThirdPartyContactPerson).should("be.visible");
        cy.wait(400);

} 
  UpdateTrailPage04(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message);
        console.error(err);
        // returning false here prevents Cypress from failing the test
        return false;
    });
    // cy.get(this.locators.Dashboard).click();
    // cy.wait(900);
    // cy.get(this.locators.AgentDashboard).click();
    // cy.wait(900);
     cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Customer Name').click();
    cy.wait(500);
    cy.get(this.locators.Name).type("a", {force: true} );
    cy.wait(400);
    cy.get('#search-submit-button').click();
    cy.wait(900);
    cy.get(this.locators.Cname).click();
    cy.wait(900);
    // Log the parent HTML to see the structure
    
          // Log the parent HTML to see the structure
          cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').parent().then(($parent) => {
            console.log('Parent HTML:', $parent.html());
        });
      
        // Use waitUntil to wait for the element to be visible and then click
        cy.waitUntil(() =>
            cy.get('#basicinfo > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').should('be.visible')
        ).then(($el) => {
            cy.wrap($el).click();
        });
        cy.get(this.locators.ReasonforNonPayment).scrollIntoView().should("be.visible");
        cy.wait(400);
        cy.get(':nth-child(10) > :nth-child(2) > .form-control').select('Others').should('be.visible');
        cy.wait(300);


          
  
  
    
    

    
    


   
  } 
  

  


  


  

}

export default UpdateTrailPage;
