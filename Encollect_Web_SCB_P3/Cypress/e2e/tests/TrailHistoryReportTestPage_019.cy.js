import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';
 
describe('TC_019 - Trail History Reports - Bank Staff - Click on Trail History report and BOM Bucket 4 and check the results', () => {
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
 
    it('TC_019 - Trail History Reports - Bank Staff - Click on Trail History report and BOM Bucket 4 and check the results', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                reportpage.trailHistoryReport_019();
               
                         
            });
        });
    });