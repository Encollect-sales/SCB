import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SystemSettingPage from '../pages/SystemSettingPage';
const { faker } = require('@faker-js/faker');

describe('TC_ID_005 System Setting - Manage Master - Click on System Settings and check for Geo masters', () => {
  let loginPage;
  let systemsettingPage;

  before(() => {
    // Load and set locators before any tests run
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('SystemSettingPage').then(locators => {
      systemsettingPage = new SystemSettingPage(locators);
    });
  });

  it('TC_ID_005 System Setting - Manage Master - Click on System Settings and check for Geo masters', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(900);
      systemsettingPage.systemSettingModule();
      systemsettingPage.ManageMaster005();
    });
  });

});               
