import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Allocation Batch - .User selected the dropdown values of all filters and clicked on download accounts, now user wants to change the filter selection criteria for doing this user should be able to scroll up and change the filter dropdown values and click on download accounts once again.', () => {
  let loginPage;
  let allocationPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('allocationPage').then(locators => {
      allocationPage = new AllocationPage(locators);
    });
  });

  it('Collector Level Allocation - TC_ID_805', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      // Download the batch file
      allocationPage.downloadtemplateforallocation();

      // Update the Excel file
      const sheetName = 'Sheet1';
      const data = {
        'A2': 'M0010811195',

        
      };
      const excelFileName = 'AllocationToOwner.xlsx';
      const downloadsFolder = Cypress.config('downloadsFolder');
      const filePath = `${downloadsFolder}\\${excelFileName}`;

      cy.task('updateExcelCell', {
        filePath: filePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Incorrect data');
      allocationPage.uploadAgencyallocationBatchATA();
      });
    });
  });

});
