import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';

describe('Insights - Performance Insight Pie Chart Validation', () => {
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

    it('PI-008 | Verify pie chart is 3D and hover shows count/amount and percentage', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);

            insightsPage.PerformanceInsight_02();   // PI-008 flow
        });
    });
});
