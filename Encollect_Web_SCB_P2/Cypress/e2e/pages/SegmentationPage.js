import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-drag-drop';
require ('@4tw/cypress-drag-drop')

class SegmentationPage {
  constructor(locators) {
    this.locators = locators;
  }

  SegmentationModule(){
    cy.wait(5000);
    cy.get(this.locators.SegTreatment).click();
    cy.wait(500);
    cy.get(this.locators.segmentation).click();
  }

  SegmentationModule1(){
    cy.wait(5000);
    cy.get('[title="Segmentation & Treatment"] > span.ng-star-inserted').click();
    cy.wait(500);
    cy.get("a[title='Segmentation']").click();
  }
  
  CreateSegmentation279() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click();
    cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("Segmentation");
    cy.wait(2000);
    cy.get(this.locators.description).type("Segmentation description");
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
   }

   CreateSegmentation280() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click();
    cy.wait(2000);
    //cy.get(this.locators.autoradiobtn).click();
    //cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("SegmentationA");
    cy.wait(2000);
    cy.get(this.locators.description).type("Auto Segmentation");
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
   }

   CreateSegmentation281() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click();
    cy.wait(2000);
    cy.get(this.locators.manualradiobtn).click();
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
   }

   CreateSegmentation282() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click();
    cy.wait(2000);
    cy.get(this.locators.manualradiobtn).click();
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
    cy.wait(500);
    cy.get(this.locators.clickongeography).click();
    cy.wait(500);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(1000);
    cy.get(this.locators.clickonadvancedfilter).click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("BOM_POS");
    cy.wait(1000);
    cy.get('.col-md-12 > .btn-secondary').click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("LastDispositionCode");
    cy.wait(500);
    cy.get('.col-md-12 > .btn-secondary').click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("NPA_STAGEID");
    cy.wait(500);
    cy.get('.col-md-12 > .btn-secondary').click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("PRINCIPAL_OD");
    cy.wait(500);
    cy.get('.col-md-12 > .btn-secondary').click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("TOS");
    cy.wait(500);

   }

   CreateSegmentation283() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click();
    cy.wait(2000);
    cy.get(this.locators.manualradiobtn).click();
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
    cy.wait(500);
    cy.get(this.locators.clickongeography).click();
    cy.wait(500);
    cy.get(this.locators.selectcountry).select("All");
    cy.wait(1000);
    cy.get(this.locators.clickonadvancedfilter).click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("BOM_POS");
    cy.wait(1000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("LastDispositionCode");
    cy.wait(500);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("NPA_STAGEID");
    cy.wait(500);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("PRINCIPAL_OD");
    cy.wait(500);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(500);
    cy.get(this.locators.addparameter).select("TOS");
    cy.wait(500);
    cy.get(".col-md-12 > .btn-secondary").click();
    cy.contains('Duplicate SegmentName SegmentationM').should("be.visible");
   
   }

   SearchSegmentation284(){
    cy.wait(3000);
    cy.get(this.locators.SearchSegmen).click();
    cy.wait(1000);
    cy.get(this.locators.SegName).type('SegmentationM', {force : true});
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
   }

   SearchSegmentation285(){
    cy.wait(3000);
    cy.get(this.locators.SearchSegmen).click();
    cy.wait(500);
    cy.get(this.locators.SegName).type('SegmentationM', {force : true});
    cy.wait(500);
    //cy.get(':nth-child(4) > .form-control').select('All');
    cy.wait(500);
    cy.get('.btn-secondary').click({force : true});
    cy.wait(1000);
    // cy.scrollTo('bottom');
    // cy.wait(500);
    // cy.get('.fa.fa-play-circle').click();
    // cy.wait(500);
    // cy.get('[role="alert"]').should("contain.text", "  Segment executed successfully ")
   }

   SegmentationSequence286(){
    cy.wait(3000);
    cy.get(this.locators.segmentation_sequence).click();
    cy.wait(500);
    cy.get(this.locators.search_segname).type('SegmetUAT',{force :true});
    cy.wait(1000);
    cy.get('ul[id="cdk-drop-list-0"] li:nth-child(1)').dragAndDrop('#cdk-drop-list-1');
    cy.wait(1000);
    cy.get('ul[id="cdk-drop-list-0"] li:nth-child(1)').trigger('mousedown', { which: 1 });
    cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
    cy.get('#cdk-drop-list-1').trigger('mouseup');
    cy.wait(1000);
    //cy.get(this.locators.save_execution_status).click();

   }

   CompareSequence287(){
    cy.wait(3000);
    cy.get(this.locators.compare_segmentation).click();
    cy.wait(500);
    //cy.get(this.locators.add_btn).click();
    cy.wait(500);
    cy.get('#segment_name').select('Demo');
    cy.wait(500);
    cy.get(this.locators.simulate_btn).click();

   }

   SegementationPageTest_570(){

    cy.wait(1000);
    cy.get(this.locators.createtreatment).click();
    cy.get(this.locators.searchsegement).type("CurrentDPD5");
    cy.wait(500);
    cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
    cy.wait(1000);
    cy.get(this.locators.nextbutton).click();
    cy.wait(500);
    cy.get(this.locators.treatmentplanname).type('Demo');
    cy.wait(500);
    cy.get(this.locators.paymentstatus).select('Roll Back');
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('demo1234');
    cy.wait(500);
    cy.get(this.locators.treatment1).click();
    cy.wait(500);
    cy.get(this.locators.startdate).type('12-03-2024');
    cy.wait(500);
    cy.get(this.locators.enddate).type('25-03-2024');
    cy.wait(500);
    cy.get(this.locators.selecttreatment).select('Allocate accounts'),
    cy.wait(500);
    cy.get(this.locators.allocationtype).select('Bank Staff');
    cy.wait(500);
    cy.get(this.locators.roundrobin).click();
    cy.wait(500);
    cy.get(this.locators.addscripts).type('demodemo123');
    cy.wait(500);
    cy.get(this.locators.savebutton).click();
   }
   SegementationPageTest_571(){

    cy.wait(1000);
    cy.get(this.locators.createtreatment).click();
    cy.get(this.locators.searchsegement).type("CurrentDPD5");
    cy.wait(500);
    cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
    cy.wait(1000);
    cy.get(this.locators.nextbutton).click();
    cy.wait(500);
    cy.get(this.locators.treatmentplanname).type('Demo');
    cy.wait(500);
    cy.get(this.locators.autobutton).click();
    cy.wait(500);
    cy.get(this.locators.paymentstatus).select('Roll Back');
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('demo1234');
    cy.wait(500);
    cy.get(this.locators.treatment1).click();
    cy.wait(500);
    cy.get(this.locators.startdate).type('12-03-2024');
    cy.wait(500);
    cy.get(this.locators.enddate).type('25-03-2024');
    cy.wait(500);
    cy.get(this.locators.selecttreatment).select('Allocate accounts'),
    cy.wait(500);
    cy.get(this.locators.allocationtype).select('Bank Staff');
    cy.wait(500);
    cy.get(this.locators.roundrobin).click();
    cy.wait(500);
    cy.get(this.locators.addscripts).type('demodemo123');
    cy.wait(500);
    cy.get(this.locators.savebutton).click();
}
SegementationPageTest_572(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Allocate accounts'),
  cy.wait(500);
  cy.get(this.locators.allocationtype).select('Bank Staff');
  cy.wait(500);
  cy.get(this.locators.roundrobin).click();
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();
}

