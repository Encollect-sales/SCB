import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PermissionPage from '../pages/PermissionPage';
 
describe('System Settings - permissions - user can search the permissions in the search field and it shows result on the result grid ', () => {
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
 
    it('System Settings - permissions - TC_ID_25', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                permissionpage.PermissionTestPage_25();
               
                         
            });
        });
    });