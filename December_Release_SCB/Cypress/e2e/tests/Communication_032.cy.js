import LoginPage from '../pages/LoginPage';
import CommunicationPage from '../pages/CommunicationPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('CC-PTP-018 | Negative: Recipient Type != Customer for On PTP Date', () => {

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

  it('Verify system blocks template creation when Recipient Type is not Customer', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );
      cy.wait(2000);

      // ❌ Negative validation
      communicationPage.Communication_32();
    });
  });
});
