import LoginPage from '../pages/LoginPage';
import CommunicationPage from '../pages/CommunicationPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('CC-PTP-037 | Email body supports paragraphs and line breaks', () => {

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

  it('Verify email formatting is preserved with paragraphs and line breaks', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );
      cy.wait(2000);

      // ✅ Create email template with paragraphs
      communicationPage.Communication_37();

    });
  });
});
