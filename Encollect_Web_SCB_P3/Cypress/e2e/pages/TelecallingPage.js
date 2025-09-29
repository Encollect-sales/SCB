import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';


class TelecallingPage {
  constructor(locators) {
    this.locators = locators;
  }
 
    
  TelecallingTestPage_232() {
    cy.wait(8000);

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message);
        return false;
    });

    // Log Dashboard selector for debugging
    cy.log('Attempting to click on Dashboard');
    cy.get(this.locators.Dashboard, { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .click();

    cy.wait(900);

    // Log Telecaller Dashboard selector for debugging
    cy.log('Attempting to click on Telecaller Dashboard');
    cy.get(this.locators.TelecallerDashboard, { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .click();
}
  TelecallingTestPage_233() {
    cy.wait(8000);

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message);
        return false;
    });

    // Log Dashboard selector for debugging
    cy.log('Attempting to click on Dashboard');
    cy.get(this.locators.Dashboard, { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .click();

    cy.wait(900);

    // Log Telecaller Dashboard selector for debugging
    cy.log('Attempting to click on Telecaller Dashboard');
    cy.get(this.locators.TelecallerDashboard, { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .click();
}
TelecallingTestPage_234() {
  cy.wait(8000);

  Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
  });

  // Log Dashboard selector for debugging
  cy.log('Attempting to click on Dashboard');
  cy.get(this.locators.Dashboard, { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .click();

  cy.wait(900);

  // Log Telecaller Dashboard selector for debugging
  cy.log('Attempting to click on Telecaller Dashboard');
  cy.get(this.locators.TelecallerDashboard, { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .click();
}

}

export default TelecallingPage;
