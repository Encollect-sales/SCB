import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ScopeofWorkPage from '../pages/ScopeofWorkPage';

describe('ScopeofWork - user will click on Monthly report and check the scoped region', () => {
    let loginPage;
    let scopeofworkpage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('ScopeofWork').then(locators => {  
            scopeofworkpage = new ScopeofWorkPage(locators); 
        });
    });

    it('ScopeofWork- TC_ID_036', () => {
        getTestData('loginData', 'login1').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(7000);
                scopeofworkpage.ScopeofWorkTestPage_036();            
            });
        });
    });