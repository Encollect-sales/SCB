import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';
describe('Account Management - Search Account - Verify system accepts valid mobile number without displaying validation error (Credit Card)', () => {

let loginPage;
let accountDetails;

before(() => {

getLocators('loginPage').then(locators => {
loginPage = new LoginPage(locators);
});

getLocators('accountdetails').then(locators => {  
accountDetails = new AccountDetails(locators); 
});

});

it('TC_005_POS - Verify account search results are displayed without validation error (CC)', () => {

getTestData('loginData', 'login').then(user => {

loginPage.login(user.Companyname, user.email, user.password);
cy.wait(7000);

accountDetails.AccountMobileNumber010();

});

});

});