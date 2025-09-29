import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Agency Empanelment Request', () => {
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

    it('Agreement and renewal details - TC_ID_152', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(1000);
                userManagementPage.DatevalidationforExpiryDate();   
                //loginPage.logout();         
            });
        });
    });