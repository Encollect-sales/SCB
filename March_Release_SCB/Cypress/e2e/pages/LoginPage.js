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
  }
 
  submit() {
    cy.wait(2000);
    cy.get(this.locators.signinButton).click();
    cy.wait(3000);
  }
 
  // verifyLoginSuccess() {
  //   return cy.get(this.locators.dashboard).then(() => {
  //   });
  // }
 
  login(Companyname, email, password) {
   
      this.visit();
      this.fillcompanyname(Companyname);
      this.clickcompanyname();
      this.fillUsername(email);
      this.fillPassword(password);
      this.submit();
      cy.wait(5000);
      // this.verifyLoginSuccess();
  }

 



}
 
export default LoginPage;