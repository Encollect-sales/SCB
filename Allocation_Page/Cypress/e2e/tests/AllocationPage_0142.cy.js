import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe(
  'TC-0142 | Agent Bulk Allocation - Account Level | Credit Card | Telecaller → Staff | Upload Button Validation',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it('Should enable Upload button after attaching valid template file', () => {

      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);

        allocationPage
          .Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0142();
      });
    });
  }
);
