//import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ReportsPage from '../pages/ReportsPage';


describe('  ', () => {
    let loginPage;
    let reportspage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Reports').then(locators => {  
            reportspage = new ReportsPage(locators); 
        });
    });

    it('Reports - Additional filters', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                reportspage.ReportsTestPage_01();
                         
            });
        });
    });