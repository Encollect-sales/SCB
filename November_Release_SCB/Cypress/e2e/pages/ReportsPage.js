import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class ReportsPage {
  constructor(locators) {
    this.locators = locators;
  }
  RPT_S_001_Open_Delayed_Deposits_Staff_Report() {

cy.get('#nav-item-1-reports').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Delayed_Reports).click({force:true});
  cy.wait(2000);
  cy.contains('Delayed Deposits Report').scrollIntoView().should('be.visible');
  cy.contains('Receipt From Date').should('be.visible');
  cy.contains('Receipt To Date').should('be.visible');

  
}

RPT_S_002_Verify_Delayed_Deposits_Staff_Report_Data() {

  // Open Reports module
cy.get('#nav-item-1-reports').click({ force: true });
  cy.wait(2000);

  // Open Delayed Deposits (Staff) report
  cy.get(this.locators.Delayed_Reports).click({ force: true });
  cy.wait(2000);

  // Select valid date range (within 31 days)
  cy.get(this.locators.receiptDate_from)
    .clear()
    .type('01/09/2025');

  cy.get(this.locators.receiptDate_to)
    .clear()
    .type('30/09/2025');

  // Click Search
  cy.get(this.locators.submit)
    .click({ force: true });

  cy.wait(3000);

  // ---- Verify table is displayed ----
   cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible');

  // Verify all column headers are visible
  cy.contains('th', 'Account Number').scrollIntoView().should('exist');
  cy.contains('th', 'Customer Name').scrollIntoView().should('exist');
  cy.contains('th', 'Receipt Date').scrollIntoView().should('exist');
  cy.contains('th', 'Receipt No').scrollIntoView().should('exist');
  cy.contains('th', 'Receipt Amount').scrollIntoView().should('exist');
  cy.contains('th', 'Undeposited Duration (Days)').scrollIntoView().should('exist');
  cy.contains('th', 'Collector Name').scrollIntoView().should('exist');
  cy.contains('th', 'Collector Code').scrollIntoView().should('exist');
  cy.contains('th', 'Collector Branch').scrollIntoView().should('exist');
  cy.contains('th', 'Collector Agency').scrollIntoView().should('exist');
  cy.contains('th', 'Reporting Manager').scrollIntoView().should('exist');
}

RPT_S_003_Date_Range_Greater_Than_31_Days_Not_Allowed() {

  // Navigate to Reports → Delayed Deposits (Staff)
cy.get('#nav-item-1-reports').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Delayed_Reports).click({ force: true });
  cy.wait(2000);

  // Verify Delayed Deposits Report page
  cy.contains('Delayed Deposits Report')
    .scrollIntoView()
    .should('exist');

  

  cy.get(this.locators.receiptDate_from)
    .clear()
    .type('01/09/2025');

  cy.get(this.locators.receiptDate_to)
    .clear()
    .type('30/09/2025');
cy.get(this.locators.submit)
    .click({ force: true });

     cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible');

  
}
RPT_S_004_Verify_Sorting_And_Download_Delayed_Deposits_Report() {

  // Navigate to Reports → Delayed Deposits (Staff)
cy.get('#nav-item-1-reports').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Delayed_Reports).click({ force: true });
  cy.wait(2000);

  // Verify Delayed Deposits Report page
  cy.contains('Delayed Deposits Report')
    .scrollIntoView()
    .should('exist');

  

  cy.get(this.locators.receiptDate_from)
    .clear()
    .type('01/09/2025');
cy.wait(2000);
  cy.get(this.locators.receiptDate_to)
    .clear()
    .type('30/09/2025');
cy.wait(2000);    
cy.get(this.locators.submit)
    .click({ force: true });
cy.wait(2000);
     cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible');
cy.wait(2000);
    cy.get(this.locators.download).click({force:true})

  
}
RPT_S_005_Verify_No_Data_Scenario_Delayed_Deposits_Report() {

cy.get('#nav-item-1-reports').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Delayed_Reports).click({ force: true });
  cy.wait(2000);
  cy.contains('Delayed Deposits Report')
    .scrollIntoView()
    .should('exist');
  cy.get(this.locators.receiptDate_from)
    .clear()
    .type('01/01/2000');
  cy.wait(2000);
  cy.get(this.locators.receiptDate_to)
    .clear()
    .type('15/01/2000');
  cy.wait(2000);
  cy.get(this.locators.submit)
    .click({ force: true });
  cy.wait(2000);
  cy.contains('Info!').should('be.visible');
  cy.contains('No Results').should('be.visible');



}

RPT_S_0014_verifyUndepositedDurationCalculation() {

cy.get('#nav-item-1-reports').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Delayed_Reports).click({ force: true });
  cy.wait(2000);
  cy.contains('Delayed Deposits Report')
    .scrollIntoView()
    .should('exist');
  cy.get(this.locators.receiptDate_from)
    .clear()
    .type('01/10/2025');
  cy.wait(2000);
  cy.get(this.locators.receiptDate_to)
    .clear()
    .type('01/11/2025');
  cy.wait(2000);
  cy.get(this.locators.submit)
    .click({ force: true });
   cy.wait(3000);
   cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible');  
   cy.contains('th', 'Undeposited Duration (Days)').scrollIntoView().should('exist'); 
   cy.wait(1000);
   cy.get('tbody > .ng-star-inserted > :nth-child(6)').its('length')

}










  }

export default ReportsPage;
