import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import InsightsPage from '../pages/InsightsPage';

describe('Insights - Performance Insight Pie Chart Negative Validation', () => {
    let loginPage;
    let insightsPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('insights').then(locators => {
            insightsPage = new InsightsPage(locators);
        });
    });

    it('PI-009 | Verify pie chart tooltip is not blank or incorrect on multiple hovers', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(2000);

            insightsPage.PerformanceInsight_04();
        });
    });
});
