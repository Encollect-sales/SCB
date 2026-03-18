import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Agent Bulk Allocation | Account Level | Credit Card | Telecaller | 0146',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    beforeEach(() => {
      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(2000);
      });
    });

    it('0146 | Empty file upload | Status should be Failed', () => {
      allocationPage.Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0146();
    });

  }
);
