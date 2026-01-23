import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

let loginPage;
let insightsPage;
describe('Performance Insights - By Geography Dropdowns', () => {
     before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });

      it('Verify all By Geography dropdowns', () => {
 getTestData('loginData', 'login3').then(user => {
                          
                                // 🔐 Login as Agency user
                                loginPage.login(
                                  user.Companyname,
                                  user.email,
                                  user.password
                                );
                          
                                cy.wait(2000);
                          
                                // 📊 Navigate to Performance Insight
                                insightsPage.PerformanceInsight_015();
                                cy.wait(2000);
                          
                               
                              });
                            });
                          });
                          
        
