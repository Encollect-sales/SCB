//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import DashboardPage from '../pages/DashboardPage';



describe('Account Details - All Search menu', () => {
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

    it('Account Details - TC_ID_563 - In all search result >>Pagination done for better performance of application', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(10000);
                //dashboardPage.LoanAccountRadiobtn();
                dashboardPage.Accountloan_563();
                // loginPage.logout();
                         
            });
        });
    });