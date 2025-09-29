import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';
 
describe('Allocation -Addition of unallocation type in the search fields and in the result grid of secondary unallocation status.', () => {
    let loginPage;
    let allocationpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('AllocationPage').then(locators => {  
            allocationpage = new AllocationPage(locators);
        });
    });
 
    it('Allocation Module - TC_ID_114', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                allocationpage.AllocationTestPage_114();
               
                         
            });
        });
    });