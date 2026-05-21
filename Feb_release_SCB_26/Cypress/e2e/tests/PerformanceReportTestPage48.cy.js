import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import PerformanceReportPage from '../pages/PerformanceReportPage.js';

describe('Performance Page -Navigate to Performance Report → Click Agency button → Select a month from dropdown. Selected month should be visible in the field.', () => {

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

    it('Navigate to Performance Report → Click Agency button → Select a month from dropdown. Selected month should be visible in the field.', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            performanceReportPage.PerformanceReportTestPage47();

        });

    });

});
