import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';

describe(
  'TC-0245 | Agent Bulk Allocation - Account Level | Credit Card | Telecaller → Agent | Filename Validation',
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
      'Should show error when uploaded file name contains special characters',
      () => {

        getTestData('loginData', 'login2').then(user => {

          // Login
          loginPage.login(
            user.Companyname,
            user.email,
            user.password
          );

          cy.wait(1000);

          // Execute POM method
          allocationPage
            .Agent_Bulk_allocation_account_level_credit_card_telecaller_agent_0245();

        });

      }
    );

  }
);
