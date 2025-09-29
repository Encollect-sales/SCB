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

    it('Deposit Bank Master - TC_ID_1349 - The sequence of fields in the standard deposit bank master file should exactly match in the db.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(500);
                systemsettingPage.systemSettingModule();
                systemsettingPage.DepositeBankMaster1349();
              
                
                         
            });
        });
    });