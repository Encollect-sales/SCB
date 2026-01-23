import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

let loginPage;
let insightsPage;

describe('PI-010 | Verify Bottom 10 Field Agent by Resolution section', () => {

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });

  it('should display Bottom 10 Field Agent by Resolution', () => {

    getTestData('loginData', 'login').then(user => {

      // 🔐 Login as Agency user
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      cy.wait(2000);

      // 📊 Navigate to Performance Insight
      insightsPage.PerformanceInsight_010();
      cy.wait(2000);

     
    });
  });
});
