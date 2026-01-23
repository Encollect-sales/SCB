import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

describe('CHR_WEB_043 - Download without generating first (Negative)', () => {

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

  it('Should prevent download or prompt user to generate report first', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);
     // ---- Navigate to Communication History Report ----
    reportsPage.navigateToCommunicationHistoryReport();

    // ---- Do NOT click Generate Report ----
    // Directly attempt download
    reportsPage.clickDownloadReport();

    // ---- Validate System Behavior (any one as per design) ----
    reportsPage.verifyDownloadBlockedOrMessageShown();
    });
  });
});
