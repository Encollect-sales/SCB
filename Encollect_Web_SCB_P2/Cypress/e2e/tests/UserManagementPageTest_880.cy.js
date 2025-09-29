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

    it('Agent Empanelment Request - TC_ID_880 - 1.User clicked on First Name field but did not enter any value then system should show an error as "First Name is required" below to the field. 2.If user entered any special characters or numbers in first name field then system should show an error as "Please enter characters only" below to the field. 3.First name field is a string which accepts only alphabets with a length of 24 characters. 4.If user entered only one alphabet in first name field then system should show an error as "Name must be at least 2 characters long" below to the field.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                userManagementPage.UserManagementModule();
                userManagementPage.AgentEmpanelmentRequest880();
                //loginPage.logout();
                         
            });
        });
    });