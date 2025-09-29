import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Local Address Details', () => {
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

    it('Agent Empanelment Request - TC_ID_892 - 1.User clicked on email id field but did not enter any value then system should show an error as "Email is required" below to the field. 2.If user entered incorrect email id then system should show an error as "Enter valid email" below to the field.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                userManagementPage.UserManagementModule();
                userManagementPage.LocalAddDetailils892();
                //loginPage.logout();
                         
            });
        });
    });