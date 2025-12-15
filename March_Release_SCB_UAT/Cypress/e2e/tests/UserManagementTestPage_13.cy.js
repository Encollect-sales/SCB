
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management- Logged in user to download the template for staff for bulk enable-disable (staff)', () => {
    let loginPage;
    let usermanagementpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('UserManagementPage').then(locators => {  
            usermanagementpage = new UserManagementPage(locators); 
        });
    });

    it('User Management - TC_ID_13', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(1000);
                usermanagementpage.UserManagementTestPage_13();
            
            });
        });
    });