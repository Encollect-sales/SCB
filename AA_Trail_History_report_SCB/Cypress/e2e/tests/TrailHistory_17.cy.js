import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailHistoryReportPage from '../pages/TrailHistoryReportPage';

describe('Trail History Report - Verify Disposition Code is NOT mandatory - Agencystaff', () => {

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

    it('TC_005 - Verify Disposition Code is NOT mandatory - Agencystaff', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(user.Companyname, user.email, user.password);

            trailHistoryReportPage.navigateToTrailHistoryReport();

             trailHistoryReportPage.clickonagencystaff();
          
            trailHistoryReportPage.selectAllProductGroups();
            trailHistoryReportPage.selectAllProducts();
            trailHistoryReportPage.selectAllBuckets();
            trailHistoryReportPage.selectAllRegions();

            const dates = trailHistoryReportPage.getRandomDateRange();
            cy.log(`From Date : ${dates.fromDate}`);
            cy.log(`To Date : ${dates.toDate}`);

            trailHistoryReportPage.enterTrailFromDate(dates.fromDate);
            trailHistoryReportPage.enterTrailToDate(dates.toDate);

            cy.get('#trailDate_from').should('have.value', dates.fromDate);
            cy.get('#trailDate_to').should('have.value', dates.toDate);
            trailHistoryReportPage.Dispositionselectopt();
            trailHistoryReportPage.clickDownloadReport();
            // trailHistoryReportPage.verifyReportDownloaded();
            cy.wait(5000);
            cy.task('zipFileExists').should('eq', true);
            cy.task('getLatestZipFile').then((file) => {
            cy.log("Downloaded File : " + file);
            expect(file).to.not.be.null;

});

        });

    });

});