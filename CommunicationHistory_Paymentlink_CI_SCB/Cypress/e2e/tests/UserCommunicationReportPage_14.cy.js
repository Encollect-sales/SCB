import {getTestData} from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import {getLocators} from '../utils/Locatorutils';
import UserCommunicationReportPage from '../pages/UserCommunicationReportPage';

describe('CC - Account Details - Verify Email/Mobile in Communication History',()=>{
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

it('Verify Email/Mobile is displayed in Communication History',()=>{
getTestData('loginData','login').then(user=>{
loginPage.login(user.Companyname,user.email,user.password);
Cypress.on('uncaught:exception',err=>{
if(err.message.includes('ResizeObserver loop completed with undelivered notifications.')){
return false;
}
});
userCommunicationReportPage.Accountdetails();
userCommunicationReportPage.verifyCommunicationHistoryEmailMobile();
});
});
});