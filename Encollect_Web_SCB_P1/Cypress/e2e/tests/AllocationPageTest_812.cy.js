import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Unallocation batch - User downloaded the template and entered incorrect account number and uploaded the file for unallocation, then system should show the status as "Failed"', () => {
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

  it('Collector Level Unallocation - TC_ID_812', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      // Download the batch file
      allocationPage.downloadCollectorUnallocationbatch();

      // Update the Excel file
      const sheetName = 'Sheet1';
      const data = {
        'A2': '99990000012749',
      };
      const excelFileName = 'UnAllocation.xlsx';
      const downloadsFolder = Cypress.config('downloadsFolder');
      const filePath = `${downloadsFolder}\\${excelFileName}`;

      cy.task('updateExcelCell', {
        filePath: filePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Account number updated successfully in the Excel file');

        allocationPage.uploadCollectorUnallocationBatchWrongAccountNo();
      });
    });
  });

});
