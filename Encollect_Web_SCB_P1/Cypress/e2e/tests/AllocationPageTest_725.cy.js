import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Unallocation batch -  Once after uploading the allocation file, the file status will change to processed then user should receive email notification', () => {
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

  it('Collector Level UnAllocation - TC_ID_725', () => {
    const sheetName = 'Sheet1';
    const data = {
      'A2': '68200000021940',
    };
    const excelFileName = 'UnAllocation.xlsx';
  
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.downloadCollectorUnallocationbatch();
  
      const downloadsFolder = Cypress.config('downloadsFolder');
      const filePath = `${downloadsFolder}\\${excelFileName}`;
  
      cy.task('updateExcelCell', {
        filePath: filePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Cells updated successfully in the Excel file');
      });
    });
  });
  
});
