import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import TrailsPage from '../pages/TrailsPage.js';
 
describe('TrailsPage- Bulk Trails Upload - When the combination of action code and result code is incorrect in bulk trail upload template then in the final output file user will see an error as "Invalid DispositionCode".', () => {
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
 
    it('Master Upload- TC_ID_947-When the combination of action code and result code is incorrect in bulk trail upload template then in the final output file user will see an error as "Invalid DispositionCode""', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trails.TrailsTestPage_947();
               
                         
            });
        });
    });