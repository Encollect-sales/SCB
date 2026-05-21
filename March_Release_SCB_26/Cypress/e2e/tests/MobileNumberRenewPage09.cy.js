import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import MobileNumberRenewPage from '../pages/MobileNumberRenewPage';

describe('[Positive] Enable Disabled user when no active user exists with same mobile number', () => {

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

    it('[Positive] Enable Disabled user when no active user exists with same mobile number', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
         
            cy.wait(3000);
            mobileNumberRenewPage.Approveduserstaff();
            mobileNumberRenewPage.MobileNumberRenewPage09(); 
        });
    });

});