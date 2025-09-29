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

    it('Bulk Trails Upload Status - TC_ID_938 - User clicked on upload button without selecting the file, then system should show an error as "Please select the file to upload" in the pop up.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(12000);
                trailsPage.TrailsModule();
                trailsPage.BulkTrailsUpload();
                trailsPage.BulkTrailsUpload938();
                //loginPage.logout();
                         
            });
        });
    });

    