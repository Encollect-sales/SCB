import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments Module - Central ops acknowledging payin slip- Logged in user entered incorrect amount in payin slip amount field and clicked on search button.', () => {
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

    it('Payment - TC_ID_1408', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentsPage.PaymentModule();
                paymentsPage.ClickOnCentral_ops_acknowledging_payin_slip_IncorrectValue();
            
            });
        });
    });