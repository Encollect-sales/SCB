import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

let loginPage;
let insightsPage;

describe('PI-06 | Agency user: Agency name pre-populated and not editable', () => {

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });

  it('should verify agency fields are auto-filled and non-editable', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login as Agency user
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      // Navigate to Performance Insight
      insightsPage.PerformanceInsight_06();
      cy.wait(2000);

      
    });
  });
});
