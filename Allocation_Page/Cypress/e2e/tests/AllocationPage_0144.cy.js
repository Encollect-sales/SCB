import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe(
  'TC-0144 | Agent Bulk Allocation - Account Level | Credit Card | Telecaller → Staff | Filename Validation',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {
      getLocators('loginPage').then(l => loginPage = new LoginPage(l));
      getLocators('Allocation').then(l => allocationPage = new AllocationPage(l));
    });

    it('Should show error when filename contains special characters', () => {

      getTestData('loginData', 'login2').then(user => {
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);

        allocationPage
          .Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0144();
      });
    });
  }
);
