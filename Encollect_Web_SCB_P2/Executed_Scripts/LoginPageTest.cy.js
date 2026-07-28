import { getTestData } from '../utils/testDataUtils';
import { getLocators } from '../utils/locatorUtils';
import LoginPage from '../pages/LoginPage';
 
describe('Login Functionality Tests', () => {
    let loginPage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
    });
 
    it('Successfully logs in with valid credentials', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            // loginPage.logout();
        });
    });
});