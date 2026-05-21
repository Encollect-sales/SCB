import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe(
  'System Settings - Masters Upload - Cancel file selection',
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

    it('Should clear selected file when user cancels file upload', () => {
      getTestData('loginData', 'login2').then(user => {

        const filePath = 'Bank_Master_Valid.csv';

        // Login
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);
     systemSettingsPage.Systemsettings_BulkMasters_08();

        
      });
    });

  }
);
