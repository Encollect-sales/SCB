import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemSettingPage from '../pages/SystemSettingPage';
 
describe('System Setting - Disposition code Master - Admin entered 500 records in standard disposition code master file and for all records mandatory data is missing(I.e.disposition code group or code or permissible for field agent (yes/no) or short description) and the file size is 2.5MB.', () => {
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
 
    it('Master Upload- TC_ID_1221-disposition code master file will get failed because mandatory data is missing for all records All failed records should move to intermediateerrortable An email will trigger on admin email id with status.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingpage.SystemSettingTestPage_1220();
               
                         
            });
        });
    });