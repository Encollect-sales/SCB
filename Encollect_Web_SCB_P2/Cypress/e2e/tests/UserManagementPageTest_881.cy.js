//import { readExcelFile } from '../utils/excelutils';
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

    it('Agent Empanelment Request - TC_ID_881 - 1.User clicked on Last Name field but did not enter any value then system should show an error as "Last Name is required" below to the field. 2.If user entered any special characters or numbers in last name field then system should show an error as "Please enter characters only" below to the field. 3.Last name field is a string which accepts only alphabets with a length of 24 characters.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                userManagementPage.UserManagementModule();
                userManagementPage.AgentEmpanelmentRequest881();
                //loginPage.logout();
                         
            });
        });
    });