import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class AllocationPage {
  constructor(locators) {
    this.locators = locators;
  }

  Clickonallocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.uploadallocation).click();
    cy.wait(2000);
  } 

    Clickonallocation699() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonallocationtoowner).click();
    cy.wait(2000);
    cy.get(this.locators.ownerbulkupladaccountlevel).click();
    cy.wait(2000);
    cy.get('#downloadTemplate3').click();
    cy.wait(2000);
    //cy.get(this.locators.uploadallocation).click();
    //cy.wait(2000);
  } 

  Clickonallocation701() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('a[title="Allocation Owner Bulk Upload"]').click();
    cy.wait(2000);
    cy.get('a[title="Allocation Owner Bulk Upload Customer Level"]').click();
    cy.wait(2000);
  } 

  fillproductgroup() {

  cy.get(this.locators.pg_select).click();   

cy.get('.ng-dropdown-panel .ng-option').then(options => {

  const total = options.length;

  const firstIndex  = Math.floor(Math.random() * total);
  let secondIndex   = Math.floor(Math.random() * total);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * total);
  }

  cy.wrap(options[firstIndex]).click({ force: true });
  cy.wait(500);

  cy.get(this.locators.pg_select).click({ force: true });
  cy.wait(500);

  cy.wrap(options[secondIndex]).click({ force: true });
});


  }

  fillproduct() {

     cy.get(this.locators.product_select).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  // Re-open dropdown for next option
  cy.get(this.locators.product_select).click();
  cy.wait(500);

});

  }

  fillsubproduct() {
     cy.get(this.locators.subproduct_select).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  // Re-open dropdown for next option
  cy.get(this.locators.subproduct_select).click();
  cy.wait(2000);

});

  }

  fillBucketAndCountry(){

     cy.get(this.locators.SelectBucket).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  // Re-open dropdown for next option
  cy.get(this.locators.SelectBucket).click();
  cy.wait(2000);

});

 cy.get(this.locators.SelectCountry).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  // Re-open dropdown for next option
  cy.get(this.locators.SelectCountry).click();
  cy.wait(2000);

});
  }

  clickNotAllcated() {
    cy.get(this.locators.notallocated).click({force: true});
     cy.wait(2000);
  }

  clickonAllcated() {
    cy.get(this.locators.allocated).click({force: true});
     cy.wait(2000);
  }

  clickonDownload() {
    cy.get(this.locators.download).click({force: true});
     cy.wait(4000);
  }

  clickonprimaryfile() {
    cy.get(this.locators.primaryZip).click({force: true});
     cy.wait(2000);
  }

  filltemplate() {
    cy.get('#downloadTemplateType1').click();
    cy.wait(2000);
  }

  filltemplate2() {
    cy.get('#downloadTemplateType2').click();
    cy.wait(2000);
  }

  filltemplate3() {
    cy.get(':nth-child(1) > .enc-card > .card-content > :nth-child(1) > .form-radio-group > :nth-child(1)').click();
    cy.wait(2000);
  }

  clickondownloadTemplate() {
    cy.get(this.locators.downloadtemplate).click();
    cy.wait(2000);
  }

  clickonRadioBtnFA() {
    cy.get(this.locators.RadioBtnFA).click();
     cy.wait(2000);
  }

  clickonRadioBtnTCA() {
    cy.get(this.locators.RadioBtnTCA).click();
     cy.wait(2000);
  }

  clickonRadioBtnAO() {
    cy.get(this.locators.RadioBtnAO).click();
     cy.wait(2000);
  }

    clickonRadioBtnAO1() {
    cy.get(this.locators.RadioBtnAO1).click();
     cy.wait(2000);
  }

  clickonOK() {
    cy.get(this.locators.ConfirmUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 }).should('contain.text', 'Filename should not contain any special characters');


  }

   clickonOK1() {
    cy.get(this.locators.ConfirmUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.wait(4000);
    cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(3) > a').click();
    cy.wait(2000);
    cy.then(() => {
        const transactionId = Cypress.env('transactionID');
        cy.get('#Transactionid').type(transactionId.toString()); // Convert to string if needed
      });
    cy.wait(2000);
    cy.get('#search').click();
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(4)').scrollIntoView().contains('Processed').should('be.visible');
    cy.wait(2000);

  }

    clickonOK700() {
    cy.get(this.locators.ConfirmUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.wait(2000);
  }  

  clickonaccountsearch(){
   cy.get('.account-search > a.ng-star-inserted > span.ng-star-inserted').click();
   cy.wait(2000);
   cy.get('#search-account-number').type('68210000012749');
   cy.wait(3000);
   cy.get('#search-submit-button').click();
   cy.wait(5000);
   cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
   cy.wait(2000);
   cy.get('#toggleButton > img').click();
   cy.wait(3000);
   cy.get(':nth-child(15) > .dropdown-item').click();
   cy.wait(3000);
   cy.contains("Allocation History").should("be.visible");
   cy.wait(2000);
  }

  uploadfile1_Spl_Chr(){

     cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryAgency(1).xlsx')
  }
  uploadfile1() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryAgency.xlsx');
  }

  uploadfile2() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryTeleCallingAgency(1).xlsx');
  }

  uploadfile3() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.xlsx');
  }

  uploadfilewithSpclChrctr() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('Allocation#ToOwner.xlsx');
  }

  uploadDocxExtensionFile() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner_customeridLevel.xlsx');

  }

   uploadDocxExtensionFile701() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner_customeridLevel.xlsx');
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.wait(6000);
    cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(3) > a').click();
    cy.wait(2000);
    cy.then(() => {
        const transactionId = Cypress.env('transactionID');
        cy.get('#Transactionid').type(transactionId.toString()); // Convert to string if needed
      });
    cy.wait(2000);
    cy.get('#search').click();
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(4)').scrollIntoView().contains('Processed').should('be.visible', {force: true});
    cy.wait(2000);

  }

  clickonUpldCollectorallocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickAGBA).click({force: true});
    cy.wait(2000);
  }

  fillCAtemplate() {
    cy.get('#downloadTemplateType1').click();
    cy.wait(2000);
  }

  fillCAtemplate2() {
    cy.get('#downloadTemplateType2').click();
    cy.wait(2000);
  }

  fillCAtemplate3() {
    cy.get('#downloadTemplateType3').click();
    cy.wait(2000);
  }

  clickonCAdownloadTemplate() {
    cy.get('.card-content > :nth-child(2) > .btn')
    //cy.get(this.locators.CAdownloadtemplt).click();
    cy.wait(2000);
  }

  clickonCARadioBtnstaff() {
    cy.get(this.locators.CAradiobtnstaff).click();
  }

  clickonCARadioBtnagnt() {
    //cy.get(this.locators.CAradiobtnagent).click();
    cy.get('#AllocationType2').click({ force: true });
    // cy.get('input[type="radio"][value="agent"]').click();

  }

  clickonCARadioBtntelec() {
    cy.get('#allocationType3').click();
    //cy.get(this.locators.CAradiobtntelec).click();
  }

  CAuploadfile() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.xlsx');
  }

  CAuploadfile1() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationAgent.xlsx');
  }

  CAuploadfile2() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationTelecaller.xlsx');
  }

  CAuploadfile3() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationCollectionStaff.xlsx');
  }

  clickonCAconfirmOK() {
    cy.get('#fileUploadConfirmation').click();
    //cy.get(this.locators.CAconfirmOK).click();
  }

  uploadCAfilewithSpclChrctr() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondary#AllocationCollectionStaff copy.xlsx');
  }

  uploadCADocxExtensionFile() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationAgent.docx');
  }

  ClickonallocationSAS() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.SecondaryAS).click().click();
    cy.wait(2000);
  }

  fillfailedstatus() {
    cy.get(this.locators.Status).select('Failed');
    cy.wait(2000);
  }

  fillinvalidstatus() {
    cy.get(this.locators.Status).select('Invalid File Format');
    cy.wait(2000);
  }

  fillprocessed() {
    cy.get(this.locators.Status).select('Processed');
    cy.wait(2000);
  }

  fillpartiallyprocessed() {
    cy.get(this.locators.Status).select('Partially Processed');
    cy.wait(2000);
  }

  filluploaded() {
    cy.get(this.locators.Status).select('Uploaded');
    cy.wait(2000);
  }

  clickonSearch() {
    cy.get(this.locators.Search).click();
    cy.wait(2000);
    cy.get('h3').should('contain', 'Search Result');
  }

  ClickonallocationPAS() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnAAS).click();
    cy.wait(2000);
    //cy.get(this.locators.PrimaryAS).click().click();
    cy.wait(2000);
  }

  ClickonallocationPAF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAABF).click();
    cy.wait(2000);
    // cy.get(this.locators.clickonPAF).click().click();
    // cy.wait(2000);
    // cy.get(this.locators.clickonPF).click();
    // cy.wait(2000);
  }

  fillproductgroupPAF() {
    cy.get(this.locators.pg_select_PAF).click();     
cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').contains('HL').click({ force: true });
cy.wait(2000);

  }

  fillproductPAF() {
    cy.get(this.locators.product_select_PAF).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Home Loan').click({ force: true });
cy.wait(2000);
  }

  fillsubproductPAF() {
    cy.get(this.locators.subproduct_select_PAF).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Home Loan').click({ force: true });
cy.wait(2000);
  }

  fillproductgroupPAF1() {
    
    cy.get(this.locators.pg_select_PAF).click();   

cy.get('.ng-dropdown-panel .ng-option').then(options => {

  const total = options.length;

  const firstIndex  = Math.floor(Math.random() * total);
  let secondIndex   = Math.floor(Math.random() * total);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * total);
  }

  cy.wrap(options[firstIndex]).click({ force: true });
  cy.wait(500);

  cy.get(this.locators.pg_select_PAF).click({ force: true });
  cy.wait(500);

  cy.wrap(options[secondIndex]).click({ force: true });
});

  }

  fillproductPAF1() {
   
     cy.get(this.locators.product_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.product_select_PAF).click();
  cy.wait(500);

});

  }

  fillsubproductPAF1() {

    cy.get(this.locators.subproduct_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.subproduct_select_PAF).click();
  cy.wait(500);

});
  }


  fillproductgroupPAF2() {

     cy.get(this.locators.pg_select_PAF).click();   

cy.get('.ng-dropdown-panel .ng-option').then(options => {

  const total = options.length;

  const firstIndex  = Math.floor(Math.random() * total);
  let secondIndex   = Math.floor(Math.random() * total);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * total);
  }

  cy.wrap(options[firstIndex]).click({ force: true });
  cy.wait(500);

  cy.get(this.locators.pg_select_PAF).click({ force: true });
  cy.wait(500);

  cy.wrap(options[secondIndex]).click({ force: true });
});
  }

  fillproductPAF2() {
    cy.get(this.locators.product_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.product_select_PAF).click();
  cy.wait(500);

});
  }

  fillsubproductPAF2() {

    cy.get(this.locators.subproduct_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.subproduct_select_PAF).click();
  cy.wait(500);

});
  }

  fillproductgroupPAF3() {

     cy.get(this.locators.pg_select_PAF).click();   

cy.get('.ng-dropdown-panel .ng-option').then(options => {

  const total = options.length;

  const firstIndex  = Math.floor(Math.random() * total);
  let secondIndex   = Math.floor(Math.random() * total);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * total);
  }

  cy.wrap(options[firstIndex]).click({ force: true });
  cy.wait(500);

  cy.get(this.locators.pg_select_PAF).click({ force: true });
  cy.wait(500);

  cy.wrap(options[secondIndex]).click({ force: true });
});
  }

  fillproductPAF3() {
    cy.get(this.locators.product_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.product_select_PAF).click();
  cy.wait(500);

});
  }

  fillsubproductPAF3() {
    cy.get(this.locators.subproduct_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.subproduct_select_PAF).click();
  cy.wait(500);

});
  }

  fillproductgroupPAF4() {
  
     cy.get(this.locators.pg_select_PAF).click();   

cy.get('.ng-dropdown-panel .ng-option').then(options => {

  const total = options.length;

  const firstIndex  = Math.floor(Math.random() * total);
  let secondIndex   = Math.floor(Math.random() * total);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * total);
  }

  cy.wrap(options[firstIndex]).click({ force: true });
  cy.wait(500);

  cy.get(this.locators.pg_select_PAF).click({ force: true });
  cy.wait(500);

  cy.wrap(options[secondIndex]).click({ force: true });
});
  }

  fillproductPAF4() {
   cy.get(this.locators.product_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.product_select_PAF).click();
  cy.wait(500);

});
  }

  fillsubproductPAF4() {
   cy.get(this.locators.subproduct_select_PAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.subproduct_select_PAF).click();
  cy.wait(500);

});
  }

  fillproductgroupPAF5() {
    cy.get(this.locators.pg_select_PAF).select('1933CAC2741F481FB1015F25AAFEDC26');
    cy.wait(2000);
  }

  fillproductPAF5() {
    cy.get(this.locators.product_select_PAF).select('40');
    cy.wait(2000);
  }

  fillsubproductPAF5() {
    cy.get(this.locators.subproduct_select_PAF).select('41');
    cy.wait(2000)
  }

  fillproductgroupPAF6() {
    cy.get(this.locators.pg_select_PAF).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Loan Products').click();
     cy.wait(2000);
  }

  fillproductPAF6() {
    cy.get(this.locators.product_select_PAF).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Vehicle Loan').click();
     cy.wait(2000);
  }

  fillsubproductPAF6() {
    cy.get(this.locators.subproduct_select_PAF).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Bike').click();
     cy.wait(2000);
  }

  ClickonallocationBF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(4) > a.ng-star-inserted').click()
    cy.wait(2000);
    
    cy.get(this.locators.clickonPAF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonBF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonDPD).type('OK');
    cy.wait(2000);
    cy.get(this.locators.clickonDString).type('OK');
    cy.wait(2000);
    cy.get(this.locators.BOMBucket).select('All');
    cy.wait(2000);
  }

  ClickonallocationOF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(4) > a.ng-star-inserted').click()
    cy.wait(2000);
    cy.get(this.locators.clickonPAF).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonCN).type('Amar');
    cy.wait(2000);
    cy.get(this.locators.clickonAN).type('0123456789');
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
  }

  ClickonallocationUCAB() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UCAB).click();
    cy.wait(2000);
  }

  ClickOnGeographyFilter() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(4) > a.ng-star-inserted').click()
    cy.wait(2000);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(2000);
    cy.get(this.locators.Geography_Filter).click();
    cy.wait(2000);
    cy.get(this.locators.GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);
    cy.get(this.locators.GF_region).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('South').click();
    cy.wait(2000);
    cy.get(this.locators.GF_state).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Tamilnadu').click();
    cy.wait(2000);
    cy.get(this.locators.GF_city).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Chennai').click();
    cy.wait(2000);
    cy.get(this.locators.GF_branch).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Chennai Main').click();
    cy.wait(2000);
  }

  ClickonallocationSAF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    // cy.get(this.locators.clickonSPF).click();
    // cy.wait(2000);
  }

  fillproductgroupSAF() {
    cy.get(this.locators.pg_select_SAF).select('39');
    cy.wait(2000);
  }

  fillproductSAF() {
    cy.get(this.locators.product_select_SAF).select('40');
    cy.wait(2000);
  }

  fillsubproductSAF() {
    cy.get(this.locators.subproduct_select_SAF).select('41');
    cy.wait(2000)
  }

  fillproductgroupSAF1() {
    cy.get(this.locators.pg_select_SAF).click();
    cy.wait(2000);

    cy.get('.ng-dropdown-panel .ng-option').then(options => {

  const total = options.length;

  const firstIndex  = Math.floor(Math.random() * total);
  let secondIndex   = Math.floor(Math.random() * total);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * total);
  }

  cy.wrap(options[firstIndex]).click({ force: true });
  cy.wait(500);

  cy.get(this.locators.pg_select_SAF).click({ force: true });
  cy.wait(500);

  cy.wrap(options[secondIndex]).click({ force: true });
});
  }

  fillproductSAF1() {

     cy.get(this.locators.product_select_SAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.product_select_PAF).click();
  cy.wait(500);

});
  }

  fillsubproductSAF1() {
   cy.get(this.locators.subproduct_select_SAF).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  cy.get(this.locators.subproduct_select_SAF).click();
  cy.wait(500);

});
  }

  fillproductgroupSAF2() {
    cy.get(this.locators.pg_select_SAF).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Loan Products').click();
    cy.wait(2000);
  }

  fillproductSAF2() {
    cy.get(this.locators.product_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Vehicle Loan').click();
    cy.wait(2000);
  }

  fillsubproductSAF2() {
    cy.get(this.locators.subproduct_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Bike').click();
    cy.wait(2000);
  }

  fillsubproductSAF3() {
    cy.get(this.locators.subproduct_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Car').click();
    cy.wait(2000);
  }

  fillproductgroupSAF4() {
     cy.get(this.locators.pg_select_SAF).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Loan Products').click();
    cy.wait(2000);
  }

  fillproductSAF4() {
    cy.get(this.locators.product_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Vehicle Loan').click();
    cy.wait(2000);
  }

  fillsubproductSAF4() {
    cy.get(this.locators.subproduct_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Train').click();
    cy.wait(2000);
  }

  ClickonallocationUAAOS(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(2000);

  }

  ClickonallocationSUS(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.get("a[title='Allocation Owner Upload Status']").click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUSFailed).select("Processed");
    cy.wait(2000);
    cy.get(this.locators.clickonSUSsubmit).click();
    cy.wait(2000);

  }

  ClickonallocationSAS() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonSearchSAS).click({ force: true });
    cy.wait(2000);
  }

  ClickonallocationSAS1() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.TransactionID).type('@12345#');
    cy.wait(2000);
    cy.get(this.locators.clickonSearchSAS).click({ force: true });
    cy.wait(2000);
  }

  ClickonallocationSAS2(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select("Processed");
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(2000);
    // cy.get(this.locators.showresultSAS2).select('50');
    // cy.wait(2000);
  }

  ClickonallocationSAS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select("Processed");
    cy.wait(2000);
    cy.get(this.locators.fillfilename).type('Mumbai');
    cy.wait(2000);
    // cy.get(this.locators.filluploaddate).click();
    // cy.wait(2000);
    // cy.get(this.locators.enterdate).click();
    // cy.wait(2000);
    cy.get(this.locators.TransactionID).type('1234568');
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(2000);

  }

  ClickonallocationSUS1() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUSSearch).click({ force: true });
    cy.wait(2000);
  }

  ClickonallocationSUS2() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.TransactionID).type('@12345#');
    cy.wait(2000);
    cy.get(this.locators.clickonSUSSearch).click({ force: true });
    cy.wait(2000);
  }

  ClickonallocationSUS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUSFailed1).select(Status);
    cy.wait(2000);
    cy.get(this.locators.clickonSUSSearch).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.showresultSUS3).select('50');
    cy.wait(2000);
  }

  ClickonallocationSUS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonSUSFailed).select("Failed");
    cy.wait(2000);
    cy.get(this.locators.fillfilenameSUS).type('Mumbai');
    cy.wait(2000);
    cy.get('#Fileuploaddate').click();
    cy.wait(2000);
    cy.get(this.locators.enterdate).click();
    cy.wait(2000);
    cy.get(this.locators.TransactionID).type('1234568');
    cy.wait(2000);
    cy.get(this.locators.clickonSUSsubmit).click();
    cy.wait(2000);

  }

  ClickonallocationUAAOS() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOS1).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonSearchSAS).click({ force: true });
    cy.wait(2000);
  }

  ClickonallocationUAAOS1() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOS1).click({force: true} );
    cy.wait(2000);
    cy.get(this.locators.TransactionID).type('@12345#');
    cy.wait(2000);
    cy.get(this.locators.clickonSUSSearch).click({ force: true });
    cy.wait(2000);
  }

  ClickonallocationUAAOS2(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOS1).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonSUSFailed1).select("Processed");
    cy.wait(2000);
    cy.get(this.locators.clickonSUSSearch).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.showresultSUS3).select('50');
    // cy.wait(2000);
  }

  ClickonallocationUAAOS3() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOS1).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select("Processed");
    cy.wait(2000);
    cy.get(this.locators.fillfilename).type('Mumbai');
    cy.wait(2000);
    cy.get(this.locators.filluploaddate).click();
    cy.wait(2000);
    cy.get(this.locators.enterdate).click();
    cy.wait(2000);
    cy.get(this.locators.TransactionID).type('1234568');
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(2000);
  }

  ClickonallocationPUS() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonPUSFailed).select("Partially Processed");
    cy.wait(2000);
    cy.get(this.locators.clickonSUSsubmit).click();
    cy.wait(2000);

  }

  ClickonPrmryAllocationByFltrsrch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get("accordion-group[heading='Bucket Filter'] button[type='button']").click();
    cy.wait(2000);
    cy.get('#currentdpd').type("@#$%")
    cy.wait(2000);
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.filtererr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPABFdpd() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    //cy.get("accordion-group[heading='Bucket Filter'] button[type='button']").click();
    cy.wait(2000);
    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get('#Dellstring').type('@@');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.dpderr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPABFDellstring() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get('[heading="Other Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({ force: true });
    cy.wait(2000);
    cy.get("#customername").type('##');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.delstrErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPABFotherField() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get('[heading="Other Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AccNumber).type('##');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.CNErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPABFotrfldAccNm() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    //cy.get('[heading="Other Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Otherfield).click({ force: true });
    cy.wait(2000);
    
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.AccNMErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPABF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get('[heading="Other Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AccNumber).type('  ');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.CNErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPAallocate() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);

    cy.get(this.locators.pg_select_SAF).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    // Click option i
    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(400);

    // Re-open dropdown for next option
    cy.get(this.locators.pg_select_SAF).click({ force: true });
    cy.wait(300);
  }

});


    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});

cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);


    cy.get(this.locators.allctedACCbtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(10000);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #checked').click();
    cy.wait(2000);
    cy.get('#allocate').click();
    cy.wait(2000);
    cy.contains("TC Agent name or Agent name any one required").should("be.visible");

  }

  ClickonPAslctacc() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get(this.locators.allctedACCbtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
   /**/
    //cy.get(this.locators.NextPage).click().click();
    // cy.get(':nth-child(1) > :nth-child(10) > .form-control-group > .form-check-group > label > #checked').click();
    // cy.wait(2000);
    // cy.get(this.locators.cancelbtn).click();
    // cy.wait(2000);
    // cy.get(this.locators.withoutTCerr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPAcancelBtn() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get(this.locators.allctedACCbtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
   /**/
    // //cy.get(this.locators.NextPage).click().click();
    // cy.get(':nth-child(1) > :nth-child(10) > .form-control-group > .form-check-group > label > #checked').click();
    // cy.wait(2000);
    // cy.get(this.locators.cancelbtn).click();
  }

  ClickonSecndryAlloctnByFltrsrch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.currentDPD).type('**');
    cy.wait(2000);
    // cy.get(this.locators.filtererr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonSABFdpd() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.dellstring).type('##');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.dpderr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonSABFDellstring() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.Otherfield).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CustomerName).type('##');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.delstrErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonSABFotherField() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.get(this.locators.Otherfield).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CustomerName).type('##');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.CNErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonSABFotrfldAccNm() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.Otherfield).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.AccNumber).type('##');
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.AccNMErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonSABF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});


  }

  ClickonSAallocate() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.SAllAccbtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    cy.get('[role="alert"]').should("contain.text", "Please select mandatory filters: Product Group, Country, Bucket");
    cy.wait(2000);
  
  }

  ClickonAllocationSearchResult() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    /*cy.get('[role="alert"]').should(
      "contain.text",
      "No Results found!"
    )*/
    cy.get(':nth-child(2) > :nth-child(10) > input').click()
    cy.get(':nth-child(3) > :nth-child(10) > input').click()
  }

  ClickOnSearchResultAllocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(4) > a.ng-star-inserted').click();
    cy.wait(2000);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
   
    // cy.get(':nth-child(2) > :nth-child(10) > input').click()
    // cy.get(':nth-child(3) > :nth-child(10) > input').click()
    // cy.wait(2000);
    // cy.get(this.locators.Allocation_SearchResult).click()
    // cy.get(this.locators.AllocateToAgency).click()
    // cy.get(this.locators.TCAgency).type('Tirupati Travels');
    // cy.get(this.locators.AgencyName).type('Dev Electronics');
    // cy.get(this.locators.AGencyExpirayDate).click();
    // cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();

  }

  ClickOnAllocateButton() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    /*cy.get('[role="alert"]').should(
      "contain.text",
      "No Results found!"
    )*/
    cy.get(':nth-child(4) > :nth-child(10) > input').click()
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('test  10226');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
    cy.get(this.locators.AgencyName).type('CWC 2023  11384');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
    cy.get(this.locators.AllocateButton).click();


  }

  ClickOnAllocateButtonEmail() {

  }

  ClickOnCancelButton() {

    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    /*cy.get('[role="alert"]').should(
      "contain.text",
      "No Results found!"
    )*/
    cy.get(':nth-child(4) > :nth-child(10) > input').click()
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('test  10226');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
    cy.get(this.locators.AgencyName).type('CWC 2023  11384');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
    cy.get(this.locators.CancelButton).click();
    cy.wait(2000);
    cy.get(this.locators.dashboardOnAllocation).should('be.visible')

  }

  ClickonSABFBucket() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click({ force: true });
    cy.wait(2000);
    cy.get('#Productgroup').select("All");
    cy.wait(2000);
    cy.get('#product').select("All");
    cy.wait(2000);
    cy.get("#subproduct").select("All");
    // cy.get(this.locators.currentDPD).type('abcd');
    // cy.wait(2000);
    // cy.get(this.locators.dellstring).type('abcedf');
    // cy.wait(2000);
    // cy.get(this.locators.BOMBucket).select('All');
    // cy.wait(2000);

  }

  ClickonSABFGeography() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_region).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('South').click();
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_state).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Tamilnadu').click();
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_city).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Chennai').click();
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_branch).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Chennai Main').click();
    cy.wait(2000);
  }

  ClickonSABFotherFilter() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.Otherfield).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CustomerName).type('Sandeep');
    cy.wait(2000);
    cy.get(this.locators.AccountNumber).type('LXBNG33820211284975');

  }

  ClickonSAFAllocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.SAF_Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    //cy.get(':nth-child(2) > :nth-child(10) > input').click()
    //cy.get(':nth-child(3) > :nth-child(10) > input').click()
  }

  ClickOnSearchResultAllocationSAF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    
    cy.get(this.locators.SAF_Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Please try again later"
    // )
    // cy.get(':nth-child(2) > :nth-child(10) > input').click()
    // cy.get(':nth-child(3) > :nth-child(10) > input').click()
    // cy.wait(2000);
    // cy.get(this.locators.Allocation_SearchResult).click()
    // cy.get(this.locators.AllocateToAgency).click()
    // cy.get(this.locators.TCAgency).type('Tirupati Travels');
    // cy.get(this.locators.AgencyName).type('Dev Electronics');
    // cy.get(this.locators.AGencyExpirayDate).click();
    // cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();

  }

  ClickOnAllocateButtonSAF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(2000);
    cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.SAF_Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    cy.get('[role="alert"]').should(
      "contain.text",
      "Please try again later"
    )
    /*cy.get(':nth-child(4) > :nth-child(10) > input').click({ multiple: true })
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('test  10226');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
    //cy.get(this.locators.AgencyName).type('CWC 2023  11384');
    cy.wait(2000);
    cy.get(this.locators.AGencyExpirayDate).click();
    cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();
    cy.wait(2000);
    // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
    cy.get(this.locators.AllocateButton).click({ multiple: true });*/

  }

  

  ClickOnCancelButtonSAF() {

    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Secondryallctn).click({force: true});
    cy.wait(2000);
    //cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.SAF_Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Please try again later"
    // )
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #checked').click()
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('test  10226');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
    cy.get(this.locators.AgencyName).type('CWC 2023  11384');
    cy.wait(2000);
    // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
    cy.get(this.locators.CancelButton).click();
    cy.wait(3000);
    cy.get(this.locators.dashboardOnAllocation).should('be.visible')

  }

  ClickonPrmryAllocationStatus() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.PrimaryAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.filename).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.filtererr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPrmryAllocationStatusInvalidTrans() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.PrimaryAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.TID).type('@ABCD!%');
    cy.wait(2000);
    cy.get(this.locators.searchButton).click({ force: true });
    cy.wait(2000);
    cy.contains("Invalid TransactionId").should("be.visible");
    // cy.get(this.locators.filtererrinvalidtran).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonPrimaryAllocationStatus(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.PrimaryAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(2000);
    // cy.get(this.locators.showresultSAS2).select('50');
    // cy.wait(2000);
    // cy.get(this.locators.clickonUAAOSFailed).select('Failed');
    // cy.wait(2000);
  }


  ClickonPrimaryAllocationStatus1(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.PrimaryAS).click().click();
    cy.wait(2000);
    cy.get(this.locators.FilenamePAS).type('PrimaryAgency');
    cy.wait(2000);
    cy.get('#fileuploaddate').click();
    cy.wait(2000);
    cy.get(this.locators.enterdate).click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(2000);
    cy.get(this.locators.TID).type('ABC12345DEFG');
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(2000);
  }

  ClickonallocationUAAO() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click();
    cy.wait(2000);
    cy.get(this.locators.ProductGroupUAAO).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Consumer Loan').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ProductUAAO).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Unsecured').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SubproducUAAO).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Personal Loan').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickonNotAllocatedAgency).click();
    cy.wait(2000)
    cy.get('#downloadAccounts').click();
    cy.wait(2000);
    cy.get('[role="alert"]').contains('Please select mandatory filters: Country, Bucket');
 cy.wait(2000);

  }

  ClickonallocationPUS1(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.statusfailed).select('Failed');
    cy.wait(2000);
    cy.get(this.locators.clickonPUSSearch).click({ force: true });
    cy.wait(2000);
    
    // cy.get(this.locators.filtererr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonallocationPUS2(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.TransactionIDPUS).type('#%$ABCDAE@');
    cy.wait(2000);
    cy.get(this.locators.clickonPUSSearch).click({ force: true });
    cy.wait(2000);
    cy.contains("Invalid TransactionId").should("be.visible");
    // cy.get(this.locators.filtererrinvalidtran).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickonallocationPUS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.clickonPUS).click().click();
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(2000);
    cy.get(this.locators.clickonPUSSearch).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.showresultSUS3).select('50');
    // cy.wait(2000);

  }

  ClickonallocationPUS4(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(400);
    cy.get(this.locators.clickagntfiltr).click().click();
    cy.wait(2000);
    cy.get(this.locators.fillfilename).type('Mumbai');
    cy.wait(2000);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(2000);
    cy.get(this.locators.filluploaddate).click();
    cy.wait(2000);
    cy.get(this.locators.enterdate).click();
    cy.wait(2000);
    cy.get(this.locators.TransactionID).type('682200000127498');
    cy.wait(2000);
    cy.get(this.locators.clickonPUSSearch).click({ force: true });
    cy.wait(2000);

  }

  ClickonallocationPUS67() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(400);
    cy.get(this.locators.clickagntfiltr).click().click();
    cy.wait(2000);

     cy.get(this.locators.pg_select_SAF).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    // Click option i
    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(400);

    // Re-open dropdown for next option
    cy.get(this.locators.pg_select_SAF).click({ force: true });
    cy.wait(300);
  }

});


    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});

cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);

    cy.get('#unAllocated').click();
    cy.wait(2000);
    cy.get('#searchAccount').click();
    cy.wait(11000);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #checked').click();
    cy.wait(2000);
    cy.get('#TcagentName').type("A");
    cy.wait(2000);

 cy.get('h5.ng-star-inserted').then($items => {
  const count = $items.length;
  const randomIndex = Math.floor(Math.random() * count);

  cy.wrap($items[randomIndex]).click({ force: true });
});

  cy.wait(2000);
    cy.get('#Agentname').type("A");
    cy.wait(2000);
   
    
    cy.get('h5.ng-star-inserted').then($items => {
  const count = $items.length;
  const randomIndex = Math.floor(Math.random() * count);

  cy.wrap($items[randomIndex]).click({ force: true });
});
  cy.wait(2000);

    cy.get('#AllocationExpireDate2').type("01/05/2025");
    cy.wait(2000);
    cy.get('#allocate').click();
  }

  ClickonallocationPUS68() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(400);
    cy.get(this.locators.clickagntfiltr).click().click();
    cy.wait(2000);

        cy.get(this.locators.pg_select_SAF).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    // Click option i
    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(400);

    // Re-open dropdown for next option
    cy.get(this.locators.pg_select_SAF).click({ force: true });
    cy.wait(300);
  }

});


    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});

cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);


    cy.get('#unAllocated').click();
    cy.wait(2000);
    cy.get('#searchAccount').click();
    cy.wait(11000);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #checked').click();
    cy.wait(2000);
    // cy.get('#AllocateToAgency').scrollIntoView().click();
    cy.wait(2000);
    cy.get('#TcagentName').type("A");
    cy.wait(2000);
   cy.get('h5.ng-star-inserted').then($items => {
  const count = $items.length;
  const randomIndex = Math.floor(Math.random() * count);

  cy.wrap($items[randomIndex]).click({ force: true });
});

    cy.get('#Agentname').type("A");
    cy.wait(2000);
   cy.get('h5.ng-star-inserted').then($items => {
  const count = $items.length;
  const randomIndex = Math.floor(Math.random() * count);

  cy.wrap($items[randomIndex]).click({ force: true });
});

    cy.get('#AllocationExpireDate2').type("01/05/2025");
    cy.wait(2000);
    cy.get('#allocate').click();
  }

  ClickOnSearchResultAllocationSABF() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSABF).click().click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get('.btn-outline-primary').click()
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Please try again later"
    // )
    /*cy.get(':nth-child(2) > :nth-child(10) > input').click()
    cy.wait(2000);
    cy.get('.buttons_set > #upload').click();
    cy.wait(2000);*/
    // cy.get(this.locators.filtererr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickOnSearchResultAllocationSABF1() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSABF).click().click();
    cy.wait(2000);

     cy.get(this.locators.pg_select_SAF).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    // Click option i
    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(400);

    // Re-open dropdown for next option
    cy.get(this.locators.pg_select_SAF).click({ force: true });
    cy.wait(300);
  }

});


    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});

cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Japan').click();
    cy.wait(2000);

    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);


    cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);
     cy.get(this.locators.SearchOF).click()
    cy.wait(12000);
  }

  ClickOnSearchResultAllocationSABF2() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSABF).click().click();
    cy.wait(2000);
  
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
  cy.get('[role="alert"]').contains('Please select mandatory filters: Product Group, Country, Bucket');
  cy.wait(2000);

} 
  downloadAgencyUnallocationbatch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonABU).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click().click();
    // cy.wait(2000);
    // cy.get(this.locators.UnAllocation_Primary).select('Deallocation Template');
    cy.get('#downloadTemplate').click({force: true});
    cy.wait(2000);
  }

  uploadAgencyUnallocationBatchFiledAgency() {
  const filePath = 'Cypress/fixtures/UnAllocation_acclevel.xlsx';

  cy.get(this.locators.allocation).click();
  cy.wait(2000);
  cy.get(this.locators.ClickonABU).click();
  cy.wait(2000);
  cy.get(this.locators.UnAllocation_Batch).click();
  cy.wait(2000);
  cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
  cy.wait(2000);
  cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
  cy.wait(2000);
  cy.get(this.locators.ConnfirmUpload).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnOK).click();

  // Extract Transaction ID and continue the process
  cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
    cy.log(`Popup text: ${popupText}`);

    const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
    const transactionID = transactionIdMatch?.[1]; // Optional chaining to safely access match

    cy.log(`Transaction ID: ${transactionID}`);

    cy.get(':nth-child(1) > .sub-nav-list > :nth-child(6) > a').click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
    cy.wait(2000);
    cy.get('#search').click();
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
     cy.wait(2000);
  });
}


  uploadAgencyUnallocationBatchTelecallingAgency() {
    const filePath = 'Cypress/fixtures/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonABU).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_Telecalling).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);

    cy.get('#upload').click();
    cy.wait(2000);
    
    cy.get(this.locators.ClickOnOK).click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  uploadAgencyUnallocationBatchWithoutUnAllocationAgency() {
    const filePath = 'Cypress/fixtures/UnAllocati@$on_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.Click_UploadBtn).click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(2000);
    cy. contains('Filename should not contain any special characters', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
    });
  }

  uploadAgencyUnallocationBatchInvalidFile() {
    const filePath = 'Cypress/fixtures/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.ConnfirmUpload).click();
    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(2000);
        Cypress.env('transactionID', transactionId);
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(2000);
        cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
        cy.wait(5000);
        const transactionID = Cypress.env('transactionID', transactionId);
        cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
        cy.wait(2000);
        cy.get(this.locators.clickonPUSSearch).click({ force: true });
        cy.wait(2000);
        cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
          cy.log(`Extracted Text: ${text}`);
          expect(text.trim()).to.equal('Invalid File Format');
        });
      }
    });

  }

  uploadAgencyUnallocationCancelUpload() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.get(this.locators.cancelbtn).click();
  }

  uploadAgencyUnallocationBatchWrongAccountNo() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.wait(2000);
    //cy.get(this.locators.ClickOnOK).click();
    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(2000);
        Cypress.env('transactionID', transactionId);
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(2000);
        cy.get(this.locators.ClickOnABAL).click();
        cy.wait(2000);
        cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
        cy.wait(5000);
        const transactionID = Cypress.env('transactionID', transactionId);
        cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
        cy.wait(2000);
        cy.get(this.locators.clickonPUSSearch).click({ force: true });
        cy.wait(2000);
        // cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
        //   cy.log(`Extracted Text: ${text}`);
        //   expect(text.trim()).to.equal('Failed');
        // });
      }
    });
  }

  uploadAgencyUnallocationCancelUploadAndAgainUpload() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.get(this.locators.cancelbtn).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_Telecalling).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  uploadAgencyUnallocationBatchInvalidFileFormat() {
    const filePath = 'Cypress/fixtures/AllocationToOwner.docx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.contains('You can only upload the file with extension xls or xlsx', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
    });

  }

  downloadCollectorUnallocationbatch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click().click();
    cy.wait(2000);
    // cy.get(this.locators.UnAllocation_Primary).select('Deallocation Template');
    cy.get('#downloadTemplate').click();
    cy.wait(2000);
  }

  uploadCollectorUnallocationBatchAgenct() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(2) > .ng-untouched').click();
    //cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get(this.locators.ClickOnOK).click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  uploadCollectorUnallocationBatchTelecaller() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.get(this.locators.ClickAGBU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(':nth-child(3) > .ng-untouched').click();
    //cy.get(this.locators.CAradiobtntelec).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
   cy.get(this.locators.ClickOnOK).click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  } 

  uploadCollectorUnallocationBatchStaff() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get('.form-radio-group > :nth-child(1) > .ng-untouched').click();
    //cy.get(this.locators.CAradiobtnstaff).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get(this.locators.ClickOnOK).click({force: true});

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  uploadCollectorUnallocationBatchWithoutUnAllocation() {
    const filePath = 'Cypress/fixtures/UnAllocati@$on_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.uploadallocation).click({force: true});
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(3) > a').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.Click_UploadBtn).click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(2000);
    cy. contains('Filename should not contain any special characters', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
    });
  }

  uploadCollectorUnallocationBatchInvalidFile() {
    const filePath = 'Cypress/fixtures/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get("#confirm-dialog-okay").click();
    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(2000);
        Cypress.env('transactionID', transactionId);
        cy.wait(2000);
        // cy.get(this.locators.allocation).click();
        // cy.wait(2000);
        // cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
        // cy.wait(20000);
        // const transactionID = Cypress.env('transactionID', transactionId);
        // cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
        // cy.wait(2000);
        // cy.get(this.locators.clickonPUSSearch).click({ force: true });
        // cy.wait(2000);
        //
      }
    });

  }

  uploadCollectorUnallocationCancelUpload() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get('#confirm-dialog-cancel').click();
  }

  uploadCollectorUnallocationBatchWrongAccountNo() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    //cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get('#confirm-dialog-okay').click();
    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(2000);
        Cypress.env('transactionID', transactionId);
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(2000);
        //cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
        // cy.wait(20000);
        // const transactionID = Cypress.env('transactionID', transactionId);
        // cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
        // cy.wait(2000);
        // cy.get(this.locators.clickonPUSSearch).click({ force: true });
        // cy.wait(2000);
        // cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
        //   cy.log(`Extracted Text: ${text}`);
        //   expect(text.trim()).to.equal('Failed');
       // });
      }
    });
  }

  uploadCollectorUnallocationCancelUploadAndAgainUpload() {
    const filePath = 'Cypress/downloads/UnAllocation_acclevel.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnstaff).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.get(this.locators.cancelbtn).click();
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get('#confirm-dialog-okay').click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  uploadCollectorUnallocationBatchInvalidFileFormat() {
    const filePath = 'Cypress/fixtures/AllocationToOwner.docx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.uploadallocation).click({force: true});
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    //cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    // cy.contains('You can only upload the file with extension xls or xlsx', { timeout: 7000 }).invoke('text').then((popupText) => {
    //   cy.log(`Popup text: ${popupText}`);
    // });
  }

  ClickonUploadAgencyAllocationBatch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click()
    cy.wait(2000);
    cy.get('#downloadAccounts').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DownloadErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  ClickonUAABvalidationCheck() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(1) > a').click({force: true} );
    cy.wait(2000);
    cy.get('#Allocationtype').click()
    cy.wait(2000);
    cy.get(this.locators.UAABUpload).should('exist').attachFile('AllocationToOwner.docx');
    cy.wait(2000);
    // cy.get(this.locators.uploadextensionErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })
  }

  ClickonUAABChangedFilterValue() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true} );
    cy.wait(2000);
    cy.get(this.locators.pg_select).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Consumer Loan').click({ force: true });
    cy.wait(2000);
    
 cy.get(this.locators.UAABbucket).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {
  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(300);
    cy.get(this.locators.UAABbucket).click({ force: true });
    cy.wait(300);
  }
});


    cy.get(this.locators.UAABCountry).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('India').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.UAABRegion).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('South').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.UAABState).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Tamilnadu').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.UAABCity).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Chennai').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.UAABbranch).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Chennai Main').click({ force: true });
    cy.wait(2000);
    cy.get('#downloadAccounts').click({ force: true });
    cy.wait(2000);
    //cy.get(this.locators.UAABbucket).select('4: 2');
    //cy.wait(2000);
    //cy.get(this.locators.DownloadAcc).click({ force: true });

  }

  ClickonUAABuploadCheck() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click()
    cy.wait(2000);
    cy.get(this.locators.UAABUpload).should('exist').attachFile('AllocationToOwner.xlsx');
    cy.wait(2000);
    cy.get(this.locators.UAABUploadfile).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  ClickonUCABDownloadAcc() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickAGBA).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.DownloadAcc).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DownloadErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  ClickonUCABvalidationCheck() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.collectorallocation).click();
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnagent).click()
    cy.wait(2000);
    cy.get(this.locators.CAupload).should('exist').attachFile('ENCollectSecondaryAllocationAgent.docx');

  }


  downloadAgencyallocationbatch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get("#nav-item-2-allocation-owner-bulk-upload").click();
    cy.wait(2000);
    // cy.get(this.locators.Clickallocationownerbulkupload).click();
    // cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(1) > a').click();
    cy.wait(2000);
    // cy.get(this.locators.Allocation_Primary).select('Allocation Template For Allocation Owner');
    //cy.get(this.locators.ClickonAllocationOwner).click();
    cy.get(this.locators.Allocation_Download_Template).click();
    cy.wait(2000);
  }

  UploadFilledAgencyLevelAllocationFile() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.wait(2000);
    cy.get(".allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(1) > a").click().click();
    cy.wait(2000);
    cy.get(this.locators.ClickonAllocationOwner).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#fileUploadConfirmation').click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  downloadtemplateforallocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentBulk).click({force: true});
    cy.wait(2000);
    // cy.get(this.locators.SelectTemplateForCollectorAllocation).select('Allocation Template For Collection Staff');
    cy.get('#downloadTemplateType1').click();
    cy.wait(2000);
    cy.get(this.locators.DownloadTemplateOfStaffLevelAllocationFile).click();
    cy.wait(2000);
  }

  uploadAgencyallocationBatchATA() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click( {force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickAgentBulk).click({force: true});
    //cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    // cy.get(this.locators.UploadConfirm).click();
    // cy.wait(2000);
    // cy.get('#confirm-dialog-okay').click();
    // cy.wait(2000);
    // cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
    //   cy.log(`Popup text: ${popupText}`);
    //   const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
    //   if (transactionIdMatch) {
    //     const transactionId = transactionIdMatch[1];
    //     cy.log(`Transaction ID: ${transactionId}`);
    //     cy.wait(2000);
    //     Cypress.env('transactionID', transactionId);
    //     cy.wait(2000);
    //     cy.get(this.locators.allocation).click();
    //     cy.wait(2000);
    //     cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
    //     cy.wait(20000);
    //     const transactionID = Cypress.env('transactionID', transactionId);
    //     cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
    //     cy.wait(2000);
    //     cy.get(this.locators.clickonPUSSearch).click({ force: true });
    //     cy.wait(2000);
    //     // cy.get('.input-group > .form-control').invoke('text').then((text) => {
    //     //   cy.log(`Extracted Text: ${text}`);
    //     //   expect(text.trim()).to.equal('Invalid File Format');
    //    // });
    //   }
    // });
  }

  uploadAgencyallocationBatchATAClose() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get("").click({force: true});
    cy.wait(2000);
    cy.get("#nav-item-2-agency-bulk-upload").click({force: true});
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.UploadConfirmCancel).click();
    cy.get('h3').invoke('text').then((text) => {
      cy.log(`Extracted Text: ${text}`);
      expect(text.trim()).to.equal('Agency Level UnAllocation');
    });
  }

  uploadCollectorallocationWithoutAllocation() {
    //const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentBulk).click({force: true});
    cy.wait(2000);
    //cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    //cy.contains('Please Select Proceed with allocation For', { timeout: 20000 }).invoke('text').then((popupText) => {
      //cy.log(`Popup text: ${popupText}`);
    //});
  }

  ClickonallocationUAAOAA() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click();
    cy.wait(2000);
    cy.get(this.locators.ProductGroupUAAO).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Consumer Loan').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ProductUAAO).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Unsecured').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SubproducUAAO).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('Personal Loan').click({ force: true });
    cy.wait(2000);

 cy.get(this.locators.SelectBucket).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  // Re-open dropdown for next option
  cy.get(this.locators.SelectBucket).click();
  cy.wait(2000);

});

 cy.get(this.locators.SelectCountry).click();
