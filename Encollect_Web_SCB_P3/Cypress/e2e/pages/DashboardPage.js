import { th } from '@faker-js/faker';
import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';
import 'cypress-file-upload';

class DashboardPage {
  constructor(locators) {
    this.locators = locators;
  }



DashboardTestPage_260(){

  cy.get(this.locators.CreditCardRadio).click();
   cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
  cy.contains("Customer Name").should ("be.visible");
  cy.wait(1000);
  cy.contains("Mobile Number").should ("be.visible");
  cy.wait(1000);
  cy.contains("Credit Card Last 4 Digits:").should ("be.visible");
  cy.wait(1000);
  cy.contains("Partner ID").should ("be.visible");
  cy.wait(1000);
  cy.contains("Customer ID").should ("be.visible");
  cy.wait(1000);
  cy.contains("Bucket").should ("be.visible");
  cy.wait(1000);
  cy.contains("SOC").should ("be.visible");
  cy.wait(1000);
  cy.contains("Cycle").should ("be.visible");
  cy.wait(1000);
  cy.contains("Branch Code").should ("be.visible");
  cy.wait(1000);
  // cy.contains("Status").should ("be.visible");
  // cy.wait(1000);


}
DashboardTestPage_261(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
  cy.get(this.locators.CreditCardNumber).type(4726428046987980);
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(1000);

}
DashboardTestPage_262(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
  cy.get(this.locators.CreditCardNumber).type(7990);
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(1000);

}
DashboardTestPage_263(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(1000);

}
DashboardTestPage_264(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.wait(3000);
  cy.get(this.locators.MobileNumber).type(8838506890);
  cy.wait(3000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(1000);


}
DashboardTestPage_265(){

  cy.get(this.locators.CreditCardRadio).click();
 cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Bucket").click();
    cy.wait(1000);
  cy.get(this.locators.Bucket).type(1);
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click({force : true});
  cy.wait(1000);

}
DashboardTestPage_266(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "SOC").click();
    cy.wait(1000);
  cy.get(this.locators.Soc).type(1);
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click({force : true});
  cy.wait(1000);

}
DashboardTestPage_267(){

  cy.get(this.locators.CreditCardRadio).click();
   cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Cycle").click();
    cy.wait(1000);
  cy.get(this.locators.Cycle).type(45);
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click({force : true});
  cy.wait(1000);

}
DashboardTestPage_268(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Branch Code").click();
    cy.wait(1000);
  cy.get(this.locators.BranchCode).type("CNRB0002963");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click({force : true});
  cy.wait(1000);

}
DashboardTestPage_269(){

  cy.get(this.locators.CreditCardRadio).click();
   cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Status").click();
    cy.wait(1000);
  cy.get(this.locators.Status).type("Active");
  cy.wait(3000);
  cy.get(this.locators.ClickOnSearch).click({force : true});
  cy.wait(1000);

}
DashboardTestPage_270(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer ID").click();
    cy.wait(1000);
  cy.get(this.locators.CustomerId).type(30049895);
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click({force : true});
  cy.wait(1000);

}
DashboardTestPage_271(){ 

  cy.get(this.locators.Radio_cradit_card).click();
   cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer ID").click();
    cy.wait(1000);
  cy.contains("Customer Name:").should("be.visible");
  cy.wait(2000);
  cy.contains("Mobile Number:").should("be.visible");
  cy.wait(2000);
  //cy.contains("Credit Card Last 4 digits").should("be.visible");
  cy.wait(2000);
  cy.contains("Partner ID").should("be.visible");
  cy.wait(2000);
  cy.contains("Customer ID").should("be.visible");
  cy.wait(2000);
  cy.contains("Bucket").should("be.visible");
  cy.wait(2000);
  cy.contains("SOC").should("be.visible");
  cy.wait(2000);
  cy.contains("Cycle").should("be.visible");
  cy.wait(2000);
  cy.contains("Branch Code").should("be.visible");
  cy.wait(2000);
 // cy.contains("Status").should("be.visible");

}

DashboardTestPage_272(){ 

  cy.get(this.locators.Radio_cradit_card).click();
  cy.wait(2000);
  cy.get(this.locators.Search_Button).click({force:true});
  cy.wait(3000);
  cy.contains("Please enter one of the search criteria.").should("be.visible");


}
DashboardTestPage_285(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(4000);
  //cy.contains("Customer Name").should ("be.visible");
 // cy.wait(1000);
  cy.contains("Customer ID").should ("be.visible");
  cy.wait(1000);
  cy.contains("Cust Card Number").should ("be.visible");
  cy.wait(1000);
  cy.contains("Min Amount Due").should ("be.visible");
  cy.wait(1000);
  // cy.get(':nth-child(4) > .card-content').scrollTo(500,0);
  // cy.wait(500);
  cy.contains("Month Opening Bucket").scrollIntoView().should ("be.visible");
  cy.wait(1000);
  cy.contains("TAD").scrollIntoView().should("be.visible");
  cy.wait(1000);

}

DashboardTestPage_286(){

  cy.get(this.locators.CreditCardRadio).click();
  cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(1000);
  cy.get(this.locators.clickoncustcardno).click();
  cy.wait(1000);

}

DashboardTestPage_01(){

  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.contains("Customer ID:").should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOnCustomerID).type(41174);
  cy.wait(1000);
  cy.get(this.locators.Search_Button).click();
  cy.wait(1000);
  cy.get(':nth-child(4) > .card-content').should("be.visible");
  cy.wait(1000);
  
}

