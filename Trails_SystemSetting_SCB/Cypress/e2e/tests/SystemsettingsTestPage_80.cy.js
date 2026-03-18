import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe(
  'System Settings - Bulk Account Upload - Empty file validation',
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

    it('Should show error message when uploaded file is empty', () => {
      getTestData('loginData', 'login2').then(user => {

        // Login
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(900);

        // Upload empty CSV file
        systemSettingsPage.SystemsettingsPage_08();

        
      });
    });

  }
);
