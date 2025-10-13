//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetailsPage from '../pages/AccountDetailsPage';


describe('TC_005 Account Details - View Account Details and click on 360 view buttom and click on Demographic Details and check for Show/Hide Empty Values and click on it', () => {
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

    it('TC_005 Account Details - View Account Details and click on 360 view buttom and click on Demographic Details and check for Show/Hide Empty Values and click on it', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                accountdetailsPage.ViewAccountDetails005();
                //loginPage.logout();
                         
            });
        });
    });