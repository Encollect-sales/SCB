import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import UserCreationPage from '../pages/UserCreationPage';
 
describe('User Creation -User should able to view dropdown in status', () => {
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
 
    it('User Management -User Creation - TC_ID_41', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                usercreationpage.UserCreationTestPage_41();
               
                         
            });
        });
    });