
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ScopeofWorkPage from '../pages/ScopeofWorkPage';

describe('User Management - Add staff - Scope of work - user select the dropdown in the sub-product in the scope of work', () => {
    let loginPage;
    let scopeofworkpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('ScopeOfWork').then(locators => {  
            scopeofworkpage = new ScopeofWorkPage(locators); 
        });
    });

    it('User Management - Scope of work - TC_ID_20', () => {
        getTestData('loginData', 'login').then(user=> {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                scopeofworkpage.ScopeOfWorkTestPage_20();
            
            });
        });
    });