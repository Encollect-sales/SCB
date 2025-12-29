import 'cypress-file-upload';
import { getTestData } from '../utils/testDataUtils';
import LoginPage from '../pages/LoginPage';
import { getLocators } from '../utils/locatorUtils';
import ContactEnrichmentPage from '../pages/ContactEnrichmentPage';

describe('CE_BCU_002 | Bulk Contact Template Structure Validation', () => {

  let loginPage;
  let contactEnrichmentPage;

  before(() => {
    getLocators('loginPage').then(locators => {
      loginPage = new LoginPage(locators);
    });

    getLocators('contactenrichment').then(locators => {
      contactEnrichmentPage = new ContactEnrichmentPage(locators);
    });
  });

  it('CE_BCU_002 - Verify template download shows correct mandatory columns', () => {

    getTestData('loginData', 'login').then(user => {

      // Step 1: Login
      loginPage.login(user.Companyname, user.email, user.password);
      cy.wait(5000);

      // Step 2: Navigate & download template
      contactEnrichmentPage.CE_BCU_002();

      const filePath = 'cypress/downloads/BulkContactTemplate.xlsx';

      // Step 3: Verify file exists (retry-safe)
      cy.readFile(filePath, { timeout: 15000 }).should('exist');

cy.task('getExcelData', {
  filePath: 'cypress/downloads/BulkContactTemplate.xlsx',

}).then((data) => {
 
  const headers = data[0];
 
  const mandatoryHeaders = [
    'AgreementId',
    'AddressType',
    'Address',
    'MobileNumber'
  ];
 
  mandatoryHeaders.forEach(header => {
    expect(headers).to.include(header);
  });
});
    });
  });
});

