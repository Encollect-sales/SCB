import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication - Header Space Validation', () => {
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

  it('COM-NOT-012 | Verify leading/trailing spaces in header do not bypass validation', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      communicationPage.Communication_12();
    });
  });
});
