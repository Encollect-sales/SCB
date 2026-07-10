import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionPage from '../pages/CollectionPage';

describe('create segment', () => {

    let loginPage;
    let collectionpage;

    before(() => {
      getLocators('loginPage').then(locators => {
        loginPage = new LoginPage(locators);
      });

      getLocators('Collection').then(locators => {
        collectionpage = new CollectionPage(locators);
      });
    });

    it('  ', () => {
      getTestData('loginData', 'login1').then(user => {

        loginPage.login(user.Companyname, user.email, user.password);
        cy.wait(1000);
        collectionpage.CreateTestPage_01();
       
      });
    });

  }
);
