import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class AllocationPage {
  constructor(locators) {
    this.locators = locators;
  }

Allocation_sow_TestPage_01() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_02() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

  
}

Allocation_sow_TestPage_03() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);

}

Allocation_sow_TestPage_04() {

 cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_05() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_06() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);

}

Allocation_sow_TestPage_07() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_08() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_09() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);

}

Allocation_sow_TestPage_10() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);


}

Allocation_sow_TestPage_11() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_12() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_Agent_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agent_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);

}

Allocation_sow_TestPage_13() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);


}

Allocation_sow_TestPage_14() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_15() {

  
   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
 cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkalloc_Acclevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);


}

Allocation_sow_TestPage_16() {

   cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_17() {

     cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_18() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
 cy.get(this.locators.ClickOn_Owner_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Owner_Bulkalloc_Cuslevel).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);


}

Allocation_sow_TestPage_19() {

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
     cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_20() {

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
     cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Bucketfilter).click()
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_21(){

 cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
     cy.get(this.locators.CLickOn_Agency_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Geofilter).click()
    cy.wait(2000);
     cy.get(this.locators.lickOn_Filter_Geo).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);

}

Allocation_sow_TestPage_22(){

  cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
     cy.get(this.locators.CLickOn_Agent_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["CreditCard"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_23(){


    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
     cy.get(this.locators.CLickOn_Agent_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Bucketfilter).click({force: true})
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3", "4", "5"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
cy.wait(2000);

}

Allocation_sow_TestPage_24(){

 cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_Alloc_Filters).click();
    cy.wait(2000);
     cy.get(this.locators.CLickOn_Agent_Allocfilter).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Agent_Geofilter).click({force: true})
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Filter_Geo).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai", "Velachery"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(2000);

}

Allocation_UT_TestPage_01(){

}

Allocation_UT_TestPage_02(){

}

Allocation_UT_TestPage_03(){

}

Allocation_UT_TestPage_04(){

}

Allocation_UT_TestPage_05(){

}

Allocation_UT_TestPage_06(){

}

Allocation_UT_TestPage_07(){

}

Allocation_UT_TestPage_08(){

}

Allocation_UT_TestPage_09(){

}

Allocation_UT_TestPage_10(){

}

Allocation_UT_TestPage_11(){

}

Allocation_UT_TestPage_12(){

}

Allocation_UT_TestPage_13(){

}

Allocation_UT_TestPage_14(){

}

Allocation_UT_TestPage_15(){

}






}




export default AllocationPage;
