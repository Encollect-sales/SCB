import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PermissionPage from '../pages/PermissionPage';
 
describe('System Settings - permissions - if user create a scheme name with existing name shows an error message', () => {
    let loginPage;
    let permissionpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('Permission').then(locators => {  
            permissionpage = new PermissionPage(locators);
        });
    });
 
    it('System Settings - permissions - TC_ID_18', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                permissionpage.PermissionTestPage_18();
               
                         
            });
        });
    });