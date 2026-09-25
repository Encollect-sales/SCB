import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Communication Template - TC10', () => {

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

  it('TC10 - Verify required indicator is removed when Tone field is hidden', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      communicationPage.CommunicationTestPage_10();

    });

  });

});