//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';


describe('TC256 - Money Movement Insights (Agency Staff)-   show 10 result only', () => {
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

    it('TC256 -Money Movement Insights (Agency Staff)-   show 10 result only', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                insightsPage.clickonmoneymovementingistspage256();
                // loginPage.logout();         
            });
        });
    });