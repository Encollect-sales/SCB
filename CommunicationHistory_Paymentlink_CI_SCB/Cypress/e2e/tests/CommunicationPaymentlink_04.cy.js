import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Communication Template - Payment Link for WhatsApp', () => {
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

    it('TC_004 - Verify Payment Link for WhatsApp', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectChannelType('WhatsApp');
            communicationTemplatePage.enterTemplateName();
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.SelectRecipientType();
            communicationTemplatePage.enterHeader('PaymentLinkWhatsApp');
            communicationTemplatePage.TemplateBody('Please complete your payment using ');
            //communicationTemplatePage.selectPaymentLinkVariableWhatsApp();
            communicationTemplatePage.WhatsAppvarmapping();
            communicationTemplatePage.saveTemplate();
            communicationTemplatePage.verifyTemplateSaved();
        });
    });
});