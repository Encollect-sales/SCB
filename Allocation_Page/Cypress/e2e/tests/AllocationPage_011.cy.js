import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';

describe(
  'Allocation - Agency bulk allocation Account level - Empty File validation (download file - field agency, upload field - field agency)',
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

    it('Should show error when uploading an empty file', () => {

      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(
          user.Companyname,
          user.email,
          user.password
        );

        cy.wait(1000);

        // Navigate to Allocation → Primary Allocation Upload
        allocationPage.Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_011();

       
      });
    });
  }
);
