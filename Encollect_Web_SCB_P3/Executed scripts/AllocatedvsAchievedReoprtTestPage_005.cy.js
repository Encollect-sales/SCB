import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';
 
describe('TC_005 Reports - Allocated vs Achieved Report -Agency Staff - Click on Allocated vs Achieved Report then search reports ', () => {
    let loginPage;
    let reportpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('ReportsPage').then(locators => {  
            reportpage = new ReportsPage(locators);
        });
    });
 
    it('TC_005 Reports - Allocated vs Achieved Report - Bank Staff - Click on Allocated vs Achieved Report then search reports and check pagination and next page button', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                reportpage.allocatedVsAchievedReports_005();
               
                         
            });
        });
    });