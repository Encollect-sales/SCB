import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-drag-drop';
require ('@4tw/cypress-drag-drop')

class TreatmentPage {
  constructor(locators) {
    this.locators = locators;
  }

  segmentationModule(){
    cy.get(this.locators.clickonsegmentation).click();
  }

  CreateTreatment289(){
    cy.get(this.locators.treatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(2000);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(1000);
    cy.get('.cdk-drag').eq(0).trigger('mousedown', { which: 1 });
    cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
    cy.get('#cdk-drop-list-0').trigger('mouseup');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
  }

  CreateTreatment569(){
    cy.get(this.locators.treatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(2000);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(1000);
    cy.get('.cdk-drag').eq(0).trigger('mousedown', { which: 1 });
    cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
    cy.get('#cdk-drop-list-0').trigger('mouseup');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
  }

  CreateTreatment570(){
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type('mytreatment');
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate Legal');
    cy.wait(500);
    cy.get('#salesWorkflow1').select('Legal Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment571(){
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get('.form-radio-group > :nth-child(1) > .ng-untouched').click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type('mytreatment');
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate Legal');
    cy.wait(500);
    cy.get('#salesWorkflow1').select('Legal Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment572(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate Legal');
    cy.wait(500);
    cy.get('#salesWorkflow1').select('Legal Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment573(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Communication to Customer');
    cy.wait(500);
    cy.get('#communication_type').select('Email');
    cy.wait(500);
    cy.get('#pursue_script').type('TestABC');
    cy.wait(500);
    //cy.get('strong').click();
    cy.wait(500);
    cy.get('#pursue_script').type('ok fine');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment574(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate Legal');
    cy.wait(500);
    cy.get('#salesWorkflow1').select('Legal Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment575(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate Reposession');
    cy.wait(500);
    cy.get('#salesworkflow2').select('Repo Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment576(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate Settlement');
    cy.wait(500);
    cy.get('#salesworkflow3').select('Settlement Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }


  CreateTreatment577(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Initiate DMP');
    cy.wait(500);
    cy.get('#salesWorkflow4').select('DMP Workflow');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment578(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Update Trail');
    cy.wait(500);
    cy.get('#depositionCode_group').select('CB');
    cy.wait(500);
    cy.get('#deposition_code').select('Good Version');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  CreateTreatment579(){
    const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
    cy.get(this.locators.clickontreatment).click();
    cy.wait(500);
    cy.get(this.locators.createtreatment).click();
    cy.wait(500);
    cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
    cy.wait(500);
    cy.get(this.locators.nextbtn).click();
    cy.wait(500);
    cy.get(this.locators.treatmentname).type(randomName);
    cy.wait(500);
    cy.get('.ng-input input').click();
    cy.wait(500);
    cy.contains('.ng-option-label', 'Normalized').click()
    cy.wait(500);
    cy.get(this.locators.treatmentdescription).type('treatmentdescription');
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
    cy.wait(500);
    cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
    cy.wait(500);
    cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
    cy.wait(500);
    cy.get('.form-select').select('Update Trail');
    cy.wait(500);
    cy.get('#depositionCode_group').select('CB');
    cy.wait(500);
    cy.get('#deposition_code').select('Good Version');
    cy.wait(500);
    cy.get('#pursue_script').type('hello');
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(500);
  }

  searchtreatment581(){
    cy.get('.segmentation-treatment > :nth-child(2) > :nth-child(2) > a.ng-star-inserted').click();
    cy.wait(500);
    cy.get('.segmentation-treatment > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a').click();
    cy.wait(500);
    cy.get('.btn').click();
    cy.wait(500);
  }

  searchtreatment582(){
    cy.get('.segmentation-treatment > :nth-child(2) > :nth-child(2) > a.ng-star-inserted').click();
    cy.wait(500);
    cy.get('.segmentation-treatment > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a').click();
    cy.wait(500);
    cy.get('.btn').click();
    cy.wait(500);
  }

 CreateTreatment290(){
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get(this.locators.createtreatment).click();
  cy.wait(500);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(500);
  cy.get(this.locators.nextbtn).click();
  cy.wait(500);
  cy.get(this.locators.treatmentname).type('mytreatment');
  cy.wait(500);
  cy.get('.ng-input input').click();
  cy.wait(500);
  cy.contains('.ng-option-label', 'Normalized').click()
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('treatmentdescription');
  cy.wait(500);
  //cy.get('.btn-shade-success').click();
  //cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
  cy.wait(500);
  cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
  cy.wait(500);
  cy.get('.form-select').select('Initiate Legal');
  cy.wait(500);
  cy.get('#salesWorkflow1').select('Legal Workflow');
  cy.wait(500);
  cy.get('#pursue_script').type('hello');
  cy.wait(500);
  cy.get('.btn-secondary').click();
  cy.wait(500);
}

CreateTreatment293(){
  const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get(this.locators.createtreatment).click();
  cy.wait(500);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(500);
  cy.get(this.locators.nextbtn).click();
  cy.wait(500);
  cy.get(this.locators.treatmentname).type(randomName);
  cy.wait(500);
  cy.get('.ng-input input').click();
  cy.wait(500);
  cy.contains('.ng-option-label', 'Normalized').click()
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('treatmentdescription');
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
  cy.wait(500);
  cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
  cy.wait(500);
  cy.get('.form-select').select('Initiate Legal');
  cy.wait(500);
  cy.get('#salesWorkflow1').select('Legal Workflow');
  cy.wait(500);
  cy.get('#pursue_script').type('hello');
  cy.wait(500);
  cy.get('.btn-secondary').click();
  cy.wait(500);
} 

CreateTreatment294(){
  const randomName = `treatment-${Math.random().toString(36).substring(2, 8)}`;
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get(this.locators.createtreatment).click();
  cy.wait(500);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(500);
  cy.get(this.locators.nextbtn).click();
  cy.wait(500);
  cy.get(this.locators.treatmentname).type(randomName);
  cy.wait(500);
  cy.get('.ng-input input').click();
  cy.wait(500);
  cy.contains('.ng-option-label', 'Normalized').click()
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('treatmentdescription');
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
  cy.wait(500);
  cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
  cy.wait(500);
  cy.get('.form-select').select('Initiate Legal');
  cy.wait(500);
  cy.get('#salesWorkflow1').select('Legal Workflow');
  cy.wait(500);
  cy.get('#pursue_script').type('hello');
  cy.wait(500);
  cy.get('.btn-secondary').click();
  cy.wait(500);
}

// CreateTreatment573(){
//   cy.wait(2000);
//   cy.get(this.locators.createtreatment).click();
//   cy.wait(4000);
//   cy.get(this.locators.searchtreatment).type("DARS");
//   cy.wait(2000);
//   cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
//   cy.wait(1000);
//   cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
//   cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
//   cy.get('#cdk-drop-list-0').trigger('mouseup');
//   cy.get(this.locators.searchtreatment).clear();
//   cy.wait(500);
//   cy.get(this.locators.nextbtn).click();
//   cy.wait(500);
//   cy.get(this.locators.TreatmentPlanName).type("TreatmentCreatedBy");
//   cy.wait(500);
//   cy.get(this.locators.Automatic).click();
//   cy.wait(500);
//   cy.get(this.locators.paymentStatus).select('Normalized');
//   cy.wait(500);
//   cy.get(this.locators.TreatmentDescription).type("A paragraph");
//   cy.wait(500);
//   cy.get(this.locators.treatmentLink).click();
//   cy.wait(500);
//   cy.get(this.locators.startDay).type('1');
//   cy.wait(500);
//   cy.get(this.locators.endDay).type('10');
//   cy.wait(500);
//   cy.get(this.locators.selectTreatment).select('Allocate accounts');
//   cy.wait(500);
//   cy.get(this.locators.allocationType).select('Field Agent');
//   cy.wait(500);
//   cy.get(this.locators.posCriteria).click();
//   cy.wait(500);
//   cy.get(this.locators.percentage).type('80');
//   cy.wait(500);
//   cy.get(this.locators.agentName).type('Fazil Khan');
//   cy.wait(500);
//   cy.get(this.locators.addPercentageBtn).click();
//   cy.get('#ngb-typeahead-1-0').click();
//   cy.wait(500);
//   cy.get(this.locators.percentage1).type('20');
//   cy.wait(500);
//   cy.get(this.locators.agentName1).type('Ajay rana');
//   cy.wait(500);
//   cy.get('#ngb-typeahead-2-0').click();
 
// }

TreatmentByRule580(){
  cy.wait(2000);
  cy.get("a[title='Treatment']").click();
  cy.wait(2000);
  cy.get(this.locators.createtreatment).click( {force: true});
  cy.wait(4000);
  cy.get(this.locators.searchtreatment).type("DARS", {force: true});
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get(this.locators.nextbtn).click();
  cy.wait(500);
  cy.get(this.locators.TreatmentPlanName).type("Survey123");
  cy.wait(500);
  cy.get(this.locators.Automatic).click();
  cy.wait(500);
  //cy.get(this.locators.paymentStatus).select('Normalized');

  cy.get(this.locators.paymentStatus).click(); // Click to open dropdown
cy.get('.ng-dropdown-panel .ng-option').contains('Normalized').click(); // Select the desired option
  cy.wait(500);
  cy.get(this.locators.TreatmentDescription).type("A paragraph ");
  cy.wait(500);
  cy.get(this.locators.treatmentLink).click();
  cy.wait(500);
  cy.get(this.locators.startDay).type('1');
  cy.wait(500);
  cy.get(this.locators.endDay).type('10');
  cy.wait(500);
  cy.get(this.locators.selectTreatment).select('Allocate accounts');
  cy.wait(500);
  cy.get(this.locators.allocationType).select('Field Agent');
  cy.wait(500);
  cy.get(this.locators.toggleBtn).click({force : true});
  cy.wait(500);
  cy.get('#department1').select('Branch Backend');
  cy.wait(500);
  cy.get('#Designation').select('Branch Manager');
  cy.wait(500);
  cy.get(this.locators.logicName).type('Latest agency');
  cy.wait(500);
  cy.get('#ngb-typeahead-1-1').click();
  cy.wait(500);
  cy.get(this.locators.script).type("Script to pursue the customer");
  cy.wait(500);
  cy.get(this.locators.saveBtn).click();

}

CreateTreatment587(){

  
  cy.get("a[title='Treatment']").click();
  cy.wait(1000);
  cy.get("a[title='Create Treatment']").click();
  cy.wait(200);
  cy.get(this.locators.searchtreatment).type("DARS");
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  // cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
  // cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  // cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get("#step2create").click();
  cy.wait(200);
  // cy.get(this.locators.treate1).click();
  // cy.wait(200);
  // cy.get(":nth-child(3) > .col-md-4 > .form-control").select("Communication to Customer");
  // cy.wait(200);
  // cy.get(":nth-child(3) > :nth-child(2) > .form-control").select("WhatsApp");
  // cy.wait(200);
  // cy.get(":nth-child(2) > .text-left > .btn").click();
  // cy.wait(200);
  // cy.get(this.locators.treate2).click();
  // cy.wait(200);
  // cy.get(":nth-child(4) > .col-md-4 > .form-control").select("Communication to Customer");
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(2) > .form-control").select("SMS");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > .col-md-4 > .form-control").select("yes");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > :nth-child(2) > .form-control").select("Treatment Step 1");
  // cy.wait(200);
  // cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.visible');
  // cy.wait(500);
  // // cy.get('EXPIRED').should('be.visible');
  // // cy.wait(500);
  // // cy.get('DELIVERED').should('be.visible');
  // // cy.wait(500);
  // // cy.get('Pending').should('be.visible');
  // // cy.wait(500);
}

CreateTreatment291(){

  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get(this.locators.createtreatment).click();
  cy.wait(500);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(500);
  cy.get(this.locators.nextbtn).click();
  cy.wait(500);
  cy.get('.form-radio-group > :nth-child(1) > .ng-untouched').click();
  cy.wait(500);
  cy.get(this.locators.treatmentname).type('mytreatment');
  cy.wait(500);
  cy.get('.ng-input input').click();
  cy.wait(500);
  cy.contains('.ng-option-label', 'Normalized').click()
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('treatmentdescription');
  cy.wait(500);
  //cy.get('.btn-shade-success').click();
  //cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
  cy.wait(500);
  cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
  cy.wait(500);
  cy.get('.form-select').select('Initiate Legal');
  cy.wait(500);
  cy.get('#salesWorkflow1').select('Legal Workflow');
  cy.wait(500);
  cy.get('#pursue_script').type('hello');
  cy.wait(500);
  cy.get('.btn-secondary').click();
  cy.wait(500);
}

CreateTreatment292(){
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get(this.locators.createtreatment).click();
  cy.wait(500);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(500);
  cy.get(this.locators.nextbtn).click();
  cy.wait(500);
  cy.get(this.locators.treatmentname).type('mytreatment');
  cy.wait(500);
  cy.get('.ng-input input').click();
  cy.wait(500);
  cy.contains('.ng-option-label', 'Normalized').click()
  cy.wait(500);
  cy.get(this.locators.treatmentdescription).type('treatmentdescription');
  cy.wait(500);
  //cy.get('.btn-shade-success').click();
  //cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-heading').click();
  cy.wait(500);
  cy.get('.panel.ng-star-inserted > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1) > .form-control').type('1');
  cy.wait(500);
  cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-control').type('12');
  cy.wait(500);
  cy.get('.form-select').select('Initiate Legal');
  cy.wait(500);
  cy.get('#salesWorkflow1').select('Legal Workflow');
  cy.wait(500);
  cy.get('#pursue_script').type('hello');
  cy.wait(500);
  cy.get('.btn-secondary').click();
  cy.wait(500);

}

CreateTreatment295(){
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get('.segmentation-treatment > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a').click();
  cy.wait(500);
  cy.get('button[type="button"]').click({ multiple: true });
  cy.wait(500);
  cy.contains('Search Result').should('be.visible');
  cy.wait(500);
}

CreateTreatment296(){
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get('.segmentation-treatment > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a').click();
  cy.wait(500);
  cy.get('#searchTreatment').click({ multiple: true });
  cy.wait(500);
  cy.contains('Search Result').should('be.visible');
  cy.wait(500);
  // cy.get('.fa.fa-play-circle').click({ multiple: true });
  // cy.wait(5000);
  // cy.contains('Treatment executed successfully').should('be.visible');
  // cy.wait(500);
}

CreateTreatment297(){
  cy.get(this.locators.clickontreatment).click();
  cy.wait(500);
  cy.get('a[href="#/treatment/treatment-sequence"]').click();
  cy.wait(500);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get('.cdk-drag').eq(0).trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.wait(500);
  cy.get('button[type="submit"]').click();
  cy.wait(500);
  cy.contains('New Sequence Generated').should('be.visible');
  cy.wait(500);
}

treatmentsequence583(){

  // cy.wait(500);
  // cy.get("a[title='Sequence Treatments']").click();
  // cy.wait(2000);
  // cy.get(this.locators.searchtreatmentname).type('Survey',{force:true});
  // cy.wait(1000);
  // cy.get('#cdk-drop-list-0 > .cdk-drag').dragAndDrop('#cdk-drop-list-1');
  // cy.wait(1000);
  // cy.get('#cdk-drop-list-0 > .cdk-drag').trigger('mousedown', { which: 1 });
  // cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  // cy.get('#cdk-drop-list-1').trigger('mouseup');
  // cy.get(this.locators.submit).click();
  // cy.wait(500);

 }

 CreatTreatmentPage_297(){
  cy.wait(2000);
  cy.get(this.locators.Treatmentsequence).click();
  cy.wait(4000);
  cy.get('#cdk-drop-list-0').dragAndDrop('#cdk-drop-list-1');
  cy.wait(1000);
  cy.get('#cdk-drop-list-0 > :nth-child(1)').trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  cy.get('#cdk-drop-list-1').trigger('mouseup');
  cy.wait(500);
  cy.get(this.locators.nextbtn1).click();
}

CreateTreatmentQualifing585(){

  cy.wait(1000);

  cy.get("a[title='Treatment']").click();
  cy.wait(2000);
  
  cy.get("a[title='Create Treatment']").click();
  cy.wait(200);
  cy.get(this.locators.searchtreatment).type("DARS");
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get("#step2create").click();
  cy.wait(200);
  // cy.get(this.locators.Treatment1).click();
  // cy.wait(200);
  // cy.get("ng-select[placeholder='Select status']").select("Normalized");
  // cy.wait(200);
  // cy.get(":nth-child(3) > :nth-child(2) > .form-control").select("WhatsApp");
  // cy.wait(200);
  // cy.get(":nth-child(2) > .text-left > .btn").click();
  // cy.wait(200);
  // cy.get(this.locators.Treatment2).click();
  // cy.wait(200);
  // cy.get(":nth-child(4) > .col-md-4 > .form-control").select("Communication to Customer");
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(2) > .form-control").select("SMS");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > .col-md-4 > .form-control").select("yes");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > :nth-child(2) > .form-control").select("Treatment Step 1");
  // cy.wait(200);
  // cy.get(":nth-child(1) > :nth-child(3) > .form-control").select("Roll Back")


 }


 CreateTreatmentQualifing586(){


  
  cy.wait(1000);

  cy.get("a[title='Treatment']").click();
  cy.wait(2000);
  
  cy.get("a[title='Create Treatment']").click();
  cy.wait(200);
  cy.get(this.locators.searchtreatment).type("DARS");
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get("#step2create").click();
  cy.wait(200);
//   cy.get(this.locators.Treatment1).click();
//   cy.wait(200);
//   cy.get(":nth-child(3) > .col-md-4 > .form-control").select("Communication to Customer");
//   cy.wait(200);
//   cy.get(":nth-child(3) > :nth-child(2) > .form-control").select("WhatsApp");
//   cy.wait(200);
//   cy.get(":nth-child(2) > .text-left > .btn").click();
//   cy.wait(200);
//   cy.get(this.locators.Treatment2).click();
//   cy.wait(200);
//   cy.get(":nth-child(4) > .col-md-4 > .form-control").select("Communication to Customer");
//   cy.wait(200);
//   cy.get(":nth-child(4) > :nth-child(2) > .form-control").select("SMS");
//   cy.wait(200);
//   cy.get(".row.ng-star-inserted > .col-md-4 > .form-control").select("yes");
//   cy.wait(200);
//   cy.get(".row.ng-star-inserted > :nth-child(2) > .form-control").select("Treatment Step 1");
//   cy.wait(200);
 

 }

 CreateTreatmentQualifing590(){

  cy.wait(1000);
  
  cy.wait(1000);

  cy.get("a[title='Treatment']").click();
  cy.wait(2000);
  
  cy.get("a[title='Create Treatment']").click();
  cy.wait(200);
  cy.get(this.locators.searchtreatment).type("DARS");
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
  cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get("#step2create").click();
  cy.wait(200);




//   cy.wait(1000);
  
//   cy.get(this.locators.CreateTreat).click();
//   cy.wait(200);
//   cy.get(this.locators.searchtreatment).type("DARS");
//   cy.wait(2000);
//   cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
//   cy.wait(1000);
//   cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
//   cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
//   cy.get('#cdk-drop-list-0').trigger('mouseup');
//   cy.get(this.locators.searchtreatment).clear();
//   cy.wait(500);
//   cy.get(".col-md-11 > .btn").click();
//   cy.wait(200);
//   cy.get(this.locators.Treatment1).click();
//   cy.wait(200);
//   cy.get(":nth-child(3) > .col-md-4 > .form-control").select("Communication to Customer");
//   cy.wait(200);
//   cy.get(":nth-child(3) > :nth-child(2) > .form-control").select("WhatsApp");
//   cy.wait(200);
//   cy.get(":nth-child(2) > .text-left > .btn").click();
//   cy.wait(200);
//   cy.get(this.locators.Treatment2).click();
//   cy.wait(200);
//   cy.get(":nth-child(4) > .col-md-4 > .form-control").select("Communication to Customer");
//   cy.wait(200);
//   cy.get(":nth-child(4) > :nth-child(2) > .form-control").select("SMS");
//   cy.wait(200);
//   cy.get(".row.ng-star-inserted > .col-md-4 > .form-control").select("No");
//   cy.wait(200);
  

 }



 CreateTreatmentQualifing588(){


  cy.get("a[title='Treatment']").click();
  cy.wait(2000);
  
  cy.get("a[title='Create Treatment']").click();
  cy.wait(200);
  cy.get(this.locators.searchtreatment).type("DARS");
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  // cy.get('.cdk-drag').trigger('mousedown', { which: 1 });
  // cy.get('body').trigger('mousemove', { clientX: 600, clientY: 100 });
  // cy.get('#cdk-drop-list-0').trigger('mouseup');
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get("#step2create").click();
  cy.wait(200);
  // cy.get(this.locators.TretPlanName).type("Pranshu treatment");
  // cy.wait(200);
  // cy.get("select[name='paymentstatustostop']").select("Roll Back");
  // cy.wait(200);
  // cy.get(this.locators.treatDec).type("test test test");
  // cy.wait(200)
  // cy.get(this.locators.Treatment1).click();
  // cy.wait(200);
  // cy.get(":nth-child(2) > .panel > .panel-collapse > .panel-body > :nth-child(2) > :nth-child(1) > .form-control").type("26/06/2024");
  // cy.wait(200);
  // cy.get(":nth-child(2) > .panel > .panel-collapse > .panel-body > :nth-child(2) > :nth-child(2) > .form-control").type("26/08/2024");
  // cy.wait(200);
  // cy.get(":nth-child(3) > .col-md-4 > .form-control").select("Communication to Customer");
  // cy.wait(200);
  // cy.get(":nth-child(3) > :nth-child(2) > .form-control").select("WhatsApp");
  // cy.wait(200);
  // cy.get(":nth-child(3) > :nth-child(3) > .form-control").type("Automated WhatsApp Templatelnycxfudk");
  // cy.wait(100);
  // cy.get("#ngb-typeahead-1-0").click();
  // cy.wait(200);
  // cy.get(":nth-child(4) > .form-control").select("MAILINGMOBILE");
  // cy.wait(200);
  // cy.get(":nth-child(4) > .col-md-12 > .form-control").type("testeteteteetet testete ");
  // cy.wait(200);
  // cy.get(":nth-child(2) > .text-left > .btn").click();
  // cy.wait(200);
  // cy.get(this.locators.Treatment2).click();
  // cy.wait(200);
  // cy.get(":nth-child(3) > .panel > .panel-collapse > .panel-body > :nth-child(2) > :nth-child(1) > .form-control").type("26/06/2024");
  // cy.wait(200);
  // cy.get(":nth-child(3) > .panel > .panel-collapse > .panel-body > :nth-child(2) > :nth-child(2) > .form-control").type("26/08/2024");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > .col-md-4 > .form-control").select("Yes");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > :nth-child(2) > .form-control").select("Treatment Step 1");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > :nth-child(3) > .form-control").select("READ");
  // cy.wait(200);
  // cy.get(":nth-child(4) > .col-md-4 > .form-control").select("Communication to Customer");
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(2) > .form-control").select("SMS");
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(3) > .form-control").type("testDha");
  // cy.wait(200);
  // //cy.get("#ngb-typeahead-2-0").click();
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(4) > .form-control").select("MAILINGMOBILE");
  // cy.wait(200);
  // cy.get(":nth-child(5) > .col-md-12 > .form-control").type("Test test test tes tes ste");
  // cy.wait(200);
  // cy.get(".btn-success").click();
  // cy.wait(200);

  

 }


 CreateTreatmentQualifing589(){

  cy.wait(1000);
  
  cy.wait(1000);

  cy.get("a[title='Treatment']").click();
  cy.wait(2000);
  
  cy.get("a[title='Create Treatment']").click();
  cy.wait(200);
  cy.get(this.locators.searchtreatment).type("DARS");
  cy.wait(2000);
  cy.get('.cdk-drag').dragAndDrop('#cdk-drop-list-0');
  cy.wait(1000);
  cy.get(this.locators.searchtreatment).clear();
  cy.wait(500);
  cy.get("#step2create").click();
  cy.wait(200);
  cy.get(this.locators.TretPlanName).type("Pranshu treatment");
  cy.wait(200);
  // Open the dropdown
cy.get('ng-select[name="paymentstatustostop"]').click();

// Select an option by its text
cy.contains('Roll Back').click();
  //cy.get("ng-select[placeholder='Select status']").select(");
  cy.wait(200);
  cy.get(this.locators.treatDec).type("test test test");
  cy.wait(200)
  cy.get(this.locators.Treatment1).click();
  cy.wait(200);
  cy.get("#start_day").type("26/06/2024");
  cy.wait(200);
  cy.get("#end_day").type("26/08/2024");
  cy.wait(200);
  cy.get("#select_treatment").select("Communication to Customer");
  cy.wait(200);
  cy.get("#communication_type").select("WhatsApp");
  cy.wait(200);
  cy.get("#communication_template").type("Automated WhatsApp Templatelnycxfudk");
  cy.wait(100);
  //cy.get("#ngb-typeahead-1-0").click();
  cy.wait(200);
  cy.get("#communicationMobileNumber_type").select("MAILINGMOBILE");
  cy.wait(200);
  cy.get("#pursue_script").type("testeteteteetet testete ");
  cy.wait(200);
  cy.get("#savetreat").click();
  cy.wait(200);
  // cy.get(this.locators.Treatment2).click();
  // cy.wait(200);
  // cy.get(":nth-child(3) > .panel > .panel-collapse > .panel-body > :nth-child(2) > :nth-child(1) > .form-control").type("26/06/2024");
  // cy.wait(200);
  // cy.get(":nth-child(3) > .panel > .panel-collapse > .panel-body > :nth-child(2) > :nth-child(2) > .form-control").type("26/08/2024");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > .col-md-4 > .form-control").select("Yes");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > :nth-child(2) > .form-control").select("Treatment Step 1");
  // cy.wait(200);
  // cy.get(".row.ng-star-inserted > :nth-child(3) > .form-control").select("READ");
  // cy.wait(200);
  // cy.get(":nth-child(4) > .col-md-4 > .form-control").select("Communication to Customer");
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(2) > .form-control").select("SMS");
  // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(3) > .form-control").type("testDha");
  // cy.wait(200);
  // // cy.get("#ngb-typeahead-2-0").click();
  // // cy.wait(200);
  // cy.get(":nth-child(4) > :nth-child(4) > .form-control").select("MAILINGMOBILE");
  // cy.wait(200);
  // cy.get(":nth-child(5) > .col-md-12 > .form-control").type("Test test test tes tes ste");
  // cy.wait(200);
  // cy.get(".btn-success").click();
  // cy.wait(200);

  

 }


 



}

export default TreatmentPage;
