import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe(
  'System Settings - Masters Upload - Click Upload without selecting anything',
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

    it('Should show validation error when Upload is clicked without selecting master or file', () => {
      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);

        // Navigate to Bulk Upload Masters page
        systemSettingsPage.Systemsettings_BulkMasters_02();

       

      });
    });

  }
);
