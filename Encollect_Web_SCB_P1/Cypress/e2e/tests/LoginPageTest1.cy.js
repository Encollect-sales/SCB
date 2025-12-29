import { getTestData } from '../utils/testDataUtils';
import { getLocators } from '../utils/locatorUtils';
import loginPage1 from '../pages/LoginPage1';
 
describe('Login Functionality Tests', () => {
    let loginPage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new loginPage1(locators);
        });
    });
 
    it('Successfully logs in with valid credentials', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
        });
    });
});