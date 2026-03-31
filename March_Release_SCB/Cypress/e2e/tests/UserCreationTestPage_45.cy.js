import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import UserCreationPage from '../pages/UserCreationPage';
 
describe('User Creation - ENCollect system to throw an error"Enter at least one filter criteria"', () => {
    let loginPage;
    let usercreationpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('UserCreationPage').then(locators => {  
            usercreationpage = new UserCreationPage(locators);
        });
    });
 
    it('User Management -User Creation - TC_ID_45', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                usercreationpage.UserCreationTestPage_45();
               
                         
            });
        });
    });