import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';
describe('Dashboard - Search - Verify system does not show invalid mobile number error for correctly masked number (Credit Card)', () => {

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

it('TC_002_POS - Verify system accepts masked mobile number and shows results (CC)', () => {

getTestData('loginData', 'login').then(user => {

loginPage.login(user.Companyname, user.email, user.password);
cy.wait(7000);

accountDetails.AccountMobileNumber07();

});

});

});