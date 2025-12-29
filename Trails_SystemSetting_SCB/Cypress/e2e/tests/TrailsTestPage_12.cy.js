import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailsPage from '../pages/TrailsPage';

describe('Trails - Upload status - CLick on Invalid File Format in the status field', () => {
    let loginPage;
    let trailspage;  

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('Trails').then(locators => {  
            trailspage = new TrailsPage(locators); 
        });
    });

    it('Trails - TC_ID_12', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(2000);
                trailspage.TrailsTestPage_12();            
            });
        });
    });