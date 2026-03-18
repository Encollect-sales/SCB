import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Agent Bulk Allocation | Customer Level | Credit Card | Staff | Agent | 0208',
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
      '0208 | Empty file upload | Status should be Failed',
      () => {
        getTestData('loginData', 'login2').then(user => {

          // Login
          loginPage.login(
            user.Companyname,
            user.email,
            user.password
          );

          // Execute testcase
          allocationPage
            .Agent_Bulk_allocation_customer_credit_card_account_staff_agent_0208();

        });
      }
    );

  }
);
