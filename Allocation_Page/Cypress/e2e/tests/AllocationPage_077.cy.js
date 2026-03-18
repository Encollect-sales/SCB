import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Agent Bulk Allocation - Account Level Loan (Staff → Telecaller) - Upload button enable validation',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it('Should enable upload button only after selecting file for Staff to Telecaller allocation', () => {
      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.Agent_Bulk_allocation_account_level_loan_account_staff_telecaller_077();
      });
    });
  }
);
