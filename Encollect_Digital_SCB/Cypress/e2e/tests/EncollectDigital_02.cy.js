import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Verify Default Company Name', () => {

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

    it('TC_002_POS - Verify default company name is displayed as ENCollect Digital', () => {

        loginPage.openLoginPage();

          cy.get(loginPage.locators.companynameInput)
            .should('be.visible')
            .click()
            .type('e');

        cy.get('.ng-option-label')
            .should('be.visible')
            .contains('ENCollect Digital')
            .should('be.visible')
            .click();

    });

});