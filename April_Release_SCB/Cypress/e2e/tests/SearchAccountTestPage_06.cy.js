import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SearchAccountPage from '../pages/SearchAccountPage';
 
describe('System Settings - Account Search Scope - ', () => {
    let loginPage;
    let searchaccountpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('Permission').then(locators => {  
            searchaccountpage = new SearchAccountPage(locators);
        });
    });
 
    it('System Settings - Account Search Scope - TC_ID_06', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                searchaccountpage.SearchAccountTestPage_06();
               
                         
            });
        });
    });