//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetailsPage from '../pages/AccountDetailsPage';


describe('Account Details - Search Agent', () => {
    let loginPage;
    let accountdetailspage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('DbstoScb').then(locators => {  
            accountdetailspage = new AccountDetailsPage(locators); 
        });
    });

    it('Account Details - TC_ID_97 - View Account Details', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                accountdetailspage. AccountDetailsTestPage_97();
               
                         
            });
        });
    });