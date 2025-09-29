import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';


class CreateSegmentationPage {
  constructor(locators) {
    this.locators = locators;
  }

  SegmentationModule(){
    cy.wait(6000);
    cy.get(this.locators.segmentation).click({force: true});
  }

  CreateSegmentationWithCustomerPersona564() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click({force: true});
    cy.wait(2000);
    cy.get("#rb-manual").click();
    cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("SegmentationM");
    cy.wait(2000);
    cy.get(this.locators.description).type("Manual Segmentation");
    cy.wait(2000);
    cy.get(this.locators.clickonproductfilter).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonbucketfilter).click();
    cy.wait(2000);
    cy.get(this.locators.monthopeningbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonadvancedfilter).click();
    cy.wait(2000);
    cy.get(this.locators.addparameter).select("Customer Persona");
    cy.wait(2000);
    //cy.get(this.locators.addbutton).click();


   }

   CreateSegmentationWithCustomerPersona565() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.manualradiobtn).click();
    cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("Segmentation11");
    cy.wait(2000);
    cy.get(this.locators.description).type("SegDescription");
    cy.wait(2000);
    cy.get(this.locators.clickonproductfilter).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonbucketfilter).click();
    cy.wait(2000);
    cy.get(this.locators.monthopeningbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonadvancedfilter).click();
    cy.wait(2000);
    cy.get(this.locators.addparameter).select("Customer Persona");
    cy.wait(2000);
    cy.get(".d-flex > .btn").click();
    cy.wait(2000);
    cy.get(this.locators.selectcustomerpersona).select("Self-cure customer");

   }

   CreateSegmentationWithCurrentDPD566() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.manualradiobtn).click( {force: true});
    cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("Segmentation11");
    cy.wait(2000);
    cy.get(this.locators.description).type("SegDescription");
    cy.wait(2000);
    cy.get(this.locators.clickonproductfilter).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonbucketfilter).click();
    cy.wait(2000);
    cy.get(this.locators.monthopeningbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonadvancedfilter).click();
    cy.wait(2000);
    cy.get(this.locators.addparameter).select("Customer Persona");
    cy.wait(2000);
    cy.get(".d-flex > .btn").click();
    cy.wait(2000);
    cy.get(this.locators.selectcustomerpersona).select("Self-cure customer");
    cy.get(2000);
    cy.get(this.locators.addparameter).select("Current DPD");
    cy.wait(2000);
    cy.get(".col-md-12 > .btn-secondary").click();

   }

   CreateSegmentationWithCurrentDPD567() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click({force: true});
    cy.wait(2000);
    cy.get(this.locators.manualradiobtn).click();
    cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("Segmentation11");
    cy.wait(2000);
    cy.get(this.locators.description).type("SegDescription");
    cy.wait(2000);
    cy.get(this.locators.clickonproductfilter).click();
    cy.wait(2000);
    cy.get(this.locators.productgroup).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonbucketfilter).click();
    cy.wait(2000);
    cy.get(this.locators.monthopeningbucket).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickongeography).click();
    cy.wait(2000);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(2000);
    cy.get(this.locators.clickonadvancedfilter).click();
    cy.wait(2000);
    cy.get(this.locators.addparameter).select("Customer Persona");
    cy.wait(2000);
    cy.get(".d-flex > .btn").click();
    cy.wait(2000);
    cy.get(this.locators.selectcustomerpersona).select("Self-cure customer");
    cy.get(2000);
    cy.get(this.locators.addparameter).select("Current DPD");
    cy.wait(2000);
    cy.get(".d-flex > .btn").click();
    cy.get(3000);
    cy.get(this.locators.currentDPDfrom).type("1");
    cy.wait(2000);
    cy.get(this.locators.currentDPDto).type("100");
    cy.wait(3000);
    cy.get(".col-md-12 > .btn-secondary").click();

   }


   
}

export default CreateSegmentationPage;
