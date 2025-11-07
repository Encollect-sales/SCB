import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class LoginPage {
  constructor(locators) {
    this.locators = locators;
  }
 
  visit() {
    return getBaseUrl().then((baseUrl) => {
      console.log('Visiting URL:', baseUrl);
      cy.visit(baseUrl);
    });
  }
 
  
  
  // fillcompanyname(Companyname) {
  //   //cy.get(this.locators.companynameInput).type(Companyname);
  //   cy.get(this.locators.companynameInput).type("ENCollect");
  //   cy.wait(2000);
  // }
 
 
  // clickCompanyname() {
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
 
  cy.wait(2000);
}
 
clickcompanyname() {
  cy.get(this.locators.ClickonCompanyName).click();
  cy.wait(3000);
}


  fillUsername(email) {
    cy.get(this.locators.usernameInput).type(email);
    cy.wait(2000);
  }
 
  fillPassword(password) {
    cy.get(this.locators.passwordInput).type(password);
    cy.wait(2000);
  }
 
  submit() {
    cy.get(this.locators.signinButton).click();
    cy.wait(2000);
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // Returning false prevents Cypress from failing the test
      return false;
    });
  }
 
   enterotp(){

    cy.get('#otp-input').type(560062);
    cy.wait(2000);
    cy.get('.btn-success').click();
    cy.wait(11000);
  }
  verifyLoginSuccess() {
    return cy.get(this.locators.dashboard).then(() => {});
  }
 
  login(Companyname, email, password) {
    this.visit();
    this.fillcompanyname(Companyname);
    this.clickcompanyname();
    this.fillUsername(email);
    this.fillPassword(password);
    this.submit();
    cy.wait(2000);
    this.enterotp();
  }
 
  login1(Companyname,email1, password1) {
    this.visit();
    this.fillcompanyname(Companyname);
    this.clickcompanyname();
    this.fillUsername(email1);
    this.fillPassword(password1);
    this.submit();
    cy.wait(2000);
    this.enterotp();
  }
 
  logout() {
    // Implement logout functionality here
    cy.wait(900);
    cy.get(this.locators.profile).click();
    cy.get(this.locators.logoutButton).click();
    cy.wait(2000); // Adjust wait time if necessary
  }
}
 
export default LoginPage;