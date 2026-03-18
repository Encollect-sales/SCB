import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Allocation - Credit card option - Primary Allocation Upload - Upload button validation (download file - field agency, upload field - field agency)',
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

    it('Upload button should be disabled until file is selected', () => {
      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);

        // Navigate to Allocation → Bulk Upload
 
        allocationPage.Allocation_creditcard_012();
       
      });
    });

  }
);
