//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetailsPage from '../pages/AccountDetailsPage';


describe('Allocation History - Account search', () => {
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

    it('Allocation History - TC_ID_545 - Go to Account search screen and enter any valid A/c number and click on search button', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                accountdetailsPage.AllocationHistroyPageTest_545();
                //loginPage.logout();        
            });
        });
    });