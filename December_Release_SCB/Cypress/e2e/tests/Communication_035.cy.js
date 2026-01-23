import LoginPage from '../pages/LoginPage';
import CommunicationPage from '../pages/CommunicationPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('CC-PTP-035 | Negative: Save template without selecting Recipient Type', () => {

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

  it('Verify validation error is shown when Recipient Type is not selected', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );
      cy.wait(2000);

      // ❌ Negative scenario – Recipient Type not selected
      communicationPage.Communication_35();
    });
  });
});
