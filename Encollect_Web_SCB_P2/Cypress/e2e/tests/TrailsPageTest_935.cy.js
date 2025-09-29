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

    it(' Bulk Trails Upload Status - TC_ID_935 - 1.User can search uploaded file status by "status" field by selecting anyone of the dropdown value. 2. For example user selected "Processed" from status field and clicked on search button, in the result grid user will see list of uploaded file status as processed. 3. At once user can see only 5 uploaded file status, if user wants to see more than 5 file status then can click on dropdown of showing results and select anyone of the number to view more number of file status in one screen. 4.User should be able to click on pagination view, to go to next page and come back to previous page.', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
                cy.wait(12000);
                trailsPage.TrailsModule();
                trailsPage.BulkTrailsUploadStatus();
                trailsPage.BulkTrailsUploadStatus935();
                //loginPage.logout();
                         
            });
        });
    });

    