
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Secondary Allocation Status - user selected "Uploaded" under status field and clicked on search button user should be able to see all Uploaded allocation files in the result grid.', () => {
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

    it('TC_ID_735', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            allocationPage.ClickonallocationSAS();
            allocationPage.filluploaded();
            allocationPage.clickonSearch();

        });
    });
});
