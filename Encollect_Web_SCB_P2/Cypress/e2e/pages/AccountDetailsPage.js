import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';


class AccountDetailsPage {
  constructor(locators) {
    this.locators = locators;
  }

  ViewAccountDetails() {
    cy.wait(3000);
    //cy.get('#radios-0').click();
    cy.wait(2000);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.accountname).type("R anupriya");
    cy.wait(2000);
    cy.get(this.locators.clickonsearchbtn).click();
    cy.wait(3000);
  }
  // cy.wait(4000);
  // cy.get(this.locators.clickonaccountnumber).click();
  // cy.wait(3000);

  // cy.get(this.locators.selectrightpartycontract).type("YES");
  // cy.wait(2000);
  // cy.get(this.locators.selectdispositioncodegroup).type("PTP");
  // cy.wait(2000);
  // cy.get(this.locators.selectdispositioncode).type("PTP");



  AccountSearch238() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    //cy.get('tr.ng-star-inserted > .link').dblclick();
    //cy.wait(500);
    //cy.get('#toggleButton > img').click();
    //cy.wait(500);
    //cy.get(':nth-child(6) > .dropdown-item').click();
  }

  AccountDetails241() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(9) > .dropdown-item').click();
  }


  AccountDetails240() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(9) > .dropdown-item').click();
  }

  AccountDetails239() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(7) > .dropdown-item').click();
    cy.wait(500);
  }

  AccountDetails237() {
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //   console.error('Uncaught exception:', err.message);
    //   console.error(err);
    //   // returning false here prevents Cypress from failing the test
    //   return false;
    // });
    // //cy.get(this.locators.LoanAmount).click();
    // cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get("#search-customer-name").type('A dhanalaxmi');
    cy.wait(500)
    cy.get('.btn-secondary').click({force:true});
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(5) > .dropdown-item').click();
    cy.wait(500);

  }

  AccountDetails242() {
    // Add a global exception handler for uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(500);
    //   cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(11) > .dropdown-item').click({ force: true });
  }

  AccountDetails243() {
    // Add a global exception handler for uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(10) > .dropdown-item').click();
  }

  AccountDetails244() {
    // Add a global exception handler for uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(14) > .dropdown-item').click();
  }

  AccountDetails246() {
    // Add a global exception handler for uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(12) > .dropdown-item').click({ force: true });
  }

  CompareSegmentation288() {
    cy.wait(3000);
    // cy.get(this.locators.loanamountradiobtn).click();
    cy.wait(2000);
    cy.get(this.locators.CustomorName1).type("a");
    cy.wait(2000);
    cy.get(this.locators.csnameclick).click();
    cy.wait(4000);
    cy.get(this.locators.Searchbutton1).click();
    cy.wait(4000);

  }

  CompareSegmentation88() {
    cy.wait(3000);
    // cy.get(this.locators.loanamountradiobtn).click();
    cy.wait(2000);
    cy.get("#search-customer-name").type("a");
    cy.wait(2000);
    //cy.get(this.locators.csnameclick).click();
    cy.wait(4000);
    cy.get('.btn-secondary').click();
    cy.wait(4000);

  }

