import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe('Base Branch Master - Negative Test - Upload Large file', () => {

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

    it('Base Branch Master - Negative Test - Upload Large file', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(user.Companyname, user.email, user.password);
              systemSettingsPage. Systemsettings_BulkMasters_Disposition_master_06();



           
            
        });

    });

});