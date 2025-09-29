import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Agency Level UnAllocation - User selected field agency radio button and clicked on upload button and selected the file, but in the pop up user clicked on close button so that user will remain in same unallocation page. now user selected telecalling agency radio button and uploaded the file for agency level unallocation.', () => {
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

  it('Agency Level UnAllocation - TC_ID_793', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      // Download the batch file
      allocationPage.downloadAgencyUnallocationbatch();

      // Update the Excel file
      const sheetName = 'Sheet1';
      const data = {
        'A2': 'MMM0010811195',
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

        allocationPage.uploadAgencyUnallocationBatchWrongAccountNo();
      });
    });
  });

});