DashboardTestPage_02(){

  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCustomerID).type(41174);
  cy.wait(1000);
  cy.get(this.locators.Search_Button).click();
  cy.wait(1000);
  cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

DashboardTestPage_03(){

  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnCustomerID).type(4891174);
  cy.wait(1000);
  cy.get(this.locators.Search_Button).click();
  cy.wait(1000);
  cy.get('[role="alert"]')
  .should('be.visible')
  .and('contain', 'No records were found for searched criteria. Please change the search criteria');
  cy.wait(1000);
  
}

DashboardTestPage_04(){


  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Partner ID").click();
    cy.wait(1000);
    cy.get('#search-partner-id').type("12345");
   cy.get(this.locators.ClickOnSearch).click();
   cy.wait(3000);
  
}

DashboardTestPage_05(){

  
  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Partner ID").click();
    cy.wait(1000);
    cy.get('#search-partner-id').type("12345");
   cy.get(this.locators.ClickOnSearch).click();
   cy.wait(10000);
   cy.get('[role="alert"]')
  .should('be.visible')
  .and('contain', 'No records were found for searched criteria. Please change the search criteria');
  cy.wait(1000);
  


}

DashboardTestPage_06(){

  cy.get(this.locators.Radio_cradit_card).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("Credit Card Last 4 Digits").click();
    cy.wait(1000);
  cy.get("#search-cc-number").type(4891174);
  cy.wait(1000);
  cy.get(this.locators.Search_Button).click();
  cy.wait(1000);
  cy.get('[role="alert"]')
  .should('be.visible')
  .and('contain', 'No records were found for searched criteria. Please change the search criteria');
  cy.wait(1000);
  
}

DashboardTestPage_07(){

  cy.get(this.locators.Radio_cradit_card).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
  cy.wait(1000);
  cy.contains("span.ng-option-label", "Bucket").click();
  cy.wait(1000); 
  cy.get(':nth-child(5) > .form-control-group > .form-control').type("4");
  cy.get(this.locators.Search_Button).click();
  cy.wait(1000);



}

DashboardTestPage_08(){

  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(3000);
  cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnThreeDots).click();
  cy.wait(1000);
  cy.contains("Linked Accounts").should('be.visible');
  cy.wait(1000);

}

DashboardTestPage_09(){

  cy.get(this.locators.Radio_loan_account).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(3000);
  cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnThreeDots).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnLinkedAccounts).click();
  cy.wait(1000);
  cy.get('.side-drawer-container').should("be.visible");
  cy.wait(2000);

}

DashboardTestPage_10(){

  cy.get(this.locators.Radio_loan_account).click();
   cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(3000);
  cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnThreeDots).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnLinkedAccounts).click();
  cy.wait(2000);
  cy.contains('Customer ID:').should("be.visible");
  cy.wait(1000);
  // cy.contains('Customer Name:').should("be.visible");
  // cy.wait(1000);
  // cy.contains('Account Number:').should("be.visible");
  // cy.wait(1000);
  // cy.contains('Total Overdue Amount:').should("be.visible");
  // cy.wait(1000);
  // cy.contains('Current DPD:').should("be.visible");
  // cy.wait(1000);
  // cy.contains('Product:').should("be.visible");
  // cy.wait(1000);



}

DashboardTestPage_11(){

  cy.get(this.locators.Radio_loan_account).click();
   cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(3000);
  cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnThreeDots).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnLinkedAccounts).click();
  cy.wait(2000);
  //cy.get(this.locators.ClickOnViewmore).click();
  cy.wait(2000);
  cy.contains('Customer ID:').should("be.visible");
  cy.wait(1000);
  cy.contains('Customer Name:').should("be.visible");
  cy.wait(1000);
  

}
DashboardTestPage_12(){

  cy.get(this.locators.Radio_loan_account).click();
   cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Customer Name").click();
    cy.wait(1000);
  cy.get(this.locators.CustomerName).type("a");
  cy.wait(1000);
  cy.get(this.locators.ClickOnSearch).click();
  cy.wait(3000);
  cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnThreeDots).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnLinkedAccounts).click();
  cy.wait(4000);
  cy.get(this.locators.ClickOnSidebarClose).click();
  cy.wait(2000);

}

DashboardTestPage_1084(){

cy.get(this.locators.Radio_cradit_card).click();
cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
cy.wait(1000);
cy.get('#search-cc-number').type(799);
cy.wait(300);
//cy.contains("Credit Card Number is Invalid.").should("be.visible");
//cy.wait(1000);
cy.get('#search-cc-number').clear().type(7990);
cy.wait(1000);
cy.get('#search-submit-button').click();
cy.wait(3000);
cy.contains("Cust Card Number").should("be.visible")
cy.wait(2000);

}

DashboardTestPage_1388(){

  cy.get(this.locators.Radio_cradit_card).click();
  cy.wait(1000);
  cy.get(".ng-arrow-wrapper").click();
    cy.wait(1000);
    cy.contains("span.ng-option-label", "Credit Card Last 4 Digits").click();
    cy.wait(1000);
  cy.get('#search-cc-number').type(799);
  cy.wait(300);
  //cy.contains("Credit Card Number is Invalid.").should("be.visible");
  //cy.wait(1000);
  cy.get('#search-cc-number').clear().type(7990);
  cy.wait(1000);
  cy.get('#search-submit-button').click();
  cy.wait(3000);
  cy.contains("Cust Card Number").should("be.visible")
  cy.wait(2000);


}



}

export default DashboardPage;