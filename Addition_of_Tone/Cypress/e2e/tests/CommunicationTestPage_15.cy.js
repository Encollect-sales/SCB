import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - TC15 - SMS Template Save With Tone', () => {
  let loginPage;
  let communicationPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('Communication').then(locators => {
      communicationPage = new CommunicationPage(locators);
    });
  });

  it('TC15 - Verify SMS template saves successfully when Tone is selected', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      communicationPage.CommunicationTestPage_15();
    });
  });
});