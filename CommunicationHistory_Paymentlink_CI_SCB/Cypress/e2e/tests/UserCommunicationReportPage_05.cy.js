import {getTestData} from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import {getLocators} from '../utils/Locatorutils';
import UserCommunicationReportPage from '../pages/UserCommunicationReportPage';

describe('Loan Account -Mail- Verify user can navigate to Send Duplicate Receipt and enter Account Number with current From and To dates',()=>{
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
    it('TC_030 - Verify user can navigate to Send Duplicate Receipt and enter Account Number with current From and To dates',()=>{
        getTestData('loginData','login').then(user=>{
            loginPage.login(user.Companyname,user.email,user.password);
            Cypress.on('uncaught:exception',err=>{
                if(err.message.includes('ResizeObserver loop completed with undelivered notifications.')){
                    return false;
                }
            });
            userCommunicationReportPage.NavigateToSendDuplicateReceipt();
            userCommunicationReportPage.enterAccountNumberAndCurrentDate();
              userCommunicationReportPage.Accountdetailscheckhistorymail();
            // userCommunicationReportPage.verifyRecordContainsText('IssueReceipt')
        });
    });
});
