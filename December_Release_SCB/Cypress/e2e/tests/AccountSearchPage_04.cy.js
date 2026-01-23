import LoginPage from '../pages/LoginPage';
import AccountSearchPage from '../pages/AccountSearchPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';
describe('TXN_PH_004 | Transaction ID hidden when toggle is OFF', () => {
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

  it('Verify Transaction ID column is hidden when toggle is OFF', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Navigate till Payment History
      accountsearchPage.AccountSearchPage_04();

     
    });
  });
});
