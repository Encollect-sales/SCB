import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationExecutionPage from '../pages/CommunicationExecutionPage';

describe('Short Link - Verify secure short link returned', () => {
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
    it('TC_014 - Verify a valid secure short link is returned', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });
            communicationExecutionPage.navigateToExecuteCommunication();
                     communicationExecutionPage.getPaymentLinkUrl().then(link => {
                cy.log(`Generated Short Link: ${link}`);

                expect(link).to.not.be.empty;
                expect(link).to.match(/^https:\/\//);
                expect(link).to.contain('ent.io');
                expect(link).to.not.contain('http://');
                expect(link.length).to.be.lessThan(60);

            });
        });
    });
});
