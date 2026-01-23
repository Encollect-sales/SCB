import LoginPage from '../pages/LoginPage';
import CommunicationPage from '../pages/CommunicationPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('CC-PTP-0031 | Create Email template with Recipient=Customer and Trigger=On PTP Date', () => {

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

  it('Verify Email template is created successfully for On PTP Date trigger', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      communicationPage.Communication_31();
    });
  });
});
