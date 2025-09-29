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

    it('Agent Empanelment Request - TC_ID_885 - 1. User entered special characters or alphabets in "DRA Unique Registration Number" field then system should show an error as "Please enter Valid DRA Unique Registration Number" below to the field. 2. DRA Unique Registration Number is numeric field with length of 15 digits.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(3000);
                userManagementPage.UserManagementModule();
                userManagementPage.UserManagement_885();
                //loginPage.logout();
                         
            });
        });
    });
