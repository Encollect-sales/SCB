import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import PerformanceReportPage from '../pages/PerformanceReportPage.js';

describe('Performance Page -Resolved Count % = (Resolved Accounts / Total Accounts) * 100 is correctly calculated', () => {

    let loginPage;
    let performanceReportPage;

    before(() => {
        // Load locators before tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('PerformancePage').then(locators => {
            performanceReportPage = new PerformanceReportPage(locators);
        });
    });

    it('Resolved Count % = (Resolved Accounts / Total Accounts) * 100 is correctly calculated', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            performanceReportPage.PerformanceReportTestPage026();

        });

    });

});