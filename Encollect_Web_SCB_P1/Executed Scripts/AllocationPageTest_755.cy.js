import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Owner', () => {
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

  it('Agency Level Allocation - TC_ID_755', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.Allocation_755();

      // // Download the batch file
      // allocationPage.downloadAgencyAllocationOwnerFile();

      // // Update the Excel file
      // const sheetName = 'Sheet1';
      // const data = {
      //   'A2': 'MMM0010811195',
      // };
      // const excelFileName = 'AllocationToOwner.xlsx';
      // const downloadsFolder = Cypress.config('downloadsFolder');
      // const filePath = `${downloadsFolder}\\${excelFileName}`;

      // cy.task('updateExcelCell', {
      //   filePath: filePath,
      //   sheetName: sheetName,
      //   data: data
      // }).then(() => {
      //   cy.log('Account number updated successfully in the Excel file');

      //   //allocationPage.uploadAgencyAllocationOwnerWrongAccountNo();
      //   allocationPage.Allocation_755();
      //});
    });
  });

});
