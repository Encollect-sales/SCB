import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Allocation - Agent Bulk Deallocation Account Level (agent) - Special character filename validation',
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

    it('Should show error when filename contains special characters at Credit Card Level', () => {

      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(
          user.Companyname,
          user.email,
          user.password
        );

        cy.wait(1000);

        // Navigate to Allocation → Agent Bulk Deallocation Credit Card Level
        allocationPage.Agent_Bulk_Deallocation_account_level_agent_044();

      });
    });
  }
);
