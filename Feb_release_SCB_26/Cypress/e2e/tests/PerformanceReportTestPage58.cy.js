import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import PerformanceReportPage from '../pages/PerformanceReportPage.js';

describe('Performance Page - Navigate to Performance Report → Click Agency button → Select multiple months → Select all Product Groups → Select Country India → Click Generate Report → Scroll results. Total Accounts, Normalization, Roll Back, Stabilized, Roll Forward, Resolved sections should be visible.', () => {

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

    it('Navigate to Performance Report → Click Agency button → Select multiple months → Select all Product Groups → Select Country India → Click Generate Report → Scroll results. Total Accounts, Normalization, Roll Back, Stabilized, Roll Forward, Resolved sections should be visible.', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            performanceReportPage.PerformanceReportTestPage57();

        });

    });

});
