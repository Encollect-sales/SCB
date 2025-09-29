import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload agency Unallocation batch - ser should be able to open the template and able to update the account numbers in account no field4. user should be able to save the file after updating the account no.', () => {
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

  it('Agency Level UnAllocation - TC_ID_703', () => {
    const sheetName = 'Sheet1';
    const data = {
      'A2': 'DMI0010811195',
    };
    const excelFileName = 'UnAllocation.xlsx';
  
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.downloadAgencyUnallocationbatch();
  
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
