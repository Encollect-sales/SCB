import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SystemSettingPage from '../pages/SystemSettingPage';

describe('System Setting - Account Import Via Front End Bulk Upload (Loans)', () => {
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

    it('System Setting - TC_ID_996 - Admin while uploading the Account import file into ENCollect should not change the file extension.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                systemsettingPage.systemSettingModule();
                systemsettingPage.AccountImportViaFrontEndBulkUploadLoan_996();
                //loginPage.logout();
                
                         
            });
        });
    });