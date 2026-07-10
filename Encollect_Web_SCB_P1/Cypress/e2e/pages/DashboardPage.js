import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class DashboardPage {
  constructor(locators) {
    this.locators = locators;
  }

  DashboardTestPage_018() {

    cy.wait(8000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    // cy.get('.ng-arrow-wrapper').select("Customer Name" , {force: true});
    // cy.wait(2000);
    // cy.get('#a21315aa8410-0').click();
    // cy.wait(2000);
    cy.contains("Customer Name:").should("be.visible");
    cy.wait(2000);
    cy.contains("Mobile Number:").should("be.visible");
    cy.wait(2000);
    cy.contains("Account Number:").should("be.visible");
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.wait(2000);
    cy.get('.ng-option').contains('Partner ID').click();
    cy.wait(1000);
    cy.contains("Partner ID:").should("be.visible");
    cy.wait(2000);
    cy.contains("Customer ID").should("be.visible");
    cy.wait(2000);
  }

  DashboardTestPage_019() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(2000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);

  }

  DashboardTestPage_020() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.EnterCustomeAccNo).type("LXCHE33020211350523").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(2000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);

  }

  DashboardTestPage_021() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-control-group > .form-control').type("9827836789").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    // cy.contains("Search Results").should("be.visible");
    cy.wait(2000);

  }

  DashboardTestPage_022() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    cy.get(':nth-child(5) > .form-control-group > .form-control').type("41174").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click({ force: true }).should("be.visible");
    cy.wait(2000);
    cy.contains("Search Results").should("be.visible");
    cy.wait(2000);

  }

  DashboardTestPage_023() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);

    cy.get(this.locators.SearchButton).click({ force: true }).should("be.visible");
    cy.wait(2000);
    cy.contains("Please enter one of the search criteria.").should("be.visible");
    cy.wait(2000);

  }
  DashboardTestPage_024() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(2000);
   
    cy.get("#grid-table > thead > tr > :nth-child(2)").contains("Customer ID").should("be.visible");
    cy.wait(2000);

    cy.contains("Current Bucket").should("be.visible");
    cy.wait(2000);
    cy.get("thead > tr > :nth-child(4)").contains("Account Number").should("be.visible");
    cy.wait(2000);
    // cy.get(":nth-child(4) > .card-content").scrollTo("600,0");
    // cy.wait(2000);
    // cy.contains("EMI Amount").should("be.visible",{force:true});
    // cy.wait(2000);
    // cy.contains("Month Opening Bucket").should("be.visible",{force:true});
    // cy.wait(2000);
    // cy.contains("Partner Loan ID").should("be.visible",{force:true});
    // cy.wait(2000);
    // cy.contains("Product").should("be.visible",{force:true});
    // cy.wait(2000);
    // cy.contains("Collector Name").should("be.visible",{force:true});
    // cy.wait(2000);
    // cy.contains("Tele Calling Agency Code").should("be.visible",{force:true});
    // cy.wait(2000);
    // cy.contains("Telecaller Name").should("be.visible",{force:true});
    // cy.wait(2000);

  }

  DashboardTestPage_026() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);

  }

  DashboardTestPage_027() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Note History').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectNoteCode).select("Job status");
    cy.wait(2000);
    cy.get(this.locators.EnterNotes).type("XXXX XXXXX YYYYYY");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Note history added successfully").should("be.visible");
    cy.wait(2000);
  }

  DashboardTestPage_028() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Note History').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectNoteCode).select("Dispute");
    cy.wait(2000);
    cy.get(this.locators.EnterNotes).type("XXXX XXXXX YYYYYY");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Note history added successfully").should("be.visible");
    cy.wait(2000);
  }

  DashboardTestPage_029() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Note History').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectNoteCode).select("Others");
    cy.wait(2000);
    cy.get(this.locators.EnterNotes).type("XXXX XXXXX YYYYYY");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Note history added successfully").should("be.visible");
    cy.wait(2000);
  }

  DashboardTestPage_030() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
      cy.contains('Note History').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectNoteCode).select("Dispute");
    cy.wait(2000);
    cy.get(this.locators.EnterNotes).type("XXXX XXXXX YYYYYY");
    cy.wait(2000);
    cy.get(this.locators.ClickCancelNote).click();
    cy.wait(2000);

  }

  DashboardTestPage_031() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
      cy.contains('Note History').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectNoteCode).select("Dispute");
    cy.wait(2000);
    cy.get(this.locators.EnterNotes).type("XXXX XXXXX YYYYYY");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Note history added successfully").should("be.visible");
    cy.wait(4000);
    cy.contains("User Name").scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.contains("User Code").scrollIntoView().should("be.visible");
    cy.wait(2000);


  }

  DashboardTestPage_032() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
      cy.contains('Note History').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);

    cy.get(this.locators.EnterNotes).type("XXXX XXXXX YYYYYY");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Please enter mandatory fields").should("be.visible");
    cy.wait(2000);

  }

  DashboardTestPage_033() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
   cy.contains("Flags").click({force:true});
    cy.wait(2000);
    cy.contains("Flags").should("be.visible");
    cy.wait(2000);

  }
  DashboardTestPage_034() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("DND");
    cy.wait(2000);
    cy.get(this.locators.SelectFlagAct).select("Active");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Flag history added successfully").should("be.visible");
    cy.wait(2000);

  }
  DashboardTestPage_035() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("DND").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("Others").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("VIP").should("be.visible");
    cy.wait(2000);


  }

  DashboardTestPage_036() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectFlagAct).select("Active").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SelectFlagAct).select("Disable").should("be.visible");
    cy.wait(2000);


  }

  DashboardTestPage_037() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("DND");
    cy.wait(2000);
    cy.get(this.locators.SelectFlagAct).select("Active");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Flag history added successfully").should("be.visible");
    cy.wait(2000);
  }

  DashboardTestPage_038() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("DND");
    cy.wait(2000);
    cy.get(this.locators.SelectFlagAct).select("Active");
    cy.wait(2000);
    cy.get(this.locators.ClickCancelNote).click();
    cy.wait(2000);



  }


  DashboardTestPage_039() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(2000);
    cy.contains("Please enter mandatory fields").should("be.visible");
    cy.wait(2000);

  }

  DashboardTestPage_040() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("R ANBU").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.contains('Flags').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnAdd).click();
    cy.wait(2000);
    cy.get(this.locators.SelectFlag).select("DND");
    cy.wait(2000);
    cy.get(this.locators.SelectFlagAct).select("Active");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSave).click();
    cy.wait(4000);
    cy.contains("Date and Time").scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.contains("User Name").scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.contains("User Code").scrollIntoView().should("be.visible");
    cy.wait(2000);
  }

  DashboardTestPage_041() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("A").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.get(':nth-child(17) > .dropdown-item').contains('Trail History').click();
    cy.wait(2000);
    cy.get(this.locators.ClickFilter).click();
    cy.wait(2000);
    cy.contains("Assigned User Id").scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.contains("Reason For Assignment").scrollIntoView().should("be.visible");
    cy.wait(2000);


  }
  
  DashboardTestPage_042() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("A").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.contains("Account Details").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.get(':nth-child(17) > .dropdown-item').contains('Trail History').click();
    cy.wait(2000);
    cy.get(this.locators.ClickFilter).click();
    cy.wait(2000);
    cy.contains("Assigned User Id").click().should("be.visible");
    cy.wait(2000);


  }
  DashboardTestPage_043() {
    cy.wait(2000);
    cy.contains("Account Search").should("be.visible");
    cy.wait(2000);
    //  cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.EnterCustomeName).type("A").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.clickonAccNoLink).click({ force: true });
    cy.wait(2000);
    cy.contains("Account Details").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickToggal).click();
    cy.wait(2000);
    cy.get(':nth-child(17) > .dropdown-item').contains('Trail History').click();
    cy.wait(2000);
    cy.get(this.locators.ClickFilter).click();
    cy.wait(2000);
    cy.contains("Reason For Assignment").click().should("be.visible");
    cy.wait(2000);


  }




}
export default DashboardPage;