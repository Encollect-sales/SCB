import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentPage from '../pages/PaymentPage';


describe('Payment -Receive Money From Collector - Data within the specified range (2025-02-10 to 2025-02-20) should be displayed.', () => {
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

    it('Payment - Receive Money From Collector - TC_ID_07', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentpage.PaymentTestPage_07();
              
               
                         
            });
        });
    });