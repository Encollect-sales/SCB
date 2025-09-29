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

    it('Agent Empanelment Request - TC_ID_896 - 1.User selected Landline from type dropdown but did not entered any value in Area code then system should show an error as "Area code is required" below to the field. 2.If user entered any special characters or alphabets in area code field then system should show an error as "Only numbers are allowed" below to the field. 3.If user entered only 1 digit in area code field then system should show an error as "Minimum 2 Numbers are required" below to the field. 4.Area code is a numeric field which has max length of 4 digits and minimum of 2 digits.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(20000);
                userManagementPage.UserManagementModule();
                userManagementPage.AgentEnpalmentRequest896();
                //loginPage.logout();
                         
            });
        });
    });