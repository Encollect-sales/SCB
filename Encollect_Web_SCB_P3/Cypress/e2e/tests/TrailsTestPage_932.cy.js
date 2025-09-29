import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
 
describe('Trails - Bulk Trails Upload - In the result grid user can see transaction id, file name and status of the uploaded file', () => {
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
 
    it('Trails - TC_ID_931', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trailspage.TrailsTestPage_932();
               
                         
            });
        });
    });