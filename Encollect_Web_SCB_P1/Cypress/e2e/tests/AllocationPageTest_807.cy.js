import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Allocation Batch - User entered required data in the template and clicked on upload button In the pop message user clicked on close button instead of OK, then user should go back to allocation page.', () => {
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

  it('Collector Level Allocation - TC_ID_807', () => {
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
      //allocationPage.uploadAgencyallocationBatchATAClose();
      });
    });
  });

});
