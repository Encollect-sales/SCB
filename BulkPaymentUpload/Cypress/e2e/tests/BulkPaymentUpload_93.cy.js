import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - External Transaction ID More Than 32 Characters', () => {

    let loginPage;
    let paymentPage;

    before(() => {

        getLocators('loginPage').then(locators => {
            loginPage = new LoginPage(locators);
        });

        getLocators('BulkPaymentUpload').then(locators => {
            paymentPage = new PaymentbulkuploadPage(locators);
        });

    });

    it('Verify upload fails when External Transaction ID exceeds 32 characters', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            paymentPage.DownloadPaymentTemplate();

            const sheetName = 'Sheet1';

            const data = {

                'A2': faker.string.alphanumeric(33),
                'B2': '1667',
                'C2': '2025-09-23',
                'D2': '500',
                'E2': 'Cash',
                'K2': '11:11:11',
                'L2': faker.string.numeric(8),

                'Q2': '500',
                'R2': '0',
                'S2': '0',
                'T2': '0',
                'U2': '0',
                'V2': '0',
                'W2': '0',
                'X2': '0',
                'Y2': '0',
                'Z2': '0',
                'AA2': '0',
                'AB2': '0'
            };

            const downloadsFolder = Cypress.config('downloadsFolder');

            cy.task('updateBulkPaymentCell', {

                filePath: path.join(downloadsFolder, 'BulkPaymentTemplate.xlsx'),
                sheetName,
                data

            });

            cy.task('moveAllDownloadsToFixtures');

            paymentPage.BulkPaymentUpload_Failed();

        });

    });

});