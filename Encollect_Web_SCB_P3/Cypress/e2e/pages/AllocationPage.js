import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';
import 'cypress-file-upload';
const path = require('path');


class AllocationPage {
  constructor(locators) {
    this.locators = locators;
  }
 
AllocationTestPage_01(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agency Bulk Allocation Account Level").should("be.visible");
  cy.wait(1000);
  cy.contains("Agency Bulk Allocation Customer Level").should("be.visible");
  cy.wait(1000);
  // cy.contains("Agency Bulk Deallocation Account Level").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Agency Bulk Deallocation Customer Level").should("be.visible");
  // cy.wait(1000);

}
  
AllocationTestPage_02(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Allocation Account Level").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
 cy.get('.title').should('have.text', 'Agency Bulk Allocation Account Level');

}

AllocationTestPage_03_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agency Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.clickOnFieldAgencyTemplate_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(4000);


}

AllocationTestPage_03_upload(){

  cy.wait(2000);
  cy.get(this.locators.ClickOnFieldAgencyAlloc_Radio).click();
  cy.wait(1000);  
  cy.get('.form-control').attachFile('PrimaryAgency_Customerlevel.xlsx');
  cy.wait(2000);  
  cy.get(this.locators.ClickOnUpload).click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);
}

AllocationTestPage_04_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.clickOnFieldAgencyTemplate_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(4000);


}

AllocationTestPage_04_upload(){

  cy.wait(2000);
  cy.get(this.locators.ClickOnFieldAgencyAlloc_Radio).click();
  cy.wait(1000);  
  cy.get('.form-control').attachFile('PrimaryAgency_Customerlevel.xlsx');
  cy.wait(2000);  
  cy.get(this.locators.ClickOnUpload).click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);
  cy.contains("Agency Allocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAllocFileUploadDate).click();
  cy.wait(1000);
  // cy.get(this.locators.TodayDate).click();
  // cy.wait(2000);
  // cy.get(this.locators.AllocSearch).click();
  // cy.wait(3000);
}

AllocationTestPage_05(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.clickOnFieldAgencyTemplate_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(4000);
 
    const downloadsFolder = Cypress.config('downloadsFolder');
              const fixturesFolder = 'cypress/fixtures';
              // const sourceFilePath = path.join(downloadsFolder, excelFileName);
              // const destFilePath = path.join(fixturesFolder, excelFileName);

  
              //  Move File to Fixtures before Uploading
              cy.task('moveAllDownloadsToFixtures').then(result => {
                  cy.log(result); // Log file move result
  cy.wait(4000);
  cy.get(this.locators.ClickOnTeleCallingAgencyAlloc_Radio).click();
  cy.wait(1000);  
  cy.get('.form-control').attachFile('PrimaryAgency_Customerlevel.xlsx');
  cy.wait(2000);             
  // cy.get(this.locators.ClickOnUpload).click();
  // cy.wait(2000);
  cy.get('[role="alert"]').should('have.text', "The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.");


});
}

AllocationTestPage_06_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.clickOnFieldAgencyTemplate_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(4000);

}

AllocationTestPage_06_upload(){

  cy.wait(2000);
  cy.get(this.locators.ClickOnFieldAgencyAlloc_Radio).click();
  cy.wait(1000);  
  cy.get('.form-control').attachFile('PrimaryAgency_Customerlevel.xlsx');
  cy.wait(2000);  
  cy.get(this.locators.ClickOnUpload).click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);
  cy.contains("Agency Allocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAllocFileUploadDate).click();
  cy.wait(1000);
  // cy.get(this.locators.TodayDate).click();
  // cy.wait(2000);
  // cy.get(this.locators.AllocSearch).click();
  // cy.wait(3000);
  // cy.get('payment-paginations > .enc-card > .card-content').scrollTo(500,0);
  // cy.wait(1000);
  // cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click({force: true});
  // cy.wait(2000);

}

AllocationTestPage_07(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agency Allocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.AllocStstus).select("Processed");
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(3000);
  cy.contains("Allocation Type").should("be.visible");
  cy.wait(1000);

}

