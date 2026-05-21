import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import MobileNumberRenewPage from '../pages/MobileNumberRenewPage';

describe('[Negative] Staff creation cancelled when Cancel is clicked in confirmation popup', () => {

    let loginPage;
    let mobileNumberRenewPage;

    before(() => {
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('UserManagement').then(locators => {  
            mobileNumberRenewPage = new MobileNumberRenewPage(locators); 
        });
    });

    it('[Negative] Staff creation cancelled when Cancel is clicked in confirmation popup', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
         
            cy.wait(3000);
            mobileNumberRenewPage.Disableduser();
            mobileNumberRenewPage.MobileNumberRenewPage02(); 
        });
    });

});