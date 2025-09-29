import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SystemSettingPage from '../pages/SystemSettingPage';
 
describe('System Setting - Account Import Via Front End Bulk Upload (Credit Card)', () => {
    let loginPage;
    let systemsettingPage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('SystemSettingPage').then(locators => {  
            systemsettingPage = new SystemSettingPage(locators);
        });
    });
 
    it('System Setting - TC_ID_1008 - 1.Admin to upload Account import file from frontend by clicking on System setting >>Account import master>>Upload Account import master', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                systemsettingPage.SystemSettingTest_1008();
                //oginPage.logout();
                         
            });
        });
    });