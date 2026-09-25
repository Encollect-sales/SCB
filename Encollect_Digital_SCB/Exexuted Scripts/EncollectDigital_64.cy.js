import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import StaffEmpanelmentPage from '../pages/StaffEmpanelmentPage';

describe('TC_064 - Staff Empanelment Menu', () => {

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

    it('TC_064_POS - Verify Staff Empanelment menu is visible under User Management', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            staffEmpanelmentPage.verifyStaffEmpanelmentMenu();

        });

    });

});