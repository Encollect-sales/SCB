//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationPage from '../pages/AllocationPage';

describe('Account Details -Primary Allocation Status', () => {
    let loginPage;
    let allocationpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DbstoScb').then(locators => {  
            allocationpage = new AllocationPage(locators); 
        });
    });

    it('Account Details - TC_ID_113 - Primary Allocation Status', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                allocationpage.AllocationTestPage_113();
               
                         
            });
        });
    });