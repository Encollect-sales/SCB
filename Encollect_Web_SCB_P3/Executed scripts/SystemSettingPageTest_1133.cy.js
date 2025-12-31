import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SystemSettingPage from '../pages/SystemSettingPage';

describe('System Setting - Master Upload', () => {
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

    it('Bucket Master - TC_ID_1133 - Admin downloaded the standard bucket master file and entered 10 records of current bucket and uploaded the file back to ENCollect', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingPage.systemSettingModule();
                systemsettingPage.BucketMaster1133();
              
                
                         
            });
        });
    });