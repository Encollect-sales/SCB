import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments Module - Central ops acknowledging payin slip - Logged in user to see a pop us message as "Payin slip updated successfully"', () => {
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

    it('Payment - TC_ID_1402', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentsPage.PaymentModule();
                paymentsPage.ClickOnC_opsAcknowledgingPayinSlip_updation_msg();
            
            });
        });
    });