import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
require ('@4tw/cypress-drag-drop')

class ReportsPage {
  constructor(locators) {
    this.locators = locators;
  }

  ReportsModule(){
    cy.wait(1000);
    cy.get(this.locators.clickonreports).click();
  }

  PaymentReport302(){
    cy.wait(5000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.receiptFrom).type('01/12/2023',{force:true});
    cy.wait(1000);
    cy.get(this.locators.receiptTo).type("21/02/2025");
    cy.wait(2000);
    //cy.get(this.locators.generateReport).click({force:true});
  }

  PaymentReport303(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.receiptFrom).type('01/12/2023',{force:true});
    cy.wait(1000);
    cy.get(this.locators.receiptTo).type("21/02/2025").click();
    cy.wait(2000);
    // cy.get(this.locators.generateReport).click({force:true});
    // cy.wait(2000);
    // cy.get(this.locators.downloadreport).click();

  }

  PaymentReport342(){
    cy.wait(1000);
    cy.get(this.locators.performancesreport).click();
    cy.wait(1000);
    cy.get(this.locators.receiptFrom).type('01/12/2023',{force:true});
    cy.wait(1000);
    cy.get(this.locators.receiptTo).type("21/02/2025");
    cy.wait(2000);
    // cy.get(this.locators.generateReport).click({force:true});
    // cy.wait(2000);
    // cy.get(this.locators.downloadreport).click();


  }

  PaymentReport304(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.product_group_dropdown).select('All', {force :true});
    cy.wait(1000);
    cy.get('select[name="Product"]').select("All");
  }

  PaymentReport305(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.product_group_dropdown).select('All' ,{force :true});
    cy.wait(1000);
    cy.get(this.locators.product_dropdown).select("All");
    cy.wait(1000);
    cy.get(this.locators.subproduct_dropdown).select("All");

  }

  PaymentReport306(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.bom_bucket_dropdown).select("All");

  }

  PaymentReport307(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.country_dropdown).select('INDIA' , {force :true});
  }

  PaymentReport309(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.country_dropdown).select('INDIA' , {force :true});
    cy.wait(1000);
    cy.get(this.locators.region_dropdown).select('West' , {force :true});
  }

  PaymentReport308(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.country_dropdown).select('INDIA' , {force :true});
    cy.wait(1000);
    cy.get(this.locators.region_dropdown).select('West' , {force :true});
    cy.wait(1000);
    cy.get(this.locators.state_dropdown).select('All' , {force :true});
  }

  PaymentReport310(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.country_dropdown).select('INDIA' , {force :true});
    cy.wait(1000);
    cy.get(this.locators.region_dropdown).select('West' , {force :true});
    cy.wait(1000);
    cy.get(this.locators.state_dropdown).select('All' , {force :true});
    cy.wait(1000);
    cy.get(this.locators.city_dropdown).select('All' , {force :true});

  }

  PaymentReport311(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.receiptFrom).type('01/12/2023',{force:true});
    cy.wait(1000);
    cy.get(this.locators.receiptTo).type("21/02/2025");
    cy.wait(2000);
    cy.get(this.locators.branch).type("ALL");
    cy.wait(1000);
    // cy.get(this.locators.generateReport).click({force:true});
    // cy.wait(1000);
    // cy.scrollTo('bottom');
  }

  PaymentReport312(){
    cy.wait(1000);
    cy.get(this.locators.paymentreport).click();
    cy.wait(1000);
    cy.get(this.locators.agencystaff_radiobtn).click({force:true});
    cy.wait(1000);
    cy.get(this.locators.receiptFrom).type('01/12/2023',{force:true});
    cy.wait(1000);
    cy.get(this.locators.receiptTo).type("21/02/2025");
    cy.wait(2000);
    cy.get(this.locators.agency).type("TestFriday");
    cy.wait(1000);
    cy.get('#ngb-typeahead-1-0').click();
    cy.wait(1000);
    // cy.get(this.locators.generateReport).click({force:true});
    // cy.get(1000)
    // cy.scrollTo('bottom');
  }
  PaymentReport313(){
    cy.get(this.locators.clickonAccountDashboardReport).click();
    cy.wait(400);
    cy.get(':nth-child(1) > :nth-child(1) > label').should("be.visible");
    cy.wait(400);
    cy.get(this.locators.ProductGrpoupselect).select("All", {force: true} ).should("be.visible");
    cy.wait(400);
    cy.get(':nth-child(1) > :nth-child(2) > label').should("be.visible");
    cy.wait(400);
    cy.get(this.locators.ProductSelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(':nth-child(3) > label').should("be.visible");
    cy.wait(400);
    cy.get(this.locators.CountrySelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.RegionSelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.StateSelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.CitySelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.CitySelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.BranchSelect).type("aa");
    cy.wait(400);
    //cy.get(':nth-child(3) > .form-group > :nth-child(1)').select("Trade Centre");
    //cy.wait(400);
    cy.get(this.locators.BOMBucketslect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.Agencyslect).type("a",{force: true}).should("be.visible");
    cy.wait(400);
    //cy.get('#ngb-typeahead-1-0').select("Arun");
    cy.wait(400);
    cy.get(this.locators.AllocationOwnerName).type("a").should("be.visible");
    cy.wait(400);
    //cy.get('#ngb-typeahead-1-0').select("Admin-ADMIN Two");
    // cy.wait(400);
    // cy.get(':nth-child(3) > .form-group > :nth-child(1)').click({force: true});
    // cy.wait(400);


  }
  PaymentReport314(){
    cy.get(this.locators.clickonAccountDashboardReport).click();
    cy.wait(400);
    cy.get(':nth-child(1) > :nth-child(1) > label').should("be.visible");
    cy.wait(400);
    cy.get(this.locators.ProductGrpoupselect).select("All", {force: true} ).should("be.visible");
    cy.wait(400);
    cy.get(':nth-child(1) > :nth-child(2) > label').should("be.visible");
    cy.wait(400);
    cy.get(this.locators.ProductSelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(':nth-child(3) > label').should("be.visible");
    cy.wait(400);
    cy.get(this.locators.CountrySelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.RegionSelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.StateSelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.CitySelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.CitySelect).select("All").should("be.visible");
    cy.wait(400);
    cy.get(this.locators.BranchSelect).type("a");
    cy.wait(400);
    //cy.get(':nth-child(3) > .form-group > :nth-child(1)').select("Trade Centre");
    //cy.wait(400);
    cy.get(this.locators.BOMBucketslect).select("All").should("be.visible");
    cy.wait(400);
    // cy.get(this.locators.Agencyslect).type("a",{force: true}).should("be.visible");
    // cy.wait(400);
    // cy.get('#ngb-typeahead-1-0').select("Arun");
    // cy.wait(400);
    // cy.get(this.locators.AllocationOwnerName).type("Admin").should("be.visible");
    // cy.wait(400);
    // cy.get("div[class='ng-star-inserted']").click();
    // cy.wait(400);
    // cy.get(':nth-child(3) > .form-group > :nth-child(1)').click();
    // cy.wait(400);

    


}
}
export default ReportsPage;
