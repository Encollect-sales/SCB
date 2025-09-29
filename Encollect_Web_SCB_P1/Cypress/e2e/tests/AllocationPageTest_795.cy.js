import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload agency Unallocation batch - User clicked on search button without selecting anyone of the filter in primary allocation status, then system should throw an error as "Enter atleast one filter value" in the pop up', () => {
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

  it('Upload file extension and validation check - TC_ID_795', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      allocationPage.uploadAgencyUnallocationBatchInvalidFileFormat();
    });
  });

});
