import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Owner -If invalid data entered and user uploaded the file for allocation, the status for this allocation will show as failed.', () => {
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

  it('Agency Level Allocation - TC_ID_773', () => {
    const sheetName = 'Sheet1';
    const data = {
      'A2': 'DMI0010811195',
    };
    const excelFileName = 'UnAllocation.xlsx';
  
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      allocationPage.downloadAgencyallocationbatch();
  
      const downloadsFolder = Cypress.config('downloadsFolder');
      const filePath = `${downloadsFolder}\\${excelFileName}`;
  
      cy.task('updateExcelCell', {
        filePath: filePath,
        sheetName: sheetName,
        data: data
      }).then(() => {
        cy.log('Cells updated successfully in the Excel file');
        allocationPage.UploadFilledAgencyLevelAllocationFile290();
  
      });
    });
  });
  
});
