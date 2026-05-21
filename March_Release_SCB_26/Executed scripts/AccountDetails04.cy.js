import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import AccountDetails from '../pages/AccountDetails';

describe('Account Details - Click to Call - Verify call is initiated when Ikontel option is selected and Proceed button is clicked', () => {

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

    it('Verify call is initiated when Ikontel option is selected and Proceed button is clicked', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(7000);
            accountDetails.AccountDetails_04();
        });
    });

});