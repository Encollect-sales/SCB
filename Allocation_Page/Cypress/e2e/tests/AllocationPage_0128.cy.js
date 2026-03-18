import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe('TC_0128 | Credit Card | Agent to Staff | Invalid file format', () => {

  let loginPage;
  let allocationPage;

  before(() => {
    getLocators('loginPage').then(l => loginPage = new LoginPage(l));
    getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
  });

  it('Should display error for invalid file format', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.Agent_Bulk_allocation_account_level_credit_card_agent_staff_0128();
    });
  });

});
