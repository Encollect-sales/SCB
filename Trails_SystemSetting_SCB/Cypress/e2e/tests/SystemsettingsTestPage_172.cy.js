import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe('Department and Designation Master - Negative Test - Validate exact error/toast message text on failure', () => {

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

  it('Negative Test - Validate exact error/toast message text on failure', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(1000);
      systemSettingsPage.Systemsettings_BulkMasters_Department_Designation_master_16();
    });
  });

});
