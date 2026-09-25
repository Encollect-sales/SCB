
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Variable Substitution - Verify Payment Link replacement', () => {
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

    it('TC_015 - Payment Link placeholder replaced by generated short link', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            cy.contains("Search Communication Templates").scrollIntoView().click({force:true});
            communicationTemplatePage.getProcessedMessage().then(message => {
                cy.log(`Processed Message: ${message}`);

                expect(message).to.not.contain('#{#Payment Link#}');
                expect(message).to.match(/https:\/\/ent\.io\/[A-Za-z0-9./?=_%-]+/);
            });
        });
    });
});
