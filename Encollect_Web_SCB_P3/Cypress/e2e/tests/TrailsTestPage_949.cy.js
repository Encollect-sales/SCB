import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import TrailsPage from '../pages/TrailsPage.js';
 
describe('TrailsPage- Bulk Trails Upload -User clicked on search button without selecting anyone of the search filter criteria then user should be.', () => {
    let loginPage;
    let trails;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('TrailsPage').then(locators => {  
            trails = new TrailsPage(locators);
        });
    });
 
    it('Master Upload- TC_ID_949-  User clicked on search button without selecting anyone of the search filter criteria then user should be able an error as "Enter atleast one filter value" in the pop up..', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trails.TrailsTestPage_949();
               
                         
            });
        });
    });