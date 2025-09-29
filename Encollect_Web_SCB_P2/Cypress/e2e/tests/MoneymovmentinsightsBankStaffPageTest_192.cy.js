//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';


describe('TC192- Money Movement Insights (Bank Staff)- check Total Accounts by Product Group graph' , () => {
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

    it('TC192 -Money Movement Insights (Bank Staff)-check Total Accounts by Product Group graph', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                insightsPage.clickonmoneymovementingistspage192();
                // loginPage.logout();         
            });
        });
    });