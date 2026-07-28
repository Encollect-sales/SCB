import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import AllocationPage from '../pages/AllocationPage';
 
describe('Allocation - Agency Customer Level-  User should select appropriate radio button while uploading the allocation file or else encollect system will throw an error. -', () => {
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
 
    it('ENCollect system will throw an error as invalid file format- TC_ID_05', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                allocationpage.AllocationTestPage_05();
               
                         
            });
        });
    });