import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import InsightsPage from '../pages/InsightsPage';

describe('TC_083 - Performance Insights Navigation', () => {

    let loginPage;
    let insightsPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Insights').then(locators => {
            insightsPage = new InsightsPage(locators);
        });

    });

    it('TC_083_POS - Verify user can navigate to Performance Insights screen', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            insightsPage.navigateToPerformanceInsights();

        });

    });

});