SegementationPageTest_574(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Communication to Customer'),
  cy.wait(500);
  cy.get(this.locators.selectcommunicationtype).select('Email');
  cy.wait(500);
  cy.get(this.locators.communicationtempelete).type('Automated Email Templatekywqqfavd');
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();
}

SegementationPageTest_575(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Initiate Legal'),
  cy.wait(500);
  cy.get(this.locators.selectworkflow).select('Legal Workflow');
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();

}

SegementationPageTest_576(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Initiate Reposession'),
  cy.wait(500);
  cy.get(this.locators.selectworkflow).select('Repo Workflow');
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();
  
}

SegementationPageTest_577(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Initiate Settlement'),
  cy.wait(500);
  cy.get(this.locators.selectworkflow).select('Settlement Workflow');
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();
  
}

SegementationPageTest_578(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Initiate DMP'),
  cy.wait(500);
  cy.get(this.locators.selectworkflow).select('DMP Workflow');
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();
  
}

SegementationPageTest_579(){

  cy.wait(1000);
  cy.get(this.locators.createtreatment).click();
  cy.get(this.locators.searchsegement).type("CurrentDPD5");
  cy.wait(500);
  cy.get('.cdk-drag.pop.drag-list.ng-star-inserted').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.nextbutton).click();
  cy.wait(500);
  cy.get(this.locators.treatmentplanname).type('Demo');
  cy.wait(500);
  cy.get(this.locators.manualbutton).click();
  cy.wait(500);
  cy.get(this.locators.paymentstatus).select('Roll Back');
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('demo1234');
  cy.wait(500);
  cy.get(this.locators.treatment1).click();
  cy.wait(500);
  cy.get(this.locators.startdate).type('12-03-2024');
  cy.wait(500);
  cy.get(this.locators.enddate).type('25-03-2024');
  cy.wait(500);
  cy.get(this.locators.selecttreatment).select('Update Trail'),
  cy.wait(500);
  cy.get(this.locators.selectcodegroup).select('BPTP');
  cy.wait(500);
  cy.get(this.locators.selectdispositioncode).select('BROKEN PROMISE TO PAY');
  cy.wait(500);
  cy.get(this.locators.addscripts).type('demodemo123');
  cy.wait(500);
  cy.get(this.locators.savebutton).click();
  
}


createsegmentation568(){
  cy.wait(500);
  cy.get(this.locators.searchsegmentation).click();
  cy.wait(500);
  //cy.get(this.locators.input).click();
  //cy.wait(500);
  cy.get(this.locators.Searchbutton).click({force:true});
  cy.wait(500);
  cy.get(this.locators.edit).click();
  cy.wait(10000);
  cy.get(this.locators.manual).click();
  cy.wait(500);
  cy.get(this.locators.name).type('Aishwarya');
  cy.wait(500);
  cy.get(this.locators.save_button).click();
  
  }

  SegmentationPageTest_290() {
    cy.wait(3000);
    cy.get(this.locators.clickoncreatesegmentation).click();
    cy.wait(2000);
    cy.get(this.locators.segmentationname).click();
    cy.wait(1000);
    cy.get(this.locators.segmentationname).type("Segmentation");
    cy.wait(2000);
    cy.get(this.locators.description).type("Segmentation description");
    cy.wait(2000);
    cy.get(this.locators.description).type("Manual Segmentation");
    cy.wait(2000);
   }


}

export default SegmentationPage;
