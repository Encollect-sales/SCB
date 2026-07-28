import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class LoginPage {
  constructor(locators) {
    this.locators = locators;
  }
 
  visit() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      return false;
    });

    // ✅ Clear all storage before visiting
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
   
    getBaseUrl().then((baseUrl) => {
      cy.visit(baseUrl);
    });
  }
 
  fillcompanyname(Companyname) {
    cy.get(this.locators.companynameInput).then(($input) => {
      const currentValue = $input.val();
 
      if (currentValue) {
        cy.wrap($input).clear().type(Companyname);
      } else {
        cy.wrap($input).type(Companyname);
      }
    });
 
    cy.wait(2000);
  }

  Clikcompanyname() {
    cy.get(this.locators.ClickonCompanyName).click();
    cy.wait(2000);
  }
 
  fillUsername(email) {
    cy.get(this.locators.usernameInput).type(email);
    cy.wait(2000);
  }
 
  fillPassword(password) {
    cy.get(this.locators.passwordInput).type(password);
  }
 
  submit() {
    cy.wait(2000);
    cy.get(this.locators.signinButton).click();
    cy.wait(3000);
  }

  // enterotp() {
  //   cy.get('#otp-input').type(560062);
  //   cy.wait(2000);
  //   cy.get('.btn-success').click();
  //   cy.wait(8000);
  //   cy.wait(8000);
  //   cy.wait(3000);
  //   //cy.wait(20000);
    
  // }
 
  login(Companyname, email, password) {
    this.visit();
    this.fillcompanyname(Companyname);
    this.Clikcompanyname();
    this.fillUsername(email);
    this.fillPassword(password);
    this.submit();
    cy.wait(3000);
    //this.enterotp();
  }

  logout() {
    cy.get('.avatar').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .dropdown-item').click();
    cy.wait(6000);

  }
}
 
export default LoginPage;