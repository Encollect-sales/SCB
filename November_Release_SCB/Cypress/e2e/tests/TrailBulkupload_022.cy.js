import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailPage from '../pages/TrailPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Missing mandatory column (e.g. Agent ID)', () => {

  let loginPage;
  let trailpage;

  before(() => {

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Trail Page locators
    getLocators('trails').then(locators => {
      trailpage = new TrailPage(locators); // ✅ FIXED
    });

  });

 
  it('TC_ID_022 - should reject upload when mandatory column header (Agent ID) is misspelled', () => {
     getTestData('loginData', 'login2').then(user => {

      // ---------------- Login ----------------
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);
   
      trailpage.BULKTRL_022();

     });

  });

});
