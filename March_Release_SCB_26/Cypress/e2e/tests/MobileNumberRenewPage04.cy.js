import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import MobileNumberRenewPage from '../pages/MobileNumberRenewPage';

describe('[Negative] Prevent staff creation when mobile number belongs to Active Agency user', () => {

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

    it('[Negative] Prevent staff creation when mobile number belongs to Active Agency user', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
         
            cy.wait(3000);
             mobileNumberRenewPage.Approveduser();
            mobileNumberRenewPage.MobileNumberRenewPage04(); 
        });
    });

});