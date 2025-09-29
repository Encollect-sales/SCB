import { readExcelFile } from '../utils/excelutils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import TrailsPage from '../pages/TrailsPage';



describe('Trails - Bulk File Upload Status', () => {
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

    it('File Upload Status - TC_ID_933 - 1.User can search the uploaded file status using File Upload Date , In the file upload date user can select any date and click on search button 2.In the result grid user can see transaction id, file name and status of the uploaded file.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(12000);
                trailsPage.TrailsModule();
                trailsPage.BulkTrailsUploadStatus();
                trailsPage.BulkTrailsUploadStatus933();
                //loginPage.logout();
                         
            });
        });
    });

    