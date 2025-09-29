import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ReportsPage from '../pages/ReportsPage';

describe('Reports -  Account dashboard report  -As described in step, QA to consider all business validation and test the report accordingly.', () => {
    let loginPage;
    let reportsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('ReportsPage').then(locators => {  
            reportsPage = new ReportsPage(locators); 
        });
    });

    it(' Reports - TC_ID_314 , STD-1525 - Account dashboard Report - As described in step, QA to consider all business validation and test the report accordingly.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                reportsPage.ReportsModule();
                reportsPage.PaymentReport314();
                       
            });
        });
    });