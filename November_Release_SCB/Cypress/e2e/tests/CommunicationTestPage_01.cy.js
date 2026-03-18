import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';
import { faker } from '@faker-js/faker';

describe('Communication Module - ', () => {

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

  it('Communication - ', () => {

    getTestData('loginData', 'login2').then(user => {

      loginPage.login(user.Companyname,user.email,user.password
      );

      cy.wait(2000);

      communicationPage.CommunicationTestPage_01();
    });
  });
});
