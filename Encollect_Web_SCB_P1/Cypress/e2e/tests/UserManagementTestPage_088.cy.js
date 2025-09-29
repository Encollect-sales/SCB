
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management- User Management -Verify when user clicked on Search button without entering search filter criteria systme is throwing as error"Enter at least one filter criteria"', () => {
    let loginPage;
    let usermanagementpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DbsToScbs').then(locators => {  
            usermanagementpage = new UserManagementPage(locators); 
        });
    });

    it('Payment - TC_ID_088', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                usermanagementpage.UserManagementTestPage_088();
            
            });
        });
    });