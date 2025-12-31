import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemSettingPage from '../pages/SystemSettingPage';
 
describe('System Setting -  Master Upload - Admin Clicked on Bulk upload master status and clicked on search button without selecting the file type. There should be an error message pop to be shown', () => {
    let loginPage;
    let systemsettingpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('SystemSettingPage').then(locators => {  
            systemsettingpage = new SystemSettingPage(locators);
        });
    });
 
    it('Master Upload- TC_ID_13332', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingpage.SystemSettingTestPage_1332();
               
                         
            });
        });
    });