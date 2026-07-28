import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';
 
describe('Reoprt - Performance Report - To check the Agency field drop down value', () => {
    let loginPage;
    let reportpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('ReportsPage').then(locators => {  
            reportpage = new ReportsPage(locators);
        });
    });
 
    it('Performance Report - TC_ID_350', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                reportpage.ReoprtPaymentTestPage_350();
               
                         
            });
        });
    });