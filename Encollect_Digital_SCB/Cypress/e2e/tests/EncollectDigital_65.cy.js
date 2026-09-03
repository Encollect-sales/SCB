import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import StaffEmpanelmentPage from '../pages/StaffEmpanelmentPage';

describe('TC_065 - Add Staff Menu', () => {

    let loginPage;
    let staffEmpanelmentPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('StaffEmpanelment').then(locators => {
            staffEmpanelmentPage = new StaffEmpanelmentPage(locators);
        });

    });

    it('TC_065_POS - Verify Add Staff sub menu is available', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            staffEmpanelmentPage.verifyAddStaffMenu();

        });

    });

});