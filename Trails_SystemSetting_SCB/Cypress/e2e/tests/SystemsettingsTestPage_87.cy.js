import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe(
  'System Settings - Masters Upload - Validation when upload file without selecting Proceed with Upload For',
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

    it('Should show validation message when file is uploaded without selecting Proceed with Upload For', () => {
      getTestData('loginData', 'login2').then(user => {

        const filePath = 'AllocationToOwner.xlsx';

        // Login
        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);
          systemSettingsPage.Systemsettings_BulkMasters_04();


        

      });
    });

  }
);
