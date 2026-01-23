import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

describe('CHR_WEB_044 - Download while Generate is in progress (Edge/Negative)', () => {

  let loginPage;
  let reportsPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('reports').then(locators => {
      reportsPage = new ReportsPage(locators);
    });
  });

  it('should prevent download while report generation is in progress', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);
     // ---- Navigate to Communication History Report ----
    reportsPage.navigateToCommunicationHistoryReport();

    // ---- Apply minimal valid filters ----
    reportsPage.applyDateFilters('01/01/2026', '02/01/2026');
    reportsPage.selectTriggerType('On X days of delayed deposit');

    // ---- Click Generate Report ----
    reportsPage.clickGenerateReport();

    // ---- Immediately click Download during loading ----
    reportsPage.clickDownloadReport();

    // ---- Validate expected behavior ----
    reportsPage.verifyDownloadBlockedDuringGeneration();
    });
  });
});
