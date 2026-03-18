import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import PaymentGatewayPage from '../pages/PaymentGatewayPage';

describe('User Management - Account Details - Payment link - user click on payment link option and see the page and click on X option to close the payment link page ', () => {
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

    it('User Management -Account details - Payment link - TC_ID_02', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(7000);
                paymentgatewaypage.PaymentGatewayTestPage_02();            
            });
        });
    });