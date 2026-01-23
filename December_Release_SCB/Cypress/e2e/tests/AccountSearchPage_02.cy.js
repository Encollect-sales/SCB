import LoginPage from '../pages/LoginPage';
import AccountSearchPage from '../pages/AccountSearchPage';
import { getLocators } from '../utils/locatorUtils';
import { getTestData } from '../utils/testDataUtils';
describe('TXN_PH_002 | Payer/Receipt Image moved under gear (optional fields)', () => {
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

  it('Verify Payer/Receipt Image option is available under gear and can be toggled.', () => {
    getTestData('loginData', 'login').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(2000);

      // Reuse existing navigation till Payment History
  
      accountsearchPage.AccountSearchPage_02();

    
    });
  });
});
