
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Batch- If the file, that the user is trying to upload, is other than .xls or .xlsx extension, when user clicked on upload button user will not be able to see other file extensions file.', () => {
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

    it('Product Filter - TC_ID_784', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
           allocationPage.ClickonallocationUAAOS('5: Uploaded');

        });
    });
});
