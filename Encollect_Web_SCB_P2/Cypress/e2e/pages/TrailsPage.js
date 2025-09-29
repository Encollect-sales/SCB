import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class TrailsPage {
  constructor(locators) {
    this.locators = locators;
  }

  TrailsModule(){
    cy.wait(5000);
    cy.get(this.locators.clickontrails).click({force: true});
  }


  BulkTrailsUploadStatus(){
    cy.wait(4000);
    cy.get(this.locators.bulktrailsuploadstatus).click();
    cy.wait(2000);
    //cy.get('[xpath="1"]').should(
      //"contain.text",
      //"Trail File Upload Status"
    //)
  }

  BulkTrailsUpload(){
    cy.wait(3000);
    cy.get(this.locators.bulktrailupload).click();

  }

  BulkTrailsUpload938(){
    cy.wait(2000);
    // cy.get(this.locators.uploadbtn).click({force:true});
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   " Please select the file to upload "
    // )
  
  }


  BulkTrailsUpload939(){
    cy.wait(4000);
    cy.get(this.locators.browsebtn).should('exist').attachFile('BulkTrail25@$.xlsx')
  }

 
  BulkTrailsUploadStatus289(){
    cy.wait(2000);
   // cy.get(this.locators.filename).type("Bulktrail_20230517105411388.xlsx");
    cy.wait(2000);

  }


  BulkTrailsUploadStatus933(){
    cy.wait(4000);
    cy.get(this.locators.fileuploaddate).type("17/05/2023");
    cy.get(2000);
    cy.get(this.locators.searchbutton).click();
  }


  BulkTrailsUploadStatus934(){
    cy.wait(4000);
    cy.get(this.locators.transactionID).type("05172023105411578");
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click();
  }
  

  BulkTrailsUploadStatus935(){
    cy.wait(4000);
    cy.get(this.locators.status).select("Processed");
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click();
    cy.wait(2000);
    //cy.scrollTo('bottom');
    cy.wait(2000);
    cy.get(this.locators.showingdropdown).select("10");
    cy.wait(2000);
    //cy.scrollTo('bottom');
    cy.wait(2000);
    cy.get(this.locators.nextbtn).click();
    cy.wait(2000);
    cy.get(this.locators.previousbtn).click();
    
  }

  BulkTrailsUploadStatus936(){
    cy.wait(4000);
    //cy.scrollTo('top');
    cy.wait(2000);
    cy.get(this.locators.status).select("Uploaded");
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click();
    cy.wait(2000);
  }


  BulkTrailsUploadStatus950(){
    cy.wait(4000);
    cy.get(this.locators.transactionID).type("04252024011019810");
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click();
    cy.wait(2000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   " No results found! "
    // )


  }



}

export default TrailsPage;
