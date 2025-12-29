
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments Module - Search & View Pay-in-Slip Id - Logged in user to view search and view payin slip id screen with all fields along with search button.', () => {
    let loginPage;
    let paymentsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('paymentsPage').then(locators => {  
            paymentsPage = new PaymentsPage(locators); 
        });
    });

    it('Payment - TC_ID_068', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentsPage.SearchandViewPayinSlip069();
            
            });
        });
    });