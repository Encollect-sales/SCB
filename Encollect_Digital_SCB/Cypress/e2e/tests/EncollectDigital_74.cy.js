import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';

describe('TC_074 - Performance Report', () => {

    let loginPage;
    let reportsPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Reports').then(locators => {
            reportsPage = new ReportsPage(locators);
        });

    });

    it('TC_074_POS - Verify Performance Report MTD is available under Reports', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            reportsPage.verifyPerformanceReportMenu();

        });

    });

});