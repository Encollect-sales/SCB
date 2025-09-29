//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import DashboardPage from '../pages/DashboardPage';



describe('Dashboard - Dashboard', () => {
    let loginPage;
    let dashboardPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DashboardPage').then(locators => {  
            dashboardPage = new DashboardPage(locators); 
        });
    });

    it('Dashboard - TC_ID_982 - 1.Addition of New Search Field "Credit Card Last 4 Digits". 2.Credit Card Last 4 digits search field should accept only numbers. 3.Max length should be 4 digits.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(10000);
                //dashboardPage.LoanAccountRadiobtn();
                dashboardPage.Dashboard982();
                
            });
        });
    });