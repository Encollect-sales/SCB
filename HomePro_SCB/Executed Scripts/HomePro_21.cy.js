import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import HomeProPage from '../pages/HomeProPage';

describe('HomePro - Verify search can be performed using Branch Name only', () => {

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

    it('TC_032 - Verify search can be performed using Branch Name only', () => {

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
            homeProPage.SearchByBranchName();
            homeProPage.VerifySearchResults();

        });

    });

});