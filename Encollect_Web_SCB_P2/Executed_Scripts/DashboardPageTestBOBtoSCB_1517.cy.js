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

    it('Dashboard - TC_ID_1517 - Last successful login date and time + Last failed login date and time to be shown in encollect web application when ever user try to log in.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(1000);
                //dashboardPage.CreditCardRadioBtn();
                dashboardPage.Dashboard1517();
                // loginPage.logout();
                         
            });
        });
    });