import LoginPage from '../pages/LoginPage';
import CommunicationPage from '../pages/CommunicationPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('COM-TRG-020 | Recipient type is dynamic for Entry Point = Collection', () => {
  let loginPage;
  let communicationPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('communication').then(locators => {
      communicationPage = new CommunicationPage(locators);
    });
  });

  it('Verify Recipient Type shows only Agent for Collection entry point', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      communicationPage.Communication_20();
    });
  });
});
