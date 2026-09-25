import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Payment Link Generation - Verify customer-specific link', () => {
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
    it("TC_011 - Verify one customer's link is not assigned to another", () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            cy.wait(2000);
            communicationTemplatePage.selectChannelType('WhatsApp');
            cy.wait(2000);
            communicationTemplatePage.enterTemplateName('WhatsApp');
            cy.wait(2000);
            communicationTemplatePage.SelectRecipientType();
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.enterHeader();
            communicationTemplatePage.TemplateBody('Please complete your payment using ');
            // communicationTemplatePage.selectPaymentLinkVariableWhatsApp();
            communicationTemplatePage.WhatsAppvarmapping();
            communicationTemplatePage.saveTemplate();
            communicationTemplatePage.verifyTemplateSaved();

            // communicationTemplatePage.NavigateToCreateCommunicationTemplate();
           cy.get('#nav-item-2-create-communication-template').click({force:true});
           cy.wait(2000);
            communicationTemplatePage.selectChannelType('WhatsApp');
            cy.wait(2000);
            communicationTemplatePage.enterTemplateName('WhatsApp');
            cy.wait(2000);
            communicationTemplatePage.SelectRecipientType();
            cy.wait(2000);
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.enterHeader();
            communicationTemplatePage.TemplateBody('Please complete your payment using ');
            // communicationTemplatePage.selectPaymentLinkVariableWhatsApp();
            communicationTemplatePage.WhatsAppvarmapping();
            communicationTemplatePage.saveTemplate();
            communicationTemplatePage.verifyTemplateSaved();

            // communicationTemplatePage.NavigateToSearchCommunicationTemplate();

            communicationTemplatePage.openFirstCustomer();
            communicationTemplatePage.Togglebutton();
             communicationTemplatePage.clickPreview();
            communicationTemplatePage.getPaymentLinkUrl().then(url1 => {
                expect(url1).to.not.be.empty;
                cy.log(`Template 1 Payment Link URL: ${url1}`);

                communicationTemplatePage.goBackToCustomerSearch();

                communicationTemplatePage.openSecondCustomer();
                // communicationTemplatePage.Togglebutton();
                communicationTemplatePage.clickPreview();
                communicationTemplatePage.getPaymentLinkUrl().then(url2 => {
                    cy.log(`Customer 2 Payment URL: ${url2}`);

                    expect(url1).to.not.be.empty;
                    expect(url2).to.not.be.empty;
                    expect(url1).to.not.equal(url2);
    });
            });
        });
    });
});
