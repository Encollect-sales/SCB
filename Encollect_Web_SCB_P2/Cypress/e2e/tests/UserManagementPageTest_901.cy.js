//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Documentation Details', () => {
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

    it('Agent Empanelment Request - TC_ID_901 - 1.User should be able to select document type from the dropdown and click on add button. 2.The documents to be uploaded should be in JPEG, PNG,PDF format only with maximum size of 2MB 3. If the file has special characters or spaces in the file name, while uploading the file system should show an error as "File name should not contain special characters or spaces" in the pop up. 4. If the file size is greater than 2MB then system should show an error as "File size should not be greater than 2MB" in the pop up', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                userManagementPage.UserManagementModule();
                userManagementPage.AgentEmpanelmentRequest901();
                //loginPage.logout();
                         
            });
        });
    });