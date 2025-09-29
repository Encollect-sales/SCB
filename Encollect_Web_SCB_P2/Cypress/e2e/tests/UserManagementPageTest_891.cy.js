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

    it('Agent Empanelment Request - TC_ID_891 - 1.User clicked on postal code field but did not enter any value then system should show an error as "Pin code is required" below to the field. 2.If user entered special characters or alphabets then system should show an error as "Enter valid 6 digit pincode" below to the field. 3.If user entered postal code which is less than 6 digit then system should show an error as "Enter valid 6 digit pincode" below to the field. 4. Postal code is a numeric field which has length of 6 digits.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(12000);
                userManagementPage.UserManagementModule();
                userManagementPage.LocalAddDetailils891();
                //loginPage.logout();
                         
            });
        });
    });