import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class PayementGatewayPage {
  constructor(locators) {
    this.locators = locators;
  }

  PaymentGatewayTestPage_01() {
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
    cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").should("be.visible");
    cy.wait(2000);
  }

  PaymentGatewayTestPage_02() {
    cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
    cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get("#side-drawer-close").click();
    cy.wait(2000);
  }

  PaymentGatewayTestPage_03() {
     cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(10);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('contain.text', 'Payment Link sent successfully with reference number');
     cy.wait(2000);

  }

  PaymentGatewayTestPage_04() {

      cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(2);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Payment Link send successfully');
     cy.wait(2000);
  }

  PaymentGatewayTestPage_05() {

      cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(1011);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Payment Link send successfully');
     cy.wait(2000);

  }

  PaymentGatewayTestPage_06() {

      cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Click_New_Email).click();
    cy.wait(2000);
    cy.get(this.locators.Type_New_email).type("rahmancbm@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(10);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Payment Link sent successfully with reference number');
     cy.wait(2000);
  }

  PaymentGatewayTestPage_07() {

     cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Click_New_phno).click();
    cy.wait(2000);
    cy.get(this.locators.Type_New_phno).type(8838506890);
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(10);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Payment Link sent successfully with reference number');
     cy.wait(2000);
  }

  PaymentGatewayTestPage_08() {

      cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Click_New_Email).click();
    cy.wait(2000);
    cy.get(this.locators.Type_New_email).type("rahmancbm@yopmail.com");
    cy.wait(2000);
     cy.get(this.locators.Click_New_phno).click();
    cy.wait(2000);
    cy.get(this.locators.Type_New_phno).type(8978455623);
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(10);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click();
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Payment Link sent successfully with reference number');
     cy.wait(2000);

  }

  PaymentGatewayTestPage_09() {

      cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Click_New_Email).click();
    cy.wait(2000);
    cy.get(this.locators.Type_New_email).type("rahman@#cbm@yopmail.com");
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(10);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click({force: true});
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Special characters are not allowed in the input');
     cy.wait(2000);
  }

  PaymentGatewayTestPage_10() {

   cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Type_Amount).clear().type(10);
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click({force: true});
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Please select Payment Partner.');
     cy.wait(2000);
  }

  PaymentGatewayTestPage_11() {

   cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
    cy.get(this.locators.Type_Cus_Name).type("A");
    cy.wait(1000);
    cy.get(this.locators.Click_Search_Btn).click();
    cy.wait(5000);
   cy.get(this.locators.Click_Acc_Number).click({force: true});
    cy.wait(3000);
    cy.get(this.locators.Click_threedots).click();
    cy.wait(3000);
    cy.contains("Send Payment Link").click();
    cy.wait(2000);
    cy.get(this.locators.Click_Razorpay).click();
    cy.wait(2000);
    cy.get(this.locators.Click_Send_Btn).click({force: true});
    cy.wait(3000);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Please enter valid amount.');
     cy.wait(2000);
  }
  
}

export default PayementGatewayPage;
