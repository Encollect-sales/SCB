import LoginPage from '../pages/LoginPage';
import GeoreportsPage from '../pages/GeoreportsPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';


describe('UTR-FE-001 | User Travel Report - Geo Report', () => {
  let loginPage;
  let georeportsPage;

  before(() => {
    getLocators('loginPage').then((locators) => {
      loginPage = new LoginPage(locators);
    });

    getLocators('georeport').then((locators) => {
      georeportsPage = new GeoreportsPage(locators);
    });
  });

  it('Should search User Travel Report for Bank user with valid inputs', () => {
    getTestData('loginData', 'login').then((user) => {

      // Step 1: Login as Bank User
      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

      

      // Step 3: Validate report loads successfully
      georeportsPage.GeoReports_01();
    });
  });
});
