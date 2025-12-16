import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class RepoPage {
  constructor(locators) {
    this.locators = locators;
  }

RepoTestPage_01(){

  cy.get(this.locators.ClickOn_Repo).contains("Repossession").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_02(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).contains("Request Repossession").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_03(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.contains('Request Repossession').should("be.visible");
  cy.wait(2000);

}

RepoTestPage_04(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
   cy.contains('Request Repossession').should("be.visible");
  cy.wait(2000);
   cy.contains('Account Number').should("be.visible");
  cy.wait(2000);
   cy.contains('Vehicle Registration Number').should("be.visible");
  cy.wait(2000);
}

RepoTestPage_05(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_SubmitBtn).contains("Clear").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_06(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_SubmitBtn).contains("Search").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_07(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).should("be.disabled");
  cy.wait(2000);

}

RepoTestPage_08(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).should("be.enabled");
  cy.wait(2000);
}

RepoTestPage_09(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_ClearBtn).should("be.enabled");
  cy.wait(2000);
}

RepoTestPage_10(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).should("be.enabled");
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);

}

RepoTestPage_11(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.contains('Account Number').should("be.visible");
  cy.wait(2000);
  cy.contains('Customer ID').should("be.visible");
  cy.wait(2000);
  cy.contains('Customer Name').should("be.visible");
  cy.wait(2000);
  cy.contains('Total Outstanding (₹)').should("be.visible");
  cy.wait(2000);
  cy.contains('Bucket').should("be.visible");
  cy.wait(2000);

}

RepoTestPage_12(){

  
   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.get('tr.ng-star-inserted > .link').contains(1667).should("be.visible");
  cy.wait(1000);

}

RepoTestPage_13(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.get('tr.ng-star-inserted > .link').click();
  cy.wait(3000);
  cy.contains('Account Details').should("be.visible");
  cy.wait(2000);

}

RepoTestPage_14(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.get('tr.ng-star-inserted > .link').click();
  cy.wait(3000);
  cy.contains('Account Details').should("be.visible");
  cy.wait(2000);
  cy.contains('1667').should("be.visible");
  cy.wait(2000);
}

RepoTestPage_15(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);
  
}

RepoTestPage_16(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.get(':nth-child(3) > .flex-grow-1').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .form-check-input').click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get(':nth-child(3) > .flex-grow-1').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_17(){

  
   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains('Search Results').should("be.visible");
  cy.wait(2000);
  cy.get('#config-button').click();
  cy.wait(2000);
cy.get('[role="alert"]').should('contain', 'A repossession request for this account 1667 has already been created and is still open.');
cy.wait(2000);

}

RepoTestPage_18(){

 cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).contains("My Requests").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_19(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
  cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
}

RepoTestPage_20(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Summary Of Open Repossession").should("be.visible");
  cy.wait(1000);
   cy.contains("Summary Of Closed Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_21(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").should("be.visible");
  cy.wait(1000);
   cy.contains("Pending Repo Confirmation").should("be.visible");
  cy.wait(1000);
   cy.contains("Pending Repossession").should("be.visible");
  cy.wait(1000);
   cy.contains("Pending Repo Authorization").should("be.visible");
  cy.wait(1000);
   cy.contains("Pending PreSeizure Notice Dispatch").should("be.visible");
  cy.wait(1000);
   cy.contains("Total").should("be.visible");
  cy.wait(1000);
}

RepoTestPage_22(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").should("be.visible");
  cy.wait(1000);
   cy.contains("Vehicle Released").should("be.visible");
  cy.wait(1000);
   cy.contains("Case Closed").should("be.visible");
  cy.wait(1000);
   cy.contains("Request Rejected").should("be.visible");
  cy.wait(1000);
cy.contains("Total").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_23(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_24(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_25(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_26(){

  
   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);


}

RepoTestPage_27(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);
}

RepoTestPage_28(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

   cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_29(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

   cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);


}

RepoTestPage_30(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_31(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);
}

RepoTestPage_32(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);
}

RepoTestPage_33(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_34(){

  
   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);
  
}

RepoTestPage_35(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_36(){

  
   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })


}

RepoTestPage_37(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

  
}

RepoTestPage_38(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_39(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);
  
}

RepoTestPage_40(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);
}

