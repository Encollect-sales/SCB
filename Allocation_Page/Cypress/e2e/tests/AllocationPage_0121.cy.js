import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe('TC_0121 | Credit Card | Staff to Agent | Empty file upload', () => {

  let loginPage;
  let allocationPage;

  before(() => {
    getLocators('loginPage').then(l => loginPage = new LoginPage(l));
    getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
  });

  it('Should show Failed status for empty file upload', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.Agent_Bulk_allocation_account_level_credit_card_staff_agent_0121();
    });
  });

});
