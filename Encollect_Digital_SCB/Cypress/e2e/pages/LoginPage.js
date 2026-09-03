import { getBaseUrl } from '../utils/configUtils';

class LoginPage {

    constructor(locators) {
        this.locators = locators;
    }

    visit() {

        return getBaseUrl().then((baseUrl) => {

            cy.visit(baseUrl);

        });

    }

    openLoginPage() {

        return getBaseUrl().then((baseUrl) => {

            cy.visit(baseUrl);

        });

    }

    fillcompanyname(companyName) {

        if (!companyName) {
            throw new Error("Company name is required");
        }

        cy.get(this.locators.companynameInput)
            .should("be.visible")
            .type(companyName);

        cy.get(".ng-option-label")
            .should("have.length.greaterThan", 0);

        cy.wait(2000);

    }

    clickcompanyname() {

        cy.contains(".ng-option-label", /^ENCollect Digital$/)
            .should("be.visible")
            .click({ force: true });

        cy.wait(2000);

    }

    fillUsername(username) {

        cy.get(this.locators.usernameInput)
            .should("be.visible")
            .type(username);

        cy.wait(2000);

    }

    fillPassword(password) {

        cy.get(this.locators.passwordInput)
            .should("be.visible")
            .type(password);

        cy.wait(1000);

    }

    submit() {

        cy.get(this.locators.signinButton)
            .should("be.visible")
            .click();

        cy.wait(2000);

    }

    enterotp() {

        cy.get("#otp-input")
            .should("be.visible")
            .type("560062");

        cy.wait(2000);

        cy.get(".btn-success")
            .click();

        cy.wait(20000);

    }

    verifyLoginSuccess() {

        cy.contains("Receivable Search").scrollIntoView().should("be.visible");

    }

    login(companyName, username, password) {

        this.visit();

        this.fillcompanyname(companyName);

        this.clickcompanyname();

        this.fillUsername(username);

        this.fillPassword(password);

        this.submit();

        this.enterotp();

    }

    logout() {

        cy.get(this.locators.profile)
            .should("be.visible")
            .click();

        cy.get(this.locators.logoutButton)
            .should("be.visible")
            .click();

    }


  verifyLoginPageLoaded() {

    cy.get(this.locators.companyName)
        .should('be.visible');

    cy.get(this.locators.username)
        .should('be.visible');

    cy.get(this.locators.password)
        .should('be.visible');

    cy.get(this.locators.submitButton)
        .should('be.visible');

}

}

export default LoginPage;