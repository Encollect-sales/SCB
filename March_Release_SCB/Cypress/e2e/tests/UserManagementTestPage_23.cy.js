
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management- User should see blood group & emergency contact no fields under local address details accordion."', () => {
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

    it('User Management - TC_ID_23', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(1000);
                usermanagementpage.UserManagementTestPage_23();
            
            });
        });
    });