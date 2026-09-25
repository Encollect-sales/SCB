import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';


describe('Payment Link Failure - Placeholder Unresolved (TC_037)', () => {
    let loginPage;
    let communicationTemplatePage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('CommunicationTemplate').then(locators => {
            communicationTemplatePage = new CommunicationTemplatePage(locators);
        });
    });

    it('TC_037 - Raw Payment Link placeholder should not be sent to customer if generation fails', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            // Simulate Payment URL generation failure
            // TODO: replace with the actual payment-url-generation API endpoint
            cy.intercept('POST', '**/api/payment-url/**', {
                statusCode: 500,
                body: { error: 'Payment URL generation failed' }
            }).as('paymentUrlFailure');

            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectChannelType('WhatsApp');
            communicationTemplatePage.enterTemplateName('WhatsAppPlaceholder037');
            communicationTemplatePage.SelectRecipientType();
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.Header();

            const text = 'Hello {#Customer Name#}, please complete your payment using {#Payment Link#}';

            cy.get('.editor-container', { timeout: 10000 })
                .find('textarea')
                .click({ force: true })
                .then($el => {
                    const editor = $el[0];
                    editor.focus();
                    cy.wrap(editor)
                        .invoke('val', text)
                        .trigger('input', { force: true })
                        .trigger('change', { force: true });
                });

            cy.wait(1000);

            cy.contains('Create Template').scrollIntoView().click({ force: true });
            cy.wait(2000);

           

            // Step 3: Check final communication content
            communicationTemplatePage.getProcessedMessage().then(message => {
                cy.log(`Final communication content: ${message}`);

                // Raw placeholder must NOT appear in what would be sent to the customer
                expect(message).to.not.contain('{#Payment Link#}');

                // Optional: also assert the message doesn't contain a broken/empty link artifact
                // TODO: adjust this to your app's actual fallback/error text if it inserts one
                expect(message).to.not.match(/undefined|null|\[object Object\]/);
            });
        });
    });
});