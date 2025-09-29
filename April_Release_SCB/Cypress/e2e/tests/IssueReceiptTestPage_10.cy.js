import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import IssueReceiptPage from '../pages/IssueReceiptPage';
 
describe('Payments - Issue Receipt - user enter all the fields and submit the payment and the success message ', () => {
    let loginPage;
    let issuereceiptpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('IssueReceipt').then(locators => {  
            issuereceiptpage = new IssueReceiptPage(locators);
        });
    });
 
    it('TC_ID_10 -user enter all the fields and submit the payment and the success message', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                issuereceiptpage.IssueReceiptTestPage_10();
               
                         
            });
        });
    });