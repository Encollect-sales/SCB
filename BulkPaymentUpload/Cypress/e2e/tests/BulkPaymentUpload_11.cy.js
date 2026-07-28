import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');
import { faker } from '@faker-js/faker';

describe('Bulk Payment Upload - External System Transaction ID Blank', () => {

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

    it('Verify that the system should display validation when External System Transaction ID is blank', () => {

        getTestData('loginData', 'login2').then(user => {

            loginPage.login(
                user.Companyname,
                user.email,
                user.password
            );

            cy.wait(1000);

            paymentPage.DownloadPaymentTemplate();

            const sheetName = 'Sheet1';

            Cypress.on('uncaught:exception', (err) => {

                if (err.message.includes('ResizeObserver')) {
                    return false;
                }

            });

            const transactionNo = faker.string.numeric(10);

            const data = {

                'A2': '',                     // External System Transaction ID Blank
                'B2': '1667',
                'C2': '2025-09-23',
                'D2': '500',
                'E2': 'Cash',
                'F2': '',
                'G2': '',
                'H2': '',
                'I2': '',
                'J2': '',
                'K2': '11:11:11',
                'L2': faker.string.numeric(8),
                'M2': '',
                'N2': '',
                'O2': 'Father',
                'P2': 'AWCNM1123S',
                'Q2': '500'

            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const fixturesFolder = 'fixtures';

            const excelFileName = 'BulkPaymentTemplate.xlsx';

            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            cy.task('updateBulkPaymentCell', {

                filePath: sourceFilePath,
                sheetName: sheetName,
                data: data

            });

            cy.task('moveAllDownloadsToFixtures');

            paymentPage.BulkPaymentUpload_Failed();

        });

    });

});