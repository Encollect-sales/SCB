import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Create Agent', () => {
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

    it('Agent Empanelment Request - TC_ID_887 - 1. User clicked on UUID Number field but did not enter any value then system should show an error as "Please Enter UDID Number" below to the field.  2. User entered UUID Number which is less than 6 digits then system should show an error as "UDID Number must be 6 digits long" below to the field.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                userManagementPage.UserManagementModule();
                userManagementPage.UserManagement_887();
                // loginPage.logout();
                         
            });
        });
    });
