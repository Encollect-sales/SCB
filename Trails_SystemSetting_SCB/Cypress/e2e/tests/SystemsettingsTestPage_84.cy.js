import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe(
  'System Settings - Masters Upload - Bulk Upload Masters - Bank Master selection',
  () => {

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

    it('Should select Bank Master in Bulk Upload Masters screen', () => {
      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);

        // Navigate and select Bank Master
        systemSettingsPage.Systemsettings_BulkMasters_01();

        
      });
    });

  }
);
