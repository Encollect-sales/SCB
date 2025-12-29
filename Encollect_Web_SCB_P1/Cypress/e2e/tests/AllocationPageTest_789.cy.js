import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Batch - User clicked on Upload button and selected the file without selecting  "proceed with unallocation for" then system should throw an error as "Please select proceed with unallocation for before uploading the file"', () => {
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

  it('Agency Level Allocation - TC_ID_789', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      // Download the batch file
      allocationPage.downloadAgencyAllocationbatch();

      // Update the Excel file
      const sheetName = 'Sheet1';
      const data = {
        'A2': 'DMI0010811195',
      };
      const excelFileName = 'AllocationToOwner.xlsx';
      const downloadsFolder = Cypress.config('downloadsFolder');
      const filePath = `${downloadsFolder}\\${excelFileName}`;

      cy.task('updateExcelCell', {
        filePath: filePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Account number updated successfully in the Excel file');

        allocationPage. uploadAgencyAllocationBatchWrongAccountNo();
      });
    });

    allocationPage.uploadAgencyAllocationBatchAccountNo();
  });

});
