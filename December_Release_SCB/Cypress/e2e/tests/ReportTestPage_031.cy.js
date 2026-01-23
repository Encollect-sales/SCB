import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

describe('CHR_WEB_033 - should verify Read % is calculated correctly', () => {

  let loginPage;
  let reportsPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('reports').then(locators => {
      reportsPage = new ReportsPage(locators);
    });
  });

  it('Should verify Read % calculation', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      // Generate report
      reportsPage.ReportTestPage_31();

     
    });
  });
});
