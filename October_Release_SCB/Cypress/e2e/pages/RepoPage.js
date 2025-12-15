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

}

RepoTestPage_104(){

}

RepoTestPage_105(){

}

RepoTestPage_106(){

}

RepoTestPage_107(){

}

RepoTestPage_108(){

}

RepoTestPage_109(){

}

RepoTestPage_110(){

}

RepoTestPage_111(){

}

RepoTestPage_112(){

}

RepoTestPage_113(){

}

RepoTestPage_114(){

}

RepoTestPage_115(){

}

RepoTestPage_116(){

}

RepoTestPage_117(){

}

RepoTestPage_118(){

}

RepoTestPage_119(){

}

RepoTestPage_120(){

}

RepoTestPage_121(){

}

RepoTestPage_122(){

}

RepoTestPage_123(){

}

RepoTestPage_124(){

}

RepoTestPage_125(){

}

RepoTestPage_126(){

}

RepoTestPage_127(){

}

RepoTestPage_128(){

}

RepoTestPage_129(){

}

RepoTestPage_130(){

}

RepoTestPage_131(){

}

RepoTestPage_132(){

}

RepoTestPage_133(){

}

RepoTestPage_134(){

}

RepoTestPage_135(){

}

RepoTestPage_136(){

}

RepoTestPage_137(){

}

RepoTestPage_138(){

}

RepoTestPage_139(){

}

RepoTestPage_140(){

}

RepoTestPage_141(){

}

RepoTestPage_142(){

}

RepoTestPage_143(){

}

RepoTestPage_144(){

}

RepoTestPage_145(){

}

RepoTestPage_146(){

}

RepoTestPage_147(){

}

RepoTestPage_148(){

}

RepoTestPage_149(){

}

RepoTestPage_150(){

}

RepoTestPage_151(){

}

RepoTestPage_152(){

}

RepoTestPage_153(){

}

RepoTestPage_154(){

}

RepoTestPage_155(){

}

RepoTestPage_156(){

}

RepoTestPage_157(){

}

RepoTestPage_158(){

}

RepoTestPage_159(){

}

RepoTestPage_160(){

}

RepoTestPage_161(){

}

RepoTestPage_162(){

}

RepoTestPage_163(){

}

RepoTestPage_164(){

}

RepoTestPage_165(){

}

RepoTestPage_166(){

}

RepoTestPage_167(){

}

RepoTestPage_168(){

}

RepoTestPage_169(){

}

RepoTestPage_170(){

}

RepoTestPage_171(){

}

RepoTestPage_172(){

}

RepoTestPage_173(){

}

RepoTestPage_174(){

}

RepoTestPage_175(){

}

RepoTestPage_176(){

}

RepoTestPage_177(){

}

RepoTestPage_178(){

}

RepoTestPage_179(){

}

RepoTestPage_180(){

}

RepoTestPage_181(){

}

RepoTestPage_182(){

}

RepoTestPage_183(){

}

RepoTestPage_184(){

}

RepoTestPage_185(){

}

RepoTestPage_186(){

}

RepoTestPage_187(){

}

RepoTestPage_188(){

}

RepoTestPage_189(){

}

RepoTestPage_190(){

}

RepoTestPage_191(){

}

RepoTestPage_192(){

}

RepoTestPage_193(){

}

RepoTestPage_194(){

}

RepoTestPage_195(){

}

RepoTestPage_196(){

}

RepoTestPage_197(){

}

RepoTestPage_198(){

}

RepoTestPage_199(){

}

RepoTestPage_200(){

}





}




export default RepoPage;
