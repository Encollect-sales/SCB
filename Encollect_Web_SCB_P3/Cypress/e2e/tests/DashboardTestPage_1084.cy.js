import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import DashboardPage from '../pages/DashboardPage';
 
describe('Dashboard -1.User should be able to search credit card account by credit card last 4 digits', () => {
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
 
    it('User should be able to search credit card account by credit card last 4 digits. - TC_ID_1084', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                dashboardpage.DashboardTestPage_1084();
               
                         
            });
        });
    });