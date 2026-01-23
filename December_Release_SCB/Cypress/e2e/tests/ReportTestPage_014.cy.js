import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

describe('CHR_WEB_014 - Trigger Type dropdown loads values', () => {

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

  it('Verify Trigger Type dropdown displays values', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      reportsPage.ReportTestPage_14();
    });
  });
});
