import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PermissionPage from '../pages/PermissionPage';
 
describe('System Settings - permissions - user enter the scheme name and click on proceed see the permission and gave the permissions and again click on proceed see a success message ', () => {
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
 
    it('System Settings - permissions - TC_ID_04', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                permissionpage.PermissionTestPage_04();
               
                         
            });
        });
    });