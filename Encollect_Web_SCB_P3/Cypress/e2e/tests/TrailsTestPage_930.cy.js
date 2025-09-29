import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
 
describe('Trails - Bulk Trails Upload - Once the file is successfully uploaded, user can search for the account number and go to trail history tab in the dashboard and look for the trail which is captured or not.', () => {
    let loginPage;
    let trailspage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('TrailsPage').then(locators => {  
            trailspage = new TrailsPage(locators);
        });
    });
 
    it('Trails - TC_ID_930', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trailspage.TrailsTestPage_930();
               
                         
            });
        });
    });