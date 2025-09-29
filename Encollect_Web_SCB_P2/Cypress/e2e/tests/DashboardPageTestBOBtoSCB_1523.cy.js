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

        getLocators('AccountDetailsPage').then(locators => {  
            dashboardPage = new DashboardPage(locators); 
        });
    });

    it('Dashboard - TC_ID_1523 - Logged in user should navigate to account search screen with loan radio button auto selected and user should see customer name, account number, partner id and mobile number along with search button when clicked on bob logo in encollect web application.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(1000);
                //dashboardPage.CreditCardRadioBtn();
                dashboardPage.Dashboard1523();
                // loginPage.logout();
                         
            });
        });
    });