import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

describe('TC_72 - Agency Bulk Deallocation Customer Level - Verify no success notification for invalid upload', () => {

    let loginPage;
    let notificationPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('SignalRNotification').then(locators => {
            notificationPage = new SignalRNotificationPage(locators);
        });

    });

    it('Agency Bulk Deallocation Customer Level - TC_72', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            const excelFileName = 'InvalidCustomerLevel_Deallocation.xlsx';

            notificationPage.uploadFileCustomerLevelDeallocationfield(excelFileName);

            cy.wait(6000);

            notificationPage.verifyNoSuccessNotification();

        });

    });

});