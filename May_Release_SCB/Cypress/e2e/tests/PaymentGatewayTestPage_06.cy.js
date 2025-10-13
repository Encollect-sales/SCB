import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentGatewayPage from '../pages/PaymentGatewayPage';

describe('User Management - Account Details - Payment link - user enter the new mail in the page and the sent the payment link', () => {
    let loginPage;
    let paymentgatewaypage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('PaymentGateway').then(locators => {  
            paymentgatewaypage = new PaymentGatewayPage(locators); 
        });
    });

    it('User Management -Account details - Payment link - TC_ID_06', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                paymentgatewaypage.PaymentGatewayTestPage_06();            
            });
        });
    });