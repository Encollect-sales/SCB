import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import NewDashboardPage from '../pages/NewDashboardPage';
 
describe('Dashboard -  Verify whether user is able to search Credit Card account by using the Status field in search filter criteria', () => {
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
 
    it('TC_ID_11 -  Verify whether user is able to search Credit Card account by using the Status field in search filter criteria', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                dashboardpage.NewDashboardTestPage_11();
               
                         
            });
        });
    });