import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe('Bucket Master - Negative Test - Upload file with invalid data type in a field', () => {

  let loginPage;
  let systemSettingsPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('SystemSettings').then(locators => {
      systemSettingsPage = new SystemsettingsPage(locators);
    });
  });

  it('Negative Test - Upload file with invalid data type in a field', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(1000);
      systemSettingsPage.Systemsettings_BulkMasters_Bucket_branch_master_11();
    });
  });

});
