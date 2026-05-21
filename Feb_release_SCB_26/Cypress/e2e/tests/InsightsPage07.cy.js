import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import InsightsPage from '../pages/InsightsPage.js';

describe('Insights Page - Generate report with NPA = No, All retrieved accounts have NPA flag = No', () => {

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

    it('Generate report with NPA = Yes, All retrieved accounts have NPA flag = Yes', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

           insightsPage.InsightsPage06();

        });

    });

});









































