import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import InsightsPage from '../pages/InsightsPage';

describe('TC_082 - Unauthorized Insights Access', () => {

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

    it('TC_082_NEG - Verify Insights menu is not visible for unauthorized user', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            insightsPage.verifyInsightsMenuNotVisible();

        });

    });

});