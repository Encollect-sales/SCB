import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';
import { tr } from '@faker-js/faker';

describe('Communication Template - Standard Dynamic Variables', () => {
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

    it('TC_016 - Verify standard dynamic variables are resolved with Payment Link', () => {
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
            communicationTemplatePage.enterHeader();

            communicationTemplatePage.TemplateBody('Hello {#Customer Name#}, please complete your payment using {#Payment Link#}');
            // communicationTemplatePage.selectCustomerNameVariable();
            // communicationTemplatePage.selectPaymentLinkVariableWhatsApp();
            // // communicationTemplatePage.WhatsAppvarmapping();
            cy.contains("Create Template").scrollIntoView().click({force:true});
            cy.wait(2000);

            // cy.contains("Preview").scrollIntoView().click({force:true});
            communicationTemplatePage.getProcessedMessage().then(message => {
                cy.log(`Processed Message: ${message}`);

                expect(message).to.not.contain('{#Customer Name#}');
                expect(message).to.not.contain('#{#Payment Link#}');
                expect(message).to.match(/https:\/\/ent\.io\/[A-Za-z0-9./?=_%-]+/);
            });
        });
    });
});