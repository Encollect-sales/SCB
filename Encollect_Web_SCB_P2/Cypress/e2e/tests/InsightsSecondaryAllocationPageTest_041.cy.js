//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';


describe('TC_041 - Insights - Secondary Allocation Insights - Overview - Hover on "i" icon and check the message', () => {
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

    it('TC_041 - Insights - Secondary Allocation Insights - Overview - Overview - Hover on "i" icon and check the message', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                insightsPage.clickonSecondaryInsights041();
                // loginPage.logout();         
            });
        });
    });