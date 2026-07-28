import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';
describe('Account Management - Search Account - Verify account can be searched using mobile number (Credit Card)', () => {

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

it('TC_003_POS - Verify account search displays details related to entered mobile number (CC)', () => {

getTestData('loginData', 'login').then(user => {

loginPage.login(user.Companyname, user.email, user.password);
cy.wait(7000);

accountDetails.AccountMobileNumber08();

});

});

});