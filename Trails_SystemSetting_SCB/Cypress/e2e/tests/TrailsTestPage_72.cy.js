import 'cypress-file-upload';
import { getTestData } from '../utils/TestDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/Locatorutils';
import TrailsPage from '../pages/TrailsPage';
import { faker } from '@faker-js/faker';
const path = require('path');

describe('Trails - Entering correct details and file is getting processed', () => {
  let loginPage;
  let trailspage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('Trails').then(locators => {
      trailspage = new TrailsPage(locators);
    });
  });

  it('User downloads template, updates Excel, and uploads the file', () => {
    getTestData('loginData', 'login2').then(user => {
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(900);

      trailspage.BulkTrailTemplate_download();

      Cypress.on('uncaught:exception', err => {
        if (err.message.includes('ResizeObserver loop completed')) {
          return false;
        }
      });

      const sheetName = 'Sheet1';

      const data = {
        A2: '18765',
        B2: '10031',
        C2: 'yes',
        D2: 'PTP',
        E2: 'PTP',
        F2: '2027/12/22',
        G2: '109',
        H2: ' ',
        I2: 'Bulk upload',
        J2: faker.number.int({ min: 1000000000, max: 9999999999 }).toString(),
        K2: faker.location.city(),
        L2: faker.location.streetAddress(),
        M2: `${faker.string.alpha({ length: 8 }).toLowerCase()}@yopmail.com`,
        N2: 'permanent',
        O2: 'new'
      };

      const downloadsFolder = Cypress.config('downloadsFolder');
      const excelFileName = 'Bulktrail.xlsx';
      const sourceFilePath = path.join(downloadsFolder, excelFileName);

      cy.task('updateBulktrailCell', {
        filePath: sourceFilePath,
        sheetName,
        data
      });

      cy.task('moveAllDownloadsToFixtures');

      // Upload updated Excel file
      trailspage.Upload_button_disabled();
    });
  });
});
