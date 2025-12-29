
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Primary Allocation Status - user selected "Processed" under status field and clicked on search buttonuser should be able to see all processed allocation files in the result grid.', () => {
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

    it('TC_ID_707', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);
            allocationPage.ClickonallocationPAS();
            allocationPage.fillprocessed();
            allocationPage.clickonSearch();

        });
    });
});
