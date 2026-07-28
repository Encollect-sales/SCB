import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PermissionPage from '../pages/PermissionPage';
 
describe('System Settings - permissions - user can click on assign permission and search the designations with search field', () => {
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
 
    it('System Settings - permissions - TC_ID_45', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                permissionpage.PermissionTestPage_45();
               
                         
            });
        });
    });