
class ReportsPage {
  constructor(locators) {
    this.locators = locators;
  }
TC_POS_001(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.buckets).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(`${this.locators.buckets} input`).type("3+", { force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "3+").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.generate).click();


}
TC_POS_002(){
   cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get("#agencyUserRadio").click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.buckets).type("3+");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.buckets).type("3");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.generate).click();



}
TC_POS_006(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).click({ force: true });
  cy.wait(2000);
  // cy.get(this.locators.dropdown_arrow).click({force:true});
  // cy.wait(2000);
  cy.get('.ng-option-label').should('not.contain', '4+');

}

TC_POS_008(){
   cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.buckets).type("1");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").click();
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('SMA-0').scrollIntoView().should('be.visible');



}

TC_POS_009(){
   cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("2");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('SMA-1').scrollIntoView().should('be.visible');

}

TC_POS_010(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get('.ng-option-label').first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("3");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });;
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("HL");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Loan Products");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Pg");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("CreditCard");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('SMA-2').scrollIntoView().should('be.visible');

}

TC_POS_011(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get('.ng-option-label').first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("3");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });;
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("HL");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Loan Products");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Pg");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("CreditCard");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('NPA').scrollIntoView().should('be.visible');

}

TC_POS_003(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("2");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click({force: true});
  cy.wait(2000);
  cy.contains('Search Result').scrollIntoView().should('be.visible');



}
TC_POS_004(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get("#agencyUserRadio").click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("2");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('Search Result').scrollIntoView().should('be.visible');



}
TC_POS_012(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
   cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("0");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();



}
TC_POS_017(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get('.ng-option-label').first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("3");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });;
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("HL");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Loan Products");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Pg");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("CreditCard");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('Search Result').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.contains('SMA-0').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.contains('SMA-1').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.contains('SMA-2').scrollIntoView().should('be.visible');
  cy.wait(2000);
  cy.contains('NPA').scrollIntoView().should('be.visible');
  cy.wait(2000);

}
TC_POS_015(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Cards");
  cy.wait(2000);
  cy.get('.ng-option-label').first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.buckets).type("3");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });;
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Consumer Loan");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.country).type("India");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("HL");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Loan Products");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("Pg");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.productGroup).type("CreditCard");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.Region).type("North");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.dropdown_arrow).click();
  cy.wait(2000);
  cy.get(this.locators.Region).type("South");
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click();
  cy.wait(2000);
  cy.contains('Search Result').scrollIntoView().should('be.visible');
  cy.wait(2000);

}

TC_NGS_026(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Performance).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.generate).click({force:true});
  cy.wait(2000);
  cy.contains('Error!').scrollIntoView().should('be.visible');
  cy.wait(2000);
 

  
}


TC_001(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On X days of delayed deposit");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click();



}

TC_002(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On X days of delayed deposit");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.download_button).click({forec:true});



}

TC_006(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.contains('Communication From Date').should('exist');
  cy.contains('Communication To Date').should('exist');
  cy.contains('Trigger Type').should('exist');
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
   cy.contains('Info!').should('exist');
   cy.contains('No Results').should('exist');
 
 
}

TC_007(){

  cy.contains("Reports").click({force:true});
  cy.wait(2000);
  cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date)
  .first()
  .clear()
  .type("01/12/2025", { force: true });

cy.get(this.locators.Communication_To_Date)
  .last()
  .clear()
  .type("03/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On X days of delayed deposit");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.contains('Summary Details').should('exist');
}


TC_008(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("05/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.contains('You can only search for 3 days at a time').should('be.visible');


}

TC_009(){
   cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.contains('Communication To Date must be greater than or equal to Communication From Date').should('be.visible');


}

TC_012(){
    cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype)
  .first()
  .find('option')
  .then(options => {
    [...options].forEach(option => {
      cy.log(option.text);
      cy.log(option.value);
    });
  });
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.contains('Summary Details').should('exist');


}

TC_013(){
   cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
   cy.get("select[id='triggerType'] option:nth-child(1)").click({force: true});
  const options = [
  "On X days of delayed deposit",
  "On Xth day before due date",
  "On Xth day after statement date",
  "On X DPD",
  "On PTP Date",
  "On Broken PTP",
  "On Agency allocation change"
];

options.forEach(option => {
  cy.contains(option).should('be.visible');
});


}
TC_014(){
   cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
   cy.get("select[id='triggerType'] option:nth-child(1)").click({force: true});
  const options = [
  "On X days of delayed deposit",
  "On Xth day before due date",
  "On Xth day after statement date",
  "On X DPD",
  "On PTP Date",
  "On Broken PTP",
  "On Agency allocation change"
];

options.forEach(option => {
  cy.contains(option).should('be.visible');
});


}

