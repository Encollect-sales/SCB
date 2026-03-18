import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe(
  'Agent Bulk Allocation - Account Level | Credit Card | Telecaller → Telecaller | File Upload Validation',
  () => {

    let loginPage;
    let allocationPage;

    before(() => {

      getLocators('loginPage').then(locators => {
        loginPage = new LoginPage(locators);
      });

      getLocators('Allocation').then(locators => {
        allocationPage = new AllocationPage(locators);
      });

    });

    it(
      'Should enable Upload button after attaching a valid agency template file',
      () => {

        getTestData('loginData', 'login2').then(user => {

          // Login
          loginPage.login(
            user.Companyname,
            user.email,
            user.password
          );

          cy.wait(1000);

          // Agent Bulk Allocation - Account Level - Credit Card - Telecaller
          allocationPage
            .Agent_Bulk_allocation_account_level_credit_card_telecaller_telecaller_0244();

        });

      }
    );

  }
);
