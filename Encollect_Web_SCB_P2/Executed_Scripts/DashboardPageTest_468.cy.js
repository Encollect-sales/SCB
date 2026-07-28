//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import DashboardPage from '../pages/DashboardPage';



describe('Dashboard - Account Dashboard Screen', () => {
    let loginPage;
    let dashboardPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('AccountDetailsPage').then(locators => {  
            dashboardPage = new DashboardPage(locators); 
        });
    });

    it('Dashboard - TC_ID_468 - Credit card account details should show.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(15000);
                dashboardPage.CreditCardRadioBtn();
                dashboardPage.AccountDashboardScreen468();
                //loginPage.logout();
                         
            });
        });
    });