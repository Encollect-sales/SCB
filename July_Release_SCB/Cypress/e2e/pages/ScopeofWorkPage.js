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
    
 const expectedOptions = ["CreditCard","Loan Products","CONSUMER LOAN","Consumer Loan","CreditCard","HOMELOAN","HL"];

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
ScopeofWorkTestPage_002() {

  cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_AllocationReports).click();
  cy.wait(2000);

  cy.get(this.locators.Click_Agent_Alloc_GapReport).click();
  cy.wait(2000);

  cy.get(this.locators.Click_AgentAlloc_Productgroup)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

  const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
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
      const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

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

const expectedBranches =  ['Demo', 'India', 'Japan'] ;

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}
ScopeofWorkTestPage_008() {

  cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_AllocationReports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_AllocVSAchieved_Report).click();
  cy.wait(2000);

  cy.get(this.locators.Click_AllocVSAchieve_Productgroup)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

  const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

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

  cy.get(this.locators.Click_AllocVSAchieve_Branch).click();
  cy.wait(2000);

  const expectedBranches = ["Demo","India","Japan"];

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.deep.equal(expectedBranches);
    });

  cy.wait(1000);
}

ScopeofWorkTestPage_011() {

  cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_TrailReports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_trailGap_Report).click();
  cy.wait(2000);

  cy.get(this.locators.Click_trailGap_Productgroup)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

  const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

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

  cy.get(this.locators.Click_trailHistory_Productgroup).click();
  cy.wait(2000);

  const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

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

ScopeofWorkTestPage_017() {

  cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_TrailReports).click();
  cy.wait(2000);

  cy.get(this.locators.ClickOn_TrailIntensity_Report).click();
  cy.wait(2000);

  cy.get(this.locators.Click_TrailIntensity_Productgroup)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

  const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

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

  cy.get(this.locators.Click_PaymentReport_Productgroup).click();
  cy.wait(2000);

  const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
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
      const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
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
cy.get(this.locators.Click_PaymentReport_Agency_Branch).click({force:true});
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
      const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
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
      const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
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


ScopeofWorkTestPage_032() {
  cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);

  cy.contains("Performance Report").click();
  cy.wait(2000);

  // If this also throws error later, apply same fix here too
  cy.get(this.locators.Click_Performance_Report)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

  // MAIN FIX 👇
  cy.get(this.locators.Click_Performance_Productgroup)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

   const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

  cy.wait(2000);
}

ScopeofWorkTestPage_033(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.contains("Performance Report").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Performance_Report).click();
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
  cy.contains("Performance Report").click();
    cy.wait(2000);
cy.get(this.locators.Click_Performance_Report).click();
cy.wait(2000);
cy.get(this.locators.Click_Performance_Branch).click({force:true});
cy.wait(2000);

const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_035(){
   cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);
  cy.contains("Performance Report").click();
  cy.wait(2000);
  cy.get(this.locators.Click_monthly_performance_report).click({force:true});
   cy.wait(2000);
  cy.get(this.locators.Click_monthly_performance_report_product_grp)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

   const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

  cy.wait(2000);
}

ScopeofWorkTestPage_036(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.contains("Performance Report").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Performance_Report).click();
cy.wait(2000);
 cy.get(this.locators.Click_monthly_performance_report).click({force:true});
 cy.wait(2000);
    cy.get(this.locators.Click_monthly_performance_report_region).click()
    cy.wait(2000);
const expectedBranches = ["Chennai Main", "Pallikaranai"];

cy.get(".ng-dropdown-panel .ng-option")
  .then($options => {
    const actual = [...$options].map(o => o.innerText.trim());
    expect(actual).to.deep.equal(expectedBranches);
  });
  cy.wait(1000);
}

ScopeofWorkTestPage_037(){
    cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
   cy.contains("Performance Report").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Performance_Report).click();
cy.wait(2000);
 cy.get(this.locators.Click_monthly_performance_report).click({force:true});
 cy.wait(2000);
    cy.get(this.locators.Click_monthly_performance_report_month).click()
    cy.wait(2000);
    cy.get(".ng-dropdown-panel .ng-option")
  .should("have.length.greaterThan", 10);
}

ScopeofWorkTestPage_038() {
  cy.get(this.locators.CLickOn_Reports).click();
  cy.wait(2000);

  cy.contains("Collection Intensity Report").click();
  cy.wait(2000);

  // FIX 👇 click only visible first dropdown
  cy.get(this.locators.Click_CollectionIntensity_Productgroup)
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.wait(2000);

  const expectedOption = ["CreditCard"];

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
  cy.contains("Collection Intensity Report").click();
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
 cy.contains("Collection Intensity Report").click();
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
      cy.contains("Collection Trend Report").click();
    cy.wait(2000);
    cy.get(this.locators.Click_CollectionTrend_Productgroup).click()
    cy.wait(2000);
      const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

  cy.wait(2000);
}

ScopeofWorkTestPage_042(){
     cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
    cy.contains("Collection Trend Report").click();
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
 cy.contains("Collection Trend Report").click();
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
      const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
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

ScopeofWorkTestPage_047() {
  cy.wait(7000);
  cy.get(this.locators.CLickOn_Reports).click({ force: true });
  cy.wait(2000);

  cy.contains("Visit Intensity Report").click({ force: true });
  cy.wait(2000);

  // FIX HERE 👇 click only first dropdown
  cy.get(this.locators.Click_VisitIntensity_Productgroup)
    .first()
    .click({ force: true });

  cy.wait(2000);

   const expectedOption = "Credit Card";

  cy.get(".ng-dropdown-panel .ng-option")
    .then($options => {
      const actual = [...$options].map(o => o.innerText.trim());
      expect(actual).to.include(expectedOption);
    });

  cy.wait(2000);
}


ScopeofWorkTestPage_048(){
   cy.get(this.locators.CLickOn_Reports).click();
    cy.wait(2000);
  cy.contains("Visit Intensity Report").click();
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
  cy.contains("Visit Intensity Report").click();
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
