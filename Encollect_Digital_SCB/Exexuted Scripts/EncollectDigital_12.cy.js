import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Forgot Password', () => {

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

    it('TC_012_POS - Verify Forgot Password link functionality', () => {

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

        // Verify Forgot Password link is visible
        cy.contains('Forgot Password')
            .should('be.visible');

        // Click Forgot Password
        cy.contains('Forgot Password')
            .click();

        // Verify navigation to Password Recovery page
        cy.url()
            .should('not.eq', Cypress.config().baseUrl + '/');

    });

});