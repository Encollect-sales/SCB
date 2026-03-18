import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Agent Bulk Allocation | Customer Level | Credit Card | Staff | 0200',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it('0200 | Invalid file format | png', () => {
      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
        allocationPage
          .Agent_Bulk_allocation_customer_credit_card_account_staff_staff_0200();
      });
    });
  }
);
