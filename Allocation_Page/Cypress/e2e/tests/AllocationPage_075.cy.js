import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Agent Bulk Deallocation - Customer Level (Telecaller) - Upload validation - TC 075',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it('Agent_Bulk_Deallocation_customer_level_telecaller_075', () => {
      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
        allocationPage.Agent_Bulk_allocation_account_level_loan_account_staff_agent_075();
      });
    });

  }
);