TC_015(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On X days of delayed deposit");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  

}

TC_016(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/202578");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/202589");
  cy.wait(2000);
  
  

}
TC_017(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.contains('Summary Details').should('exist');


const columns = [
  "Communication Trigger Date",
  "Trigger Name",
  "Trigger Type",
  "Variable Definition",
  "Channel Type",
  "Template Name",
  "Recipient Type",
  "Accounts Picked",
  "Communication Sent",
  "In Error",
  "Delivered",
  "Read",
  "Pending Delivery",
  "Error %",
  "Delivery %",
  "Read %",
  "Pending Delivery %"
];

columns.forEach(col => {
  cy.contains('th', col)
    .scrollIntoView()
    .should('be.visible');
});

}

TC_018(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.contains('body', 'Loading...', { timeout: 0 }).should('exist');
  cy.contains('body', 'Loading...', { timeout: 10000 }).should('not.exist');


}

TC_019(){
  cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025", {force:true});
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On Xth day after statement date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.contains('Info!').should('exist');
  cy.contains('No Results').should('exist');


}
TC_020() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date)
    .type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date)
    .type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype)
    .select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(2000);

  const numericColumns = [
    'Accounts Picked',
    'Communication Sent',
    'In Error',
    'Delivered',
    'Read',
    'Pending Delivery',
    'Error %',
    'Delivery %',
    'Read %',
    'Pending Delivery %'
  ];

  numericColumns.forEach(col => {
    cy.contains('th', col)
      .invoke('index')
      .then((index) => {
        cy.get(`tbody tr td:nth-child(${index + 1})`)
          .each($cell => {
            cy.wrap($cell)
              .invoke('css', 'text-align')
              .should('match', /right|start/);
          });
      });
  });
}

  TC_021() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date)
    .type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date)
    .type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button).click({ force: true });
  cy.wait(3000);

 cy.contains('th', 'Trigger Date').click();
cy.wait(2000);

const dates = [];

cy.get('tbody tr td:nth-child(1)').each($cell => {
  const text = $cell.text().trim();

  if (text) {
    const [day, month, year] = text.split('/');
    dates.push(new Date(year, month - 1, day).getTime());
  }
}).then(() => {
  for (let i = 0; i < dates.length - 1; i++) {
    expect(dates[i]).to.be.at.most(dates[i + 1]);
  }
});
}

TC_022() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date)
    .type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date)
    .type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype)
    .select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);

  const numericColumns = [
    'Accounts Picked',
    'Communication Sent',
    'In Error',
    'Delivered',
    'Read',
    'Pending Delivery',
    'Error %',
    'Delivery %',
    'Read %',
    'Pending Delivery %'
  ];

  numericColumns.forEach(columnName => {
    cy.contains('th', columnName)
      .invoke('index')
      .then(index => {
        cy.get(`tbody tr td:nth-child(${index + 1})`)
          .each($cell => {
            cy.wrap($cell)
              .invoke('css', 'text-align')
              .should('match', /right|start/);
          });
      });
  });
}

TC_023() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date)
    .type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date)
    .type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype)
    .select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);

  const numericColumns = [
    'Accounts Picked',
    'Communication Sent',
    'In Error',
    'Delivered',
    'Read',
    'Pending Delivery',
    'Error %',
    'Delivery %',
    'Read %',
    'Pending Delivery %'
  ];

  numericColumns.forEach(columnName => {
    cy.contains('th', columnName)
      .invoke('index')
      .then(index => {
        cy.get(`tbody tr td:nth-child(${index + 1})`)
          .each($cell => {
            cy.wrap($cell)
              .should('have.css', 'color')
              .and('match', /rgb\(0,\s*0,\s*0\)/);
          });
      });
  });
}


TC_024() {
 
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date)
    .type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date)
    .type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype)
    .select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);

  // Reduce browser width to force horizontal overflow
  cy.viewport(800, 700);
  cy.wait(2000);

  // Use actual scrollable grid wrapper (example selectors)
  cy.get(':nth-child(5) > .card-content, .table-responsive, .ag-body-viewport')
    .first()
    .should($el => {
      expect($el[0].scrollWidth).to.be.greaterThan($el[0].clientWidth);
    });



}



TC_030() {

  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date).type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date).type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button).click({ force: true });
  cy.wait(3000);
cy.contains('Summary Details').scrollIntoView().should('be.visible');

cy.contains('Average Delivery Rate').scrollIntoView().should('be.visible');

