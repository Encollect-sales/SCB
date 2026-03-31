import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import NewDashboardPage from '../pages/NewDashboardPage';
 
describe('Dashboard - Show exact fields in the cc result grid ', () => {
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
 
    it('TC_ID_02 - Show exact fields in the cc result grid', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                dashboardpage.NewDashboardTestPage_02();
               
                         
            });
        });
    });