import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemSettingPage from '../pages/SystemSettingPage';
 
describe('System Setting - Deposit Bank Master - Admin uploaded deposit bank master file with 10 records but for 5 records deposit bank name is not updated.', () => {
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
 
    it('Master Upload- TC_ID_1340-An email will trigger on admin email id with an attachment".', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingpage.SystemSettingTestPage_1340();
               
                         
            });
        });
    });