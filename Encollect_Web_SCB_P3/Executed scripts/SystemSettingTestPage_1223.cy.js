import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemSettingPage from '../pages/SystemSettingPage';
 
describe('System Setting - Disposition code Master - Admin downloaded the standard disposition code master file and entered 500 records uploaded the file back to ENCollect.', () => {
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
 
    it('Master Upload- TC_ID_1223-ENCollect system will insert a new row for all the new records in the db and for duplicate records system will throw an error An email will trigger on admin email id with status.".', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingpage.SystemSettingTestPage_1223();
               
                         
            });
        });
    });