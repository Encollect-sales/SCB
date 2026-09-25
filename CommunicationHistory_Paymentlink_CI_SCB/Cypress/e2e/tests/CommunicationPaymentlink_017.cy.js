import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationExecutionPage from '../pages/CommunicationExecutionPage';

import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';
import { tr } from '@faker-js/faker';

describe('Communication Template - SMS Delivery', () => {
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
    it('TC_017 - SMS containing customer-specific payment link is delivered', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
             communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectChannelType('SMS');
            communicationTemplatePage.enterTemplateName('SMS');
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
              communicationTemplatePage.getProcessedSMS().then(message => {
                cy.log(`Processed Message: ${message}`);

                expect(message).to.not.contain('{#Customer Name#}');
                expect(message).to.not.contain('#{#Payment Link#}');
                expect(message).to.match(/https:\/\/ent\.io\/[A-Za-z0-9./?=_%-]+/);
              });

        });
    });
});
