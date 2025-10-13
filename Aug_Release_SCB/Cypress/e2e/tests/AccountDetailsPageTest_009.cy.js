//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetailsPage from '../pages/AccountDetailsPage';


describe('TC_009 Account Details - View Account Details and click on three dots and click on send payment link and check razor pay option, email mobile and amount', () => {
    let loginPage;
    let accountdetailsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('AccountDetailsPage').then(locators => {  
            accountdetailsPage = new AccountDetailsPage(locators); 
        });
    });

    it('TC_009 Account Details - View Account Details and click on three dots and click on send payment link and check razor pay option, email mobile and amount', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                accountdetailsPage.ViewAccountDetails009();
                //loginPage.logout();
                         
            });
        });
    });