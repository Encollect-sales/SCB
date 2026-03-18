import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe('TC_0117 | Credit Card | Staff to Agent | Upload button enable', () => {

  let loginPage;
  let allocationPage;

  before(() => {
    getLocators('loginPage').then(l => loginPage = new LoginPage(l));
    getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
  });

  it('Should enable Upload button after selecting file', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.Agent_Bulk_allocation_account_level_credit_card_staff_agent_0117();
    });
  });

});
