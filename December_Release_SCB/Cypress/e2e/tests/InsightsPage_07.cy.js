import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

let loginPage;
let insightsPage;

describe('PI-07 | Agency user: negative (must not edit primary agency fields)', () => {

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });

  it('should not allow agency user to edit Field Primary and Tele-calling Primary', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login as Agency user
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      // 📊 Navigate to Performance Insight
      insightsPage.PerformanceInsight_07();
      cy.wait(2000);

      
    });
  });
});
