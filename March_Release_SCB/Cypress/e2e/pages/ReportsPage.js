import { th } from '@faker-js/faker';
import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';

class ReportsPage {
  constructor(locators) {
    this.locators = locators;
  

  
  }

CollectionIntensityTestPage_01(){
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
      return false; // Prevents Cypress from failing the test
    }
  });

  cy.get(this.locators.clickonreport).click();
  cy.wait(3000);
  cy.contains("Collection Intensity Report").scrollIntoView().should("be.visible");
  cy.wait(1000);

}

CollectionIntensityTestPage_02(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(2000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(2000);
  cy.contains("Product Group").should("be.visible");
  cy.wait(1000);
  cy.contains("Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Sub Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Country").should("be.visible");
  cy.wait(1000);
  cy.contains("Region").should("be.visible");
  cy.wait(1000);
  cy.contains("State").should("be.visible");
  cy.wait(1000);
  cy.contains("City").should("be.visible");
  cy.wait(1000);
  cy.contains("BOM Bucket").should("be.visible");
  cy.wait(1000);
  cy.contains("Trail/Receipt From").should("be.visible");
  cy.wait(1000);
  cy.contains("Trail/Receipt To").should("be.visible");
  cy.wait(1000);
  // cy.contains("Branch").should("be.visible");
  // cy.wait(1000);
  cy.contains("Staff Name").should("be.visible");
  cy.wait(1000);


}

CollectionIntensityTestPage_03(){
  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);


}

CollectionIntensityTestPage_04(){
  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(3000);
  cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
  cy.wait(1000);
  cy.contains("Allocated Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Account No").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(500,0);
  cy.wait(1000);
  cy.contains("Date of Allocation").should("be.visible");
  cy.wait(1000);
  cy.contains("Total Dues").should("be.visible");
  cy.wait(1000);
  cy.contains("Date of 1st Call").should("be.visible");
  cy.wait(1000);
  cy.contains("Date of 1st Visit").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1000,0);
  cy.wait(1000);
  cy.contains("Time of 1st Call").should("be.visible");
  cy.wait(1000);
  cy.contains("Time of 1st Visit").should("be.visible");
  cy.wait(1000);
  cy.contains("Total Calls Till Date").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1500,0);
  cy.wait(1000);
  cy.contains("Total Visits Till Date").should("be.visible");
  cy.wait(1000);
  cy.contains("Total Collection").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Collection").should("be.visible");
  cy.wait(1000);

}

CollectionIntensityTestPage_05(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Account No").should("be.visible");
  cy.wait(1000);

}

