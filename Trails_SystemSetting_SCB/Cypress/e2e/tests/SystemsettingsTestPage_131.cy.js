import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe('Bank Master - Negative Test - Upload unsupported file extension (.csv/.txt)', () => {

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

  it('Negative Test - Upload unsupported file extension (.csv/.txt)', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(1000);
      systemSettingsPage.Systemsettings_BulkMasters_15();
    });
  });

});
