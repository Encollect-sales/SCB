import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import LegalBulkUploadPage from '../pages/LegalBulkUploadPage';

const path = require('path');

describe(
    'Case Bulk Upload - Verify upload of header only file is rejected',
    () => {

        let loginPage;
        let legalPage;

        before(() => {

            getLocators('loginPage').then(locators => {
                loginPage = new LoginPage(locators);
            });

            getLocators('LegalBulkUpload').then(locators => {
                legalPage = new LegalBulkUploadPage(locators);
            });

        });

        it(
            'TC_059 - Verify upload of template with header only',
            () => {

                getTestData('loginData', 'login').then(user => {

                    //====================================================
                    // Login
                    //====================================================

                    loginPage.login(
                        user.Companyname,
                        user.email,
                        user.password
                    );

                    cy.wait(3000);

                    //====================================================
                    // Download Case Template
                    //====================================================

                    legalPage.DownloadCaseTemplate();

                    const fileName =
                        'BulkUploadOfCaseDetails.xlsx';

                    const sheetName =
                        'Sheet1';

                    Cypress.on(
                        'uncaught:exception',
                        (err) => {

                            if (
                                err.message.includes(
                                    'ResizeObserver loop completed with undelivered notifications.'
                                )
                            ) {
                                return false;
                            }

                        }
                    );

                    //====================================================
                    // File Path
                    //====================================================

                    const downloadsFolder =
                        Cypress.config('downloadsFolder');

                    const sourceFilePath =
                        path.join(
                            downloadsFolder,
                            fileName
                        );

                    //====================================================
                    // Remove All Data Rows
                    // Keep Header Only
                    //====================================================

                    cy.task(
                        'clearLegalBulkDataRows',
                        {
                            filePath: sourceFilePath,
                            sheetName: sheetName
                        }
                    ).then((result) => {

                        cy.log(result);

                    });

                    //====================================================
                    // Move File
                    //====================================================

                    cy.task(
                        'moveAllDownloadsToFixtures'
                    ).then(result => {

                        cy.log(result);

                    });

                    //====================================================
                    // Upload File
                    //====================================================

                    legalPage.UploadCaseTemplate(
                        fileName
                    );

                    //====================================================
                    // Verify Upload Failed
                    //====================================================

                    legalPage.VerifyUploadFailed();

                    //====================================================
                    // Get Transaction ID
                    //====================================================

                    legalPage.getTransactionId()
                        .then((txnIdRaw) => {

                            const txnId =
                                txnIdRaw.trim();

                            cy.log(
                                'Captured Transaction ID : ' +
                                txnId
                            );

                            //================================================
                            // Download Status File
                            //================================================

                            legalPage.downloadStatusFile(
                                txnId
                            );

                            cy.wait(8000);

                            //================================================
                            // Find Downloaded Status File
                            //================================================

                            cy.task(
                                'findLatestFile',
                                {
                                    folder:
                                        downloadsFolder,

                                    pattern:
                                        `BulkUploadOfCaseDetails_${txnId}`
                                }
                            ).then((filePath) => {

                                expect(
                                    filePath,
                                    'Status file should exist'
                                ).to.not.be.null;

                                cy.log(
                                    'Downloaded Status File: ' +
                                    filePath
                                );

                                //================================================
                                // Read Excel File
                                //================================================

                                cy.task(
                                    'getExcelData',
                                    filePath
                                ).then((excelData) => {

                                    expect(
                                        excelData,
                                        'Excel data should exist'
                                    ).to.not.be.null;

                                    //================================================
                                    // Get Sheet
                                    //================================================

                                    const sheetData =
                                        excelData[sheetName];

                                    expect(
                                        sheetData,
                                        'Sheet data should exist'
                                    ).to.exist;

                                    cy.log(
                                        'Status file Excel data loaded successfully'
                                    );

                                    //================================================
                                    // Verify Status Column NOT Present
                                    //================================================

                                    const firstRow =
                                        sheetData.length > 0
                                            ? sheetData[0]
                                            : {};

                                    expect(
                                        firstRow,
                                        'Status column should not be present'
                                    ).to.not.have.property(
                                        'Status'
                                    );

                                    //================================================
                                    // Verify Remarks Column NOT Present
                                    //================================================

                                    expect(
                                        firstRow,
                                        'Remarks column should not be present'
                                    ).to.not.have.property(
                                        'Remarks'
                                    );

                                    cy.log(
                                        'Status column is not present'
                                    );

                                    cy.log(
                                        'Remarks column is not present'
                                    );

                                });

                            });

                        });

                });

            }
        );

    }
);