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

    it('System Setting - TC_ID_1013 - Admin clicked on upload account import status menu to find out the status of uploaded account import file but user clicked on search button without selecting anyone of the filters', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                //systemsettingPage.systemSettingModule();
                systemsettingPage.AccountImportViaFrontEndBulkUploadCreditCard_1013();
                //loginPage.logout();
                
                         
            });
        });
    });