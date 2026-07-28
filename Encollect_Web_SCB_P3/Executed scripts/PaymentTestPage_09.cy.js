import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentPage from '../pages/PaymentPage';


describe('Payment -Receive Money From Collector - Error message: "From Date is mandatory." Date range should not be processed.', () => {
    let loginPage;
    let paymentpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('PaymentPage').then(locators => {  
            paymentpage = new  PaymentPage(locators); 
        });
    });

    it('Payment - Receive Money From Collector - TC_ID_09', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentpage.PaymentTestPage_09();
              
               
                         
            });
        });
    });