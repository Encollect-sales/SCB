import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';


describe('TC_DD_014 - Delayed Deposits (Staff) report for valid date range', () => {

  let loginPage;
  let reportsPage;

  before(() => {

    // Load Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Load Reports Page locators
    getLocators('reports').then(locators => {
      reportsPage = new ReportsPage(locators);
    });

  });

  it('Should generate Delayed Deposits report and verify undeposited duration calculation', () => {
    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

    
      reportsPage.RPT_S_0014_verifyUndepositedDurationCalculation();

    });

  });

});
