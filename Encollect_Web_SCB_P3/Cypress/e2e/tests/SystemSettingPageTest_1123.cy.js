import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
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

    it('Bucket Master- TC_ID_1123 - Admin after uploading the product master file back to ENCollect admin should receive a notification on email id with the status.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                systemsettingPage.systemSettingModule();
                systemsettingPage.BucketMaster1123();
              
                
                         
            });
        });
    });