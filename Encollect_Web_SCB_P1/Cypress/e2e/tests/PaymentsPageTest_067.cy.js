
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments Module - Search & View Pay-in-Slip Id - Logged in user to view payin slips which are already created by clicking on search and view payin slip id sub module which is under payments module.', () => {
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

    it('Payment - TC_ID_067', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentsPage.SearchandViewPayinSlip069();
            
            });
        });
    });