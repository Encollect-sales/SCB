import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import NewDashboardPage from '../pages/NewDashboardPage';
 
describe('Dashboard -  erify whether the Credit Card search results grid displays the  correct fields in the front search page on Web.', () => {
    let loginPage;
    let dashboardpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('NewDashboardPage').then(locators => {  
            dashboardpage = new NewDashboardPage(locators);
        });
    });
 
    it('TC_ID_14 - erify whether the Credit Card search results grid displays the  correct fields in the front search page on Web.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                dashboardpage.NewDashboardTestPage_14();
               
                         
            });
        });
    });