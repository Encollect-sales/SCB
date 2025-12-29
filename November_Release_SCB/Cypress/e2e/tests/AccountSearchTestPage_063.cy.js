import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountSearchPage from '../pages/AccountSearchPage';

describe('Once the user is logged in as a Telecaller, they can click on any hyperlink count from the Bird Eye View or Today’s View.The system navigates to the Account Search screen displaying accounts related to the selected count. The user can select any account card to view the Account Details page.On the Account Details page, Previous and Next navigation buttons are available.By clicking these buttons, the user can navigate to the previous and next accounts and view the details of all accounts sequentially.', () => {
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

    it('AccountSearch - Account Search- TC_ID_063', () => {
        getTestData('loginData', 'login2').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                accountsearchpage.TC_63();            
            });
        });
    });