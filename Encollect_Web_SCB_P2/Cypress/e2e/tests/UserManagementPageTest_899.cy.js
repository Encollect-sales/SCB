import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Banking Details', () => {
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

    it('Agent Empanelment Request - TC_ID_899 - 1.If user entered any special characters or alphabets in bank account number field then system should show an error as "Please enter valid Bank account number." below to the field. 2.when user entere account number which is less than 10 digits then system should show an error as "Bank account number should be minimum 10 characters." below to the field.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                userManagementPage.UserManagementModule();
                userManagementPage.AgentEnpalmentRequest899();
                //loginPage.logout();
                         
            });
        });
    });