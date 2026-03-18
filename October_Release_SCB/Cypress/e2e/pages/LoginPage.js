import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class LoginPage {
  constructor(locators) {
    this.locators = locators;
  }
 
  visit() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
   
    getBaseUrl().then((baseUrl) => {
      console.log('Visiting URL:', baseUrl);
      cy.visit(baseUrl);
    });
  }
 
  // fillcompanyname(Companyname) {
  //   //cy.get(this.locators.companynameInput).type(Companyname);
  //   cy.get(this.locators.companynameInput).type("ENCollect");
  //   cy.wait(2000);
  // }
 
  // Clikcompanyname() {
   
  //   cy.get(this.locators.ClickonCompanyName).click();
  //   cy.wait(2000);
  // }


  fillcompanyname(Companyname) {
  cy.get(this.locators.companynameInput).then(($input) => {
    const currentValue = $input.val();
 
    if (currentValue) {
      cy.wrap($input).clear().type(Companyname);
    } else {
      cy.wrap($input).type(Companyname);
    }
  });
 
  cy.wait(4000);
}
 
Clikcompanyname() {
  cy.get(this.locators.ClickonCompanyName).click();
  cy.wait(1000);
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
    cy.wait(2000);
  }
 
  // verifyLoginSuccess() {
  //   return cy.get(this.locators.dashboard).then(() => {
  //   });
  // }

  enterotp(){

    cy.get('#otp-input').type(560062);
    cy.wait(2000);
    cy.get('.btn-success').click();
    cy.wait(14000);
  }
 
  login(Companyname, email, password) {
   
      this.visit();
      this.fillcompanyname(Companyname);
      this.Clikcompanyname();
      this.fillUsername(email);
      this.fillPassword(password);
      this.submit();
      cy.wait(3000);
      this.enterotp();
      // this.verifyLoginSuccess();
  }

 



}
 
export default LoginPage;