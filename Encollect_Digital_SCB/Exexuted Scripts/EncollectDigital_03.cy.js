import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Verify Company Name Selection', () => {

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

    it('TC_003_POS - Verify user can select company name', () => {

        loginPage.openLoginPage();

        cy.get(loginPage.locators.companynameInput)
            .should('be.visible')
            .click()
            .type('e');

        cy.get('.ng-option-label')
            .contains('ENCollect Digital')
            .should('be.visible')
            .click();

        cy.get(loginPage.locators.companynameInput)
            .should('contain.text', 'ENCollect Digital');

    });

});