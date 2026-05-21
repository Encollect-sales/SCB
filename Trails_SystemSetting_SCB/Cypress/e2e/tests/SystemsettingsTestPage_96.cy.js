import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe('Base Branch Master - If the file is not getting processed then it should show failed under the status column', () => {

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

    it('Negative Test - Wrong template upload', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(user.Companyname, user.email, user.password);
              systemSettingsPage.Systemsettings_BulkMasters_base_branch_master_05();



           
            
        });

    });

});