import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import UserManagementPage from '../pages/UserManagementPage';

describe('User Management - Pan Card -Open profile, modify PAN value, and save and Changes are saved and reflected in the profile ', () => {
    let loginPage;
    let userManagementPage;

   
    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('PanCard').then(locators => {  
            userManagementPage = new UserManagementPage(locators); 
        });
    });


    it('User Management -Pan Card- TC_ID_02', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                userManagementPage.PanCardTestPage_02();            
            });
        });

          it('User Management -Pan Card- TC_ID_02', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(7000);
                userManagementPage.PanCardTestPage_02a();            
            });
        });
    });