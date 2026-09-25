import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Communication Template - Verify Payment Link Variable Availability', () => {
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

    it('TC_001 - Verify Payment Link variable availability', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectEntryPoint();
            communicationTemplatePage.verifyPaymentLinkVariableAvailable();
        });
    });
});