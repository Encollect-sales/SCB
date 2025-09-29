import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailsPage from '../pages/TrailsPage';



describe('Trails - Bulk Trails Upload Status', () => {
    let loginPage;
    let trailsPage; 

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('TrailsPage').then(locators => {  
            trailsPage = new TrailsPage(locators); 
        });
    });

    it('Bulk Trails Upload Status - TC_ID_936 - User should be able to scroll up to the top of the page to change anyone of the search filter criteria and click on search button once again.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(12000);
                trailsPage.TrailsModule();
                trailsPage.BulkTrailsUploadStatus();
                trailsPage.BulkTrailsUploadStatus935();
                trailsPage.BulkTrailsUploadStatus936();
                //loginPage.logout();         
            });
        });
    });

    