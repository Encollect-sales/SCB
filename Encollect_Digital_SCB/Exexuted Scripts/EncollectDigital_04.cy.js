import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Verify Username Field', () => {

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

    it('TC_004_POS - Verify username/email field accepts valid input', () => {

        getTestData('loginData', 'login').then(user => {

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

            // Enter Username / Email
            cy.get(loginPage.locators.usernameInput)
                .should('be.visible')
                .type(user.email);

            // Verify Username / Email
            cy.get(loginPage.locators.usernameInput)
                .should('have.value', user.email);

            // Enter Password
            cy.get(loginPage.locators.passwordInput)
                .should('be.visible')
                .type(user.password);

            // Verify Password field contains entered value
            cy.get(loginPage.locators.passwordInput)
                .should('have.value', user.password);

        });

    });

});