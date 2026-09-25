import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationExecutionPage from '../pages/CommunicationExecutionPage';

describe('Short Link - Verify URL shortening', () => {
    let loginPage;
    let communicationExecutionPage;
    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
        getLocators('CommunicationExecution').then(locators => {
            communicationExecutionPage = new CommunicationExecutionPage(locators);
        });
    });
    it('TC_013 - Verify generated payment URL is shortened', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationExecutionPage.navigateToExecuteCommunication();
        
            communicationExecutionPage.capturePaymentLink().then(link => {
                communicationExecutionPage.verifyShortLinkFormat(link);
            });
        });
    });
});
