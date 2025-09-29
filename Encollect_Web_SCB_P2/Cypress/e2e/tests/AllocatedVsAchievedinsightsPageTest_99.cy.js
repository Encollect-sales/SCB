//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';


describe('TC99- Allocated vs Achieved Insights-Allocated vs Achieved Insights  - check the Top 10 Field Secondary by Total Accounts UnCollected graph', () => {
    let loginPage;
    let insightsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Insights').then(locators => {  
            insightsPage = new InsightsPage(locators); 
        });
    });

    it('TC98 - Allocated vs Achieved Insights-Allocated vs Achieved Insights  - check tha  Top 10 Field Secondary by Total Accounts UnCollected graph ', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                insightsPage.clickonAllocatedVsAchived099();
                // loginPage.logout();         
            });
        });
    });