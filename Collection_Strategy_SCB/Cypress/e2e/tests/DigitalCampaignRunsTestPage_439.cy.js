import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionPage from '../pages/CollectionPage';

describe("TC-439 Verify Cancel button disabled for Cancelled runs", () => {

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

    it("Verify Cancel button disabled for Cancelled runs", () => {

        getTestData("loginData", "login1").then((user) => {

            loginPage.login(user.Companyname, user.email, user.password);

            cy.wait(2000);

            collectionPage.DigitalCampaignRunsTestPage_439();

        });

    });

});
