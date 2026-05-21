import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import MobileNumberRenewPage from '../pages/MobileNumberRenewPage';

describe('[Positive] Agent creation when mobile number exists in multiple Disabled records', () => {

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

    it('[Positive] Agent creation when mobile number exists in multiple Disabled records', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
         
            cy.wait(3000);
            mobileNumberRenewPage.Disableduserstaff();
            mobileNumberRenewPage.MobileNumberRenewPage022();
           
        });
    });

});