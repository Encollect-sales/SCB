
import { readExcelFile } from '../utils/excelUtils';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import AllocationPage from '../pages/AllocationPage';
import { getLocators } from '../utils/locatorUtils';

describe('Allocation - Upload Agency Allocation Batch -  user clicked on "ok" so that file will get uploaded into the ENCollect systemuser will see a pop up msg as "File uploaded successfully" along with transaction ID.', () => {
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

    it('Agency Level Allocation - TC_ID_699', () => {
        getTestData('loginData', 'login').then(user => {
            loginPage.login(user.Companyname, user.email, user.password);

           allocationPage.Clickonallocation699();
           //allocationPage.filltemplate3();
           //allocationPage.clickondownloadTemplate();
           allocationPage.clickonRadioBtnAO1();
           allocationPage.uploadfile3();
           allocationPage.clickonOK1();
           allocationPage.clickonaccountsearch();

           

        });
    });
});
