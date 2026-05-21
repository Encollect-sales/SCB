import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage';

describe('Communication Page  -Verify Header and Footer are displayed on every page in Letter Preview', () => {
    let loginPage;
    let communicationPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('communicationpage').then(locators => {  
            communicationPage = new CommunicationPage(locators); 
        });
    });

    it('Verify Header and Footer are displayed on every page in Letter Preview', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            cy.wait(7000);
            communicationPage.CommunicationPage_024(); 
        });
    });
});