cy.wait(1000);

cy.get('.ng-dropdown-panel .ng-option').each(($option, index) => {
  
  cy.wrap($option).click({ force: true });   // select option
  cy.wait(1000);

  // Re-open dropdown for next option
  cy.get(this.locators.SelectCountry).click();
  cy.wait(2000);

});

    cy.get(this.locators.ClickonAllocatedAgency).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAgBAAccLevelDownBtn).click();
    cy.wait(2000);
  }

  UploadFilledAgencyLevelAllocationFile290() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    //cy.get(this.locators.Allocation_Batch).click().click();
    cy.wait(2000);
    cy.get(this.locators.ClickonAllocationOwner).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#AllocationFileUpload > :nth-child(2) > .btn').click();
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  downloadAgencyAllocationbatch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true} );
    cy.wait(2000);
    // cy.get(this.locators.PrimaryAllocationTmplt).select('Allocation Template For Allocation Owner');
    cy.get(this.locators.DownloadAllocationTemplt).click();
    cy.wait(2000);
  }

  uploadAgencyAllocationBatchWrongAccountNo() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true} );
    cy.wait(2000);
    cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#fileUploadConfirmation').click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(2000);
        Cypress.env('transactionID', transactionId);
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(2000);
        cy.get(this.locators.ClickOnABAL).click();
        cy.wait(2000);
        cy.get(this.locators.PrimaryUnAllocationStatus).click({force: true});
        cy.wait(5000);
        const transactionID = Cypress.env('transactionID', transactionId);
        cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
        cy.wait(2000);
        cy.get(this.locators.clickonPUSSearch).click({ force: true });
        cy.wait(2000);
        //cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
          //cy.log(`Extracted Text: ${text}`);
          //expect(text.trim()).to.equal('Failed');
        //});
      }
    });
  }

  uploadAgencyAllocationBatchAccountNo() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.wait(2000)
    cy.get(this.locators.allocation).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.UploadAgencyAllocationBatch).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#fileUploadConfirmation').click();
    cy.wait(2000);
    // cy.get(this.locators.closeConfirm).click({force: true});
    // cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();

  }

  ClickonUCABDownloadAccWithChangeFilterValue() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.collectorallocation).click();
    cy.wait(2000);
    cy.get(this.locators.pg_select).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.product_select).select('Unsecured');
    cy.wait(2000);
    cy.get(this.locators.subproduct_select).select('Personal Loan');
    cy.wait(2000);
    cy.get(this.locators.UAABbucket).select('1');
    cy.wait(2000);
    cy.get(this.locators.UAABCountry).select('All');
    cy.wait(2000);
    cy.get(this.locators.UAABRegion).select('All');
    cy.wait(2000);
    cy.get(this.locators.UAABState).select('All');
    cy.wait(2000);
    cy.get(this.locators.UAABCity).select('All');
    cy.wait(2000);
    cy.get(this.locators.UAABbranch).select('All');
    cy.wait(2000);
    cy.get(this.locators.DownloadAccUCA).click({ force: true });
    cy.wait(2000);
    //cy.get(this.locators.UAABbucket).select('4: 2');
    //cy.wait(2000);
    //cy.get(this.locators.DownloadAccUCA).click({ force: true });


  }



  ClickonPAChangedFilterValueAllocateBtn() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);
    

     cy.get(this.locators.pg_select_SAF).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    // Click option i
    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(400);

    // Re-open dropdown for next option
    cy.get(this.locators.pg_select_SAF).click({ force: true });
    cy.wait(300);
  }

});


    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});

cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);

    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonCN).type('Amar');
    cy.wait(2000);
    cy.get(this.locators.clickonAN).type('0123456789');
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonCN).clear();
    cy.wait(2000);
    cy.get(this.locators.clickonCN).type('Sandeep');
    cy.wait(2000);
    cy.get(this.locators.clickonAN).clear();
    cy.wait(2000);
    cy.get(this.locators.clickonAN).type('0987654321');
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click();
    cy.wait(2000);
    //cy.get(this.locators.allocateBtn).click();

  }

  ClickonUploadAgencyAllocationOwnerDownloadAcc() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click();
    cy.wait(2000);
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
    cy.wait(2000);
    cy.get(this.locators.DownloadAcc).click({ force: true });
    cy.wait(2000);
    // cy.get(this.locators.DownloadErr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    //  })
  }

  ClickonUAAOvalidationCheck() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(1) > a').click()
    cy.wait(2000);
    //cy.get(this.locators.UAAOAllocationOwner).click()
    cy.wait(2000);
    cy.get(this.locators.UAAOUpload).should('exist').attachFile('AllocationToOwner.docx');
    cy.wait(2000);
    // cy.get(this.locators.uploadextensionErr).then(($el) => {
    //  const text = $el.text();
    // cy.log(text);
    // })

  }
  ClickonUAAOvalidationCheck_46() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > .sub-nav-list > :nth-child(1) > a').click()
    cy.wait(2000);
    //cy.get(this.locators.UAAOAllocationOwner).click()
    cy.wait(2000);
    cy.get(this.locators.UAAOUpload).should('exist').attachFile('AllocationToOwner.docx');
    cy.wait(2000);
    // cy.get(this.locators.uploadextensionErr).then(($el) => {
    //  const text = $el.text();
    // cy.log(text);
    // })

  }
  ClickonUAAOvalidationCheck_47() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
    cy.wait(2000);
    //cy.get(this.locators.UAAOAllocationOwner).click()
    cy.wait(2000);
   cy.get("button[type='submit']").click();
    cy.wait(2000);
    // cy.get(this.locators.uploadextensionErr).then(($el) => {
    //  const text = $el.text();
    // cy.log(text);
    // })

  }
  ClickonUAAOvalidationCheck_48() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
    cy.wait(2000);
    

  }

  ClickonUAAOvalidationCheck_49() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get('#search').click({force :true});
    cy.wait(2000);
    cy.contains("Enter at least one filter value").should("be.visible");
    cy.wait(2000);

  }
  ClickonUAAOvalidationCheck_50() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get('#Transactionid').type("@#$");
    cy.wait(2000);
    cy.get('#search').click();
    cy.wait(2000);
    cy.contains("Invalid TransactionId").should("be.visible");
    cy.wait(2000);

  }

  ClickonUAAOvalidationCheck_51() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get(this.locators.statusfailed).select("Failed");
    cy.wait(2000);
     cy.get('#search').click();
     cy.wait(2000);
   

  }

  ClickonUAAOvalidationCheck_52() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get(this.locators.fillfilename).type('Mumbai');
    cy.wait(2000);
    cy.get("#FileuploadDate").click();
    cy.wait(2000);
    cy.get(this.locators.enterdate).click();
    cy.wait(2000);
     cy.get('#search').click();
     cy.wait(2000);
   

  }

  ClickonUAAOwnerChangedFilterValue() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click( {force: true});
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    //cy.get(this.locators.Upload_Agency_Allocation_Owner).click();
    cy.wait(2000);
    cy.get(this.locators.pg_select).select('Consumer Loan');
    cy.wait(2000);
    cy.get('#product').select('Unsecured');
    cy.wait(2000);
    cy.get('#subproduct').select('Personal Loan');
    cy.wait(2000);
    // cy.get(this.locators.UAABbucket).select('1');
    // cy.wait(2000);
    // cy.get(this.locators.UAABCountry).select('All');
    // cy.wait(2000);
    // cy.get(this.locators.UAABRegion).select('All');
    // cy.wait(2000);
    // cy.get(this.locators.UAABState).select('All');
    // cy.wait(2000);
    // cy.get(this.locators.UAABCity).select('All');
    // cy.wait(2000);
    // cy.get(this.locators.UAABbranch).select('All');
    // cy.wait(2000);
    // cy.get(this.locators.DownloadAcc).click({ force: true });
    // cy.wait(2000);
    //cy.get(this.locators.UAABbucket).select('4: 2');
    //cy.wait(2000);
    //cy.get(this.locators.DownloadAcc).click({ force: true });

  }

  downloadAgencyAllocationOwner() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(1) > a.ng-star-inserted').click();
    cy.wait(2000);
    cy.get('#nav-item-2-allocation-owner-bulk-upload').click();
    //cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .enc-card > .card-content > :nth-child(1) > .form-radio-group > :nth-child(1)').click();
    cy.get(this.locators.DownloadAllocationTemplt).click();
    cy.wait(2000);
  }

  uploadAgencyAllocationOwnerAccountNo() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    // cy.get(this.locators.Upload_Agency_Allocation_Owner).click( {force: true});
    // cy.wait(2000);
    // cy.get("#Allocationtype").click();
    // cy.wait(2000);
    // cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    // cy.wait(2000);
   // cy.get(this.locators.closeConfirm).click();

  }

  ClickonUAAOUploadCheck() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(2) > a.ng-star-inserted').click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(1) > .sub-nav-list > :nth-child(2) > a').click( {force: true});
    cy.get('.form-control').click();
    //cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.UAAOUploadErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })

  }

  Clickonallocation103() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.loanaccount).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.consumername).type('a', {force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonsearch).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.Product).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  Clickonallocation124() {
   
      cy.get(this.locators.allocation).click();
      cy.wait(2000);
      cy.get(this.locators.AllocFilter).click();
      cy.wait(400);
      cy.get(this.locators.clickagntfiltr).click().click();
      cy.wait(2000);

       cy.get(this.locators.pg_select_SAF).click();
cy.wait(500);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    // Click option i
    cy.get('.ng-dropdown-panel .ng-option')
      .eq(i)
      .click({ force: true });

    cy.wait(400);

    // Re-open dropdown for next option
    cy.get(this.locators.pg_select_SAF).click({ force: true });
    cy.wait(300);
  }

});


    cy.get(this.locators.BucketFilter).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.BomBu).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option').then($options => {

  const total = $options.length;

  for (let i = 0; i < total; i++) {

    cy.get('.ng-dropdown-panel .ng-option').eq(i).click({ force: true });

    cy.wait(1000);
    cy.get(this.locators.BomBu).click({ force: true });
    cy.wait(300);
  }

});

cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title > .accordion-toggle > .btn').click();
    cy.wait(2000);

     cy.get(this.locators.SAF_GF_country).click();
    cy.wait(2000);
     cy.get('.ng-dropdown-panel .ng-option').contains('India').click();
    cy.wait(2000);

      cy.get('#Allocated').click();
      cy.wait(2000);
      cy.get('#searchAccount').click();
      cy.wait(10000);
      cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #checked').click();
      cy.wait(2000);
      cy.get('#TcagentName').type("A");
      cy.wait(2000);
      cy.get('h5.ng-star-inserted').then($items => {
  const count = $items.length;
  const randomIndex = Math.floor(Math.random() * count);

  cy.wrap($items[randomIndex]).click({ force: true });
});
      cy.get('#Agentname').type("A");
      cy.wait(2000);
      cy.get('h5.ng-star-inserted').then($items => {
  const count = $items.length;
  const randomIndex = Math.floor(Math.random() * count);

  cy.wrap($items[randomIndex]).click({ force: true });
});
      cy.wait(2000);
      cy.get('#AllocationExpireDate2').type("01/05/2025");
      cy.wait(2000);
      cy.get('#cancelhiperLink').click();
    }

 


  downloadAgencyAllocationOwnerFile() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
    cy.wait(2000);
    // cy.get(this.locators.PrimaryAllocationTmplt).select('Allocation Template For Allocation Owner');
    cy.get(this.locators.DownloadAllocationTemplt3).click();
    cy.wait(2000);
  }

  Allocation_755(){

    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAABF).click();
    cy.wait(2000);



  }

  uploadAgencyAllocationOwnerWrongAccountNo() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click();
    cy.wait(2000);
    cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.OkConfirm).click({force: true});
    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(2000);
        Cypress.env('transactionID', transactionId);
        cy.wait(2000);
        cy.get(this.locators.allocation).click();
        cy.wait(2000);
        cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
        cy.wait(5000);
        const transactionID = Cypress.env('transactionID', transactionId);
        cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
        cy.wait(2000);
        cy.get(this.locators.clickonPUSSearch).click({ force: true });
        cy.wait(2000);
        // cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
        //   cy.log(`Extracted Text: ${text}`);
        //   expect(text.trim()).to.equal('Failed');
        // });
      }
    });
  }

  AllocationFilter_672(){

    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickagntfiltr).click();
    cy.wait(2000);

    cy.get(this.locators.pg_select_SAF).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel .ng-option').contains('Consumer Loan').click();
    cy.wait(2000);
  cy.get(this.locators.product_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Unsecured').click();
    cy.wait(2000);
     cy.get(this.locators.subproduct_select_SAF).click();
    cy.wait(2000);
      cy.get('.ng-dropdown-panel .ng-option').contains('Personal Loan').click();
    cy.wait(2000);


  }

}

export default AllocationPage;