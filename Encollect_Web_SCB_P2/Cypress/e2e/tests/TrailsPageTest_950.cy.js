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

    it('Bulk Trails Upload Status - TC_ID_950 - When user entered incorrect file name or transaction id and clicked on search button then user should be able to see error as "No results found" in the pop up', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(15000);
                trailsPage.TrailsModule();
                trailsPage.BulkTrailsUploadStatus();
                trailsPage.BulkTrailsUploadStatus950();
                //loginPage.logout();
                         
            });
        });
    });

    