import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Pan Card -Ensure cancel operation does not override PAN details and the original pan details should be visible after click on cancel ', () => {
    let loginPage;
    let userManagementPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('PanCard').then(locators => {  
            userManagementPage = new UserManagementPage(locators); 
        });
    });

    it('User Management -Pan Card- TC_ID_05', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                userManagementPage.PanCardTestPage_05();            
            });
        });
    });