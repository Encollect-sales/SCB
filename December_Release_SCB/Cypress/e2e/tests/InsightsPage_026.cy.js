import LoginPage from '../pages/LoginPage';
import InsightsPage from '../pages/InsightsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

let loginPage;
let insightsPage;
describe('Graphs validation – Reload', () => {
     before(() => {
    // Load locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('insights').then(locators => {
      insightsPage = new InsightsPage(locators);
    });
  });
 it('PI_026 - Verify all 8 graphs have heading Reload working ', () => {
 getTestData('loginData', 'login3').then(user => {
 
       // 🔐 Login
       loginPage.login(
         user.Companyname,
         user.email,
         user.password
       );
 
       cy.wait(2000);
 
       insightsPage.PerformanceInsight_026();
 
         
 
     });
   });
 
 });
 