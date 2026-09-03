import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';

describe('TC_079 - Performance Report Navigation', () => {

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

    it('TC_079_POS - Verify user can navigate to Performance Report MTD', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            reportsPage.navigateToPerformanceReport();

        });

    });

});