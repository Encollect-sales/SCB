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
 
    it('System Setting - TC_ID_1026 - Admin entered 1000 records in standard account import file with all mandatory data and the file size is 3MB(Threshold)', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                systemsettingPage.Systemsetting1026();
                //loginPage.logout();
                         
            });
        });
    });