import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailHistoryReportPage from '../pages/TrailHistoryReportPage';

describe('Trail History Report - Verify Trail To Date validation - Agencystaff', () => {

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

    it('TC_008 - Verify error when Trail To Date is not selected - Agencystaff', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            trailHistoryReportPage.navigateToTrailHistoryReport();

             trailHistoryReportPage.clickonagencystaff();

            // Select mandatory filters
            trailHistoryReportPage.selectAllProductGroups();
            trailHistoryReportPage.selectAllProducts();
            trailHistoryReportPage.selectAllBuckets();
            trailHistoryReportPage.selectAllRegions();

            // Generate random date range
            const dates = trailHistoryReportPage.getRandomDateRange();

            cy.log(`From Date : ${dates.fromDate}`);

            // Enter only From Date
            trailHistoryReportPage.enterTrailFromDate(dates.fromDate);

            cy.get('#trailDate_from')
                .should('have.value', dates.fromDate);

            // Select all disposition options (if required)
            trailHistoryReportPage.Alldispositionoption();

            // Click Download Report
            trailHistoryReportPage.clickDownloadReportforcefully();

            // Verify validation message
            trailHistoryReportPage.verifyTrailToDateValidation();

        });

    });

});