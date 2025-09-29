import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';
 
describe('TC_ID_35 - Settlement - Verify that the radio buttons for "Settlement Tranche" - "One time settlement" (Preferred) are visible.', () => {
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
 
    it('TC_ID_35 - Settlement', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                settlementpage.SettlementTestPage_35();
               
                         
            });
        });
    });