import 'cypress-file-upload';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/Locatorutils';
import { getTestData } from '../utils/TestDataUtils';

describe(
  'Agent Bulk Allocation | Account Level | Credit Card | Telecaller | 0145',
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

    beforeEach(() => {
      getTestData('loginData', 'login2').then(user => {
        loginPage.login(
          user.Companyname,
          user.email,
          user.password
        );
        cy.wait(2000);
      });
    });

    it(
      '0145 | File size validation | Should show error for file larger than 2MB',
      () => {
        allocationPage
          .Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0145();
      }
    );

  }
);
