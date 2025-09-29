//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetailsPage from '../pages/AccountDetailsPage';


describe('User Management - Account Details', () => {
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

    it('Account Details - TC_ID_103', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                accountdetailsPage.AllocationHistoryPageTest_245();
                // loginPage.logout();         
            });
        });
    });