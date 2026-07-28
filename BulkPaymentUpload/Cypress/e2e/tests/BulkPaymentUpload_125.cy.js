import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import PaymentbulkuploadPage from '../pages/PaymentbulkuploadPage';
const path = require('path');

describe('Bulk Payment Upload - All Mandatory Fields Blank', () => {

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

    it('Verify upload fails when all mandatory fields are blank', () => {

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
                if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
                    return false;
                }
            });

            const data = {

                // Mandatory Fields Blank
                'A2': '',
                'B2': '',
                'C2': '',
                'D2': '',
                'E2': '',

                // Optional Fields
                'F2': '',
                'G2': '',
                'H2': '',
                'I2': '',
                'J2': '',
                'K2': '',
                'L2': '',
                'M2': '',
                'N2': '',
                'O2': '',
                'P2': '',

                // Breakup Fields Blank
                'Q2': '',
                'R2': '',
                'S2': '',
                'T2': '',
                'U2': '',
                'V2': '',
                'W2': '',
                'X2': '',
                'Y2': '',
                'Z2': '',
                'AA2': '',
                'AB2': '',

                // Placeholder Fields
                'AC2': '',
                'AD2': '',
                'AE2': '',
                'AF2': '',
                'AG2': ''

            };

            const downloadsFolder = Cypress.config('downloadsFolder');
            const excelFileName = 'BulkPaymentTemplate.xlsx';
            const sourceFilePath = path.join(downloadsFolder, excelFileName);

            cy.task('updateBulkPaymentCell', {
                filePath: sourceFilePath,
                sheetName,
                data
            });

            cy.task('moveAllDownloadsToFixtures');

            paymentPage.BulkPaymentUpload_Failed();

        });

    });

});