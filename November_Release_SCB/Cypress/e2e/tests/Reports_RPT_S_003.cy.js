import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';


describe('RPT_S_003 | Delayed Deposits (Staff)', () => {

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

  it('Negative – Date range greater than 31 days not allowed', () => {

    // Login as Bank Staff
    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      // Open Delayed Deposits (Staff) report
      reportsPage.RPT_S_003_Date_Range_Greater_Than_31_Days_Not_Allowed();

    });

  });

});
