import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class AllocationPage {
  constructor(locators){
    this.locators = locators;
  }

  Clickonallocation() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.uploadallocation).click();
    cy.wait(500);
  }

  fillproductgroup() {
    cy.get(this.locators.pg_select).select('1: 39');
  }

  fillproduct() {
    cy.get(this.locators.product_select).select('1: 40');
  }

  fillsubproduct() {
    cy.get(this.locators.subproduct_select).select('1: 41');
    cy.wait(500)
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

  filltemplate(){
    cy.get(this.locators.slcttempprimaryAllocation).select('Agency');
    cy.wait(500);
  }

  filltemplate2(){
    cy.get(this.locators.slcttempprimaryAllocation).select('Telecallingagency');
    cy.wait(500);
  }

  filltemplate3(){
    cy.get(this.locators.slcttempprimaryAllocation).select('AllocationOwner');
    cy.wait(500);
  }
  
  clickondownloadTemplate(){
    cy.get(this.locators.downloadtemplate).click();
    cy.wait(10000);
  }

  clickonRadioBtnFA(){
    cy.get(this.locators.RadioBtnFA).click();
  }

  clickonRadioBtnTCA(){
    cy.get(this.locators.RadioBtnTCA).click();
  }

  clickonRadioBtnAO(){
    cy.get(this.locators.RadioBtnAO).click();  
  }

  clickonOK(){
    cy.get(this.locators.ConfirmUpload).click();
  }

  uploadfile1(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryAgency.xlsx');
  }

  uploadfile2(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('PrimaryTeleCallingAgency.xlsx');
  }

  uploadfile3(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.xlsx');
  }

  uploadfilewithSpclChrctr(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('Allocation#ToOwner.xlsx');
  }

  uploadDocxExtensionFile(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.docx');
  }

  clickonUpldCollectorallocation(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.collectorallocation).click();
    cy.wait(500);
  }

  fillCAtemplate(){
    cy.get(this.locators.CAtempltdd).select('staff');
    cy.wait(500);
  }

  fillCAtemplate2(){
    cy.get(this.locators.CAtempltdd).select('Agent');
    cy.wait(500);
  }

  fillCAtemplate3(){
    cy.get(this.locators.CAtempltdd).select('Telecallingagent');
    cy.wait(500);
  }

  clickonCAdownloadTemplate(){
    cy.get(this.locators.CAdownloadtemplt).click();
    cy.wait(10000);
  }

  clickonCARadioBtnstaff(){
    cy.get(this.locators.CAradiobtnstaff).click();
  }

  clickonCARadioBtnagnt(){
    cy.get(this.locators.CAradiobtnagent).click();
    // cy.get('input[type="radio"][value="agent"]').click();

  }

  clickonCARadioBtntelec(){
    cy.get(this.locators.CAradiobtntelec).click();
  }

  CAuploadfile(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('AllocationToOwner.xlsx');
  }

  CAuploadfile1(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationAgent.xlsx');
  }

  CAuploadfile2(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationTelecaller.xlsx');
  }

  CAuploadfile3(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationCollectionStaff.xlsx');
  }

  clickonCAconfirmOK(){
    cy.get(this.locators.CAconfirmOK).click();
  }

  uploadCAfilewithSpclChrctr(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondary#AllocationCollectionStaff copy.xlsx');
  }

  uploadCADocxExtensionFile(){
    cy.get(this.locators.uploadfile).should('exist').attachFile('ENCollectSecondaryAllocationAgent.docx');
  }
    
  ClickonallocationSAS() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.SecondaryAS).click().click();
    cy.wait(500);
  }

  fillfailedstatus(){
    cy.get(this.locators.Status).select('1: Failed');
    cy.wait(500);
  }

  fillinvalidstatus(){
    cy.get(this.locators.Status).select('2: Invalid File Format');
    cy.wait(500);
  }

  fillprocessed(){
    cy.get(this.locators.Status).select('3: Processed');
    cy.wait(500);
  }

  fillpartiallyprocessed(){
    cy.get(this.locators.Status).select('4: Partially Processed');
    cy.wait(500);
  }

  filluploaded(){
    cy.get(this.locators.Status).select('5: Uploaded');
    cy.wait(500);
  }

  clickonSearch(){
    cy.get(this.locators.Search).click();
    cy.wait(1000);
    cy.get('div[class="history-table"] h3').should('contain', 'Search Result');
  }

  ClickonallocationPAS() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrimaryAS).click().click();
    cy.wait(500);
  }

  ClickonallocationPAF() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonPF).click();
    cy.wait(500);
  }

  fillproductgroupPAF() {
    cy.get(this.locators.pg_select_PAF).select('39');
  }

  fillproductPAF() {
    cy.get(this.locators.product_select_PAF).select('1: 40');
  }

  fillsubproductPAF() {
    cy.get(this.locators.subproduct_select_PAF).select('1: 41');
    cy.wait(500)
  }

  fillproductgroupPAF1() {
    cy.get(this.locators.pg_select_PAF).select('569843be84e345a5b41d767935f4cbdc');
  }

  fillproductPAF1() {
    cy.get(this.locators.product_select_PAF).select('1: 42');
  }

  fillsubproductPAF1() {
    cy.get(this.locators.subproduct_select_PAF).select('1: 61');
    cy.wait(500)
  }


  fillproductgroupPAF2() {
    cy.get(this.locators.pg_select_PAF).select('e5785d0b72fa11ee9f4e0a527ec00cf4');
  }

  fillproductPAF2() {
    cy.get(this.locators.product_select_PAF).select('4: e57b680a72fa11ee9f4e0a527ec00cf');
  }

  fillsubproductPAF2() {
    cy.get(this.locators.subproduct_select_PAF).select('3: e57cb07972fa11ee9f4e0a527ec00cf4');
    cy.wait(500)
  }
  
  fillproductgroupPAF3() {
    cy.get(this.locators.pg_select_PAF).select('4ffacc7f03e74cbb961fa3aacf8b7f2a');
  }

  fillproductPAF3() {
    cy.get(this.locators.product_select_PAF).select('11: 2');
  }

  fillsubproductPAF3() {
    cy.get(this.locators.subproduct_select_PAF).select('1: 17');
    cy.wait(500)
  }

  fillproductgroupPAF4() {
    cy.get(this.locators.pg_select_PAF).select('4ffacc7f03e74cbb961fa3aacf8b7f2a');
  }

  fillproductPAF4() {
    cy.get(this.locators.product_select_PAF).select('11: 2');
  }

  fillsubproductPAF4() {
    cy.get(this.locators.subproduct_select_PAF).select('2: 16');
    cy.wait(500)
  }

  fillproductgroupPAF5() {
    cy.get(this.locators.pg_select_PAF).select('1933CAC2741F481FB1015F25AAFEDC26');
  }

  fillproductPAF5() {
    cy.get(this.locators.product_select_PAF).select('1: 40');
  }

  fillsubproductPAF5() {
    cy.get(this.locators.subproduct_select_PAF).select('1: 41');
    cy.wait(500)
  }

  fillproductgroupPAF6() {
    cy.get(this.locators.pg_select_PAF).select('e069561ff51f11ebbdb90a527ec00cf4');
  }

  fillproductPAF6() {
    cy.get(this.locators.product_select_PAF).select('SCHOOL LOAN');
  }

  fillsubproductPAF6() {
    cy.get(this.locators.subproduct_select_PAF).select('SCHOOL LOAN');
    cy.wait(500)
  }

  ClickonallocationBF() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonBF).click();
    cy.wait(500);
    cy.get(this.locators.clickonDPD).type('OK');
    cy.wait(500);
    cy.get(this.locators.clickonDString).type('OK');
    cy.wait(500);
    cy.get(this.locators.BOMBucket).select('12: 10');
  }

  ClickonallocationOF() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonOF).click();
    cy.wait(500);
    cy.get(this.locators.clickonCN).type('Amar');
    cy.wait(500);
    cy.get(this.locators.clickonAN).type('0123456789');
    cy.wait(500);
    cy.get(this.locators.Unallocated_Accounts).click();
    cy.wait(500);
    cy.get(this.locators.Allocated_Accounts).click();
    cy.wait(500);
    cy.get(this.locators.SearchOF).click()
  }

  ClickonallocationUCAB() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.UCAB).click();
    cy.wait(500);
  }

  ClickOnGeographyFilter(){
    cy.get(this.locators.allocation).click();
    cy.wait(1000);
    cy.get(this.locators.clickonPAF).click().click();
    cy.wait(1000);
    cy.get(this.locators.Geography_Filter).click();
    cy.wait(500);
    cy.get(this.locators.GF_country).select('kenya');
    cy.wait(500);
    cy.get(this.locators.GF_region).select('North');
    cy.wait(500);
    cy.get(this.locators.GF_state).select('Nairobi');
    cy.wait(500);
    cy.get(this.locators.GF_city).select('Nairobi');
    cy.wait(500);
    cy.get(this.locators.GF_branch).select('Ecobank');
    cy.wait(500);
  }

  ClickonallocationSAF() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSAF).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSPF).click();
    cy.wait(500);
  }

  fillproductgroupSAF() {
    cy.get(this.locators.pg_select_SAF).select('39');
  }

  fillproductSAF() {
    cy.get(this.locators.product_select_SAF).select('1: 40');
  }

  fillsubproductSAF() {
    cy.get(this.locators.subproduct_select_SAF).select('1: 41');
    cy.wait(500)
  }

  fillproductgroupSAF1() {
    cy.get(this.locators.pg_select_SAF).select('CreditCard');
  }

  fillproductSAF1() {
    cy.get(this.locators.product_select_SAF).select('CreditCard');
  }

  fillsubproductSAF1() {
    cy.get(this.locators.subproduct_select_SAF).select('CreditCard');
    cy.wait(500)
  }

  fillproductgroupSAF2() {
    cy.get(this.locators.pg_select_SAF).select('LOANS PRODUCTS');
  }

  fillproductSAF2() {
    cy.get(this.locators.product_select_SAF).select('VEHICLE LOAN');
  }

  fillsubproductSAF2() {
    cy.get(this.locators.subproduct_select_SAF).select('BIKE');
    cy.wait(500)
  }

  fillsubproductSAF3() {
    cy.get(this.locators.subproduct_select_SAF).select('CAR');
    cy.wait(500)
  }

  fillproductgroupSAF4() {
    cy.get(this.locators.pg_select_SAF).select('SCHOOL LOAN');
  }

  fillproductSAF4() {
    cy.get(this.locators.product_select_SAF).select('SCHOOL LOAN');
  }

  fillsubproductSAF4() {
    cy.get(this.locators.subproduct_select_SAF).select('SCHOOL LOAN');
    cy.wait(500)
  }

  ClickonallocationUAAOS(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(500);

  }

  ClickonallocationSUS(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSUSFailed).select(Status);
    cy.wait(500);
    cy.get(this.locators.clickonSUSsubmit).click();
    cy.wait(500);

  }

  ClickonallocationSAS() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSearchSAS).click( {force: true});
    cy.wait(500);
  }

  ClickonallocationSAS1() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(500);
    cy.get(this.locators.TransactionID).type('@12345#');
    cy.wait(500);
    cy.get(this.locators.clickonSearchSAS).click( {force: true});
    cy.wait(500);
  }

  ClickonallocationSAS2(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(500);
    cy.get(this.locators.showresultSAS2).select('50');
    cy.wait(500);
  }

  ClickonallocationSAS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSAS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSFailed).select(Status);
    cy.wait(500);
    cy.get(this.locators.fillfilename).type('Mumbai');
    cy.wait(500);
    cy.get(this.locators.filluploaddate).click();
    cy.wait(500);
    cy.get(this.locators.enterdate).click();
    cy.wait(500);
    cy.get(this.locators.TransactionID).type('1234568');
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSsubmit).click();
    cy.wait(500);

  }

  ClickonallocationSUS1() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSUSSearch).click({force: true} );
    cy.wait(500);
  }

  ClickonallocationSUS2() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(500);
    cy.get(this.locators.TransactionID).type('@12345#');
    cy.wait(500);
    cy.get(this.locators.clickonSUSSearch).click({force: true} );
    cy.wait(500);
  }

  ClickonallocationSUS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSUSFailed1).select(Status);
    cy.wait(500);
    cy.get(this.locators.clickonSUSSearch).click({force: true} );
    cy.wait(500);
    cy.get(this.locators.showresultSUS3).select('50');
    cy.wait(500);
  }

  ClickonallocationSUS3(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonSUS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSUSFailed).select(Status);
    cy.wait(500);
    cy.get(this.locators.fillfilenameSUS).type('Mumbai');
    cy.wait(500);
    cy.get(this.locators.filluploaddate).click();
    cy.wait(500);
    cy.get(this.locators.enterdate).click();
    cy.wait(500);
    cy.get(this.locators.TransactionID).type('1234568');
    cy.wait(500);
    cy.get(this.locators.clickonSUSsubmit).click();
    cy.wait(500);

  }

  ClickonallocationUAAOS() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOS1).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSearchSAS).click( {force: true});
    cy.wait(500);
  }

  ClickonallocationUAAOS1() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOS1).click().click();
    cy.wait(500);
    cy.get(this.locators.TransactionID).type('@12345#');
    cy.wait(500);
    cy.get(this.locators.clickonSUSSearch).click({force: true} );
    cy.wait(500);
  }

  ClickonallocationUAAOS2(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOS1).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonSUSFailed1).select(Status);
    cy.wait(500);
    cy.get(this.locators.clickonSUSSearch).click({force: true} );
    cy.wait(500);
    cy.get(this.locators.showresultSUS3).select('50');
    cy.wait(500);
  }

  ClickonallocationUAAOS3(Status) {
    cy.get('[title="Allocation"] > span.ng-star-inserted').click();
    cy.wait(500);
    cy.get('.allocation > :nth-child(2) > :nth-child(2) > a.ng-star-inserted').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .sub-nav-list > :nth-child(5) > a').click().click();
    cy.wait(500);
    cy.get(this.locators.clickonUAAOSFailed).select("Failed");
    cy.wait(500);
    cy.get('#Filename').type('Mumbai');
    cy.wait(500);
    cy.get('#FileuploadDate').click();
    cy.wait(1000);
    cy.get(this.locators.enterdate).click();
    cy.wait(500);
    cy.get('#Transactionid').type('1234568',{force : true});
    cy.wait(500);
    cy.get('#search').click();
    cy.wait(500);
  }

  ClickonallocationPUS(Status) {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.clickonPUS).click().click();
    cy.wait(500);
    cy.get(this.locators.clickonPUSFailed).select(Status);
    cy.wait(500);
    cy.get(this.locators.clickonSUSsubmit).click();
    cy.wait(500);

  }

  ClickonPrmryAllocationByFltrsrch() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.filtererr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

    }

  ClickonPABFdpd(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.BucketFilter).click({force: true});
    cy.wait(500);
    cy.get(this.locators.currentDPD).type('@@');
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.dpderr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

  }  

  ClickonPABFDellstring(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.BucketFilter).click({force: true});
    cy.wait(500);
    cy.get(this.locators.dellstring).type('##');
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.delstrErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

  }  

  ClickonPABFotherField(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.Otherfield).click({force: true});
    cy.wait(500);
    cy.get(this.locators.CustomerName).type('##');
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.CNErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

  }  

  ClickonPABFotrfldAccNm(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.Otherfield).click({force: true});
    cy.wait(500);
    cy.get(this.locators.AccNumber).type('##');
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.AccNMErr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

  }  

  ClickonPABF(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.BucketFilter).click({force: true});
    cy.wait(500);
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.emptyerr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

  } 
  
  ClickonPAallocate(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.allctedACCbtn).click({force: true});
    cy.wait(500);
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.allocateBtn).click();
    cy.wait(500);
    cy.get(this.locators.AccEmptyerr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

   }  

  ClickonPAslctacc(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.allctedACCbtn).click({force: true});
    cy.wait(500);
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.NextPage).click().click();
    cy.get(this.locators.selectacc).click();
    cy.wait(500);
    cy.get(this.locators.allocateBtn).click();
    cy.wait(500);
    cy.get(this.locators.withoutTCerr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

   }  

  ClickonPAcancelBtn(){
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.PrmryAllocationByFltr).click();
    cy.wait(500);
    cy.get(this.locators.allctedACCbtn).click({force: true});
    cy.wait(500);
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.NextPage).click().click();
    cy.get(this.locators.selectacc).click();
    cy.wait(500);
    cy.get(this.locators.cancelbtn).click();
   } 

   ClickonSecndryAlloctnByFltrsrch() {
    cy.get(this.locators.allocation).click();
    cy.wait(500);
    cy.get(this.locators.Secondryallctn).click();
    cy.wait(500);
    cy.get(this.locators.searchBTN).click({force: true});
    cy.wait(500);
    cy.get(this.locators.filtererr).then(($el) => {
      const text = $el.text();
      cy.log(text);
     })

    }

    ClickonSABFdpd(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.BucketFilter).click({force: true});
      cy.wait(500);
      cy.get(this.locators.currentDPD).type('**');
      cy.get(this.locators.searchBTN).click({force: true});
      cy.wait(500);
      cy.get(this.locators.dpderr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
  
    } 
    
    ClickonSABFDellstring(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.BucketFilter).click({force: true});
      cy.wait(500);
      cy.get(this.locators.dellstring).type('##');
      cy.get(this.locators.searchBTN).click({force: true});
      cy.wait(500);
      cy.get(this.locators.delstrErr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
  
    }  

    ClickonSABFotherField(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.Otherfield).click({force: true});
      cy.wait(500);
      cy.get(this.locators.CustomerName).type('##');
      cy.get(this.locators.searchBTN).click({force: true});
      cy.wait(500);
      cy.get(this.locators.CNErr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
  
    }  

    ClickonSABFotrfldAccNm(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.Otherfield).click({force: true});
      cy.wait(500);
      cy.get(this.locators.AccNumber).type('##');
      cy.get(this.locators.searchBTN).click({force: true});
      cy.wait(500);
      cy.get(this.locators.AccNMErr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
  
    }  

    ClickonSABF(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.BucketFilter).click({force: true});
      cy.wait(500);
      cy.get(this.locators.searchBTN).click({force: true});
      cy.wait(500);
      cy.get(this.locators.Semptyerr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
  
    } 

    ClickonSAallocate(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.SAllAccbtn).click({force: true});
      cy.wait(500);
      cy.get(this.locators.searchBTN).click({force: true});
      cy.wait(500);
      cy.get(this.locators.allocateBtn).click();
      cy.wait(500);
      cy.get(this.locators.AccEmptyerr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
  
     }  

     ClickonAllocationSearchResult() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.clickonPAF).click().click();
      cy.wait(500);
      cy.get(this.locators.clickonOF).click();
      cy.wait(500);
      cy.get(this.locators.Unallocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(2) > :nth-child(10) > input').click()
      cy.get(':nth-child(3) > :nth-child(10) > input').click()
    }

    ClickOnSearchResultAllocation() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.clickonPAF).click().click();
      cy.wait(500);
      cy.get(this.locators.clickonOF).click();
      cy.wait(500);
      cy.get(this.locators.Unallocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(2) > :nth-child(10) > input').click()
      cy.get(':nth-child(3) > :nth-child(10) > input').click()
      cy.wait(500);
      cy.get(this.locators.Allocation_SearchResult).click()
      cy.get(this.locators.AllocateToAgency).click()
      cy.get(this.locators.TCAgency).type('Tirupati Travels');
      cy.get(this.locators.AgencyName).type('Dev Electronics');
      cy.get(this.locators.AGencyExpirayDate).click();
      cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();

    }

    ClickOnAllocateButton() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.clickonPAF).click().click();
      cy.wait(500);
      cy.get(this.locators.clickonOF).click();
      cy.wait(500);
      cy.get(this.locators.Unallocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(4) > :nth-child(10) > input').click()
      cy.wait(500);
      cy.get(this.locators.Allocation_SearchResult).click()
      cy.get(this.locators.AllocateToAgency).click()
      cy.get(this.locators.TCAgency).type('test  10226');
      cy.wait(500);
      // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
      cy.get(this.locators.AgencyName).type('CWC 2023  11384');
      cy.wait(500);
      // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
      cy.get(this.locators.AllocateButton).click();

    }
  
    ClickOnAllocateButtonEmail() {

    }

    ClickOnCancelButton() {

      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.clickonPAF).click().click();
      cy.wait(500);
      cy.get(this.locators.clickonOF).click();
      cy.wait(500);
      cy.get(this.locators.Unallocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(4) > :nth-child(10) > input').click()
      cy.wait(500);
      cy.get(this.locators.Allocation_SearchResult).click()
      cy.get(this.locators.AllocateToAgency).click()
      cy.get(this.locators.TCAgency).type('test  10226');
      cy.wait(500);
      // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
      cy.get(this.locators.AgencyName).type('CWC 2023  11384');
      cy.wait(500);
      // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
      cy.get(this.locators.CancelButton).click();
      cy.wait(1000);
      cy.get(this.locators.dashboardOnAllocation).should('be.visible')

    }

    ClickonSABFBucket(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.BucketFilter).click({force: true});
      cy.wait(500);
      cy.get(this.locators.currentDPD).type('abcd');
      cy.wait(500);
      cy.get(this.locators.dellstring).type('abcedf');
      cy.wait(500);
      cy.get(this.locators.BOMBucket).select('12: 10');
      cy.wait(500);
      
    } 

    ClickonSABFGeography(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.SAF_Geography_Filter).click();
      cy.wait(500);
      cy.get(this.locators.SAF_GF_country).select('Kenya');
      cy.wait(500);
      cy.get(this.locators.SAF_GF_region).select('North');
      cy.wait(500);
      cy.get(this.locators.SAF_GF_state).select('Nairobi');
      cy.wait(500);
      cy.get(this.locators.SAF_GF_city).select('Nairobi');
      cy.wait(500);
      cy.get(this.locators.SAF_GF_branch).select('Ecobank');
      cy.wait(500);
    }
      
    ClickonSABFotherFilter(){
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.Otherfield).click({force: true});
      cy.wait(500);
      cy.get(this.locators.CustomerName).type('Sandeep');
      cy.wait(500);
      cy.get(this.locators.AccountNumber).type('LXBNG33820211284975');

    }  

    ClickonSAFAllocation() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
      cy.wait(500);
      cy.get(this.locators.SAF_Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      //cy.get(':nth-child(2) > :nth-child(10) > input').click()
      //cy.get(':nth-child(3) > :nth-child(10) > input').click()
    }

    ClickOnSearchResultAllocationSAF() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
      cy.wait(500);
      cy.get(this.locators.SAF_Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(2) > :nth-child(10) > input').click()
      cy.get(':nth-child(3) > :nth-child(10) > input').click()
      cy.wait(500);
      cy.get(this.locators.Allocation_SearchResult).click()
      cy.get(this.locators.AllocateToAgency).click()
      cy.get(this.locators.TCAgency).type('Tirupati Travels');
      cy.get(this.locators.AgencyName).type('Dev Electronics');
      cy.get(this.locators.AGencyExpirayDate).click();
      cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();

    }

    ClickOnAllocateButtonSAF() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
      cy.wait(500);
      cy.get(this.locators.SAF_Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(4) > :nth-child(10) > input').click({ multiple: true })
      cy.wait(500);
      cy.get(this.locators.Allocation_SearchResult).click()
      cy.get(this.locators.AllocateToAgency).click()
      cy.get(this.locators.TCAgency).type('test  10226');
      cy.wait(500);
      // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
      //cy.get(this.locators.AgencyName).type('CWC 2023  11384');
      cy.wait(500);
      cy.get(this.locators.AGencyExpirayDate).click();
      cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();
      cy.wait(500);
      // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
      cy.get(this.locators.AllocateButton).click({ multiple: true });

    }

    ClickOnCancelButtonSAF() {

      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.Secondryallctn).click();
      cy.wait(500);
      cy.get(this.locators.SAF_Unallocated_Accounts).click({ multiple: true });
      cy.wait(500);
      cy.get(this.locators.SAF_Allocated_Accounts).click();
      cy.wait(500);
      cy.get(this.locators.SearchOF).click()
      cy.wait(500);
      cy.get(':nth-child(4) > :nth-child(10) > input').click()
      cy.wait(500);
      cy.get(this.locators.Allocation_SearchResult).click()
      cy.get(this.locators.AllocateToAgency).click()
      cy.get(this.locators.TCAgency).type('test  10226');
      cy.wait(500);
      // cy.get('#ngb-typeahead-2-0 > .ng-star-inserted').click;
      cy.get(this.locators.AgencyName).type('CWC 2023  11384');
      cy.wait(500);
      // cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click;
      cy.get(this.locators.CancelButton).click();
      cy.wait(1000);
      cy.get(this.locators.dashboardOnAllocation).should('be.visible')

    }

    ClickonPrmryAllocationStatus() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.PrimaryAS).click().click();
      cy.wait(500);
      cy.get(this.locators.searchButton).click({force: true});
      cy.wait(500);
      cy.get(this.locators.filtererr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
    
    } 

    ClickonPrmryAllocationStatusInvalidTrans() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.PrimaryAS).click().click();
      cy.wait(500);
      cy.get(this.locators.TID).type('@ABCD!%');
      cy.wait(500);
      cy.get(this.locators.searchButton).click({force: true});
      cy.wait(500);
      cy.get(this.locators.filtererr).then(($el) => {
        const text = $el.text();
        cy.log(text);
       })
    
    } 

    ClickonPrimaryAllocationStatus(Status) {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.PrimaryAS).click().click();
      cy.wait(500);
      cy.get(this.locators.clickonUAAOSFailed).select(Status);
      cy.wait(500);
      cy.get(this.locators.clickonUAAOSsubmit).click();
      cy.wait(500);
      cy.get(this.locators.showresultSAS2).select('50');
      cy.wait(500);
      cy.get(this.locators.clickonUAAOSFailed).select('Failed');
      cy.wait(500);
    }

    
    ClickonPrimaryAllocationStatus1(Status) {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.PrimaryAS).click().click();
      cy.wait(500);
      cy.get(this.locators.FilenamePAS).type('PrimaryAgency');
      cy.wait(500);
      cy.get(this.locators.filluploaddate).click();
      cy.wait(500);
      cy.get(this.locators.enterdate).click();
      cy.wait(500);
      cy.get(this.locators.clickonUAAOSFailed).select(Status);
      cy.wait(500);
      cy.get(this.locators.TID).type('ABC12345DEFG');
      cy.wait(500);
      cy.get(this.locators.clickonUAAOSsubmit).click();
      cy.wait(500);
    }

    ClickonallocationUAAO() {
      cy.get(this.locators.allocation).click();
      cy.wait(500);
      cy.get(this.locators.clickonUAAO).click().click();
      cy.wait(500);
      cy.get(this.locators.ProductGroupUAAO).select('Consumer Loan');
      cy.wait(500)
      cy.get(this.locators.ProductUAAO).select('Unsecured');
      cy.wait(500)
      cy.get(this.locators.SubproducUAAO).select('Personal Loan');
      cy.wait(500)
      cy.get(this.locators.ClickonNotAllocatedAgency).click();
      cy.wait(500)
      cy.get(this.locators.ClickondownloadaccountsUAAO).click();
      cy.wait(500)
      }

      ClickonallocationPUS1(Status) {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonPUS).click().click();
        cy.wait(500);
        cy.get(this.locators.clickonPUSSearch).click({force: true});
        cy.wait(500);
        cy.get(this.locators.filtererr).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
    
      }

      ClickonallocationPUS2(Status) {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonPUS).click().click();
        cy.wait(500);
        cy.get(this.locators.TransactionIDPUS).type('#%$ABCDAE@');
        cy.wait(500);
        cy.get(this.locators.clickonPUSSearch).click({force: true});
        cy.wait(500);
        cy.get(this.locators.filtererr).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
    
      }

      ClickonallocationPUS3(Status) {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonPUS).click().click();
        cy.wait(500);
        cy.get(this.locators.clickonUAAOSFailed).select(Status);
        cy.wait(500);
        cy.get(this.locators.clickonPUSSearch).click({force: true});
        cy.wait(500);
        cy.get(this.locators.showresultSUS3).select('50');
        cy.wait(500);
    
      }

      ClickonallocationPUS4(Status) {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonPUS).click().click();
        cy.wait(500);
        cy.get(this.locators.fillfilename).type('Mumbai');
        cy.wait(500);
        cy.get(this.locators.clickonUAAOSFailed).select(Status);
        cy.wait(500);
        cy.get(this.locators.filluploaddate).click();
        cy.wait(500);
        cy.get(this.locators.enterdate).click();
        cy.wait(500);
        cy.get(this.locators.TransactionID).type('682100000127498');
        cy.wait(500);
        cy.get(this.locators.clickonPUSSearch).click({force: true});
        cy.wait(500);
    
      }

      ClickOnSearchResultAllocationSABF() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonSABF).click().click();
        cy.wait(500);
        cy.get(this.locators.Allocated_Accounts).click();
        cy.wait(500);
        cy.get(this.locators.SearchOF).click()
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(10) > input').click()
        cy.wait(500);
        cy.get('.buttons_set > .btn-success').click();
        cy.wait(500);
        cy.get(this.locators.filtererr).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
  
      }

      ClickOnSearchResultAllocationSABF1() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonSABF).click().click();
        cy.wait(500);
        cy.get(this.locators.clickonPF).click();
        cy.get(this.locators.pg_select_SAF).select('39');
        cy.get(this.locators.product_select_SAF).select('1: 40');
        cy.get(this.locators.subproduct_select_SAF).select('1: 41');
        cy.get(this.locators.clickonBF).click();
        cy.wait(500);
        cy.get(this.locators.clickonDPD).type('OK');
        cy.wait(500);
        cy.get(this.locators.clickonDString).type('OK');
        cy.wait(500);
        cy.get(this.locators.BOMBucket).select('12: 10');
        cy.get(this.locators.Geography_Filter).click();
        cy.wait(500);
        cy.get(this.locators.GF_country).select('Kenya');
        cy.wait(500);
        cy.get(this.locators.GF_region).select('North');
        cy.wait(500);
        cy.get(this.locators.GF_state).select('Nairobi');
        cy.wait(500);
        cy.get(this.locators.GF_city).select('Nairobi');
        cy.wait(500);
        cy.get(this.locators.GF_branch).select('Ecobank');
        cy.wait(500);
        cy.get(this.locators.clickonOF).click();
        cy.wait(500);
        cy.get(this.locators.Unallocated_Accounts).click();
        cy.wait(500);
        cy.get(this.locators.Allocated_Accounts).click();
        cy.wait(500);
        cy.get(this.locators.SearchOF).click()
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(10) > input').click()
        cy.get(':nth-child(3) > :nth-child(10) > input').click()
        cy.wait(500);
        cy.get(this.locators.Allocation_SearchResult).click()
        cy.get(this.locators.AllocateToAgency).click()
        cy.get(this.locators.TCAgency).type('Tirupati Travels');
        cy.get(this.locators.AgencyName).type('Dev Electronics');
        cy.get(this.locators.AGencyExpirayDate).click();
        cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();
        cy.get('.btn-danger').click();
        cy.wait(500);
        cy.get(this.locators.Welcome).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
  
      }

      ClickOnSearchResultAllocationSABF2() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.clickonSABF).click().click();
        cy.wait(500);
        cy.get(this.locators.clickonPF).click();
        cy.get(this.locators.pg_select_SAF).select('39');
        cy.get(this.locators.product_select_SAF).select('1: 40');
        cy.get(this.locators.subproduct_select_SAF).select('1: 41');
        cy.get(this.locators.clickonBF).click();
        cy.wait(500);
        cy.get(this.locators.clickonDPD).type('OK');
        cy.wait(500);
        cy.get(this.locators.clickonDString).type('OK');
        cy.wait(500);
        cy.get(this.locators.BOMBucket).select('12: 10');
        cy.get(this.locators.Geography_Filter).click();
        cy.wait(500);
        cy.get(this.locators.GF_country).select('Kenya');
        cy.wait(500);
        cy.get(this.locators.GF_region).select('North');
        cy.wait(500);
        cy.get(this.locators.GF_state).select('Nairobi');
        cy.wait(500);
        cy.get(this.locators.GF_city).select('Nairobi');
        cy.wait(500);
        cy.get(this.locators.GF_branch).select('Ecobank');
        cy.wait(500);
        cy.get(this.locators.clickonOF).click();
        cy.wait(500);
        cy.get(this.locators.Unallocated_Accounts).click();
        cy.wait(500);
        cy.get(this.locators.Allocated_Accounts).click();
        cy.wait(500);
        cy.get(this.locators.SearchOF).click()
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(10) > input').click()
        cy.get(':nth-child(3) > :nth-child(10) > input').click()
        cy.wait(500);
        cy.get(this.locators.Allocation_SearchResult).click()
        cy.get(this.locators.AllocateToAgency).click()
        cy.get(this.locators.TCAgency).type('Tirupati Travels');
        cy.get(this.locators.AgencyName).type('Dev Electronics');
        cy.get(this.locators.AGencyExpirayDate).click();
        cy.get(':nth-child(5) > :nth-child(8) > .ng-star-inserted').click();
        cy.get(this.locators.pg_select_SAF).select('CreditCard');
        cy.get(this.locators.product_select_SAF).select('CreditCard');
        cy.get(this.locators.subproduct_select_SAF).select('CreditCard');
        cy.get('.buttons_set > .btn-success').click();
        cy.wait(500);
        cy.get(this.locators.Welcome).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
  
      }

      downloadAgencyUnallocationbatch(){
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click().click();
        cy.wait(1000);
        cy.get(this.locators.UnAllocation_Primary).select('UnAllocation Template');
        cy.get(this.locators.UnAllocation_Download_Template).click();
        cy.wait(5000);
      }

      uploadAgencyUnallocationBatchFiledAgency(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });
      }

      uploadAgencyUnallocationBatchTelecallingAgency(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_Telecalling).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });
      }

      uploadAgencyUnallocationBatchWithoutUnAllocationAgency(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);        
        cy.contains('Please Select Proceed with Unallocation For Before Uploading File', { timeout: 5000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
        });
      }

      uploadAgencyUnallocationBatchInvalidFile(){
        const filePath = 'Cypress/fixtures/AllocationToOwner.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();      
        cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            const transactionId = transactionIdMatch[1];
            cy.log(`Transaction ID: ${transactionId}`);
            cy.wait(1000);
            Cypress.env('transactionID', transactionId);
            cy.wait(1000);
            cy.get(this.locators.allocation).click();
            cy.wait(1000);
            cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
            cy.wait(5000);
            const transactionID = Cypress.env('transactionID', transactionId);
            cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
            cy.wait(1000);
            cy.get(this.locators.clickonPUSSearch).click({force: true});
            cy.wait(1000);
            cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
              cy.log(`Extracted Text: ${text}`);
              expect(text.trim()).to.equal('Invalid File Format');
            });
          }
        });
        
      }

      uploadAgencyUnallocationCancelUpload(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.cancelbtn).click();   
      }

      uploadAgencyUnallocationBatchWrongAccountNo(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();      
        cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            const transactionId = transactionIdMatch[1];
            cy.log(`Transaction ID: ${transactionId}`);
            cy.wait(1000);
            Cypress.env('transactionID', transactionId);
            cy.wait(1000);
            cy.get(this.locators.allocation).click();
            cy.wait(1000);
            cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
            cy.wait(5000);
            const transactionID = Cypress.env('transactionID', transactionId);
            cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
            cy.wait(1000);
            cy.get(this.locators.clickonPUSSearch).click({force: true});
            cy.wait(1000);
            cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
              cy.log(`Extracted Text: ${text}`);
              expect(text.trim()).to.equal('Failed');
            });
          }
        });
      }

      uploadAgencyUnallocationCancelUploadAndAgainUpload(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.cancelbtn).click(); 
        cy.wait(1000);
        cy.get(this.locators.UnAllocation_Radio_Telecalling).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });  
      }

      uploadAgencyUnallocationBatchInvalidFileFormat(){
        const filePath = 'Cypress/fixtures/AllocationToOwner.docx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.contains('You can only upload the file with extension xls or xlsx', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
        });
      
      }

      downloadCollectorUnallocationbatch(){
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click().click();
        cy.wait(1000);
        cy.get(this.locators.UnAllocation_Primary).select('UnAllocation Template');
        cy.get(this.locators.UnAllocation_Download_Template).click();
        cy.wait(5000);
      }

      uploadCollectorUnallocationBatchAgenct(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnagent).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });
      }

      uploadCollectorUnallocationBatchTelecaller(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtntelec).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });
      }

      uploadCollectorUnallocationBatchStaff(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnstaff).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });
      }

      uploadCollectorUnallocationBatchWithoutUnAllocation(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);        
        cy.contains('Please Select Proceed with Unallocation For Before Uploading File', { timeout: 5000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
        });
      }

      uploadCollectorUnallocationBatchInvalidFile(){
        const filePath = 'Cypress/fixtures/AllocationToOwner.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnagent).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();      
        cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            const transactionId = transactionIdMatch[1];
            cy.log(`Transaction ID: ${transactionId}`);
            cy.wait(1000);
            Cypress.env('transactionID', transactionId);
            cy.wait(1000);
            cy.get(this.locators.allocation).click();
            cy.wait(1000);
            cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
            cy.wait(5000);
            const transactionID = Cypress.env('transactionID', transactionId);
            cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
            cy.wait(1000);
            cy.get(this.locators.clickonPUSSearch).click({force: true});
            cy.wait(1000);
            cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
              cy.log(`Extracted Text: ${text}`);
              expect(text.trim()).to.equal('Invalid File Format');
            });
          }
        });
        
      }

      uploadCollectorUnallocationCancelUpload(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnagent).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.cancelbtn).click();   
      }

      uploadCollectorUnallocationBatchWrongAccountNo(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnagent).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();      
        cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            const transactionId = transactionIdMatch[1];
            cy.log(`Transaction ID: ${transactionId}`);
            cy.wait(1000);
            Cypress.env('transactionID', transactionId);
            cy.wait(1000);
            cy.get(this.locators.allocation).click();
            cy.wait(1000);
            cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
            cy.wait(5000);
            const transactionID = Cypress.env('transactionID', transactionId);
            cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
            cy.wait(1000);
            cy.get(this.locators.clickonPUSSearch).click({force: true});
            cy.wait(1000);
            cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
              cy.log(`Extracted Text: ${text}`);
              expect(text.trim()).to.equal('Failed');
            });
          }
        });
      }

      uploadCollectorUnallocationCancelUploadAndAgainUpload(){
        const filePath = 'Cypress/downloads/UnAllocation.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnstaff).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.cancelbtn).click(); 
        cy.wait(1000);
        cy.get(this.locators.CAradiobtnagent).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.ConfirmUpload).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });  
      }

      uploadCollectorUnallocationBatchInvalidFileFormat(){
        const filePath = 'Cypress/fixtures/AllocationToOwner.docx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.CollectorUnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnagent).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.contains('You can only upload the file with extension xls or xlsx', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
        });
      }

      ClickonUploadAgencyAllocationBatch() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UploadAgencyAllocationBatch).click()
        cy.wait(500);
        cy.get(this.locators.DownloadAcc).click( {force: true});
        cy.wait(500);
        cy.get(this.locators.DownloadErr).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
      }

      ClickonUAABvalidationCheck() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UploadAgencyAllocationBatch).click();
        cy.wait(500);
        cy.get(this.locators.UAABAllocationOwner).click()
        cy.wait(500);
        cy.get(this.locators.UAABUpload).should('exist').attachFile('AllocationToOwner.docx');
       cy.wait(500);
       cy.get(this.locators.uploadextensionErr).then(($el) => {
         const text = $el.text();
         cy.log(text);
        })
      }

      ClickonUAABChangedFilterValue() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UploadAgencyAllocationBatch).click();
        cy.wait(500);
        cy.get(this.locators.pg_select).select('1: 39');
        cy.wait(500);
        cy.get(this.locators.product_select).select('1: 40');
        cy.wait(500);
        cy.get(this.locators.subproduct_select).select('1: 41');
        cy.wait(500);
        cy.get(this.locators.UAABbucket).select('3: 1');
        cy.wait(500);
        cy.get(this.locators.UAABCountry).select('9: Kenya');
        cy.wait(500);
        cy.get(this.locators.UAABRegion).select('--Select--');
        cy.wait(500);
        cy.get(this.locators.UAABState).select('--Select--');
        cy.wait(500);
        cy.get(this.locators.UAABCity).select('--Select--');
        cy.wait(500);
        cy.get(this.locators.UAABbranch).select('--Select--');
        cy.wait(500);
        cy.get(this.locators.DownloadAcc).click( {force: true});
        cy.wait(500);
        cy.get(this.locators.UAABbucket).select('4: 2');
        cy.wait(500);
        cy.get(this.locators.DownloadAcc).click( {force: true});

      }

      ClickonUAABuploadCheck() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UploadAgencyAllocationBatch).click()
        cy.wait(500);
        cy.get(this.locators.UAABUpload).should('exist').attachFile('AllocationToOwner.xlsx');
        cy.wait(500);
        cy.get(this.locators.UAABUploadfile).then(($el) => {
         const text = $el.text();
         cy.log(text);
        })
      }

      ClickonUCABDownloadAcc() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.collectorallocation).click();
        cy.wait(500);
        cy.get(this.locators.DownloadAcc).click( {force: true});
        cy.wait(500);
        cy.get(this.locators.DownloadErr).then(($el) => {
          const text = $el.text();
          cy.log(text);
         })
      }

      ClickonUCABvalidationCheck() {
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.collectorallocation).click();
        cy.wait(500);
        cy.get(this.locators.CAradiobtnagent).click()
        cy.wait(500);
        cy.get(this.locators.CAupload).should('exist').attachFile('ENCollectSecondaryAllocationAgent.docx');
    
      }


      downloadAgencyallocationbatch(){
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.Allocation_Batch).click().click();
        cy.wait(1000);
        cy.get(this.locators.Allocation_Primary).select('Allocation Template For Allocation Owner');
        //cy.get(this.locators.ClickonAllocationOwner).click();
        cy.get(this.locators.Allocation_Download_Template).click();
        cy.wait(5000);
      }

      UploadFilledAgencyLevelAllocationFile(){
        const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.Allocation_Batch).click().click();
        cy.wait(500);
        cy.get(this.locators.ClickonAllocationOwner).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.UploadConfirm).click();
        
        cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
    
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
            const TransactionID = transactionIdMatch;
          }
        });
      }

      downloadtemplateforallocation(){
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UCBA).click().click();
        cy.wait(1000);
        cy.get(this.locators.SelectTemplateForCollectorAllocation).select('Allocation Template For Collection Staff');
        cy.get(this.locators.DownloadTemplateOfStaffLevelAllocationFile).click();
        cy.wait(5000);
      }

      uploadAgencyallocationBatchATA(){
        const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UCBA).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.UploadConfirm).click();      
        cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
          cy.log(`Popup text: ${popupText}`);
          const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
          if (transactionIdMatch) {
            const transactionId = transactionIdMatch[1];
            cy.log(`Transaction ID: ${transactionId}`);
            cy.wait(1000);
            Cypress.env('transactionID', transactionId);
            cy.wait(1000);
            cy.get(this.locators.allocation).click();
            cy.wait(1000);
            cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
            cy.wait(5000);
            const transactionID = Cypress.env('transactionID', transactionId);
            cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
            cy.wait(1000);
            cy.get(this.locators.clickonPUSSearch).click({force: true});
            cy.wait(1000);
            cy.get('.input-group > .form-control').invoke('text').then((text) => {
              cy.log(`Extracted Text: ${text}`);
              expect(text.trim()).to.equal('Invalid File Format');
            });
          }
        });
      }

      uploadAgencyallocationBatchATAClose(){
        const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
        cy.get(this.locators.allocation).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Batch).click();
        cy.wait(500);
        cy.get(this.locators.UnAllocation_Radio_FiledAgency).click();
        cy.wait(1000);
        cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
        cy.wait(1000);
        cy.get(this.locators.UploadConfirmCancel).click();      
            cy.get('h3').invoke('text').then((text) => {
              cy.log(`Extracted Text: ${text}`);
              expect(text.trim()).to.equal('Agency Level UnAllocation');
            });
          }

          uploadCollectorallocationWithoutAllocation(){
            //const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
            cy.get(this.locators.allocation).click();
            cy.wait(500);
            cy.get(this.locators.UCAB1).click();
            cy.wait(1000);
            //cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
            cy.wait(1000);        
            cy.contains('Please Select Proceed with allocation For ', { timeout: 5000 }).invoke('text').then((popupText) => {
              cy.log(`Popup text: ${popupText}`);
            });
          }

          ClickonallocationUAAOAA() {
            cy.get(this.locators.allocation).click();
            cy.wait(500);
            cy.get(this.locators.clickonUAAO).click().click();
            cy.wait(500);
            cy.get(this.locators.ProductGroupUAAO).select('Consumer Loan');
            cy.wait(500)
            cy.get(this.locators.ProductUAAO).select('Unsecured');
            cy.wait(500)
            cy.get(this.locators.SubproducUAAO).select('Personal Loan');
            cy.wait(500)
            cy.get(this.locators.ClickonAllocatedAgency).click();
            cy.wait(500)
            cy.get(this.locators.ClickondownloadaccountsUAAO).click();
            cy.wait(500)
            }

            UploadFilledAgencyLevelAllocationFile290(){
              const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Allocation_Batch).click().click();
              cy.wait(500);
              cy.get(this.locators.ClickonAllocationOwner).click();
              cy.wait(1000);
              cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
              cy.wait(1000);
              cy.get(this.locators.UploadConfirm).click();
              
              cy.contains('File Uploaded Successfully', { timeout: 10000 }).invoke('text').then((popupText) => {
                cy.log(`Popup text: ${popupText}`);
          
                const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
                if (transactionIdMatch) {
                  cy.log(`Transaction ID: ${transactionIdMatch[1]}`);
                  const TransactionID = transactionIdMatch;
                }
              });
            }

            downloadAgencyAllocationbatch(){
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.UploadAgencyAllocationBatch).click().click();
              cy.wait(1000);
              cy.get(this.locators.PrimaryAllocationTmplt).select(' Allocation Template For Allocation Owner ');
              cy.get(this.locators.DownloadAllocationTemplt).click();
              cy.wait(5000);
            }

            uploadAgencyAllocationBatchWrongAccountNo(){
              const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.UploadAgencyAllocationBatch).click();
              cy.wait(500);
              cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
              cy.wait(1000);
              cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
              cy.wait(1000);
              cy.get(this.locators.OkConfirm).click();      
              cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
                cy.log(`Popup text: ${popupText}`);
                const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
                if (transactionIdMatch) {
                  const transactionId = transactionIdMatch[1];
                  cy.log(`Transaction ID: ${transactionId}`);
                  cy.wait(1000);
                  Cypress.env('transactionID', transactionId);
                  cy.wait(1000);
                  cy.get(this.locators.allocation).click();
                  cy.wait(1000);
                  cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
                  cy.wait(5000);
                  const transactionID = Cypress.env('transactionID', transactionId);
                  cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
                  cy.wait(1000);
                  cy.get(this.locators.clickonPUSSearch).click({force: true});
                  cy.wait(1000);
                  cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
                    cy.log(`Extracted Text: ${text}`);
                    expect(text.trim()).to.equal('Failed');
                  });
                }
              });
            }

            uploadAgencyAllocationBatchAccountNo(){
              const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.UploadAgencyAllocationBatch).click();
              cy.wait(500);
              cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
              cy.wait(1000);
              cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
              cy.wait(1000);
              cy.get(this.locators.closeConfirm).click(); 

            }

            ClickonUCABDownloadAccWithChangeFilterValue() {
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.collectorallocation).click();
              cy.wait(500);
              cy.get(this.locators.pg_select).select('1: 39');
              cy.wait(500);
              cy.get(this.locators.product_select).select('1: 40');
              cy.wait(500);
              cy.get(this.locators.subproduct_select).select('1: 41');
              cy.wait(500);
              cy.get(this.locators.UAABbucket).select('3: 1');
              cy.wait(500);
              cy.get(this.locators.UAABCountry).select('9: Kenya');
              cy.wait(500);
              cy.get(this.locators.UAABRegion).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.UAABState).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.UAABCity).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.UAABbranch).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.DownloadAccUCA).click( {force: true});
              cy.wait(500);
              cy.get(this.locators.UAABbucket).select('4: 2');
              cy.wait(500);
              cy.get(this.locators.DownloadAccUCA).click( {force: true});
    

            }



            ClickonPAChangedFilterValueAllocateBtn(){
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.PrmryAllocationByFltr).click();
              cy.wait(500);
              cy.get(this.locators.clickonPF).click();
              cy.wait(500);
              cy.get(this.locators.pg_select_PAF).select('39');
              cy.wait(500);
              cy.get(this.locators.product_select_PAF).select('1: 40');
              cy.wait(500);
              cy.get(this.locators.subproduct_select_PAF).select('1: 41');
              cy.wait(500);
              cy.get(this.locators.clickonBF).click();
              cy.wait(500);
              cy.get(this.locators.clickonDPD).type('OK');
              cy.wait(500);
              cy.get(this.locators.clickonDString).type('OK');
              cy.wait(500);
              cy.get(this.locators.BOMBucket).select('12: 10');
              cy.wait(1000);
              cy.get(this.locators.Geography_Filter).click();
              cy.wait(500);
              cy.get(this.locators.GF_country).select('kenya');
              cy.wait(500);
              cy.get(this.locators.GF_region).select('North');
              cy.wait(500);
              cy.get(this.locators.GF_state).select('Nairobi');
              cy.wait(500);
              cy.get(this.locators.GF_city).select('Nairobi');
              cy.wait(500);
              cy.get(this.locators.GF_branch).select('Ecobank');
              cy.wait(500);
              cy.get(this.locators.clickonOF).click();
              cy.wait(500);
              cy.get(this.locators.clickonCN).type('Amar');
              cy.wait(500);
              cy.get(this.locators.clickonAN).type('0123456789');
              cy.wait(500);
              cy.get(this.locators.Unallocated_Accounts).click();
              cy.wait(500);
              cy.get(this.locators.Allocated_Accounts).click();
              cy.wait(500);
              cy.get(this.locators.SearchOF).click();
              
              cy.get(this.locators.clickonOF).click();
              cy.wait(500);
              cy.get(this.locators.clickonCN).type('Sandeep');
              cy.wait(500);
              cy.get(this.locators.clickonAN).type('0987654321');
              
              cy.wait(500);
              cy.get(this.locators.allocateBtn).click();
                 
             } 

             ClickonUploadAgencyAllocationOwnerDownloadAcc() {
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
              cy.wait(500);
              cy.get(this.locators.DownloadAcc).click( {force: true});
              cy.wait(500);
              // cy.get(this.locators.DownloadErr).then(($el) => {
              //   const text = $el.text();
              //   cy.log(text);
              //  })
            }

            ClickonUAAOvalidationCheck() {
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click()
              cy.wait(500);
              cy.get(this.locators.UAAOAllocationOwner).click()
              cy.wait(500);
              cy.get(this.locators.UAAOUpload).should('exist').attachFile('AllocationToOwner.docx');
              cy.wait(500);
              // cy.get(this.locators.uploadextensionErr).then(($el) => {
              //  const text = $el.text();
              // cy.log(text);
           // })
             
            }

            ClickonUAAOwnerChangedFilterValue() {
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click();
              cy.wait(500);
              cy.get(this.locators.pg_select).select('1: 39');
              cy.wait(500);
              cy.get(this.locators.product_select).select('1: 40');
              cy.wait(500);
              cy.get(this.locators.subproduct_select).select('1: 41');
              cy.wait(500);
              cy.get(this.locators.UAABbucket).select('3: 1');
              cy.wait(500);
              cy.get(this.locators.UAABCountry).select('9: Kenya');
              cy.wait(500);
              cy.get(this.locators.UAABRegion).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.UAABState).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.UAABCity).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.UAABbranch).select('--Select--');
              cy.wait(500);
              cy.get(this.locators.DownloadAcc).click( {force: true});
              cy.wait(500);
              cy.get(this.locators.UAABbucket).select('4: 2');
              cy.wait(500);
              cy.get(this.locators.DownloadAcc).click( {force: true});
      
            }

            downloadAgencyAllocationOwner(){
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
              cy.wait(1000);
              cy.get(this.locators.PrimaryAllocationTmplt).select(' Allocation Template For Allocation Owner ');
              cy.get(this.locators.DownloadAllocationTemplt).click();
              cy.wait(5000);
            }

            uploadAgencyAllocationOwnerAccountNo(){
              const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click();
              cy.wait(500);
              cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
              cy.wait(1000);
              cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
              cy.wait(1000);
              cy.get(this.locators.closeConfirm).click(); 

            }

            ClickonUAAOUploadCheck(){
              const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
              cy.wait(1000);
              cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
              cy.wait(1000);
              cy.get(this.locators.UAAOUploadErr).then(($el) => {
                const text = $el.text();
                cy.log(text);
               })
               
            }

            downloadAgencyAllocationOwnerFile(){
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click().click();
              cy.wait(1000);
              cy.get(this.locators.PrimaryAllocationTmplt).select(' Allocation Template For Allocation Owner ');
              cy.get(this.locators.DownloadAllocationTemplt3).click();
              cy.wait(5000);
            }

            uploadAgencyAllocationOwnerWrongAccountNo(){
              const filePath = 'Cypress/downloads/AllocationToOwner.xlsx'
              cy.get(this.locators.allocation).click();
              cy.wait(500);
              cy.get(this.locators.Upload_Agency_Allocation_Owner).click();
              cy.wait(500);
              cy.get(this.locators.Allocation_Radio_Allocation_Owner).click();
              cy.wait(1000);
              cy.get(this.locators.uploadfile).selectFile(filePath, { force: true });
              cy.wait(1000);
              cy.get(this.locators.OkConfirm).click();      
              cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
                cy.log(`Popup text: ${popupText}`);
                const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
                if (transactionIdMatch) {
                  const transactionId = transactionIdMatch[1];
                  cy.log(`Transaction ID: ${transactionId}`);
                  cy.wait(1000);
                  Cypress.env('transactionID', transactionId);
                  cy.wait(1000);
                  cy.get(this.locators.allocation).click();
                  cy.wait(1000);
                  cy.get(this.locators.PrimaryUnAllocationStatus).click().click();
                  cy.wait(5000);
                  const transactionID = Cypress.env('transactionID', transactionId);
                  cy.get(this.locators.UnAllocation_TransactionID).type(transactionID);
                  cy.wait(1000);
                  cy.get(this.locators.clickonPUSSearch).click({force: true});
                  cy.wait(1000);
                  cy.get('.ng-star-inserted > :nth-child(3)').invoke('text').then((text) => {
                    cy.log(`Extracted Text: ${text}`);
                    expect(text.trim()).to.equal('Failed');
                  });
                }
              });
            }

            AllocationTestPage_111(){
              cy.wait(1000);
              cy.get(this.locators.Allocation).click();
              cy.wait(1000);
              cy.get(this.locators.Agency_bulk).click();
              cy.wait(1000);
              cy.get(this.locators.Agency_All_status).click();
              cy.wait(1000);
              cy.contains("File Name").should("be.visible");
              cy.wait(100);
              cy.contains("File Upload Date").should("be.visible");
              cy.wait(500);
              //cy.contains("Status").should("be.visible");
              cy.wait(500);
              cy.contains("Transaction ID").should("be.visible");

          }

          
          AllocationTestPage_112(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Status).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
          }
          AllocationTestPage_113(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Status).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
          }
          AllocationTestPage_114(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Status).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
          }
          AllocationTestPage_115(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agency_All_status).click();
              cy.wait(5000);
              //cy.get(this.locators.Status).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
              cy.wait(5000);
              cy.contains("Enter at least one filter value").should("be.visible");
              cy.wait(5000);
          }

          AllocationTestPage_116(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_All_status).click();
              cy.wait(5000);
              cy.contains("File Name").should("be.visible");
              cy.wait(5000);
              cy.contains("File Upload Date").should("be.visible");
              cy.wait(5000);
              //cy.contains("Status").should("be.visible");
              cy.wait(5000);
              cy.contains("Transaction ID").should("be.visible");

          }

          AllocationTestPage_117(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Status1).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
          }
          AllocationTestPage_118(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Status1).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
          }
          AllocationTestPage_119(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Status1).select("Failed");
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
          }
          AllocationTestPage_120(){
              cy.wait(5000);
              cy.get(this.locators.Allocation).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_bulk).click();
              cy.wait(5000);
              cy.get(this.locators.Agent_All_status).click();
              cy.wait(5000);
              cy.get(this.locators.Search_butto).click().should("be.visible");
              cy.wait(5000);
              cy.contains("Enter at least one filter value").should("be.visible");
              cy.wait(5000);
          }   
            

            
            


            

             


  }

export default AllocationPage;