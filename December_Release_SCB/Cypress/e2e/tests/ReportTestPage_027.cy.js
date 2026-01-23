import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

describe('CHR_WEB_027 - Variable Definition shows NA for other trigger types', () => {

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

  it('Should show NA in Variable Definition column for non X-based trigger types ', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);
      reportsPage.ReportTestPage_27();
    });
  });
});