cy.contains('Average Read Rate').scrollIntoView().should('be.visible');

cy.contains('Average Error Rate').scrollIntoView().should('be.visible');

cy.contains('Average Pending Delivery Rate').scrollIntoView().should('be.visible');
cy.wait(2000);
 cy.get(this.locators.Triggertype).select("On X days of delayed deposit");
 cy.wait(2000);
cy.get(this.locators.Generate_button).click({ force: true });
  cy.wait(3000);
cy.contains('Summary Details').scrollIntoView().should('be.visible');

cy.contains('Average Delivery Rate').scrollIntoView().should('be.visible');

cy.contains('Average Read Rate').scrollIntoView().should('be.visible');

cy.contains('Average Error Rate').scrollIntoView().should('be.visible');

cy.contains('Average Pending Delivery Rate').scrollIntoView().should('be.visible');



}

TC_032() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.contains('Summary Details').should('not.exist');
  cy.get(this.locators.Communication_From_Date).type("01/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date) .type("03/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({ force: true });
  cy.wait(3000);
  cy.contains('Summary Details').scrollIntoView().should('be.visible');
}
TC_033() {
    cy.contains("Reports").click({force:true});
  cy.wait(2000);
cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025");
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On X days of delayed deposit");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.download_button).should('be.visible').click({ force: true });
  
}
TC_043() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).dblclick({ force: true });
  cy.get(this.locators.Generate_button).should('be.disabled');
  cy.contains('Summary Details', { timeout: 10000 }).should('be.visible');
}
TC_047() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date).type("01/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_To_Date).type("03/12/2025", { force: true });
  cy.wait(2000);
  cy.get(this.locators.Triggertype).select("On PTP Date");
  cy.wait(2000);
  cy.get(this.locators.Generate_button).dblclick({ force: true });
  cy.contains('Summary Details').should('not.exist');
  cy.get(this.locators.First_Page).should('have.class', 'disabled');
  cy.get(this.locators.Last_Page).should('have.class', 'disabled');
}


 TC_048() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_From_Date)
    .type("01/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Communication_To_Date)
    .type("03/12/2025", { force: true });
  cy.wait(2000);

  cy.get(this.locators.Triggertype)
    .select("On PTP Date");
  cy.wait(2000);

  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);


  const summaryLabels = [
    'Average Delivery Rate',
    'Average Read Rate',
    'Average Error Rate',
    'Average Pending Delivery Rate'
  ];

  summaryLabels.forEach(label => {
    cy.contains('.insight-cards-container', label)
      .scrollIntoView()
      .should('be.visible')
      .parent()                 // go to card container
      .invoke('text')
      .then(text => {
        const match = text.match(/\d+\.\d{2}%/);
        expect(match, `${label} should have value with 2 decimals`).to.not.be.null;
      });
  });
}


 TC_049() {
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
 cy.get(this.locators.Communication_From_Date)
  .closest('div')
  .find('label')
  .should('have.class', 'required');

cy.get(this.locators.Communication_To_Date)
  .closest('div')
  .find('label')
  .should('have.class', 'required');

cy.get(this.locators.Triggertype)
  .closest('div')
  .find('label')
  .should('have.class', 'required');



 }

 TC_050() {

  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.Generate_button).then(($generate) => {
    const generateTop = $generate[0].getBoundingClientRect().top;

    cy.get(this.locators.download_button).then(($download) => {
      const downloadTop = $download[0].getBoundingClientRect().top;

      expect(Math.abs(generateTop - downloadTop)).to.be.lessThan(3);
    });
  });

 }

 TC_051() {

  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
cy.get(this.locators.Communication_From_Date).click({ force: true });
cy.get('.bs-datepicker-body')
  .should('be.visible');
cy.get(this.locators.Communication_To_Date).click({ force: true });
cy.get('.bs-datepicker-body')
  .should('be.visible');

 }

 TC_053(){
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get('label').each(($label) => {
    cy.wrap($label)
      .should('be.visible')
      .and('not.have.css', 'color', 'rgba(0, 0, 0, 0)');
  });
 }

 TC_025(){
  
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date)
    .type('01/12/2025', { force: true });
  cy.get(this.locators.Communication_To_Date)
    .type('03/12/2025', { force: true });
  cy.get(this.locators.Triggertype)
    .select('On PTP Date');
  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.get('table tbody tr')
    .should('have.length.greaterThan', 0);
  cy.reload();
  cy.get('table tbody tr')
    .should('have.length', 0);



}



 TC_026(){
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Communication_From_Date)
    .type('01/12/2025', { force: true });

  cy.get(this.locators.Communication_To_Date)
    .type('03/12/2025', { force: true });

  cy.get(this.locators.Triggertype)
    .select('On PTP Date');
  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.get('tbody > tr')
    .should('have.length.greaterThan', 0);
  cy.get('tbody > tr').each(($row) => {
    cy.wrap($row)
      .find(':nth-child(9)')
      .invoke('text')
      .then((text) => {
        const value = text.replace(/,/g, '').trim();
        expect(value).to.match(/^\d+$/);
      });
  });

 }

 TC_027(){
   cy.get(this.locators.clickreports).click({ force: true });
 cy.contains("Communication History Report").click({ force: true });

 cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(1) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('01/12/2025', { force: true });


cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(2) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('03/12/2025', { force: true });


  cy.get(this.locators.Triggertype)
    .select('On PTP Date');

  cy.get(this.locators.Generate_button)
    .click({ force: true });


  let totalSent = 0;
  let avgDeliveryRate = 0;
  cy.get('.purple-card')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      totalSent = Number(text.replace(/[^0-9]/g, ''));
    });
  cy.get('.green-card')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      avgDeliveryRate = Number(text.replace('%', '').replace(/[^0-9.]/g, ''));
    });
  cy.then(() => {

    if (totalSent === 0) {
      expect(avgDeliveryRate).to.eq(0);
    }

    else {
      expect(avgDeliveryRate).to.be.at.least(0);
      expect(avgDeliveryRate).to.be.at.most(100);
    }

  });

 }

 TC_028(){
   let totalSent = 0;
  let avgReadRate = 0;
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(1) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('01/12/2025', { force: true });
cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(2) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('03/12/2025', { force: true });
  cy.get(this.locators.Triggertype)
    .select('On PTP Date');
  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);
