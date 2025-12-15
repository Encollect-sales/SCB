import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import SettlementPage from '../pages/SettlementPage';
 
describe('TC_ID_02 - Verify the search functionality when all required details are entered and the "Search" button is clicked.', () => {
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
 
    it('TC_ID_02 - Settlement', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                settlementpage.SettlementTestPage_02();
               
                         
            });
        });
    });