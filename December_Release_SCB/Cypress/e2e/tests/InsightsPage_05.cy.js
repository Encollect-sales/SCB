import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('PI-017 | Select random values from ng-select filters', () => {

  let loginPage;
  let insightsPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });

  it('Select random options from Performance Status, Agency, and Product dropdowns', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );
      cy.wait(2000);

      // Navigate to Insights
      insightsPage.PerformanceInsight_05();
      cy.wait(2000);

    
    });
  });
});
