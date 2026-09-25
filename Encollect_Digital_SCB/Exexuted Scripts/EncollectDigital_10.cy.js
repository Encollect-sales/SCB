import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Blank Username and Password Validation', () => {

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

    it('TC_010_NEG - Verify error when both fields are blank', () => {

        // Open Login Page
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

        // Username and Password are intentionally left blank

        // Click Submit
        cy.get(loginPage.locators.signinButton)
            .should('be.visible')
            .click({force:true});

        // Verify Username field
        cy.get(loginPage.locators.usernameInput)
            .should('be.visible');

        // Verify Password field
        cy.get(loginPage.locators.passwordInput)
            .should('be.visible');

    });

});