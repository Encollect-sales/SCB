import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Agency Empanelment Request', () => {
  let loginPage;
  let userManagementPage; 

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('UserManagementPage').then(locators => {
      userManagementPage = new UserManagementPage(locators);
    });
  });

  it('Create Agency - TC_ID_597', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      userManagementPage.CreateAgency036();

    });
  });

});
