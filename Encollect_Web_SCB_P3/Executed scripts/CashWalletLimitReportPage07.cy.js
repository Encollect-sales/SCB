import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import ReportsPage from '../pages/ReportsPage';
 
describe('T07 - CashWalletLimitReport-Click on Agency staff radio button', () => {
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
 
    it('T07- CashWalletLimitReport-Click on Agency staff radio button', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                reportpage.CashWalletLimitReportPage07();
               
                         
            });
        });
    });