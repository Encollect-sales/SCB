import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Contact Enrichment Scenarios', () => {

  let loginPage;
  let contactenrichmentpage;

  before(() => {

    // Login Page locators
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    // Contact Enrichment locators
    getLocators('contactenrichment').then(locators => {
      contactenrichmentpage = new ContactEnrichmentPage(locators);
    });

  });

  it('CE_BCU_003 - Positive – Upload button enabled only after file selection', () => {
    getTestData('loginData', 'login').then(user => {
      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(5000);

      contactenrichmentpage.CE_BCU_003();
    });
  });

});