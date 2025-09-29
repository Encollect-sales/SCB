import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import CommunicationPage from '../pages/CommunicationPage'

describe('Communication - TC_ID_200 - Communication - Create communication Template type Letter with multiple language "Kannada and English" and allow access from account details Yes and add variable in both language', () => {
    let loginPage;
    let communicationPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('CommunicationPage').then(locators => {  
            communicationPage = new CommunicationPage(locators); 
        });
    });

    it('Communication - TC_ID_200 - Communication - Create communication Template type Letter with multiple language "Kannada and English" and allow access from account details Yes and add variable in both language', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(5000);
                communicationPage.communicationModule();
                communicationPage.CreateCommunicationTemplate200();
                //loginPage.logout();
                         
            });
        });
    });