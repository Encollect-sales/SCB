import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import PerformanceReportPage from '../pages/PerformanceReportPage.js';
import AccountDetailsPage from '../pages/AccountDetailsPage.js';

describe('Account Details - Verify masked mobile number in Last 5 PTP', () => {

    let loginPage;
    let accountdetailsPage;

    before(() => {
        // Load locators before tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('accountdetails').then(locators => {
            accountdetailsPage = new AccountDetailsPage(locators);
        });
    });

    it('Verify masked mobile number in Last 5 PTP', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            accountdetailsPage.AccountDetailsPage010();

        });

    });

});