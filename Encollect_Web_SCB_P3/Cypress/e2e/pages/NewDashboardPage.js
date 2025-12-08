import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
const path = require("path");

class DashboardPage {
  constructor(locators) {
    this.locators = locators;
  }

  NewDashboardTestPage_01() {
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(3000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(2000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
    cy.contains("Credit Card Last 4 Digits").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(1000);
    cy.contains("Please enter one of the search criteria").should("be.visible");
    cy.wait(2000);
  }

  NewDashboardTestPage_02() {
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.contains("Customer Name:").should("be.visible");
    cy.wait(1000);
    cy.contains("Mobile Number:").should("be.visible");
    cy.wait(1000);
    cy.contains("Account Number:").should("be.visible");
    cy.wait(1000);
  }

  NewDashboardTestPage_04() {

    cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
    cy.get(this.locators.Type_CC_LastDigit).type("7990");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
    cy.contains("Cust Card Number").should("be.visible");
    cy.wait(1000);
  }

  NewDashboardTestPage_05() {
     cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("Arun");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
    // cy.contains("Customer Name").should("be.visible");
    // cy.wait(1000);
    cy.contains("Customer ID").should("be.visible");
    cy.wait(1000);
  }

  NewDashboardTestPage_07() {
     cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Bucket").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    cy.get(this.locators.Type_Bucket).type("1");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
  }

  NewDashboardTestPage_08() {
      cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "SOC").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    // cy.get(this.locators.Type_SOC).type("1");
    // cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
  }

  NewDashboardTestPage_09() {
    
      cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Cycle").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    cy.get(this.locators.Type_Cycle).type("45");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
  }

  NewDashboardTestPage_10() {
      cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Branch Code").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    // cy.get(this.locators.Type_BranchCode).type("45");
    // cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
  }

  NewDashboardTestPage_11() {
      cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Status").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    // cy.get(this.locators.Type_Status).type("45");
    // cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
  }

  NewDashboardTestPage_12() {
      cy.wait(3000)
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer ID").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_ID).type("4545460");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
    cy.get('#grid-table > thead > tr > :nth-child(2)').contains("Customer ID").should("be.visible");
    cy.wait(2000);
  }

  NewDashboardTestPage_14() {
    cy.get(this.locators.ClickOnCredit_Radio_btn).click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cuc_Name).type("a");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({ force: true });
    cy.wait(3000);
    // cy.contains("Customer Name").should("be.visible");
    // cy.wait(1000);
    cy.contains("Customer ID").should("be.visible");
    cy.wait(1000);
    cy.contains("Cust Card Number").should("be.visible");
    cy.wait(1000);
    cy.contains("Min Amount Due").should("be.visible");
    cy.wait(1000);
  }
}

export default DashboardPage;