AllocationTestPage_08(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agent Bulk Allocation Account Level").should("be.visible");
  cy.wait(1000);
  cy.contains("Agent Bulk Allocation Customer Level").should("be.visible");
  cy.wait(1000);
  // cy.contains("Agent Bulk Deallocation Account Level").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Agent Bulk Deallocation Customer Level").should("be.visible");
  // cy.wait(1000);

}

AllocationTestPage_09(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgentBulkAllocAccountLevel).click();
  cy.wait(2000);

}

AllocationTestPage_10_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agent Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgent_Staff_radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(2000);

}

AllocationTestPage_10_upload(){

  cy.wait(2000);
  cy.get(this.locators.ClickOnAgentUpload_Staff_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('ENCollectSecondaryAllocationCollectionStaff_Customerlevel.xlsx');
  cy.wait(2000);
  cy.get(this.locators.ClickOnUpload).click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);

}

AllocationTestPage_11_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agent Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgent_Staff_radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(2000);

}
   
AllocationTestPage_11_upload(){

  cy.wait(2000);
  cy.get(this.locators.ClickOnAgentUpload_Staff_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('ENCollectSecondaryAllocationCollectionStaff_Customerlevel.xlsx');
  cy.wait(2000);
  cy.get(this.locators.ClickOnUpload).click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(10000);
  cy.contains("Agent Allocation Status").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgentAlloc_fileuploadDate).click();
  cy.wait(1000);
  cy.get(this.locators.TodayDate).click();
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(2000);

}

AllocationTestPage_12(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agent Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgent_Staff_radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(2000);

  const downloadsFolder = Cypress.config('downloadsFolder');
  const fixturesFolder = 'cypress/fixtures';



  //  Move File to Fixtures before Uploading
      cy.task('moveAllDownloadsToFixtures').then(result => {
      cy.log(result); // Log file move result
cy.wait(4000);
cy.get(this.locators.ClickOnAgentAlloc_Agent_radio).click();
cy.wait(1000);
cy.get('.form-control').attachFile('ENCollectSecondaryAllocationCollectionStaff_Customerlevel.xlsx');
  cy.wait(2000);             
  // cy.get(this.locators.ClickOnUpload).click();
  // cy.wait(2000);
  cy.get('[role="alert"]').should('have.text', "The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.");


});


}

AllocationTestPage_13_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agent Bulk Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgent_Staff_radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOndownloadTemplateBtn).click();
  cy.wait(2000);

}
   
AllocationTestPage_13_upload(){

  cy.wait(2000);
  cy.get(this.locators.ClickOnAgentUpload_Staff_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('ENCollectSecondaryAllocationCollectionStaff_Customerlevel.xlsx');
  cy.wait(2000);
  cy.get(this.locators.ClickOnUpload).click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(10000);
  cy.get(this.locators.ClickOnAgentAllocStstus).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgentAlloc_fileuploadDate).click();
  cy.wait(1000);
  cy.get(this.locators.TodayDate).click();
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(2000);
  cy.get('payment-paginations > .enc-card > .card-content').scrollTo(500,0);
  cy.wait(1000);
  cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click({force: true});
  cy.wait(2000);

}


AllocationTestPage_14(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agent Allocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.clickOnAgent_Status).select("Processed");
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(3000);
  // cy.get('payment-paginations > .enc-card > .card-content').scrollTo(0,500);
  // cy.wait(1000);
  cy.contains("Allocation Type").should("be.visible");
  cy.wait(2000);

}

AllocationTestPage_15(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Allocation Owner Bulk Upload Account Level").should("be.visible");
  cy.wait(1000);
  cy.contains("Allocation Owner Bulk Upload Customer Level").should("be.visible");
  cy.wait(1000);
  cy.contains("Allocation Owner Upload Status").should("be.visible");
  cy.wait(1000);

}

AllocationTestPage_16(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnOwnerAllocAccountlevel).click();
  cy.wait(2000);


}

