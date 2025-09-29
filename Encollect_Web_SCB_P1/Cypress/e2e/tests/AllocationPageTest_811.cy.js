import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Unallocation batch - User clicked on upload button and selected the file, in the pop up user should be able to see OK & Close Buttons, when user clicked on close button user should remain in same Collector level unallocation page.', () => {
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

  it('Collector Level Unallocation - TC_ID_811', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      allocationPage.uploadCollectorUnallocationCancelUpload();
    });
  });

});
