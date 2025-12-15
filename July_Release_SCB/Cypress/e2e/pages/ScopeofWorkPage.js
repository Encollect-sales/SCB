import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class ScopeofWorkPage {
  constructor(locators) {
    this.locators = locators;
  }

  ScopeofWorkTestPage_001(){

    cy.get(this.locators.ClickOn_Allocation).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Bulkupload).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_AccLevel).click();
    cy.wait(2000);
    
 const expectedOptions = ["CREDITCARD","LOANS PRODUCTS","CONSUMER LOAN","Consumer Loan","CreditCard","HOMELOAN","HL"];

cy.get(this.locators.ClickOn_Product_group).click();
cy.wait(2000);
cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actualTexts = [...$options].map(o => o.innerText.trim());

    const matched = expectedOptions.filter(option =>
      actualTexts.includes(option)
    );

    cy.log("Matched options: " + matched.join(", "));
    console.log("Matched options:", matched);

    expect(matched.length, "At least one expected option should be present").to.be.greaterThan(0);
  });

cy.wait(2000);



  }

ScopeofWorkTestPage_002(){

    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.Click_Agent_Alloc_GapReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AgentAlloc_Productgroup).click()
    cy.wait(2000);
    
    const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_003(){

   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.Click_Agent_Alloc_GapReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AgentAlloc_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });


}

ScopeofWorkTestPage_004(){

   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.Click_Agent_Alloc_GapReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AgentAlloc_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_005(){
  cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Alloc_GapReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AgencyAlloc_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
cy.wait(2000);
}

ScopeofWorkTestPage_006(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Alloc_GapReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AgencyAlloc_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_007(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Agency_Alloc_GapReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AgencyAlloc_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_008(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocVSAchieved_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AllocVSAchieve_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
cy.wait(2000);
}

ScopeofWorkTestPage_009(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocVSAchieved_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AllocVSAchieve_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_010(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocationReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_AllocVSAchieved_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AllocVSAchieve_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_011(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_trailGap_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_trailGap_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
cy.wait(2000);
}

ScopeofWorkTestPage_012(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_trailGap_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_trailGap_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_013(){
  cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_trailGap_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_trailGap_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_014(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_trailHistory_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_trailHistory_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
cy.wait(2000);
}

ScopeofWorkTestPage_015(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_trailHistory_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_trailHistory_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_016(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_trailHistory_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_trailHistory_Branch).click()
    cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_017(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailIntensity_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_TrailIntensity_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
cy.wait(2000);
}

ScopeofWorkTestPage_018(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailReports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_TrailIntensity_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_TrailIntensity_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_019(){

cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_TrailReports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_TrailIntensity_Report).click();
cy.wait(2000);
cy.get(this.locators.Click_TrailIntensity_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);

}

ScopeofWorkTestPage_020(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_PaymentReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_PaymentReport_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_021(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_PaymentReport).click();
    cy.wait(2000);
    cy.get(this.locators.Click_PaymentReport_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_022(){
  cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_PaymentReport).click();
cy.wait(2000);
cy.get(this.locators.Click_PaymentReport_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);

}

ScopeofWorkTestPage_023(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_PaymentReport).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_PaymentReport_AgencyRadio).click();
    cy.wait(2000);
    cy.get(this.locators.Click_PaymentReport_Agency_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_024(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_PaymentReport).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_PaymentReport_AgencyRadio).click();
    cy.wait(2000);
    cy.get(this.locators.Click_PaymentReport_Agency_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_025(){
    cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_PaymentReport).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_PaymentReport_AgencyRadio).click();
    cy.wait(2000);
cy.get(this.locators.Click_PaymentReport_Agency_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_026(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Moneymovement_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_Moneymovement_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_027(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Moneymovement_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_Moneymovement_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_028(){
   cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
 cy.get(this.locators.ClickOn_Moneymovement_Report).click();
    cy.wait(2000);
cy.get(this.locators.Click_Moneymovement_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_029(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_AccountDashboard_report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AccountDashboard_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_030(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_AccountDashboard_report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_AccountDashboard_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_031(){
     cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_AccountDashboard_report).click();
    cy.wait(2000);
cy.get(this.locators.Click_AccountDashboard_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}


ScopeofWorkTestPage_032(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_Performance_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_Performance_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_033(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_Performance_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_Performance_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_034(){
   cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_Performance_Report).click();
    cy.wait(2000);
cy.get(this.locators.Click_Performance_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_035(){}

ScopeofWorkTestPage_036(){}

ScopeofWorkTestPage_037(){}

ScopeofWorkTestPage_038(){
  cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_CollectionIntensity_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_CollectionIntensity_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_039(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_CollectionIntensity_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_CollectionIntensity_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_040(){
   cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_CollectionIntensity_Report).click();
    cy.wait(2000);
cy.get(this.locators.Click_CollectionIntensity_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_041(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_CollectionTrend_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_CollectionTrend_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_042(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_CollectionTrend_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_CollectionTrend_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_043(){
   cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_CollectionTrend_Report).click();
    cy.wait(2000);
cy.get(this.locators.Click_CollectionTrend_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_044(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_CustomerContact_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_CustomerContact_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_045(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_CustomerContact_Report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_CustomerContact_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_046(){
     cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_CustomerContact_Report).click();
    cy.wait(2000);
cy.get(this.locators.Click_CustomerContact_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_047(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
      cy.get(this.locators.ClickOn_VisitIntensity_report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_VisitIntensity_Productgroup).click()
    cy.wait(2000);
     const expectedOption = ["Credit Card"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedOption);
  });
cy.wait(2000);
}

ScopeofWorkTestPage_048(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.get(this.locators.ClickOn_VisitIntensity_report).click();
    cy.wait(2000);
    cy.get(this.locators.Click_VisitIntensity_Bucket).click()
    cy.wait(2000);

const expectedNumbers = ["0", "1", "2", "3"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedNumbers);
  });
}

ScopeofWorkTestPage_049(){
   cy.get(this.locators.CLickOn_Reports).click();
cy.wait(2000);
cy.get(this.locators.ClickOn_VisitIntensity_report).click();
    cy.wait(2000);
cy.get(this.locators.Click_VisitIntensity_Branch).click();
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}








}




export default ScopeofWorkPage;
