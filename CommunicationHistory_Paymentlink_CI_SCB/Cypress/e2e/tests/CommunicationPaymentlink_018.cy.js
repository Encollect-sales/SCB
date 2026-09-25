import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CommunicationTemplatePage from '../pages/CommunicationTemplatePage';

describe('Communication - Verify Email delivery', () => {
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

    it('TC_018 - Email containing customer-specific payment link is delivered', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

            Cypress.on('uncaught:exception', err => {
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            communicationTemplatePage.NavigateToCreateCommunicationTemplate();
            communicationTemplatePage.selectChannelType('Email');
            communicationTemplatePage.enterTemplateName('Email');
            communicationTemplatePage.SelectRecipientType();
            communicationTemplatePage.selectEntryPoint('Collection');
            communicationTemplatePage.selectTone('Soft');
            communicationTemplatePage.EnterHeader();
            communicationTemplatePage.enterTemplateBodyemail('Hello {#Customer Name#}, please complete your payment using {#Payment Link#}');

            cy.contains('Create Template')
                .scrollIntoView()
                .click({ force: true });

            cy.wait(2000);

            communicationTemplatePage.getProcessedEmail().then(message => {
                cy.log(`Processed Message: ${message}`);

                expect(message).to.not.contain('{#Customer Name#}');
                expect(message).to.not.contain('{#Payment Link#}');
                expect(message).to.match(/https:\/\/ent\.io\/[A-Za-z0-9./?=_%-]+/);
            });
        });
    });
});