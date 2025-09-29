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

  fillproductgroup() {
    cy.get(this.locators.pg_select).select('CreditCard', {force: true});
  }

  fillproduct() {
    cy.get(this.locators.product_select).select('CreditCard');
  }

  fillsubproduct() {
    cy.get(this.locators.subproduct_select).select('CreditCard');
    cy.wait(2000)
  }

  clickNotAllcated() {
    cy.get(this.locators.notallocated).click();
  }

  clickonAllcated() {
    cy.get(this.locators.allocated).click();
  }

  clickonDownload() {
    cy.get(this.locators.download).click();
  }

  clickonprimaryfile() {
    cy.get(this.locators.primaryZip).click();
  }

  filltemplate() {
    cy.get(this.locators.slcttempprimaryAllocation).select('Agency');
    cy.wait(2000);
  }

  filltemplate2() {
    cy.get(this.locators.slcttempprimaryAllocation).select('Telecallingagency');
    cy.wait(2000);
  }

  filltemplate3() {
    cy.get(this.locators.slcttempprimaryAllocation).select('AllocationOwner');
    cy.wait(2000);
  }

  clickondownloadTemplate() {
    cy.get(this.locators.downloadtemplate).click();
    cy.wait(20000);
  }

  clickonRadioBtnFA() {
    cy.get(this.locators.RadioBtnFA).click();
  }

  clickonRadioBtnTCA() {
    cy.get(this.locators.RadioBtnTCA).click();
  }

  clickonRadioBtnAO() {
    cy.get(this.locators.RadioBtnAO).click();
  }

  clickonOK() {
    cy.get(this.locators.ConfirmUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOK).click();
  }

  uploadfile1() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryAgency.xlsx');
  }

  uploadfile2() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryTeleCallingAgency.xlsx');
  }

  uploadfile3() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.xlsx');
  }

  uploadfilewithSpclChrctr() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('Allocation#ToOwner.xlsx');
  }

  uploadDocxExtensionFile() {
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.docx');
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
    cy.get(this.locators.CAtempltdd).select('staff');
    cy.wait(2000);
  }

  fillCAtemplate2() {
    cy.get(this.locators.CAtempltdd).select('Agent');
    cy.wait(2000);
  }

  fillCAtemplate3() {
    cy.get(this.locators.CAtempltdd).select('Telecallingagent');
    cy.wait(2000);
  }

  clickonCAdownloadTemplate() {
    cy.get('.card-content > :nth-child(2) > .btn')
    //cy.get(this.locators.CAdownloadtemplt).click();
    cy.wait(20000);
  }

  clickonCARadioBtnstaff() {
    cy.get(this.locators.CAradiobtnstaff).click();
  }

  clickonCARadioBtnagnt() {
    //cy.get(this.locators.CAradiobtnagent).click();
    cy.get('.form-radio-group > :nth-child(2) > .ng-untouched').click({ multiple: true });
    // cy.get('input[type="radio"][value="agent"]').click();

  }

  clickonCARadioBtntelec() {
    cy.get(':nth-child(3) > .ng-untouched').click();
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
    cy.get(this.locators.ClickAABF).click();
    cy.wait(2000);
    // cy.get(this.locators.clickonPAF).click().click();
    // cy.wait(2000);
    // cy.get(this.locators.clickonPF).click();
    // cy.wait(2000);
  }

  fillproductgroupPAF() {
    cy.get(this.locators.pg_select_PAF).select('39');
  }

  fillproductPAF() {
    cy.get(this.locators.product_select_PAF).select('All');
  }

  fillsubproductPAF() {
    cy.get(this.locators.subproduct_select_PAF).select('All');
    cy.wait(2000)
  }

  fillproductgroupPAF1() {
    cy.get(this.locators.pg_select_PAF).select('Consumer Loan');
  }

  fillproductPAF1() {
    cy.get(this.locators.product_select_PAF).select('Unsecured');
  }

  fillsubproductPAF1() {
    cy.get(this.locators.subproduct_select_PAF).select('Personal Loan');
    cy.wait(2000)
  }


  fillproductgroupPAF2() {
    cy.get(this.locators.pg_select_PAF).select('e5785d0b72fa11ee9f4e0a527ec00cf4');
  }

  fillproductPAF2() {
    cy.get(this.locators.product_select_PAF).select('e57b680a72fa11ee9f4e0a527ec00cf');
  }

  fillsubproductPAF2() {
    cy.get(this.locators.subproduct_select_PAF).select('e57cb07972fa11ee9f4e0a527ec00cf4');
    cy.wait(2000)
  }

  fillproductgroupPAF3() {
    cy.get(this.locators.pg_select_PAF).select('CreditCard');
  }

  fillproductPAF3() {
    cy.get(this.locators.product_select_PAF).select('CreditCard');
  }

  fillsubproductPAF3() {
    cy.get(this.locators.subproduct_select_PAF).select('CreditCard');
    cy.wait(2000)
  }

  fillproductgroupPAF4() {
    cy.get(this.locators.pg_select_PAF).select('4ffacc7f03e74cbb961fa3aacf8b7f2a');
  }

  fillproductPAF4() {
    cy.get(this.locators.product_select_PAF).select('VEHICLE LOAN');
  }

  fillsubproductPAF4() {
    cy.get(this.locators.subproduct_select_PAF).select('CAR');
    cy.wait(2000)
  }

  fillproductgroupPAF5() {
    cy.get(this.locators.pg_select_PAF).select('1933CAC2741F481FB1015F25AAFEDC26');
  }

  fillproductPAF5() {
    cy.get(this.locators.product_select_PAF).select('40');
  }

  fillsubproductPAF5() {
    cy.get(this.locators.subproduct_select_PAF).select('41');
    cy.wait(2000)
  }

  fillproductgroupPAF6() {
    cy.get(this.locators.pg_select_PAF).select('e069561ff51f11ebbdb90a527ec00cf4');
  }

  fillproductPAF6() {
    cy.get(this.locators.product_select_PAF).select('SCHOOL LOAN');
  }

  fillsubproductPAF6() {
    cy.get(this.locators.subproduct_select_PAF).select('SCHOOL LOAN');
    cy.wait(2000)
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
    cy.get(this.locators.GF_country).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_region).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_state).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_city).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_branch).select('All');
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
  }

  fillproductSAF() {
    cy.get(this.locators.product_select_SAF).select('40');
  }

  fillsubproductSAF() {
    cy.get(this.locators.subproduct_select_SAF).select('41');
    cy.wait(2000)
  }

  fillproductgroupSAF1() {
    cy.get(this.locators.pg_select_SAF).select('CreditCard');
  }

  fillproductSAF1() {
    cy.get(this.locators.product_select_SAF).select('CreditCard');
  }

  fillsubproductSAF1() {
    cy.get(this.locators.subproduct_select_SAF).select('CreditCard');
    cy.wait(2000)
  }

  fillproductgroupSAF2() {
    cy.get(this.locators.pg_select_SAF).select('LOANS PRODUCTS');
  }

  fillproductSAF2() {
    cy.get(this.locators.product_select_SAF).select('VEHICLE LOAN');
  }

  fillsubproductSAF2() {
    cy.get(this.locators.subproduct_select_SAF).select('BIKE');
    cy.wait(2000)
  }

  fillsubproductSAF3() {
    cy.get(this.locators.subproduct_select_SAF).select('CAR');
    cy.wait(2000)
  }

  fillproductgroupSAF4() {
    cy.get(this.locators.pg_select_SAF).select('SCHOOL LOAN');
  }

  fillproductSAF4() {
    cy.get(this.locators.product_select_SAF).select('SCHOOL LOAN');
  }

  fillsubproductSAF4() {
    cy.get(this.locators.subproduct_select_SAF).select('SCHOOL LOAN');
    cy.wait(2000)
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
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > a.ng-star-inserted').click();
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
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
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
    cy.get(this.locators.clickonSUSFailed).select(Status);
    cy.wait(2000);
    cy.get(this.locators.fillfilenameSUS).type('Mumbai');
    cy.wait(2000);
    cy.get(this.locators.filluploaddate).click();
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
    cy.get(this.locators.allctedACCbtn).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.searchBTN).click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(10) > .form-control-group > .form-check-group > label > #checked').click();
    cy.wait(2000);
    cy.get('#upload').click();
    cy.wait(2000);
    cy.contains("TC Agent name or Agent name any one required").should("be.visible");

    /*cy.get(this.locators.allocateBtn).click();
    cy.wait(2000);*/
    // cy.get(this.locators.AccEmptyerr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

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
    cy.get(this.locators.BomBu).select("All");
    cy.wait(2000);
    // cy.get(this.locators.Semptyerr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

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
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Please try again later"
    // )
   //cy.get(this.locators.allocateBtn).click();
    cy.wait(2000);
    // cy.get(this.locators.AccEmptyerr).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

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
    cy.get('#Productgroup').select("Periode");
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
    cy.get(this.locators.SAF_GF_country).select('All');
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_region).select('All');
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_state).select('All');
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_city).select('All');
    cy.wait(2000);
    cy.get(this.locators.SAF_GF_branch).select('All');
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
    cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.SAF_Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Please try again later"
    // )
    /*cy.get(':nth-child(2) > :nth-child(10) > input').click()
    cy.get(':nth-child(3) > :nth-child(10) > input').click()
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('Tirupati Travels');
    cy.get(this.locators.AgencyName).type('Dev Electronics');
    cy.get(this.locators.AGencyExpirayDate).click();
    cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();*/

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
    cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
    cy.wait(2000);
    cy.get(this.locators.SAF_Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   "Please try again later"
    // )
    /*cy.get(':nth-child(4) > :nth-child(10) > input').click()
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
    cy.get(this.locators.dashboardOnAllocation).should('be.visible')*/

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
    cy.get(this.locators.filluploaddate).click();
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
    cy.get(this.locators.ProductGroupUAAO).select('Consumer Loan');
    cy.wait(2000)
    cy.get(this.locators.ProductUAAO).select('Unsecured');
    cy.wait(2000)
    cy.get(this.locators.SubproducUAAO).select('Personal Loan');
    cy.wait(2000)
    cy.get(this.locators.ClickonNotAllocatedAgency).click();
    cy.wait(2000)
    cy.get(this.locators.ClickondownloadaccountsUAAO).click();
    cy.wait(2000)
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
    //cy.get(this.locators.clickonPF).click();
    cy.get(this.locators.pg_select_SAF).select('39');
    cy.get(this.locators.product_select_SAF).select('All');
    cy.get(this.locators.subproduct_select_SAF).select('All');
    cy.get(this.locators.clickonBF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonDPD).type('12');
    cy.wait(2000);
    cy.get(this.locators.clickonDString).type('OK');
    cy.wait(2000);
    cy.get(this.locators.BOMBucket).select('All');
    cy.get(this.locators.Geography_Filter).click();
    cy.wait(2000);
    cy.get(this.locators.GF_country).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_region).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_state).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_city).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_branch).select('All');
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
  
    /*cy.get(':nth-child(2) > :nth-child(10) > input').click()
    cy.get(':nth-child(3) > :nth-child(10) > input').click()
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('Tirupati Travels');
    cy.get(this.locators.AgencyName).type('Dev Electronics');
    cy.get(this.locators.AGencyExpirayDate).click();
    cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();
    cy.get('.btn-danger').click();
    cy.wait(2000);*/
    // cy.get(this.locators.Welcome).then(($el) => {
    //   const text = $el.text();
    //   cy.log(text);
    // })

  }

  ClickOnSearchResultAllocationSABF2() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.AllocFilter).click();
    cy.wait(2000);
    cy.get(this.locators.clickonSABF).click().click();
    cy.wait(2000);
    //cy.get(this.locators.clickonPF).click();
    cy.get(this.locators.pg_select_SAF).select('39');
    cy.get(this.locators.product_select_SAF).select('All');
    cy.get(this.locators.subproduct_select_SAF).select('All');
    cy.get(this.locators.clickonBF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonDPD).type('21');
    cy.wait(2000);
    cy.get(this.locators.clickonDString).type('OK');
    cy.wait(2000);
    cy.get(this.locators.BOMBucket).select('All');
    cy.get(this.locators.Geography_Filter).click();
    cy.wait(2000);
    cy.get(this.locators.GF_country).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_region).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_state).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_city).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_branch).select('All');
    cy.wait(2000);
    cy.get(this.locators.clickonOF).click();
    cy.wait(2000);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(2000);
    cy.get(this.locators.SearchOF).click()
    cy.wait(2000);
  //   cy.get('.col-md-12 > .btn').then($element => {
  //     if ($element.length === 0) {
  //         // If no data found, stop test execution
  //         cy.log('No data found. Stopping test execution.');
  //         // You can use `cy.fail()` to fail the test explicitly
  //         cy.fail('No data found.');
  //     } else {
  //         // If data found, proceed further
  //         cy.log('Data found. Proceeding further.');
  //         // Add your further test steps here
  //     }
  // });
  cy.get('[role="alert"]').then(($alert) => {
    // Check if the alert contains "No Results found!"
    if ($alert.text().includes("No Results found!")) {
  cy.get('[role="alert"]').should(
   "contain.text",
    "No Results found!"
   )
    } else {

   cy.get(':nth-child(2) > :nth-child(10) > input').click()
    cy.get(':nth-child(3) > :nth-child(10) > input').click()
    cy.wait(2000);
    cy.get(this.locators.Allocation_SearchResult).click()
    cy.get(this.locators.AllocateToAgency).click()
    cy.get(this.locators.TCAgency).type('Tirupati Travels');
    cy.get(this.locators.AgencyName).type('Dev Electronics');
    cy.get(this.locators.AGencyExpirayDate).click();
    cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();
    cy.get(this.locators.pg_select_SAF).select('CreditCard');
    cy.get(this.locators.product_select_SAF).select('CreditCard');
    cy.get(this.locators.subproduct_select_SAF).select('CreditCard');
    cy.get('.buttons_set > #upload').click();
    cy.wait(2000);
    cy.get(this.locators.Welcome).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }
  
});

} 
  downloadAgencyUnallocationbatch() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickonABU).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click().click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Primary).select('Deallocation Template');
    cy.get(this.locators.UnAllocation_Download_Template).click({force: true});
    cy.wait(20000);
  }

  uploadAgencyUnallocationBatchFiledAgency() {
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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

    cy.contains('File Uploaded Successfully', { timeout: 20000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);

      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
        const TransactionID = transactionIdMatch;
      }
    });
  }

  uploadAgencyUnallocationBatchTelecallingAgency() {
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnABAL).click();
    cy.wait(2000);
    cy.get(this.locators.UnAllocation_Batch).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.contains('Please Select Proceed with Unallocation For Before Uploading File', { timeout: 20000 }).invoke('text').then((popupText) => {
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
        cy.wait(20000);
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    cy.get(this.locators.cancelbtn).click();
  }

  uploadAgencyUnallocationBatchWrongAccountNo() {
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
        cy.wait(20000);
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    cy.get(this.locators.UnAllocation_Primary).select('Deallocation Template');
    cy.get(this.locators.UnAllocation_Download_Template).click();
    cy.wait(20000);
  }

  uploadCollectorUnallocationBatchAgenct() {
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.uploadallocation).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.contains('Please Select Proceed with Unallocation For Before Uploading File', { timeout: 20000 }).invoke('text').then((popupText) => {
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
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
    const filePath = 'Cypress/downloads/UnAllocation.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.CollectorUnAllocation_Batch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnstaff).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get(this.locators.cancelbtn).click();
    cy.wait(2000);
    cy.get(this.locators.CAradiobtnagent).click();
    cy.wait(2000);
    cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
    cy.wait(2000);
    cy.get('#upload').click();
    cy.get(this.locators.ConfirmUpload).click();

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
    cy.get(this.locators.UploadAgencyAllocationBatch).click()
    cy.wait(2000);
    cy.get(this.locators.DownloadAcc).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DownloadErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
    })
  }

  ClickonUAABvalidationCheck() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAGBU).click({force: true} );
    cy.wait(2000);
    //cy.get(this.locators.UploadAgencyAllocationBatch).click();
    cy.wait(2000);
    cy.get(this.locators.UAABAllocationOwner).click()
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
    cy.get(this.locators.pg_select).select('Consumer Loan');
    cy.wait(2000);
    cy.get(this.locators.product_select).select('Unsecured');
    cy.wait(2000);
    cy.get(this.locators.subproduct_select).select('Personal Loan');
    cy.wait(2000);
    cy.get(this.locators.UAABbucket).select('3');
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
    cy.get(this.locators.DownloadAcc).click({ force: true });
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
    cy.get(this.locators.UploadAgencyAllocationBatch).click()
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
    cy.get("a[title='Allocation Owner Bulk Upload'] img").click();
    cy.wait(2000);
    //cy.get("").click().click();
    cy.wait(2000);
    cy.get(this.locators.Allocation_Primary).select('Allocation Template For Allocation Owner');
    //cy.get(this.locators.ClickonAllocationOwner).click();
    cy.get(this.locators.Allocation_Download_Template).click();
    cy.wait(20000);
  }

  UploadFilledAgencyLevelAllocationFile() {
    const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get('.allocation > :nth-child(2) > :nth-child(3) > a.ng-star-inserted').click();
    cy.wait(2000);
    cy.get("a[title='Allocation Owner Upload']").click().click();
    cy.wait(2000);
    cy.get(this.locators.ClickonAllocationOwner).click();
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

  downloadtemplateforallocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentU).click();
    cy.wait(2000);
    cy.get(this.locators.ClickAgentBulk).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.SelectTemplateForCollectorAllocation).select('Allocation Template For Collection Staff');
    cy.get(this.locators.DownloadTemplateOfStaffLevelAllocationFile).click();
    cy.wait(20000);
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
    cy.get("a[title='Agency Bulk Upload']").click({force: true});
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
    cy.get(this.locators.ProductGroupUAAO).select('Consumer Loan');
    cy.wait(2000)
    cy.get(this.locators.ProductUAAO).select('Unsecured');
    cy.wait(2000)
    cy.get(this.locators.SubproducUAAO).select('Personal Loan');
    cy.wait(2000)
    cy.get(this.locators.ClickonAllocatedAgency).click();
    cy.wait(2000)
    cy.get(this.locators.ClickondownloadaccountsUAAO).click();
    cy.wait(2000)
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
    cy.get(this.locators.PrimaryAllocationTmplt).select('Allocation Template For Allocation Owner');
    cy.get(this.locators.DownloadAllocationTemplt).click();
    cy.wait(20000);
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
        cy.wait(20000);
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
    cy.get(this.locators.closeConfirm).click();
    cy.wait(2000);
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
    // cy.get(this.locators.clickonPF).click();
    // cy.wait(2000);
    cy.get(this.locators.pg_select_PAF).select('39');
    cy.wait(2000);
    cy.get(this.locators.product_select_PAF).select('All');
    cy.wait(2000);
    cy.get(this.locators.subproduct_select_PAF).select('All');
    cy.wait(2000);
    cy.get(this.locators.clickonBF).click();
    cy.wait(2000);
    cy.get(this.locators.clickonDPD).type('12');
    cy.wait(2000);
    cy.get(this.locators.clickonDString).type('OK');
    cy.wait(2000);
    cy.get(this.locators.BOMBucket).select('All');
    cy.wait(2000);
    cy.get(this.locators.Geography_Filter).click();
    cy.wait(2000);
    cy.get(this.locators.GF_country).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_region).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_state).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_city).select('All');
    cy.wait(2000);
    cy.get(this.locators.GF_branch).select('All');
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
    
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
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
    
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
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
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get(this.locators.download).click();
    cy.wait(2000);
    cy.contains("Enter at least one filter value").should("be.visible");
    cy.wait(2000);

  }
  ClickonUAAOvalidationCheck_50() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get('#Transactionid').type("@#$");
    cy.wait(2000);
    cy.get(this.locators.download).click();
    cy.wait(2000);
    cy.contains("Invalid TransactionId").should("be.visible");
    cy.wait(2000);

  }

  ClickonUAAOvalidationCheck_51() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get(this.locators.statusfailed).select("Failed");
    cy.wait(2000);
     cy.get(this.locators.download).click();
     cy.wait(2000);
   

  }

  ClickonUAAOvalidationCheck_52() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.UplAllowner).click();
    cy.wait(2000);
    cy.get(this.locators.Uploadallstatus).click();
    cy.wait(2000);
    cy.get(this.locators.fillfilename).type('Mumbai');
    cy.wait(2000);
    cy.get("#FileuploadDate").click();
    cy.wait(2000);
    cy.get(this.locators.enterdate).click();
    cy.wait(2000);
     cy.get(this.locators.download).click();
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
    cy.get('.allocation > :nth-child(2) > :nth-child(1) > .sub-nav-list > :nth-child(1) > a').click();
    //cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
    cy.wait(2000);
    cy.get(this.locators.PrimaryAllocationTmplt).select('Allocation Template For Allocation Owner');
    cy.get(this.locators.DownloadAllocationTemplt).click();
    cy.wait(20000);
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
    cy.get(this.locators.loanaccount).click({force: true});
    cy.wait(2000);
    /*cy.get(this.locators.consumername).type('a', {force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonsearch).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.clickonaccountnumber).click({force: true});
    cy.wait(20000);*/

  }


  downloadAgencyAllocationOwnerFile() {
    cy.get(this.locators.allocation).click();
    cy.wait(2000);
    cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
    cy.wait(2000);
    cy.get(this.locators.PrimaryAllocationTmplt).select('Allocation Template For Allocation Owner');
    cy.get(this.locators.DownloadAllocationTemplt3).click();
    cy.wait(20000);
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
        cy.wait(20000);
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
    cy.get('#Productgroup').select("SCHOOL LOAN");
    cy.wait(2000);
    cy.get('#product').select("SCHOOL LOAN");
    cy.wait(2000);
    cy.get('#subproduct').select("SCHOOL LOAN");
    cy.wait(2000);



  }

}

export default AllocationPage;