CollectionIntensityTestPage_06(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionIntensityTestPage_07(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionIntensityTestPage_08(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.get(this.locators.ClickonDownloadreportBtn).click();
  cy.wait(1000);


}

CollectionIntensityTestPage_09(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.contains("Product Group").should("be.visible");
  cy.wait(1000);
  cy.contains("Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Sub Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Country").should("be.visible");
  cy.wait(1000);
  cy.contains("Region").should("be.visible");
  cy.wait(1000);
  cy.contains("State").should("be.visible");
  cy.wait(1000);
  cy.contains("City").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
  cy.wait(2000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
  cy.wait(1000);
  cy.contains("BOM Bucket").should("be.visible");
  cy.wait(1000);
  cy.contains("Trail/Receipt From").should("be.visible");
  cy.wait(1000);
  cy.contains("Trail/Receipt To").should("be.visible");
  cy.wait(1000);
  // cy.contains("Agency").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Agent").should("be.visible");
  // cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
  cy.wait(10000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
  cy.wait(1000);

}

CollectionIntensityTestPage_10(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("10/01/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(5000);
  cy.get('[role="alert"]').should('have.text', 'You can only search for thirty five day trail/receipt at a time');
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).clear();
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025").click();
  cy.wait(1000);
  // cy.get(this.locators.ClickOnReceiptTo).clear();
  // cy.wait(500);
  // cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  // cy.wait(500);
  // cy.get('.today-date').click();
  // cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').should("be.visible");
  cy.wait(1000);


}

CollectionIntensityTestPage_11(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
  cy.wait(1000);
  cy.contains("Allocated Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Account No").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(500,0);
  cy.wait(1000);
  cy.contains("Date of Allocation").should("be.visible");
  cy.wait(1000);
  cy.contains("Total Dues").should("be.visible");
  cy.wait(1000);
  cy.contains("Date of 1st Call").should("be.visible");
  cy.wait(1000);
  cy.contains("Date of 1st Visit").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1000,0);
  cy.wait(1000);
  cy.contains("Time of 1st Call").should("be.visible");
  cy.wait(1000);
  cy.contains("Time of 1st Visit").should("be.visible");
  cy.wait(1000);
  cy.contains("Total Calls Till Date").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1500,0);
  cy.wait(1000);
  cy.contains("Total Visits Till Date").should("be.visible");
  cy.wait(1000);
  cy.contains("Total Collection").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Collection").should("be.visible");
  cy.wait(1000);


}

CollectionIntensityTestPage_12(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Account No").should("be.visible");
  cy.wait(1000);

}

CollectionIntensityTestPage_13(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

CollectionIntensityTestPage_14(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionIntensityTestPage_15(){


  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get(this.locators.ClickonDownloadreportBtn).click();
  cy.wait(1000);

}



CollectionTrendTestPage_01(){
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
      return false; // Prevents Cypress from failing the test
    }
  });

  cy.get(this.locators.clickonreport).click();
  cy.wait(3000);
  cy.contains("Collection Trend Report").scrollIntoView().should("be.visible");
  cy.wait(1000);

}

CollectionTrendTestPage_02(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(3000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(3000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.contains("Product Group").should("be.visible");
  cy.wait(1000);
  cy.contains("Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Sub Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Country").should("be.visible");
  cy.wait(1000);
  cy.contains("Region").should("be.visible");
  cy.wait(1000);
  cy.contains("State").should("be.visible");
  cy.wait(1000);
  cy.contains("City").should("be.visible");
  cy.wait(1000);
  cy.contains("BOM Bucket").should("be.visible");
  cy.wait(1000);
  cy.contains("Receipt From Date").should("be.visible");
  cy.wait(1000);
  cy.contains("Receipt To Date").should("be.visible");
  cy.wait(1000);
  // cy.contains("Branch").should("be.visible");
  // cy.wait(1000);
  cy.contains("Staff Name").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
  cy.wait(2000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
  cy.wait(9000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
  cy.wait(1000);

}

CollectionTrendTestPage_03(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(2000);

}

CollectionTrendTestPage_04(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
  cy.wait(1000);
  cy.contains("Allocated Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Collected Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(400,0);
  cy.wait(1000);
  cy.contains("Customer Account No").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Calls").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Visits").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(900,0);
  cy.wait(1000);
  cy.contains("Count of PTP").should("be.visible");
  cy.wait(1000);
  cy.contains("Latest Collection date within date range").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1300,0);
  cy.wait(1000);
  cy.contains("Count of receipts within date range").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1500,0);
  cy.wait(1000);
  cy.contains("Sum of Collected amount within date range").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1700,0);
  cy.wait(1000);
  cy.contains("Latest Mode of collection within date range").should("be.visible");
  cy.wait(1000);
  

}

CollectionTrendTestPage_05(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_06(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_07(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_08(){   

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.get('.form-control-group > .btn').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_09(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(9000);
  cy.get('.form-control-group > .btn').scrollIntoView().click();
  cy.wait(2000);
  cy.get('.inner-layout-container').scrollTo(0,1100);
  cy.wait(2000);


}

CollectionTrendTestPage_10(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();   
  cy.wait(9000);
  cy.get(this.locators.ClickonDownloadreportBtn).click();  
  cy.wait(3000);

}

CollectionTrendTestPage_11(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.contains("Product Group").should("be.visible");
  cy.wait(1000);
  cy.contains("Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Sub Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Country").should("be.visible");
  cy.wait(1000);
  cy.contains("Region").should("be.visible");
  cy.wait(1000);
  cy.contains("State").should("be.visible");
  cy.wait(1000);
  cy.contains("City").should("be.visible");
  cy.wait(1000);
  cy.contains("BOM Bucket").should("be.visible");
  cy.wait(1000);
  cy.contains("Receipt From Date").should("be.visible");
  cy.wait(1000);
  cy.contains("Receipt To Date").should("be.visible");
  cy.wait(1000);
  // cy.contains("Agency").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Agent").should("be.visible");
  // cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
  cy.wait(2000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
  cy.wait(10000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
  cy.wait(1000);


}

CollectionTrendTestPage_12(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(2000);


}

CollectionTrendTestPage_13(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.contains("Collector Branch/Agency Name").scrollIntoView().should("be.visible");
  cy.wait(1000);
  cy.contains("Allocated Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Collected Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(400,0);
  cy.wait(1000);
  cy.contains("Customer Account No").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Calls").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Visits").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(900,0);
  cy.wait(1000);
  cy.contains("Count of PTP").should("be.visible");
  cy.wait(1000);
  cy.contains("Latest Collection date within date range").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1300,0);
  cy.wait(1000);
  cy.contains("Count of receipts within date range").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1500,0);
  cy.wait(1000);
  cy.contains("Sum of Collected amount within date range").should("be.visible");
  cy.wait(1000);
  cy.get('.mt-4 > .card-content').scrollTo(1700,0);
  cy.wait(1000);
  cy.contains("Latest Mode of collection within date range").should("be.visible");
  cy.wait(1000);
  

}

CollectionTrendTestPage_14(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_15(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_16(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_17(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.form-control-group > .btn').scrollIntoView().should("be.visible");
  cy.wait(1000);


}

CollectionTrendTestPage_18(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.form-control-group > .btn').scrollIntoView().click();
  cy.wait(2000);
  cy.get('.inner-layout-container').scrollTo(0,1100);
  cy.wait(2000);


}

CollectionTrendTestPage_19(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCollectionTrend).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptFrom).type("01/03/2025");
  cy.wait(1000);
  cy.get(this.locators.ClickOnReceiptTo).click({force: true});
  cy.wait(500);
  cy.get('.today-date').click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();   
  cy.wait(10000);
  cy.get(this.locators.ClickonDownloadreportBtn).click();  
  cy.wait(3000);

}

VisitIntensityTestPage_01(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(3000);
  cy.contains("Visit Intensity Report").scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_02(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(3000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(3000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.contains("Product Group").should("be.visible");
  cy.wait(1000);
  cy.contains("Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Sub Product").should("be.visible");
  cy.wait(1000);
  cy.contains("Country").should("be.visible");
  cy.wait(1000);
  cy.contains("Region").should("be.visible");
  cy.wait(1000);
  cy.contains("State").should("be.visible");
  cy.wait(1000);
  cy.contains("City").should("be.visible");
  cy.wait(1000);
  cy.contains("BOM Bucket").should("be.visible");
  cy.wait(1000);
  // cy.contains("Branch").should("be.visible");
  // cy.wait(1000);
  cy.contains("Staff Name").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.disabled');
  cy.wait(2000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.disabled');
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).should('be.enabled').click();
  cy.wait(9000);
  cy.get(this.locators.ClickonDownloadreportBtn).should('be.enabled');
  cy.wait(1000);


}

VisitIntensityTestPage_03(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_04(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.inner-layout-container').scrollTo(0,1000);
  cy.wait(2000);
  cy.contains("Collector Branch/Agency Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Allocated Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Account No").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Calls").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Times No Contact").should("be.visible");
  cy.wait(1000);
  // cy.get('.mt-4 > .card-content').scrollTo(0,500);
  // cy.wait(1000);
  // cy.contains("No. of Visits").should("be.visible");
  // cy.wait(1000);
  // cy.contains("No. of Times Not Met").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Count of PTP").should("be.visible");
  // cy.wait(1000);
  // cy.get('.mt-4 > .card-content').scrollTo(1300,0);
  // cy.wait(1000);
  // cy.contains("Count of Broken PTP").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Collected Amount").should("be.visible");
  // cy.wait(1000);
 


}

VisitIntensityTestPage_05(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_06(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_07(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_08(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get(this.locators.ClickonDownloadreportBtn).click();
  cy.wait(2000);
}

VisitIntensityTestPage_09(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickBankStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.inner-layout-container').scrollTo(0,1000);
  cy.wait(2000);

}

VisitIntensityTestPage_10(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_11(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.inner-layout-container').scrollTo(0,1000);
  cy.wait(2000);
  cy.contains("Collector Branch/Agency Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Allocated Agent/Staff Name").should("be.visible");
  cy.wait(1000);
  cy.contains("Account No").should("be.visible");
  cy.wait(1000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Calls").should("be.visible");
  cy.wait(1000);
  cy.contains("No. of Times No Contact").should("be.visible");
  cy.wait(1000);
  // cy.get('.mt-4 > .card-content').scrollTo(0,500);
  // cy.wait(1000);
  // cy.contains("No. of Visits").should("be.visible");
  // cy.wait(1000);
  // cy.contains("No. of Times Not Met").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Count of PTP").should("be.visible");
  // cy.wait(1000);
  // cy.get('.mt-4 > .card-content').scrollTo(1300,0);
  // cy.wait(1000);
  // cy.contains("Count of Broken PTP").should("be.visible");
  // cy.wait(1000);
  // cy.contains("Collected Amount").should("be.visible");
  // cy.wait(1000);


}

VisitIntensityTestPage_12(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_13(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(2000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_14(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(2000);
  cy.get('.mt-4 > .card-content').scrollIntoView().should("be.visible");
  cy.wait(1000);

}

VisitIntensityTestPage_15(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(10000);
  cy.get(this.locators.ClickonDownloadreportBtn).click();
  cy.wait(2000);

}

VisitIntensityTestPage_16(){

  cy.get(this.locators.clickonreport).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnVisitIntensity).click();
  cy.wait(1000);
  cy.get(this.locators.ClickAgencyStaff_Radio).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBOMBucket).select("All");
  cy.wait(1000);
  cy.get(this.locators.ClickOnGenerateReportBtn).click();
  cy.wait(2000);
  cy.get('.inner-layout-container').scrollTo(0,1000);
  cy.wait(2000);

}



}

    
export default ReportsPage;
