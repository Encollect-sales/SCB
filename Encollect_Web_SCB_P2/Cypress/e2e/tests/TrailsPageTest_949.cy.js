import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailsPage from '../pages/TrailsPage';



describe('Trails - Bulk Trail Upload Status', () => {
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

    it('Bulk Trail Upload Status - TC_ID_949 - User clicked on search button without selecting anyone of the search filter criteria then user should be  able an error as "Enter atleast one filter value" in the pop up.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(10000);
                trailsPage.TrailsModule();
               // trailsPage.BulkTrailsUploadStatus289();
              // loginPage.logout();
                         
            });
        });
    });

    