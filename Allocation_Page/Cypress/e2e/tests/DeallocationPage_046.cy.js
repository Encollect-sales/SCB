import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Allocation - Agent Bulk Deallocation Account Level (agent) - Empty file validation',
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

    it('Should upload empty file and show Failed status at Credit Card Level', () => {

      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(
          user.Companyname,
          user.email,
          user.password
        );

        cy.wait(1000);

        // Execute Credit Card Level Deallocation
        allocationPage.Agent_Bulk_Deallocation_account_level_agent_046();

      });
    });
  }
);
