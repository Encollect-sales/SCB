import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';
describe('Loans & Credit Cards - Case Details - Send SMS - Verify selected Template and Language values are displayed correctly (CC)', () => {

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

it('TC_28_POS - Verify selected Template and Language values are displayed correctly (CC)', () => {

getTestData('loginData', 'login').then(user => {

loginPage.login(user.Companyname, user.email, user.password);
cy.wait(7000);

accountDetails.AccountDetails_063();

});

});

});