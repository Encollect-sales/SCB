import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Communication Template - TC12', () => {

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

  it('TC12 - Verify validation error when Tone is not selected for SMS channel', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      communicationPage.CommunicationTestPage_12();

    });

  });

});