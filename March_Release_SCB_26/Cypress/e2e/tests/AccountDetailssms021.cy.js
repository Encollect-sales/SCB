import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';

describe('Account Details -	Case Details - Send SMS - Verify Send Message popup is displayed with Template and Language dropdowns', () => {

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

    it('Case Details - Send SMS -  Verify Send Message popup is displayed with Template and Language dropdowns', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(7000);
            accountDetails.AccountDetails_021(); 
        });
    });

});