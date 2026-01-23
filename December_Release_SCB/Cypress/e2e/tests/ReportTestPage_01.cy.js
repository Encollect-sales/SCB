import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ReportsPage from '../pages/ReportsPage';

describe('Trails -trails should be visible', () => {
    let loginPage;
    let reportsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('reports').then(locators => {  
            reportsPage = new ReportsPage(locators); 
        });
    });

    it('Trails - TC_ID_01', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                reportsPage.ReportTestPage_01();            
            });
        });
    });