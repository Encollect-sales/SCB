import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';

describe('Negative Test - Upload file button should be enabled after selecting file', () => {

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

    it('Negative Test - Upload file button should be enabled after selecting file', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(user.Companyname, user.email, user.password);
              systemSettingsPage.Systemsettings_BulkMasters_base_branch_master_01();


           
            
        });

    });

});