cy.contains('Total Communications Sent')
  .closest('.purple-card')
  .invoke('text')
  .then((text) => {
    totalSent = Number(text.replace(/\D/g, '').trim());
    expect(totalSent).to.be.greaterThan(0);
  });
cy.contains('Average Read Rate')
  .closest('.blue-card')
  .invoke('text')
  .then((text) => {
    const match = text.match(/[\d.]+/);
    avgReadRate = match ? Number(match[0]) : 0;
  })
  .then(() => {
    expect(avgReadRate).to.eq(0.00);
  });

 }

 TC_029(){

  let totalSent = 0;
  let avgErrorRate = 0;

  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);

 cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
   cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(1) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('01/12/2025', { force: true });
cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(2) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('03/12/2025', { force: true });
  cy.get(this.locators.Triggertype)
    .select('On PTP Date');
  cy.get(this.locators.Generate_button)
    .click({ force: true });
    cy.wait(2000);
  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);
  cy.contains('Total Communications Sent')
    .closest('.purple-card')
    .invoke('text')
    .then((text) => {
      totalSent = Number(text.replace(/\D/g, '').trim());
      expect(totalSent).to.be.greaterThan(0);
    });

  cy.contains('Average Error Rate')
    .closest('.red-card')
    .invoke('text')
    .then((text) => {
      const match = text.match(/[\d.]+/);
      avgErrorRate = match ? Number(match[0]) : 0;
    })
    .then(() => {
      expect(avgErrorRate).to.eq(0.00);
    });
  }


  TC_030(){
    
  let totalSent = 0;
  let avgPendingRate = 0;
  cy.get(this.locators.clickreports).click({ force: true });
  cy.wait(2000);
  cy.contains("Communication History Report").click({ force: true });
  cy.wait(2000);
  cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(1) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('01/12/2025', { force: true });
  cy.get('.card-content')
  .find(':nth-child(1) > .row > :nth-child(2) input.form-control')
  .should('have.length', 1)
  .clear()
  .type('03/12/2025', { force: true });
  cy.get(this.locators.Triggertype)
    .select('On PTP Date');
  cy.get(this.locators.Generate_button)
    .click({ force: true });
  cy.wait(3000);
  cy.contains('Total Communications Sent')
    .closest('.purple-card')
    .invoke('text')
    .then((text) => {
      totalSent = Number(text.replace(/\D/g, '').trim());
      expect(totalSent).to.be.greaterThan(0);
    });

  cy.contains('Average Pending Delivery Rate')
    .closest('.orange-card')
    .invoke('text')
    .then((text) => {
      const match = text.match(/[\d.]+/);
      avgPendingRate = match ? Number(match[0]) : 0;
    })
    .then(() => {
      expect(avgPendingRate).to.eq(0.00);
    });
  }

























}
 
export default ReportsPage;