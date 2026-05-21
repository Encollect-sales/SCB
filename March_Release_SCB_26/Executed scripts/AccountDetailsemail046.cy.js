import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';

describe('TC_046 - Verify Email Preview displays subject, body and signature with actual account values', () => {

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

it('Verify Email Preview displays subject, body and signature with actual account values', () => {

getTestData('loginData','login').then(user => {

loginPage.login(user.Companyname,user.email,user.password);

cy.wait(7000);

accountDetails.AccountDetails_046();

});

});

});