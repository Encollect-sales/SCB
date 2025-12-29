import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationPage from '../pages/AllocationPage';

describe('Allocation -  User Type - Agent Acc level- CC - User Type - user select the non-delinquent and bucket field should not be visible', () => {
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

    it('Allocation -User Type- TC_ID_37', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                allocationpage.Allocation_UT_TestPage_37();            
            });
        });
    });