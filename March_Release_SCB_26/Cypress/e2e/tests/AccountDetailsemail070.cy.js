import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';
describe('Case Details - Send Email - Verify Email button is available against selected email address in Case Details screen (CC)', () => {

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

    it('Verify Email button is available against selected email address in Case Details screen (CC)', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(7000);
            accountDetails.AccountDetails_070();
        });
    });

});
