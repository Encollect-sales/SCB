import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class loginPage1 {
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
    //cy.get(this.locators.companynameInput).type(Companyname);
    cy.get(this.locators.companynameInput).type("ENCollect");
  }
 
  Clikcompanyname() {
    cy.wait(2000);
    cy.get(this.locators.ClickonCompanyName).click();
  }
 
  fillUsername(email) {
    cy.get(this.locators.usernameInput).type(email);
  }
 
  fillPassword(password) {
    cy.get(this.locators.passwordInput).type(password);
  }
 
  submit() {
    cy.wait(5000);
    cy.get(this.locators.signinButton).click();
    cy.wait(2000);
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
      // this.verifyLoginSuccess();
  }

  // logout() {
  //   // Implement logout functionality here
  //   cy.wait(5000);
  //   cy.get(this.locators.profile).click();
  //   cy.get(this.locators.logoutButton).click(); // Example locator for logout button
  //   cy.wait(2000); // Adjust wait time if necessary
  // }



}
 
export default loginPage1;