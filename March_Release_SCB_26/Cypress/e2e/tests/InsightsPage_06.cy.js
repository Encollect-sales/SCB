import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';

describe('Insights Page - Verify BOM Bucket values are displayed on X-axis in stacked bar chart', () => {
    let loginPage;
    let insightsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('insightspage').then(locators => {  
            insightsPage = new InsightsPage(locators); 
        });
    });

    it('Verify BOM Bucket values are displayed on X-axis in stacked bar chart', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(7000);
            insightsPage.InsightsPage_06(); 
        });
    });
});




















































































