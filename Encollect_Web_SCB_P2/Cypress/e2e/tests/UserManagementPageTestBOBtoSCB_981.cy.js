import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Agency Empanelment Request - In Agency creation screen: Agreement and renewal details, first agreement date and last renewal date when user selecting current date system should not throw error as future date.', () => {
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

    it('Agent Empanelment Request - TC_ID_981, STD-1519 ', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                userManagementPage.UserManagementModule();
                userManagementPage.AgentEnpalmentRequest981();
                //loginPage.logout();
                         
            });
        });
    });