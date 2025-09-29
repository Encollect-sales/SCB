//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentPage from '../pages/PaymentPage';



describe('Payment - Search and Print Batch', () => {
    let loginPage;
    let paymentpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DbstoScb').then(locators => {  
            paymentpage = new PaymentPage(locators); 
        });
    });

    it('Payment - TC_ID_142 - Search and Print Batch', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentpage.PaymentTestPage_142();
               
                         
            });
        });
    });