AllocationTestPage_17_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnOwner_DownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_17_upload(){

 cy.wait(3000); 
 cy.get('.form-control').attachFile('AllocationToOwner_customeridLevel.xlsx');
 cy.wait(2000);
 cy.get(this.locators.clickOnOwnerUpload_search).click();
 cy.wait(2000);
 cy.get('#confirm-dialog-okay').click();
 cy.wait(6000);

}

AllocationTestPage_18_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnOwner_DownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_18_upload(){

 cy.wait(3000); 
 cy.get('.form-control').attachFile('AllocationToOwner_customeridLevel.xlsx');
 cy.wait(2000);
 cy.get(this.locators.clickOnOwnerUpload_search).click();
 cy.wait(2000);
 cy.get('#confirm-dialog-okay').click();
 cy.wait(10000);
cy.contains("Owner Allocation Status").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
 cy.get(this.locators.ClickOnOwner_ststus_fileUploadDate).click();
 cy.wait(1000);
 cy.get(this.locators.TodayDate).click();
 cy.wait(1000);
 cy.get(this.locators.OwnerAllocSearch).click();
 cy.wait(3000);

}

AllocationTestPage_19_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Allocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnOwner_DownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_19_upload(){

 cy.wait(3000); 
 cy.get('.form-control').attachFile('AllocationToOwner_customeridLevel.xlsx');
 cy.wait(2000);
 cy.get(this.locators.clickOnOwnerUpload_search).click();
 cy.wait(2000);
 cy.get('#confirm-dialog-okay').click();
 cy.wait(10000);
cy.contains("Owner Allocation Status").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
 cy.get(this.locators.ClickOnOwner_ststus_fileUploadDate).click();
 cy.wait(1000);
 cy.get(this.locators.TodayDate).click();
 cy.wait(1000);
 cy.get(this.locators.OwnerAllocSearch).click();
 cy.wait(3000);
 cy.get('payment-paginations > .enc-card > .card-content').scrollTo(500,0);
 cy.wait(1000);
 cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click({force: true});
 cy.wait(2000);


}


AllocationTestPage_20(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Owner Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Owner Allocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.OwnerAllocStatus_status).select("Processed");
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(4000);
  cy.contains("Allocation Type").should("be.visible");
  cy.wait(2000);

}

AllocationTestPage_21(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
cy.contains("Allocation Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
 cy.contains("Agency Allocation by Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_ProductGroup_AgencyFilter).click();
  cy.wait(1000);

   
    cy.get('.ng-dropdown-panel .ng-option')
    .each(($option) => {
    cy.wrap($option).click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.ClickOn_ProductGroup_AgencyFilter).click();
    cy.wait(2000);
  });
cy.wait(2000);

  cy.get('[heading="Bucket Filter"] > .panel > .panel-heading').click();
  cy.wait(1000);
 
  cy.get(this.locators.ClickOn_Bucket_AgencyFilter).click();
   cy.wait(1000);
    cy.get('.ng-dropdown-panel .ng-option')
    .each(($option) => {
    cy.wrap($option).click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Bucket_AgencyFilter).click();
    cy.wait(2000);
  });
cy.wait(2000);

  cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  
   cy.get(this.locators.ClickOn_Country_AgencyFilter).click();
   cy.wait(1000);
    cy.get('.ng-dropdown-panel .ng-option')
    .each(($option) => {
    cy.wrap($option).click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Country_AgencyFilter).click();
    cy.wait(2000);
  });
cy.wait(2000);

  cy.get('#unAllocated').click();
  cy.wait(1000);
  cy.get('#Allocated').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnFilterSearch).click();
  cy.wait(15000);
  cy.contains("Customer ID").scrollIntoView().should("be.visible");
  cy.wait(2000);
 


}

