import { getTestData } from '../utils/TestDataUtils.js';
import LoginPage from '../pages/LoginPage.js';
import { getLocators } from '../utils/Locatorutils.js';
import TrailsPage from '../pages/TrailsPage.js';
 
describe('TrailsPage- Bulk Trails Upload - Once the file is successfully uploaded, user will get email notification with an attachment where user can find success or failure status..', () => {
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
 
    it('Master Upload- TC_ID_929- Once the file is successfully uploaded, user will get email notification with an attachment where user can find success or failure status..', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trails.TrailsTestPage_929();
               
                         
            });
        });
    });