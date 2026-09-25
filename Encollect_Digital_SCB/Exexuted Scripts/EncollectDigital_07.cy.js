import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Company Name Validation', () => {

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

    it('TC_007_NEG - Verify error when company name is not selected', () => {

        // Open Login Page
        loginPage.openLoginPage();

        // Verify Company Name field is visible
        cy.get(loginPage.locators.companynameInput)
            .should('be.visible');

        // // Verify validation message
        // cy.contains('Please search and select a valid company name')
        //     .should('be.visible');

        // Verify Username field is disabled
        cy.get(loginPage.locators.usernameInput)
            .should('be.disabled');

        // Verify Password field is disabled
        cy.get(loginPage.locators.passwordInput)
            .should('be.disabled');

    });

});