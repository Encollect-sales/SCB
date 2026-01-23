import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Body Length Boundary Validation', () => {
  let loginPage;
  let communicationPage;

  before(() => {
    // Load Login locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Load Communication locators
    getLocators('communication').then(locators => {
      communicationPage = new CommunicationPage(locators);
    });
  });

  it('COM-NOT-011 | Body length boundary - 101 characters should be rejected', () => {
    getTestData('loginData', 'login').then(user => {
      // Login
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      // Execute test case
      communicationPage.Communication_11();
    });
  });
});
