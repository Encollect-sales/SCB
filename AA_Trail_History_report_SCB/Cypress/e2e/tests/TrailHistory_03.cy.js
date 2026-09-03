import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailHistoryReportPage from '../pages/TrailHistoryReportPage';

describe('Trail History Report - Verify Disposition Code filter is visible', () => {

    let loginPage;
    let trailHistoryReportPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('TrailHistoryReport').then(locators => {
            trailHistoryReportPage = new TrailHistoryReportPage(locators);
        });

    });

    it('TC_003 - Verify Disposition Code filter is visible', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(user.Companyname, user.email, user.password);

            trailHistoryReportPage.navigateToTrailHistoryReport();
            trailHistoryReportPage.verifyDispositionCodeVisible();

        });

    });

});