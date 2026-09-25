import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';

describe('ENCollect Digital Login - Submit Button Functionality', () => {

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

    it('TC_014_POS - Verify Submit button functionality', () => {

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

            // Enter Password
            cy.get(loginPage.locators.passwordInput)
                .should('be.visible')
                .type(user.password);

            // Verify Submit button is visible and enabled
            cy.get(loginPage.locators.signinButton)
                .should('be.visible')
                .and('be.enabled');

            // Click Submit
            loginPage.submit();

            // Verify OTP field appears
            cy.get('#otp-input')
                .should('be.visible');

        });

    });

});