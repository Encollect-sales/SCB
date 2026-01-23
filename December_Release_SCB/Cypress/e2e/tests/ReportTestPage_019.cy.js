import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe('CHR_WEB_019 - Cascading refresh on dependent filter selection', () => {

  let loginPage;
  let reportsPage;

  before(() => {
    getLocators('loginPage').then(l => loginPage = new LoginPage(l));
    getLocators('reports').then(l => reportsPage = new ReportsPage(l));
  });

  it('Verify Trigger Name refreshes correctly on back-to-back selections', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      reportsPage.ReportTestPage_19();
    });

    
  });
});
