import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationExecutionPage from '../pages/CommunicationExecutionPage';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Regression - Existing templates without Payment Link', () => {
    let loginPage;
    let communicationExecutionPage;
    let communicationTemplatePage;
    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('CommunicationExecution').then(locators => {
            communicationExecutionPage = new CommunicationExecutionPage(locators);
        });
        getLocators('CommunicationTemplate').then(locators => {
            communicationTemplatePage = new CommunicationTemplatePage(locators);
        });
    });
    it('TC_035 - Existing templates without Payment Link continue to work normally', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
              communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectChannelType('WhatsApp');
            communicationTemplatePage.enterTemplateName('WhatsApp');
            communicationTemplatePage.SelectRecipientType();
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.Header();

            const text = 'Hello {#Customer Name#}, please complete your payment';

            // Target the actual textarea (not contenteditable) inside .editor-container
            cy.get('.editor-container', { timeout: 10000 })
                .find('textarea')
                .click({ force: true })
                .then($el => {
                    const editor = $el[0];
                    editor.focus();

                    const dataTransfer = new DataTransfer();
                    dataTransfer.setData('text/plain', text);

                    // Plain Event, since ClipboardEvent's clipboardData
                    // is read-only via the constructor in Chrome/Electron
                    const pasteEvent = new Event('paste', { bubbles: true, cancelable: true });
                    pasteEvent.clipboardData = dataTransfer;

                    editor.dispatchEvent(pasteEvent);
                });

            cy.wait(2000);

            // Verify the text actually landed; fall back to a direct value+input dispatch if not
            cy.get('.editor-container', { timeout: 10000 })
                .find('textarea')
                .then($el => {
                    const editor = $el[0];
                    const currentValue = editor.value.trim();

                    if (!currentValue || !currentValue.includes('Payment Link')) {
                        cy.log('Paste event did not populate textarea, falling back to direct value set');

                        cy.wrap(editor)
                            .invoke('val', text)
                            .trigger('input', { force: true })
                            .trigger('change', { force: true });
                    }
                });

            cy.wait(2000);

            cy.contains('Create Template').scrollIntoView().click({ force: true });
            cy.wait(2000);


            cy.contains('Search Communication Templates').scrollIntoView().click({force:true});
            cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('Enabled').scrollIntoView().should('exist');
    });
});
});