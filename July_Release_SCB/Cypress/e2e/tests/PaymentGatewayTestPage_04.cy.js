import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentGatewayPage from '../pages/PaymentGatewayPage';

describe('User Management - Account Details - Payment link - user select the paynimo payment type and send the link ', () => {
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

    it('User Management -Account details - Payment link - TC_ID_04', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(7000);
                paymentgatewaypage.PaymentGatewayTestPage_04();            
            });
        });
    });