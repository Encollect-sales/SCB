import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Staff', () => {
    let loginPage;
    let userManagementPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('UserManagementPage').then(locators => {  
            userManagementPage = new UserManagementPage(locators); 
        });
    });

    it('EnableDisable Staff - TC_ID_551 - Logged in user to enable disabled staff in the ENCollect Application', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                userManagementPage.UserManagementModule();
                userManagementPage.EnableDisableStaff551();
                //loginPage.logout();
                         
            });
        });
    });