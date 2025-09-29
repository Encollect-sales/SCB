import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import TrailsPage from '../pages/TrailsPage.js';
 
describe('TrailsPage- Bulk Trails Upload - When logged in user entered next action date less than current date in bulk trail upload template then in the final .', () => {
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
 
    it('Master Upload- TC_ID_941- output file user will get the error message as "Next action date cannot be less than current date".', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trails.TrailsTestPage_941();
               
                         
            });
        });
    });