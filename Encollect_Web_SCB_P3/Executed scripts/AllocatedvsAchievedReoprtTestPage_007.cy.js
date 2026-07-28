import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';
 
describe('TC_007 Reports - Allocated vs Achieved Report -Bank staff- Search result should display properly', () => {
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
 
    it('TC_007 Reports - Allocated vs Achieved Report - Search result should display properly', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                reportpage.allocatedVsAchievedReports_007();
               
                         
            });
        });
    });