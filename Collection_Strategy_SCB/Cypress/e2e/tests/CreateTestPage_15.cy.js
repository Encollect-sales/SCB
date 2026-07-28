import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import { getLocators } from '../utils/Locatorutils';

import LoginPage from '../pages/LoginPage';
import CollectionPage from '../pages/CollectionPage';

describe("Create Segment - Verify Product Dropdown Multi Select", () => {

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

  beforeEach(() => {

    getTestData("loginData", "login1").then((user) => {

      loginPage.login(
        user.Companyname,
        user.email,
        user.password
      );

    });

  });

  it("TC-15 Verify Product dropdown supports multi-select", () => {

    collectionPage.CreateTestPage_15();

  });

});