import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import SignalRNotificationPage from '../pages/SignalRNotificationPage';

const path = require('path');

describe('Agency Bulk Allocation Customer Level Telecalling Agency - Verify single failed notification for invalid file upload', () => {

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

    it('Customer Level Field Agency - TC_47', () => {

        getTestData('loginData', 'login').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(7000);

            // Upload Invalid File
            const invalidFileName = 'PrimaryTelecallingAgency_CustomerLevel_Invalid.xlsx';

            notificationPage.uploadFiletelecust(invalidFileName);

            cy.wait(6000);

            // Open Notification Panel
            notificationPage.openNotificationPanel();

            // Verify only one failed notification is generated
            notificationPage.verifySingleFailedNotification();

        });

    });

});