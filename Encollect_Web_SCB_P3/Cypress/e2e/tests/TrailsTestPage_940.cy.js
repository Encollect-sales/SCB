import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import TrailsPage from '../pages/TrailsPage.js';
 
describe('TrailsPage- Bulk Trails Upload - When user clicked on cancel button in Bulk trails upload page, then the workflow will get stopped and user will go back to the account search screen.', () => {
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
 
    it('Master Upload- TC_ID_940- When user clicked on cancel button in Bulk trails upload page, then the workflow will get stopped and user will go back to the account search screen.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trails.TrailsTestPage_940();
               
                         
            });
        });
    });