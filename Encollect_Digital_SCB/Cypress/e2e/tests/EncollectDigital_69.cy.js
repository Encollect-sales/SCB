import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import StaffEmpanelmentPage from '../pages/StaffEmpanelmentPage';

describe('TC_069 - Search Staff Navigation', () => {

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

    it('TC_069_POS - Verify user can navigate to Search Staff screen', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            staffEmpanelmentPage.navigateToSearchStaff();

        });

    });

});