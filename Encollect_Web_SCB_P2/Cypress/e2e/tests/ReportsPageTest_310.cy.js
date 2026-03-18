import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ReportsPage from '../pages/ReportsPage';

describe('Reports - Payment Reports', () => {
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

    it('Payment reports - TC_ID_310 - To check all Mandatory field drop down value', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                reportsPage.ReportsModule();
                reportsPage.PaymentReport310();
                //loginPage.logout();
                         
            });
        });
    });