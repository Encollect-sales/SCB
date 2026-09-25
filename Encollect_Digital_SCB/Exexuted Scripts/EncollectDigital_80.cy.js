import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import InsightsPage from '../pages/InsightsPage';

describe('TC_080 - Insights Menu', () => {

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

    it('TC_080_POS - Verify Insights menu is visible in left navigation', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            insightsPage.verifyInsightsMenu();

        });

    });

});