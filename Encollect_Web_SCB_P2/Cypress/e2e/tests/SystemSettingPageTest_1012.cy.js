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
 
    it('System Setting - TC_ID_1012 - 1.Admin uploaded standard Account Import file with 10 records but the agreement no is blank for all records 2.Once the file got uploaded successfully admin should be able to see pop up with message "File uploaded successfully" along with transaction id', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                systemsettingPage.SystemSettingTestPage1012();
                //loginPage.logout();
                         
            });
        });
    });