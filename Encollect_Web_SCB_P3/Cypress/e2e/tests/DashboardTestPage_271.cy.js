import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import DashboardPage from '../pages/DashboardPage';
 
describe('Dashboard - Dashboard -', () => {
    let loginPage;
    let dashboardpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('DashboardPage').then(locators => {  
            dashboardpage = new DashboardPage(locators);
        });
    });
 
    it('User should enter a valid credentials to see their account details - TC_ID_271', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                dashboardpage.DashboardTestPage_271();
               
                         
            });
        });
    });