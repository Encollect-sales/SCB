import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import DashboardPage from '../pages/DashboardPage';
 
describe('Dashboard - Dashboard - Issue Receipt from search account through Dashboard', () => {
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
 
    it('User should Issue Receipt from search account through Dashboard - TC_ID_286', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                dashboardpage.DashboardTestPage_286();
               
                         
            });
        });
    });