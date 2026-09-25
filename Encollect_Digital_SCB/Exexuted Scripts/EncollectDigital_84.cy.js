import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import InsightsPage from '../pages/InsightsPage';

describe('TC_084 - Performance Insights Screen', () => {

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

    it('TC_084_POS - Verify Performance Insights screen loads successfully', () => {

        getTestData('loginData', 'login').then(user => {

            // Login
            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            // Navigate and verify Performance Insights
            insightsPage.verifyPerformanceInsightsScreen();

        });

    });

});