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

  fillcompanyname(Companyname) {
    // Validate Companyname before typing
    if (!Companyname) {
      throw new Error(
        'Companyname is undefined or empty. Please pass a valid company name.'
      );
    }

    cy.log(`Company Name: ${Companyname}`);

    cy.get(this.locators.companynameInput)
      .should('be.visible')
      .then(($input) => {
        const currentValue = $input.val();

        if (currentValue) {
          cy.wrap($input).clear().type(String(Companyname));
        } else {
          cy.wrap($input).type(String(Companyname));
        }
      });

    cy.wait(2000);
  }

  clickcompanyname() {
    cy.get(this.locators.ClickonCompanyName)
      .should('be.visible')
      .click({ force: true });

    cy.wait(1000);
  }

  fillUsername(email) {
    if (!email) {
      throw new Error('Email is undefined or empty.');
    }

    cy.get(this.locators.usernameInput)
      .should('be.visible')
      .clear()
      .type(String(email));

    cy.wait(2000);
  }

  fillPassword(password) {
    if (!password) {
      throw new Error('Password is undefined or empty.');
    }

    cy.get(this.locators.passwordInput)
      .should('be.visible')
      .clear()
      .type(String(password));

    cy.wait(2000);
  }

  submit() {
    cy.get(this.locators.signinButton)
      .should('be.visible')
      .click();

    cy.wait(2000);

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      return false;
    });
  }

  // enterotp() {
  //   cy.get('#otp-input')
  //     .should('be.visible')
  //     .type('560062');

  //   cy.wait(2000);

  //   cy.get('.btn-success').click();

  //   cy.wait(5000);
  // }

  verifyLoginSuccess() {
    return cy.get(this.locators.dashboard).should('be.visible');
  }

  login(Companyname, email, password) {
    this.visit();
    this.fillcompanyname(Companyname);
    this.clickcompanyname();
    this.fillUsername(email);
    this.fillPassword(password);
    this.submit();
    cy.wait(2000);
    //this.enterotp();
  }

  login1(Companyname, email1, password1) {
    this.visit();
    this.fillcompanyname(Companyname);
    this.clickcompanyname();
    this.fillUsername(email1);
    this.fillPassword(password1);
    this.submit();
    cy.wait(3000);
    this.enterotp();
  }

  logout() {
    cy.wait(900);

    cy.get(this.locators.profile)
      .should('be.visible')
      .click();

    cy.get(this.locators.logoutButton)
      .should('be.visible')
      .click();

    cy.wait(2000);
  }
}

export default LoginPage;