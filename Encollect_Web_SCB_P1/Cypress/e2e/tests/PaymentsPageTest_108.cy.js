import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentsPage from '../pages/PaymentsPage';

describe('Payments Module - Walkin Customer Receipt - Logged in user to stop the workflow by clicking on cancel and no button in the pop up', () => {
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

    it('Payment - TC_ID_112', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentsPage.PaymentModule();
                paymentsPage.ClickOnWalkInCustomerReceipt_PRN_Err();
            
            });
        });
    });