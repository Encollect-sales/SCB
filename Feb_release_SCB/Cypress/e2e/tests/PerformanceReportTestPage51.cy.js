import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import PerformanceReportPage from '../pages/PerformanceReportPage.js';

describe('Performance Page - Navigate to Performance Report (Monthly) → Click Agency button → Scroll and verify fields Month, Product Group(s), Product(s), Sub Product(s), City(s), Branch(s), User Branch(s), Staff(s). All filter fields should be visible.', () => {

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

    it('Navigate to Performance Report (Monthly) → Click Agency button → Scroll and verify fields Month, Product Group(s), Product(s), Sub Product(s), City(s), Branch(s), User Branch(s), Staff(s). All filter fields should be visible.', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            performanceReportPage.PerformanceReportTestPage50();

        });

    });

});
