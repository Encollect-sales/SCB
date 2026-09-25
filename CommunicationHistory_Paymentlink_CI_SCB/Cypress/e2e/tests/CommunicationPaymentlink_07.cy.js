import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Communication Template - Add and Remove Payment Link', () => {
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
    it('TC_007 - Add and remove Payment Link', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationTemplatePage.NavigateToSearchCommunicationTemplate();
            communicationTemplatePage.searchTemplate();
            communicationTemplatePage.Togglebutton();
            communicationTemplatePage.openTemplate();
            communicationTemplatePage.TemplateBody(' Payment Link: ');
            communicationTemplatePage.selectPaymentLinkVariable();
            communicationTemplatePage.verifyPaymentLinkPlaceholder();
            // communicationTemplatePage.saveTemplate();
            communicationTemplatePage.verifyTemplateSaved();
            communicationTemplatePage.NavigateToSearchCommunicationTemplate();
            // communicationTemplatePage.searchTemplate();
            communicationTemplatePage.openTemplate();
            communicationTemplatePage.removePaymentLinkFromBody();
            communicationTemplatePage.verifyPaymentLinkRemoved();
            // communicationTemplatePage.saveTemplate();
            communicationTemplatePage.verifyTemplateSaved();
        });
    });
});