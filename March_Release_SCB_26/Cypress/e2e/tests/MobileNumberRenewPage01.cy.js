import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import MobileNumberRenewPage from '../pages/MobileNumberRenewPage';

describe('User Management - By adding disabled user phone number just want to check that existing user pop up is coming or not after clicking on the validate', () => {

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

    it('User Management - By adding disabled user phone number just want to check that existing user pop up is coming or not after clicking on the validate', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
         
            cy.wait(3000);
            mobileNumberRenewPage.Disableduser();
            mobileNumberRenewPage.MobileNumberRenewPage01();
        });
    });

});