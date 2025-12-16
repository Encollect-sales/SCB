import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AllocationPage from '../pages/AllocationPage';
import ReportsPage from '../pages/ReportsPage';

describe('Reports - Verify Agency Staff can fetch only accounts allocated to their agency -', () => {
    let loginPage;
    let allocationpage; 
    //let paymentspage;
    let Reportspage;

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('reports').then(locators => {  
            Reportspage = new ReportsPage(locators); 
        });
    });

    it('Performance Report-TC_Pay_004', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                Reportspage.TC_POS_004();            
            });
        });
    });