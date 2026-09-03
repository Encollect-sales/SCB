import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';

describe('TC_076 - Trail History Report Navigation', () => {

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

    it('TC_076_POS - Verify user can navigate to Trail History Report', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            reportsPage.navigateToTrailHistoryReport();

        });

    });

});