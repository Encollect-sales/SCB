import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountSearchPage from '../pages/AccountSearchPage';

describe('Account Search - Verify Previous button is disabled for the first account', () => {
    let loginPage;
    let accountsearchpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('accountsearch').then(locators => {  
            accountsearchpage = new AccountSearchPage(locators); 
        });
    });

    it('AccountSearch - Account Search- TC_ID_058', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                accountsearchpage.TC_58();            
            });
        });
    });