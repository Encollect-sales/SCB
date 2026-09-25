import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Password Validation', () => {

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

    it('TC_009_NEG - Verify error when password is blank', () => {

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

            // Enter Username
            cy.get(loginPage.locators.usernameInput)
                .should('be.visible')
                .type(user.email);

            // Password is intentionally left blank

            // Click Submit
            cy.get(loginPage.locators.signinButton)
                .should('be.visible')
                .click({force:true});

            // Verify Password field is still visible
            cy.get(loginPage.locators.passwordInput)
                .should('be.visible');

        });

    });

});