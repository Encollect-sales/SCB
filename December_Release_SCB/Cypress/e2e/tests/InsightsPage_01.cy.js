import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';

describe('Insights - Performance Insight Validation', () => {
    let loginPage;
    let insightsPage;

    before(() => {
        // Load locators
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('insights').then(locators => {
            insightsPage = new InsightsPage(locators);
        });
    });

    it('PI-001 | Verify Performance Insight page opens from left menu', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);

            insightsPage.PerformanceInsight_01();   // PI-001 flow
        });
    });
});
