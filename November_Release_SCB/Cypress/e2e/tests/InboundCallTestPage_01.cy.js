import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountSearchPage from '../pages/AccountSearchPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Account Search - Inbound call - ', () => {

  let loginPage;
  let accountsearchpage;

  before(() => {


    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('accountsearch').then(locators => {
      accountsearchpage = new AccountSearchPage(locators);
    });

  });
  
  it('TC_ID_01 - Inbound call ', () => {

    getTestData('loginData', 'login2').then(user => {

      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      accountsearchpage.InboundCallTestPage_01();

    });

  });

});
