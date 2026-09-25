import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Communication Template - Payment Link for SMS', () => {
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

    it('TC_002 - Verify Payment Link for SMS', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectChannelType('SMS');
            communicationTemplatePage.enterTemplateName();
            communicationTemplatePage.SelectRecipientType();
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.Header();
            communicationTemplatePage.enterTemplateBody('Please complete your payment using ');
            communicationTemplatePage.selectPaymentLinkVariable();
            communicationTemplatePage.verifyPaymentLinkPlaceholder();
            // communicationTemplatePage.saveTemplate();
            communicationTemplatePage.verifyTemplateSaved();
        });
    });
});