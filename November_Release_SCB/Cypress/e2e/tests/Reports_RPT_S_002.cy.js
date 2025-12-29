import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';


describe('RPT_S_002 | Delayed Deposits (Staff) - Data Validation', () => {

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

  it('Should display only qualifying cash receipts with correct columns and undeposited duration', () => {

    // Login as Bank Staff
    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      // Open Delayed Deposits (Staff) report
      reportsPage.RPT_S_002_Verify_Delayed_Deposits_Staff_Report_Data();

    });

  });

});