AllocationTestPage_22(){
  
  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
cy.contains("Allocation Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
 cy.contains("Agent Allocation by Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
  cy.get('#Productgroup').select("All");
  cy.wait(1000);
  cy.get('[heading="Bucket Filter"] > .panel > .panel-heading').click();
  cy.wait(1000);
  cy.get('#BomBucket').select("All");
  cy.wait(1000);
  cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Country').select("All");
  cy.wait(1000);
  cy.get('#unAllocated').click();
  cy.wait(1000);
  cy.get('#Allocated').click();
  cy.wait(1000);
  cy.get('#searchAccount').click();
  cy.wait(10000);
  cy.contains("Customer ID").scrollIntoView().should("be.visible");
  cy.wait(2000);
 
}

AllocationTestPage_23(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
cy.contains("Allocation Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
 cy.contains("Agency Allocation by Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
  cy.get('#Productgroup').select("All");
  cy.wait(1000);
  cy.get('[heading="Bucket Filter"] > .panel > .panel-heading').click();
  cy.wait(1000);
  cy.get('#bomBucket').select("All");
  cy.wait(1000);
  cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Country').select("All");
  cy.wait(1000);
  cy.get('#unAllocated').click();
  cy.wait(1000);
  cy.get('#Allocated').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnFilterSearch).click();
  cy.wait(10000);
  cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #ischecked').click();
  cy.wait(1000);
  cy.get('#allocateToagency').click();
  cy.wait(1000);
  cy.get('#tcagencyname').type("a");
  cy.wait(500);
  cy.get('#ngb-typeahead-1-0').click();
  cy.wait(1000);
  cy.get('#allocationExpiredate2').type("31/05/2025").click();
  cy.wait(1000);
  cy.get('#allocate').click();
  cy.wait(5000);
  cy.get('.inner-layout-container').scrollTo(0, -500);
  cy.wait(1000);
  cy.get('[heading="Product Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Productgroup').scrollIntoView().select("All");
  cy.wait(1000);
  cy.get('[heading="Bucket Filter"] > .panel > .panel-heading').click();
  cy.wait(1000);
  cy.get('#bomBucket').select("All");
  cy.wait(1000);
  cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Country').select("All");
  cy.wait(1000);
  cy.get('#unAllocated').click();
  cy.wait(1000);
  cy.get('#Allocated').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnFilterSearch).click();
  cy.wait(10000);
  cy.get('.active.tab-pane > form.ng-untouched').scrollIntoView().should("be.visible")
  cy.wait(2000);
 

}

AllocationTestPage_24(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
cy.contains("Allocation Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
 cy.contains("Agent Allocation by Filters").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
  cy.get('#Productgroup').select("All");
  cy.wait(1000);
  cy.get('[heading="Bucket Filter"] > .panel > .panel-heading').click();
  cy.wait(1000);
  cy.get('#BomBucket').select("All");
  cy.wait(1000);
  cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Country').select("All");
  cy.wait(1000);
  cy.get('#unAllocated').click();
  cy.wait(1000);
  cy.get('#Allocated').click();
  cy.wait(1000);
  cy.get('#searchAccount').click();
  cy.wait(3000);
  cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .form-check-group > label > #checked').click().scrollIntoView();
  cy.wait(1000);
  cy.get('#TcagentName').type("a");
  cy.wait(2000);
  cy.get('#ngb-typeahead-1-0').click();
  cy.wait(1000);
  cy.get('#AllocationExpireDate2').type("31/05/2025").click();
  cy.wait(1000);
  cy.get('#allocate').click();
  cy.wait(5000);
  cy.get('.inner-layout-container').scrollTo(0, -500);
  cy.wait(1000);
  cy.get('[heading="Product Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Productgroup').select("All");
  cy.wait(1000);
  cy.get('[heading="Bucket Filter"] > .panel > .panel-heading').click();
  cy.wait(1000);
  cy.get('#BomBucket').select("All");
  cy.wait(1000);
  cy.get('[heading="  Geography Filter"] > .panel > .panel-heading > .panel-title').click();
  cy.wait(1000);
  cy.get('#Country').select("All");
  cy.wait(1000);
  cy.get('#unAllocated').click();
  cy.wait(1000);
  cy.get('#Allocated').click();
  cy.wait(1000);
  cy.get('#searchAccount').click();
  cy.wait(3000);
  cy.get('.tab-content').scrollIntoView().should("be.visible")
  cy.wait(2000);
 
}

AllocationTestPage_101(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agency Bulk Deallocation Account Level").should("be.visible");
  cy.wait(1000);
  cy.contains("Agency Bulk Deallocation Customer Level").should("be.visible");
  cy.wait(1000);

}

AllocationTestPage_102(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agency Bulk Deallocation Account Level").scrollIntoView().should("be.visible").click();
  cy.wait(2000);
 cy.get('.title').should('have.text', 'Agency Bulk Deallocation Account Level');
 cy.wait(2000);
}

AllocationTestPage_103_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyUnallocDownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_103_upload(){

  cy.wait(3000);
  cy.get(this.locators.ClickOnAgencyUnalloc_field_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('UnAllocation_acclevel.xlsx');
  cy.wait(2000);
  cy.get('#upload').click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);

}

AllocationTestPage_104_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyUnallocDownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_104_upload(){

  cy.wait(3000);
  cy.get(this.locators.ClickOnAgencyUnalloc_field_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('UnAllocation_acclevel.xlsx');
  cy.wait(2000);
  cy.get('#upload').click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);
 cy.contains("Agency Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get('#FileuploadDate').click();
  cy.wait(500);
  cy.get(this.locators.TodayDate).click();
  cy.wait(500);
  cy.get(this.locators.UnAllocSearch).click();
  cy.wait(3000);

}
AllocationTestPage_105_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyUnallocDownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_105_upload(){

  cy.wait(3000);
  cy.get(this.locators.ClickOnAgencyUnalloc_field_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('UnAllocation_acclevel.xlsx');
  cy.wait(2000);
  cy.get('#upload').click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(6000);
 cy.contains("Agency Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get('#FileuploadDate').click();
  cy.wait(500);
  cy.get(this.locators.TodayDate).click();
  cy.wait(500);
  cy.get(this.locators.UnAllocSearch).click();
  cy.wait(3000);

}
AllocationTestPage_106_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyUnallocDownloadTemp).click();
  cy.wait(3000);

}

AllocationTestPage_106_upload(){

  cy.wait(3000);
  cy.get(this.locators.ClickOnAgencyUnalloc_field_radio).click();
  cy.wait(1000);
  cy.get('.form-control').attachFile('UnAllocation_acclevel.xlsx');
  cy.wait(2000);
  cy.get('#upload').click();
  cy.wait(2000);
  cy.get('#confirm-dialog-okay').click();
  cy.wait(10000);
 cy.contains("Agency Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get('#FileuploadDate').click();
  cy.wait(500);
  cy.get(this.locators.TodayDate).click();
  cy.wait(500);
  cy.get(this.locators.UnAllocSearch).click();
  cy.wait(3000);
  cy.get('payment-paginations > .enc-card > .card-content').scrollTo(500,0);
  cy.wait(1000);
  cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click({force: true});
  cy.wait(3000);

}

AllocationTestPage_107(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.AllocStstus).select("Processed");
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(3000);
  cy.contains("Deallocation Type").should("be.visible");
  cy.wait(1000);

}

AllocationTestPage_108(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agent Bulk Deallocation Account Level").should("be.visible");
  cy.wait(1000);
  cy.contains("Agent Bulk Deallocation Customer Level").should("be.visible");
  cy.wait(1000);


}

AllocationTestPage_109(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agent Bulk Deallocation Account Level").scrollIntoView().should("be.visible").click();
  cy.wait(2000);

}

AllocationTestPage_110_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgentUnallocDownloadTemp).click();
  cy.wait(3000);


}
AllocationTestPage_110_upload(){

cy.wait(2000);
cy.get(this.locators.ClickOnAgentUnalloc_agent_radio).click();
cy.wait(1000);
cy.get('.form-control').attachFile('UnAllocation_customeridlevel.xlsx');
cy.wait(2000);
cy.get('#upload').click();
cy.wait(2000);
cy.get('#confirm-dialog-okay').click();
cy.wait(6000);

}

AllocationTestPage_111_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgentUnallocDownloadTemp).click();
  cy.wait(3000);


}
AllocationTestPage_111_upload(){

cy.wait(2000);
cy.get(this.locators.ClickOnAgentUnalloc_agent_radio).click();
cy.wait(1000);
cy.get('.form-control').attachFile('UnAllocation_customeridlevel.xlsx');
cy.wait(2000);
cy.get('#upload').click();
cy.wait(2000);
cy.get('#confirm-dialog-okay').click();
cy.wait(6000);


//################################################

cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
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


cy.contains("Agent Deallocation Status").scrollIntoView().should("be.visible").click();
cy.wait(2000);
cy.then(() => {
  const transactionId = Cypress.env('transactionID');
  cy.get('#Transactionid').type(transactionId.toString()); // Convert to string if needed
});


//#################################
cy.get(this.locators.UnAllocSearch).click();
cy.wait(3000);
cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click();
cy.wait(4000);

}
AllocationTestPage_112_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgentUnallocDownloadTemp).click();
  cy.wait(3000);


}
AllocationTestPage_112_upload(){

cy.wait(2000);
cy.get(this.locators.ClickOnAgentUnalloc_agent_radio).click();
cy.wait(1000);
cy.get('.form-control').attachFile('UnAllocation_customeridlevel.xlsx');
cy.wait(2000);
cy.get('#upload').click();
cy.wait(2000);
cy.get('#confirm-dialog-okay').click();
cy.wait(10000);
cy.contains("Agent Deallocation Status").scrollIntoView().should("be.visible").click();
cy.wait(500);
cy.get('#Fileuploaddate').click();
cy.wait(1000);
cy.get('.today-date').click();
cy.wait(500);
cy.get(this.locators.UnAllocSearch).click();
cy.wait(3000);
cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click();
cy.wait(4000);

}

