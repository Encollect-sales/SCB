import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import HomeProPage from '../pages/HomeProPage';

describe('HomePro - Verify Property Name search accepts valid input values', () => {

    let loginPage;
    let homeProPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('HomePro').then(locators => {
            homeProPage = new HomeProPage(locators);
        });

    });

    it('TC_037 - Verify Property Name search accepts valid input values', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }

            });

            // homeProPage.NavigateToSearchAccount();
            homeProPage.SearchWithValidPropertyName();

        });

    });

});