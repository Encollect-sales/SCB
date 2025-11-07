import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationPage from '../pages/AllocationPage';

describe('Allocation - Scope of work -', () => {
    let loginPage;
    let allocationpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Allocation').then(locators => {  
            allocationpage = new AllocationPage(locators); 
        });
    });

    it('Allocation -Scope of work- TC_ID_02', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                allocationpage.Allocation_sow_TestPage_02();            
            });
        });
    });