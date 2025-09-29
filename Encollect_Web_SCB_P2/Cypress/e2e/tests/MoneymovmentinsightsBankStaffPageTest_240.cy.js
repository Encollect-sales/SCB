//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';


describe('TC240 - Money Movement Insights (Bank Staff)- -check assertion for Account Number option', () => {
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

    it('TC240- Money Movement Insights (Bank Staff)-  check assertion for Account Number option', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                insightsPage.clickonmoneymovementingistspage240();
                // loginPage.logout();         
            });
        });
    });