RepoTestPage_41(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_42(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
  cy.contains(/You are viewing \d+ Pending Sale \/ Release \/ Revaluation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);
}

RepoTestPage_43(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
}

RepoTestPage_44(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_45(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_46(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_47(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);

}

RepoTestPage_48(){

  
   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

  cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);


}

RepoTestPage_49(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

  cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_50(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_51(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_52(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_53(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_54(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);
}

RepoTestPage_55(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_56(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })


}

RepoTestPage_57(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_58(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_59(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_60(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_61(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_62(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
 cy.contains(/You are viewing \d+ Pending Repo Confirmation Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);
  
}

RepoTestPage_63(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_64(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_65(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_66(){
  
    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_67(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);
}

RepoTestPage_68(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_69(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_70(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_71(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_72(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_73(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_74(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);

}

RepoTestPage_75(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_76(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })

}

RepoTestPage_77(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_78(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_79(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_80(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_81(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_82(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repossession").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repossession Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);
  
}

RepoTestPage_83(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_84(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_85(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_86(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_87(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);

}

RepoTestPage_88(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_89(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_90(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_91(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_92(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_93(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_94(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);

}

RepoTestPage_95(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_96(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })
}

RepoTestPage_97(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_98(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_99(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_100(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);
}

RepoTestPage_101(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_102(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending Repo Authorization Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);
  
}

RepoTestPage_103(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_104(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_105(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_106(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_107(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);

}

RepoTestPage_108(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_109(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_110(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_111(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_112(){

      cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_113(){

      cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_114(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);

}

RepoTestPage_115(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_116(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })

}

RepoTestPage_117(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_118(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_119(){

      cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_120(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_121(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_122(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Pending PreSeizure Notice Dispatch Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);
  
}

RepoTestPage_123(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_124(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_125(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_126(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_127(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);

}

RepoTestPage_128(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_129(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_130(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_131(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_132(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_133(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_134(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);

}

RepoTestPage_135(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_136(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })

}

RepoTestPage_137(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_138(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_139(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_140(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_141(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_142(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Vehicle Released").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Vehicle Released Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);
  
}

RepoTestPage_143(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_144(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_145(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_146(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_147(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);
}

RepoTestPage_148(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_149(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_150(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_151(){

       cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_152(){

      cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

 cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_153(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_154(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);

}

RepoTestPage_155(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_156(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })

}

RepoTestPage_157(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_158(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_159(){

      cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_160(){

      cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_161(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_162(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Case Closed").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Case Closed Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);

}

RepoTestPage_163(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

}

RepoTestPage_164(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.contains("Repossession Request ID").should("be.visible");
  cy.wait(1000);
   cy.contains("Account Number").should("be.visible");
  cy.wait(1000);
   cy.contains("Customer Name").should("be.visible");
  cy.wait(1000);
   cy.contains("Current Status").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_165(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).should("be.visible");
  cy.wait(2000);

}

RepoTestPage_166(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);

}

RepoTestPage_167(){

       cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
   cy.contains("Customer Name").click();
  cy.wait(1000);
    cy.contains("Current Status").click();
  cy.wait(1000);
    cy.contains("Vehicle Registration Numbe").click();
  cy.wait(1000);
    cy.contains("Make").click();
  cy.wait(1000);
    cy.contains("Model").click();
  cy.wait(1000);
    cy.contains("Chassis Number").click();
  cy.wait(1000);

}

RepoTestPage_168(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Customer Name").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(1) > .dropdown-item > .flex-grow-1').contains("Customer Name").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Customer Name").should("not.exist");
  cy.wait(2000);

}

RepoTestPage_169(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get('.card-content').contains("Current Status").should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > .dropdown-item > .flex-grow-1').contains("Current Status").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Current Status").should("not.exist");
  cy.wait(2000);
}

RepoTestPage_170(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(3) > .dropdown-item > .flex-grow-1').contains("Vehicle Registration Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Vehicle Registration Number").scrollIntoView().should("be.visible");
  cy.wait(2000);
}

RepoTestPage_171(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(4) > .dropdown-item > .flex-grow-1').contains("Make").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Make").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_172(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(5) > .dropdown-item > .flex-grow-1').contains("Model").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Model").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_173(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
  cy.get(':nth-child(6) > .dropdown-item > .flex-grow-1').contains("Chassis Number").click();
  cy.wait(2000);
    cy.get(this.locators.ClickOn_Filter).click();
  cy.wait(2000);
cy.get('.card-content').contains("Chassis Number").scrollIntoView().should("be.visible");
  cy.wait(2000);

}

RepoTestPage_174(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").should("be.visible");
cy.wait(2000);

}

RepoTestPage_175(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(500);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_176(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {
    
    const trimmedText = headerText.trim(); 

    cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').should("be.visible") .and('contain.text', trimmedText);
cy.wait(2000);

  })

}

RepoTestPage_177(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(":nth-child(1) > .link > a").click();
cy.wait(2000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Repossession").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Account Number").should("be.visible");
cy.wait(2000);
cy.get('.card-header.ng-star-inserted').contains("Customer Name").should("be.visible");
cy.wait(2000);

}

RepoTestPage_178(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).should("be.visible").click();
  cy.wait(2000);

}

RepoTestPage_179(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible");
  cy.wait(1000);
}

RepoTestPage_180(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("Cancel Repossession").should("be.visible");
  cy.wait(1000);

}

RepoTestPage_181(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);

}

RepoTestPage_182(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
  cy.contains("Request Rejected").click();
  cy.wait(1000);
cy.contains(/You are viewing \d+ Request Rejected Repossession\(s\)/).should('be.visible');
cy.wait(2000);

cy.get(this.locators.ClickOn_FlexBtn).click();
  cy.wait(2000);
   cy.contains("View Repossession").should("be.visible").click();
  cy.wait(1000);
cy.get('.tab-content').should("be.visible");
cy.wait(2000);
  cy.contains("Basic Information (at the time of Repossession Request)").should("be.visible");
  cy.wait(1000);
    cy.contains("Request Details").should("be.visible");
  cy.wait(1000);
    cy.contains("Upload Documents").scrollIntoView().should("be.visible");
  cy.wait(1000);

}

RepoTestPage_183(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Pending Sale / Release / Revaluation").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(1) > .enc-card-content > .table > tbody > :nth-child(1) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Pending Sale / Release / Revaluation").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Pending Sale / Release / Revaluation Repossession(s)`).should('be.visible');
cy.wait(2000);
  });
cy.wait(1000);

}

RepoTestPage_184(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Pending Repo Confirmation").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(1) > .enc-card-content > .table > tbody > :nth-child(2) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Pending Repo Confirmation").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Pending Repo Confirmation Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_185(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Pending Repossession").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(1) > .enc-card-content > .table > tbody > :nth-child(3) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Pending Repossession").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Pending Repossession Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_186(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Pending Repo Authorization").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(1) > .enc-card-content > .table > tbody > :nth-child(4) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Pending Repo Authorization").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Pending Repo Authorization Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_187(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Pending PreSeizure Notice Dispatch").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(1) > .enc-card-content > .table > tbody > :nth-child(5) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Pending PreSeizure Notice Dispatch").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Pending PreSeizure Notice Dispatch Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_188(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Vehicle Released").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(2) > .enc-card-content > .table > tbody > :nth-child(1) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Vehicle Released").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Vehicle Released Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_189(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Case Closed").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(2) > .enc-card-content > .table > tbody > :nth-child(2) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Case Closed").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Case Closed Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_190(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
   cy.get(this.locators.ClickOn_MyRequests).click();
  cy.wait(2000);
   cy.get('.page-title').contains("My Requests").should("be.visible");
  cy.wait(1000);
 cy.contains("Request Rejected").should("be.visible");
  cy.wait(1000);
  cy.get(":nth-child(2) > .enc-card-content > .table > tbody > :nth-child(3) > .text-center > .status-link")
  .should('be.visible')
  .invoke('text')
  .then((headerText) => {

    const count = headerText.trim(); // e.g. "3"

       cy.log(`Copied count value: ${count}`);

 cy.wait(1000);
    cy.contains("Request Rejected").click();
  cy.wait(1000);
    cy.contains(`You are viewing ${count} Request Rejected Repossession(s)`).should('be.visible');
cy.wait(1000);
  });
cy.wait(1000);

}

RepoTestPage_191(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_ClearBtn).click();
  cy.wait(2000);
cy.get(this.locators.TypeAccNumber).should('have.value', '');
 cy.wait(2000);

}

RepoTestPage_192(){

     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.TypeAccNumber).type(1667);
  cy.wait(2000);
  cy.get(this.locators.ClickOn_ClearBtn).click();
  cy.wait(2000);
cy.get(this.locators.TypeAccNumber).should('have.value', '');
 cy.wait(2000);
 cy.get(this.locators.ClickOn_SubmitBtn).should("be.disabled");
  cy.wait(2000);

}

RepoTestPage_193(){

  
     cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Vehicle_Regnum).type(67);
  cy.wait(2000);
  cy.contains("Vehicle Registration Number must be at least 4 characters long").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_194(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Vehicle_Regnum).type(3333);
  cy.wait(2000);
cy.get(this.locators.ClickOn_SubmitBtn).should("be.enabled");
  cy.wait(2000);
}

RepoTestPage_195(){

  cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Vehicle_Regnum).type(3333);
  cy.wait(2000);
 cy.get(this.locators.ClickOn_ClearBtn).click();
  cy.wait(2000);
cy.get(this.locators.Type_Vehicle_Regnum).should('have.value', '');
 cy.wait(2000);
 cy.get(this.locators.ClickOn_SubmitBtn).should("be.disabled");
  cy.wait(2000);
}

RepoTestPage_196(){

    cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Vehicle_Regnum).type(33333);
  cy.wait(2000);
cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains("Search Results").should("be.visible");
  cy.wait(2000);

}

RepoTestPage_197(){

   cy.get(this.locators.ClickOn_Repo).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOn_RequestRepo).click();
  cy.wait(2000);
  cy.get(this.locators.Type_Vehicle_Regnum).type(33333);
  cy.wait(2000);
cy.get(this.locators.ClickOn_SubmitBtn).click();
  cy.wait(2000);
  cy.contains("Search Results").should("be.visible");
  cy.wait(2000);
  cy.contains("Account Number").should("be.visible");
  cy.wait(2000);
  cy.contains("Customer ID").should("be.visible");
  cy.wait(2000);
  cy.contains("Customer Name").should("be.visible");
  cy.wait(2000);
   cy.contains("Total Outstanding (₹)").should("be.visible");
  cy.wait(2000);
   cy.contains("Bucket").should("be.visible");
  cy.wait(2000);


}

RepoTestPage_198(){

}

RepoTestPage_199(){

}

RepoTestPage_200(){

}





}




export default RepoPage;