ViewAccountDetailsPageTest_248() {

  cy.get("#search-customer-name")
    .type("A AROCKIADASS");
  cy.wait(2000);  
  cy.get('.btn-secondary')
    .click();
  cy.wait(2000);
  cy.contains("A AROCKIADASS")
    .should("be.visible")
    .click();
  cy.wait(2000);  
  cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
  // Add Trail
  cy.wait(2000);
  cy.get('#addTrail')
    .click({ force: true });
    cy.wait(2000);
  cy.get('#customer_yes')
    .should("be.visible")
    .click({ force: true });
    cy.wait(2000);
  cy.get(this.locators.dcg)
    .should("be.visible")
    .select("BPTP");
    cy.wait(2000);
  cy.get(this.locators.dc)
    .should("be.visible")
    .select("BPTP");
    cy.wait(2000);
  cy.get('#mode_of_communication')
    .select("Call");
  cy.wait(2000);
  cy.get(this.locators.ptp)
    .should("be.visible")
    .clear()
    .type("17/03/2026{enter}");
  cy.wait(2000);  
  cy.get(this.locators.nxtact)
    .select("Call");
  cy.wait(2000);  
  cy.get(this.locators.rnp)
    .select("Lost job");
  cy.wait(2000);  
  cy.get(this.locators.rmrk)
    .type("No");
  cy.wait(20000);
  cy.get(this.locators.update_trail)
    .click({ force: true });
  // Verify success message (do NOT click toast)
  cy.contains("Update trail added successfully", { timeout: 10000 })
    .should("be.visible");

}


  AllocationHistoryPageTest_544() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(7000);
    //cy.get('#radios-0').click();
    cy.wait(500);
    // Interaction Part 1: Typing and Clicking
    cy.get("#search-account-number").type('68210000012749', { force: true });
    cy.wait(2000);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
    cy.get(".d-flex > a").click();
    cy.wait(5000);

    // Click on the specific tab (adjust selector as per your application's HTML structure)
    //cy.get(this.locators.allocationHistory).should('be.visible').click();



  }


  AllocationHistroyPageTest_545() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(7000);
    cy.get('#cc-account-type').click();
    cy.wait(2000);

    // Interaction Part 1: Typing and Clicking
    cy.get('.ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.contains('span.ng-option-label', 'Credit Card Last 4 Digits').click();
    cy.wait(2000);
    cy.get("#search-cc-number").type('7980', { force: true });
    cy.wait(500);
    cy.get('.btn-secondary').click();
    cy.wait(3000);
    //cy.get(':nth-child(4) > a').click();
    cy.wait(3000);

    // Click on the specific tab (adjust selector as per your application's HTML structure)
    //cy.get(this.locators.allocationHistory).should('be.visible').click();

  }

  AllocationHistoryPageTest_245() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.get('#loan-account-type').click();
    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    // Interaction Part 1: Typing and Clicking
    cy.get('#search-customer-name').type('A dhanalaxmi', { force: true });
    cy.wait(500);
    cy.get('#search-submit-button').click();
    cy.wait(5000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
    cy.get('#toggleButton').click();
    cy.wait(1000);

    // Click on the specific tab (adjust selector as per your application's HTML structure)
  cy.get(':nth-child(15) > .dropdown-item').scrollIntoView().click({ force: true });

    cy.wait(800);
    // cy.get(this.locators.Cheackbox).should('be.visible').click();
    // cy.wait(800);



  }

  AccountDetailsPageTest_562() {
    cy.wait(3000);
    //cy.get('#radios-0').click();
    cy.wait(500);
    // cy.get(this.locators.loanamountradiobtn).click();
    cy.wait(2000);
    //   cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(1000);
    cy.get(this.locators.accountname).type("a");
    cy.wait(2000);
    cy.get(this.locators.clickonsearchbtn).click();
    cy.wait(4000);
    cy.get('li[class="pagination-next page-item ng-star-inserted"] a[class="page-link"]').click();
    cy.wait(1000);
    cy.get('li[class="pagination-prev page-item ng-star-inserted"] a[class="page-link"]').click();



  }

  DispoAccountDetails125() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(5000);
    //cy.get('#radios-0').click();
    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click({ force: true });
    cy.wait(500);
    cy.get('.action-icon-button').click();
    cy.wait(500);
    cy.get(':nth-child(1) > .dropdown-item').click();

    cy.wait(2000)
    cy.get('#customer_yes').click();
    cy.wait(200);
    cy.get(this.locators.dcg).select("BPTP");
    cy.wait(200);
    cy.get(this.locators.dc).select("BPTP");
    cy.wait(200);
    cy.get(this.locators.ptp).type("17-07-2024");
    cy.wait(200);

    cy.wait(500);







  }

  UpdateTrailbutton126() {

    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    //cy.get('#radios-0').click();
    cy.wait(1000);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(1000)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('.action-icon-button').click();
    cy.wait(500);
    cy.get(':nth-child(1) > .dropdown-item').click();

    cy.get('#customer_yes').click();
    cy.get(this.locators.dcg).select("BPTP");
    cy.wait(200);
    cy.get(this.locators.dc).select("BPTP");
    cy.wait(200);
    cy.get(this.locators.ptp).type("17-07-2024");
    cy.wait(200);
    cy.get(this.locators.ptp).click();
    cy.wait(500);
    cy.get(this.locators.nxtact).select("Call");
    cy.wait(200);
    cy.get(this.locators.rnp).select("Lost job");
    cy.wait(200);
    cy.get(this.locators.rmrk).type("No");
    cy.wait(100);
    cy.get(this.locators.update_trail).click({ force: true })
    cy.wait(5000);
    //cy.contains("Update trail added successfully").click();





  }

  FeedBackHistoryDetails127() {


    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(2000);
    //cy.get('#radios-0').click();
    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('.action-icon-button').click();

    // Log the parent HTML to see the structure







  }

  AnalyticsDetails235() {


    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .dropdown-item').click();
    cy.wait(500);






  }

  AssetDetails236() {


    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err.message);
      console.error(err);
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.wait(500);
    // cy.get('.ng-arrow-wrapper').click();
    // cy.wait(1000);
    // cy.contains('span.ng-option-label', 'Customer Name').click();
    // cy.wait(500);
    cy.get(this.locators.csname).type('A dhanalaxmi', { force: true });
    cy.wait(500)
    cy.get('.btn-secondary').click();
    cy.wait(500);
    cy.get('tr.ng-star-inserted > .link').dblclick();
    cy.wait(500);
    cy.get('#toggleButton > img').click();
    cy.wait(500);
    cy.get(':nth-child(3) > .dropdown-item').click();

  }


  AccountDetailsTestPage_95() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.contains("Account Details").should("be.visible");
  }

  AccountDetailsTestPage_96() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.contains("Account Details").should("be.visible");
  }



  AccountDetailsTestPage_97() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.contains("Account Details").should("be.visible");
  }

  AccountDetailsTestPage_98() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.get(this.locators.UpdateTrailButton).click();
    cy.wait(5000);

    //#####################################

    cy.get(this.locators.Radio_yes).click();
    cy.wait(3000);
    cy.get(this.locators.Disp_Code_Group).select("PTP");
    cy.wait(5000);
    cy.get(this.locators.Dis_code).select("PTP");
    cy.wait(5000);
    cy.get(this.locators.Short_Discription).type("AAASNNDND");
    cy.wait(5000);
    cy.get(this.locators.Mode_Of_Com).select("Call");
    cy.wait(5000);
    cy.get(this.locators.Resaon_OF_Diq).select("DISPUTE");
    cy.wait(5000);
    cy.get(this.locators.Next_Action_Date).click();
    cy.get(".today-date").click();
    cy.wait(5000);

    cy.get(this.locators.Next_Action).select("Call");
    cy.wait(5000);
    cy.get(this.locators.EMI_Ammount).type(500);
    cy.wait(5000);
    cy.get(this.locators.Res_Of_Payment).select("Others");
    cy.wait(5000);
    cy.get(this.locators.Reamrk).type("its okey");
    cy.wait(5000);
    cy.get(this.locators.Submit_button).click();



    //####################################

  }

  AccountDetailsTestPage_99() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(7000);

  }



  AccountDetailsTestPage_100() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click({ force: true });
    cy.wait(7000);
    cy.get(this.locators.toggle).click().should("be.visible");
    cy.wait(5000);
    cy.get(':nth-child(15) > .dropdown-item').click();
    cy.wait(5000);
    cy.get(this.locators.UpdateTrailButton).click();
    cy.wait(5000);
    cy.contains("Add Trail").should("be.visible");

  }

  AccountDetailsTestPage_101() {
    cy.wait(5000);
    cy.get(this.locators.Report).click();
    cy.wait(5000);
    // cy.get(".scrollbar-control.ng-star-inserted").scrollTo("bottom");
    // cy.wait(5000);
    // cy.get(this.locators.CCD_Report).click();
    // cy.wait(5000);

  }

  AccountDetailsTestPage_102() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.get(this.locators.UpdateTrailButton).click();
    cy.wait(5000);
    cy.get(this.locators.Radio_yes).click();
    cy.wait(5000);
    cy.get(this.locators.Disp_Code_Group).select("Paid");
    cy.wait(5000);
    cy.get(this.locators.Dis_code).select("CP");
    cy.wait(5000);
    cy.wait(5000);
    // cy.get(this.locators.Disp_Code_Group).select("Broken PTP");
    // cy.wait(5000);
    // cy.get(this.locators.Dis_code).select("Broken PTP");
    // cy.wait(5000);
    // cy.wait(5000);
    // cy.get(this.locators.Disp_Code_Group).select("Call Back");
    // cy.wait(5000);
    // cy.get(this.locators.Dis_code).select("Call Back");
    // cy.wait(5000);

  }
  AccountDetailsTestPage_103() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(5000);

  }
  AccountDetailsTestPage_104() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(5000);
    cy.contains("Search Result").should("be.visible");

  }
  AccountDetailsTestPage_105() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click().should("be.visible");
    cy.wait(3000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(3000);
  }
  AccountDetailsTestPage_106() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(3000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(3000);
    cy.get(this.locators.UpdateTrailButton).click();
    cy.wait(2000);

    //#####################################

    cy.get(this.locators.Radio_yes).click();
    cy.wait(3000);
    cy.get(this.locators.Disp_Code_Group).select("BPTP");
    cy.wait(5000);
    cy.get(this.locators.Dis_code).select("BPTP");
    cy.wait(5000);
    cy.get(this.locators.Short_Discription).type("AAASNNDND");
    cy.wait(5000);
    cy.get(this.locators.Mode_Of_Com).select("Call");
    cy.wait(5000);
    cy.get(this.locators.Resaon_OF_Diq).select("DISPUTE");
    cy.wait(5000);
    cy.get(this.locators.Next_Action_Date).click();
    cy.get(".today-date").click();
    cy.wait(5000);

    cy.get(this.locators.Next_Action).select("Call");
    cy.wait(5000);
    //cy.get(this.locators.EMI_Ammount).type("500");
    cy.wait(5000);
    cy.get(this.locators.Res_Of_Payment).select("Others");
    cy.wait(5000);
    cy.get(this.locators.Reamrk).type("its okey");
    cy.wait(5000);
    cy.get(this.locators.Submit_button).click();



    //####################################

  }

  AccountDetailsTestPage_107() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.get(this.locators.UpdateTrailButton).click().should("be.visible");
    cy.wait(5000);
  }
  AccountDetailsTestPage_108() {

    cy.wait(5000);
    cy.get(this.locators.EnterAccounNo).type("LXCHE33020211350523");
    cy.wait(5000);
    cy.get(this.locators.SearchButton).click();
    cy.wait(7000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(7000);
    cy.get(this.locators.toggle).click().should("be.visible");
    cy.wait(5000);
    cy.get(this.locators.TrailHistory).click();
  }
  AccountDetailsTestPage_109() {
    cy.wait(5000);
    cy.get(this.locators.Report).click();
    cy.wait(5000);
    cy.get(".reports > :nth-child(2) > :nth-child(2) > a.ng-star-inserted").click();
    cy.wait(5000);
    cy.get('.reports > :nth-child(2) > :nth-child(2) > .sub-nav-list > :nth-child(2) > a').click();
    cy.wait(5000);

  }
  AccountDetailsTestPage_110() {

  cy.get(this.locators.Report)
    .should("be.visible")
    .click();
  cy.wait(2000);
  cy.get(this.locators.Trail_Report)
    .should("be.visible")
    .click();
  cy.wait(2000);
  cy.get(this.locators.Trail_History_Report)
    .should("be.visible")
    .click();
  cy.wait(2000);
  // Open multi-select dropdown (FIXED HERE)
  cy.get("ng-select.ng-select-multiple .ng-input")
    .first()
    .should("be.visible")
    .click();
  cy.wait(2000);
  // Verify dropdown options count
  cy.get('.ng-option-label.ng-star-inserted')
    .should('have.length', 5);
   cy.wait(2000);
  cy.get(this.locators.Trail_from_date)
    .should("be.visible")
    .clear()
    .type("01/02/2025{enter}");
  cy.wait(2000);
  cy.get(this.locators.Trail_To_Date)
    .clear()
    .type("11/02/2025{enter}");
  cy.wait(2000);
  // Dropdowns
  cy.get(this.locators.DisCode_Group)
    .should("be.visible")
    .select("BPTP");
    cy.wait(2000);
  cy.get(this.locators.DisCode)
    .should("be.visible")
    .select("BPTP");
    cy.wait(2000);
  // Generate report
  cy.get(this.locators.Gene_Report)
    .should("be.enabled")
    .click({ force: true });

}


}

export default AccountDetailsPage;
