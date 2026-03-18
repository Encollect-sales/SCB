import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Agent Bulk Allocation | Customer Level | Loan | Staff | Telecaller | 0165',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(locators => {
        loginPage = new LoginPage(locators);
      });

      getLocators('Allocation').then(locators => {
        allocationPage = new AllocationPage(locators);
      });
    });

    it(
      '0165 | Filename with special characters | Should show validation error',
      () => {
        getTestData('loginData', 'login2').then(user => {

          // Login
          loginPage.login(
            user.Companyname,
            user.email,
            user.password
          );

          // Execute POM method
          allocationPage
            .Agent_Bulk_allocation_customer_Level_loan_account_staff_telecaller_0165();

        });
      }
    );

  }
);
