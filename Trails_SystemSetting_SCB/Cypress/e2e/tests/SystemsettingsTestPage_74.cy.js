import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SystemsettingsPage from '../pages/SystemsettingsPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('System Settings - Bulk Account Upload, credit card option is selected under download template ', () => {

  let loginPage;
  let systemSettingsPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('SystemSettings').then(locators => {
      systemSettingsPage = new SystemsettingsPage(locators);
    });
  });

 it('Upload File button should be disabled after file upload', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(900);

      systemSettingsPage.SystemsettingsPage_02();
    });
  });
});
