import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

let loginPage;
let insightsPage;
describe('Performance Insight - Overview Page| Dashboard Validation', () => {
     before(() => {
    // Load locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });
 it('PI_023 - Verify Dashboard headings on Overview page ', () => {
 getTestData('loginData', 'login3').then(user => {
 
       // 🔐 Login
       loginPage.login(
         user.Companyname,
         user.email,
         user.password
       );
 
       cy.wait(2000);
 
       // 📊 Navigate + Open filters + Expand all
       insightsPage.PerformanceInsight_025();
 
     
             
         
 
     });
   });
 
 });
 