AllocationTestPage_113_download(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Deallocation Customer Level").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgentUnallocDownloadTemp).click();
  cy.wait(3000);


}
AllocationTestPage_113_upload(){

cy.wait(2000);
cy.get(this.locators.ClickOnAgentUnalloc_agent_radio).click();
cy.wait(1000);
cy.get('.form-control').attachFile('UnAllocation_customeridlevel.xlsx');
cy.wait(2000);
cy.get('#upload').click();
cy.wait(2000);
cy.get('#confirm-dialog-okay').click();
cy.wait(15000);
cy.contains("Agent Deallocation Status").scrollIntoView().should("be.visible").click();
cy.wait(500);
cy.get('#Fileuploaddate').click();
cy.wait(1000);
cy.get('.today-date').click();
cy.wait(500);
cy.get(this.locators.UnAllocSearch).click();
cy.wait(3000);
cy.get('payment-paginations > .enc-card > .card-content').scrollTo(500,0);
cy.wait(1000);
cy.get('tbody > :nth-child(1) > :nth-child(5) > a').click({force: true});
cy.wait(4000);

}

AllocationTestPage_114(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agent Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(500);
  cy.get(this.locators.AllocStstus).select("Processed");
  cy.wait(1000);
  cy.get(this.locators.AllocSearch).click();
  cy.wait(3000);
  cy.contains("Deallocation Type").should("be.visible");
  cy.wait(1000);

}

AllocationTestPage_115(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
 cy.contains("Agency Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.get("select[name='UnAllocationType']").select("Customer ID Level");
  cy.wait(1000);
  cy.get('#search').click();
  cy.wait(3000);

}

AllocationTestPage_116(){

  cy.contains("Allocation").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
cy.contains("Agent Bulk Upload").scrollIntoView().should("be.visible").click();
  cy.wait(1000);
  cy.contains("Agent Deallocation Status").scrollIntoView().should("be.visible").click();
  cy.wait(500);
  cy.get("select[name='UnAllocationType']").select("Customer ID Level");
  cy.wait(1000);
  cy.get('#search').click();
  cy.wait(3000);

}





}

export default AllocationPage;
