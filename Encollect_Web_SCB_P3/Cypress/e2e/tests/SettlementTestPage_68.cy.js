import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';
 
describe('TC_ID_ 68- Settlement - Verify that all closed settlement requests initiated by the logged-in user are displayed in the My Closed Settlement Cases page.', () => {
    let loginPage;
    let settlementpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('SettlementPage').then(locators => {  
            settlementpage = new SettlementPage(locators);
        });
    });
 
    it('TC_ID_68 - Settlement', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                settlementpage.SettlementTestPage_68();
               
                         
            });
        });
    });