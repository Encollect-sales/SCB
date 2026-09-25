import {getTestData} from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import {getLocators} from '../utils/Locatorutils';
import UserCommunicationReportPage from '../pages/UserCommunicationReportPage';

describe('Credit Card - Verify IssueReceipt communication is captured from payment',()=>{
    let loginPage;
    let userCommunicationReportPage;
    before(()=>{
        getLocators('loginPage').then(locators=>{
            loginPage=new LoginPage(locators);
        });
        getLocators('UserCommunicationReport').then(locators=>{
            userCommunicationReportPage=new UserCommunicationReportPage(locators);
        });
    });
    it('TC_029 - Verify IssueReceipt communication is captured from payment',()=>{
        getTestData('loginData','login').then(user=>{
            loginPage.login(user.Companyname,user.email,user.password);
            Cypress.on('uncaught:exception',err=>{
                if(err.message.includes('ResizeObserver loop completed with undelivered notifications.')){
                    return false;
                }
            });
            userCommunicationReportPage.Issuereceiptpayment();
              userCommunicationReportPage.Accountdetailscheckhistorycreditcard();
            // userCommunicationReportPage.verifyRecordContainsText('IssueReceipt')
        });
    });
});
