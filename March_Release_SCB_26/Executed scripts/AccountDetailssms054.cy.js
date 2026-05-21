import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';

describe('Account Details -	Case Details-Send SMS-Verify SMS button is available against selected mobile number in Case Details screen (CC)', () => {

    let loginPage;
    let accountDetails;

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('accountdetails').then(locators => {  
            accountDetails = new AccountDetails(locators); 
        });
    });

    it('Case Details - Send SMS - Verify SMS button is available against selected mobile number in Case Details screen (CC)', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(7000);
            accountDetails.AccountDetails_054(); 
        });
    });

});