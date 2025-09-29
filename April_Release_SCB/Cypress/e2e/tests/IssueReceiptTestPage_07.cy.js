import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import IssueReceiptPage from '../pages/IssueReceiptPage';
 
describe('Payments - Issue Receipt - Choose a different mode of payment and click on submit payment', () => {
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
 
    it('TC_ID_07 -Choose a different mode of payment and click on submit payment', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                issuereceiptpage.IssueReceiptTestPage_07();
               
                         
            });
        });
    });