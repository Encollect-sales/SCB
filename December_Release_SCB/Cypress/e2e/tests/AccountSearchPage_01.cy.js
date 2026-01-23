import LoginPage from '../pages/LoginPage';
import AccountSearchPage from '../pages/AccountSearchPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';

describe('TXN_PH_001 |Transaction ID option available under gear (optional fields)', () => {
  let loginPage;
  let accountsearchPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('accounts').then(locators => {
      accountsearchPage = new AccountSearchPage(locators);
    });
  });

  it('Verify Transaction ID option is available under gear and can be enabled/disabled.', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      accountsearchPage.AccountSearchPage_01();
    });
  });
});
