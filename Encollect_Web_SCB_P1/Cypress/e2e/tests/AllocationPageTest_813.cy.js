import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Collector Unallocation batch - User selected agent radio button and clicked on upload button and selected the file, but in the pop up user clicked on close button so that user will remain in same unallocation page. now user selected tele callerradio button and uploaded the file for collector level unallocation.', () => {
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

  it('Collector Level Unallocation - TC_ID_813', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);

      allocationPage.uploadCollectorUnallocationCancelUploadAndAgainUpload();
    });
  });

});
