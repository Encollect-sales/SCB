import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailHistoryReportPage from '../pages/TrailHistoryReportPage';

describe('Trail History Report - Verify Trail From Date validation', () => {

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

    it('TC_007 - Verify error when Trail From Date is not selected', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            trailHistoryReportPage.navigateToTrailHistoryReport();

            // Select mandatory filters
            trailHistoryReportPage.selectAllProductGroups();
            trailHistoryReportPage.selectAllProducts();
            trailHistoryReportPage.selectAllBuckets();
            trailHistoryReportPage.selectAllRegions();

            // Generate random dates
            const dates = trailHistoryReportPage.getRandomDateRange();

            cy.log(`To Date : ${dates.toDate}`);

            // Enter only To Date
            trailHistoryReportPage.enterTrailToDate(dates.toDate);

            cy.get('#trailDate_to')
                .should('have.value', dates.toDate);


            // Click Download
            trailHistoryReportPage.clickDownloadReportforcefully();

            // Verify validation message
            trailHistoryReportPage.verifyTrailFromDateValidation();

        });

    });

});