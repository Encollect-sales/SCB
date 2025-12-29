import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';

describe('BULKTRL_018 - Upload corrupted or unreadable file', () => {

  let loginPage;
  let trailpage;

  before(() => {

    // Login Page
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Trail Page
    getLocators('trails').then(locators => {
      trailpage = new TrailPage(locators);
    });

  });

  it('should show an error and prevent processing when a corrupted file is uploaded', () => {

    getTestData('loginData', 'login').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // ---------------- Navigate to Bulk Upload ----------------
      trailpage.BULKTRL_018();

     
    });
  });
});
