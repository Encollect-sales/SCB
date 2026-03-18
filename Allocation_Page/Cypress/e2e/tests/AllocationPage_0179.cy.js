import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Agent Bulk Allocation | Customer Level | Loan | Agent | Telecaller | 0179',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it(
      '0179 | Invalid file format | Should show error',
      () => {
        getTestData('loginData', 'login2').then(user => {
          loginPage.login(user.Companyname, user.email, user.password);
          allocationPage
            .Agent_Bulk_allocation_customer_Level_loan_account_agent_telecaller_0179();
        });
      }
    );

  }
);
