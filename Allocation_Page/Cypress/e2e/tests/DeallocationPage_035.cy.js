import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Allocation - Agency Bulk Deallocation Customer Level - Empty file upload status validation',
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

    it('Should show Failed status in Agency Deallocation Status for empty file upload at Customer Level', () => {

      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(
          user.Companyname,
          user.email,
          user.password
        );

        cy.wait(1000);

        // Navigate to Allocation → Agency Bulk Deallocation Customer Level
        allocationPage.Agency_Bulk_Deallocation_Customer_Level_035();

      });
    });
  }
);
