
import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Agent Bulk Allocation - Account Level Loan (Staff → Telecaller) - Missing mandatory column validation',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it('Should fail allocation when mandatory columns are missing in uploaded file', () => {
      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
       allocationPage. Agent_Bulk_allocation_account_level_loan_account_agent_staff_082();
      });
    });
  }
);
