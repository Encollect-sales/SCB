import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage.js';
 
describe('TrailsPage- Bulk Trails Upload - When user uploaded the bulk trail template if there are any special characters or spaces in the naming convention of the file, then system should show an error as "File name should not contain any special characters" in the pop up.', () => {
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
 
    it('Master Upload- TC_ID_939-  When user uploaded the bulk trail template if there are any special characters or spaces in the naming convention of the file, then system should show an error as "File name should not contain any special characters" in the pop up.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                trails.TrailsTestPage_939();
               
                         
            });
        });
    });