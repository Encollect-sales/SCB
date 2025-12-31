import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';
 
describe('Report - Agency Allocation Gap  - To check the Branch field drop down value', () => {
    let loginPage;
    let reportpage;
 
    before(() => {
        // Load and set locators before any tests rune
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('ReportsPage').then(locators => {  
            reportpage = new ReportsPage(locators);
        });
    });
 
    it('Agency Allocation Gap  - TC_ID_370', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                reportpage.ReoprtPaymentTestPage_370();
               
                         
            });
        });
    });