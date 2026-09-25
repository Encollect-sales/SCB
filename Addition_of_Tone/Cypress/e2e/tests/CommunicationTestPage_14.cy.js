import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Create Template - TC14', () => {

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

  it('TC14 - Verify Email template saves successfully when Tone is selected', () => {

    getTestData('loginData', 'login').then((user) => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2500);

      communicationPage.CommunicationTestPage_14();

    });

  });

});