import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import GeoReportPage from '../pages/GeoReportPage';
 
describe('Report - Geo Report - Logged in user to view user travel report under Geo Report Module', () => {
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
 
    it('User Travel Report - TC_ID_1370', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(900);
                georeportpage.GeoReportTestPage_1370();
               
                         
            });
        });
    });