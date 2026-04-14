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
 
  // 
  
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
    cy.wait(2000);
  }

  enterotp(){

    cy.get('#otp-input').type(560062);
    cy.wait(2000);
    cy.get('.btn-success').click();
    cy.wait(20000);
  }
 
  // verifyLoginSuccess() {
  //   return cy.get(this.locators.dashboard).then(() => {
  //   });
  // }
 
  login(Companyname, email, password) {
   
      this.visit();
      this.fillcompanyname(Companyname);
      this.Clikcompanyname();
      this.fillUsername(email);
      this.fillPassword(password);
      this.submit();
      cy.wait(2000);
      this.enterotp();
      // cy.wait(10000);
      // this.verifyLoginSuccess();
  }

  // login1(Companyname, email, password) {
   
  //     this.visit();
  //     this.fillcompanyname(Companyname);
  //     this.Clikcompanyname();
  //     this.fillUsername(email);
  //     this.fillPassword(password);
  //     this.submit();
  //     cy.wait(7000);

  // }

  logout(){

    cy.get('.avatar').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .dropdown-item').click();
    cy.wait(6000);

  }

 



}
 
export default LoginPage;