import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionPage from '../pages/CollectionPage';

describe("TC-44 Verify special characters in Segment Name", () => {

  let loginPage;
  let collectionPage;

  before(() => {
    getLocators("loginPage").then((locators) => {
      loginPage = new LoginPage(locators);
    });

    getLocators("Collection").then((locators) => {
      collectionPage = new CollectionPage(locators);
    });
  });

  it("Verify special characters in Segment Name", () => {

    getTestData("loginData", "login1").then((user) => {

      loginPage.login(user.Companyname, user.email, user.password);

      cy.wait(1000);

      collectionPage.CreateTestPage_44();

    });

  });

});