import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import InsightsPage from '../pages/InsightsPage.js';

describe('Insights Page -  NPA row shows count; SMA-0, SMA-1, SMA-2 counts are zero', () => {

    let loginPage;
    let insightsPage;

    before(() => {
        // Load locators before tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('insightspage').then(locators => {
            insightsPage = new InsightsPage(locators);
        });
    });

    it('NPA row shows count; SMA-0, SMA-1, SMA-2 counts are zero', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

           insightsPage.InsightsPage03();

        });

    });

});









































