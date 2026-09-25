import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - WhatsApp Template - TC16', () => {
  let loginPage;
  let communicationPage;

  before(() => {
    getLocators('loginPage').then((locators) => {
      loginPage = new LoginPage(locators);
    });

    getLocators('Communication').then((locators) => {
      communicationPage = new CommunicationPage(locators);
    });
  });

  it('TC16 - Verify WhatsApp template saves successfully when Tone is selected', () => {
    getTestData('loginData', 'login').then((user) => {
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(3000);

      communicationPage.CommunicationTestPage_16();
    });
  });
});