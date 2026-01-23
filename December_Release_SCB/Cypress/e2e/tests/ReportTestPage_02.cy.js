import LoginPage from '../pages/LoginPage';
import ReportsPage from '../pages/ReportsPage';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

describe('CHR_WEB_002 - Communication History Report default values', () => {

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

  it('Verify default values on Communication History Report load', () => {

    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                reportsPage.ReportTestPage_02();            
            });
        });
    });