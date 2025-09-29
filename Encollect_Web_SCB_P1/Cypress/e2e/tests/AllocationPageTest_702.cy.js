
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Batch - Upload file extension and validation check', () => {
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

    it('Agency Level Allocation - TC_ID_702', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           allocationPage.Clickonallocation();
           allocationPage.filltemplate3();
           allocationPage.clickondownloadTemplate();
           allocationPage.clickonRadioBtnAO();
           allocationPage.uploadDocxExtensionFile();
         

           

        });
    });
});
