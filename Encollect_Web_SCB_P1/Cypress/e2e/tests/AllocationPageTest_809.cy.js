import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Unallocation batch - User clicked on upload button and selected the allocation file without selecting anyone of the radio button under "Proceed with allocation for " then system should throw an error as "Please select proceed with allocation for before uploading the file" in the pop up', () => {
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

  it('Collector Level Unallocation - TC_ID_325', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      allocationPage.uploadCollectorUnallocationBatchWithoutUnAllocation();
    });
  });

});
