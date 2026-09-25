import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Invalid Credentials', () => {

    let loginPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        Cypress.on('uncaught:exception', (err) => {

            if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                return false;
            }

        });

    });

    it('TC_011_NEG - Verify login with invalid credentials', () => {

        loginPage.openLoginPage();

        // Select Company Name
        cy.get(loginPage.locators.companynameInput)
            .should('be.visible')
            .click()
            .type('e');

        cy.get('.ng-option-label')
            .contains('ENCollect Digital')
            .should('be.visible')
            .click();

        // Verify Company Name is selected
        cy.get(loginPage.locators.companynameInput)
            .find('.ng-value-label')
            .should('contain.text', 'ENCollect Digital');

        // Enter Invalid Username
        cy.get(loginPage.locators.usernameInput)
            .should('be.visible')
            .type('invaliduser@test.com');

        // Enter Invalid Password
        cy.get(loginPage.locators.passwordInput)
            .should('be.visible')
            .type('Invalid@12345');

        // Click Submit
        cy.get(loginPage.locators.signinButton)
            .should('be.visible')
            .click();

        // Verify login failed
        cy.url().should('not.include', '/dashboard');

    });

});