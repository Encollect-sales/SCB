import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import CollectionPage from '../pages/CollectionPage';

describe("TC-230 Verify Select Digital Strategy dropdown availability", () => {

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

    it("Verify Select Digital Strategy dropdown availability", () => {

        getTestData("loginData", "login1").then((user) => {

            loginPage.login(user.Companyname, user.email, user.password);

            cy.wait(2000);

            collectionPage.SetUpDigitalCampaignTestPage_230();

        });

    });

});