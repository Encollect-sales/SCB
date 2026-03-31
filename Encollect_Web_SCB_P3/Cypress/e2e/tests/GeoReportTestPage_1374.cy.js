import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import GeoReportPage from '../pages/GeoReportPage';
 
describe('Report - Geo Report - User Travel Report - Logged in user to generate user travel report for bank user', () => {
    let loginPage;
    let georeportpage;
 
    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });
 
        getLocators('GeoReport').then(locators => {  
            georeportpage = new GeoReportPage(locators);
        });
    });
 
    it('User Travel Report - TC_ID_1374', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                georeportpage.GeoReportTestPage_1374();
               
                         
            });
        });
    });