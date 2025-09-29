
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import DashboardPage from '../pages/DashboardPage';

describe('Login - AD Integration -Verify whether the Loan account search filter criteria displays the correct fields on the front end screen on both web and mobile...', () => {
    let loginPage;
    let dashboardpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DbsToScbs').then(locators => {  
            dashboardpage = new DashboardPage(locators); 
        });
    });

    it('Payment - TC_ID_018', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                dashboardpage.DashboardTestPage_018();
            
            });
        });
    });