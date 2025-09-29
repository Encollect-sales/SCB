
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Primary Unallocation Status - User should be able to select any one of the drop down value from status field. for ex user selected "Processed" under status and clicked on search button, in the result grid user should be able to see list of processed Unallocation files and user should be able to go next page and select showing results upto 50. user should be able to scroll up and select any other drop down value under status field.', () => {
    let loginPage;
    let allocationPage;  

    before(() => {
        // Load and set locators before any tests run
        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('allocationPage').then(locators => {  
            allocationPage = new AllocationPage(locators);  
        });
    });

    it('Invalid Transaction ID - TC_ID_801', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

          
           allocationPage.ClickonallocationPUS3('Processed');

        });
    });
});
