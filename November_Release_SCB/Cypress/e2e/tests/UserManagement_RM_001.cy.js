import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Agency Reporting Manager Dropdown Validation', () => {

  let loginPage;
  let usermanagementpage;

  before(() => {

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Contact Enrichment locators
    getLocators('usermanagement').then(locators => {
      usermanagementpage = new UserManagementPage(locators);
    });

  });

 

 
  it('RM_001 | Verify Agency Reporting Manager dropdown shows approved users of selected agency', () => {

    getTestData('loginData', 'login').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);
   
      usermanagementpage.RM_001_Agency_Reporting_Manager_Dropdown();

    });

  });

});
