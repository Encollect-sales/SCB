import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';

describe('TC_038 - Verify Preview button is disabled when Template and Language are not selected (CC)', () => {

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

it('Verify Preview button is disabled when Template and Language are not selected (CC)', () => {

getTestData('loginData','login').then(user => {

loginPage.login(user.Companyname,user.email,user.password);

cy.wait(7000);

accountDetails.AccountDetails_073();

});

});

});