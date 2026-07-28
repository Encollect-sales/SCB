import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class PaymentPage {
constructor(locators) {
this.locators = locators;
}
         
PaymentTestPage_01(){

 cy.contains("Payments").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
 cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
 cy.wait(1000);
 cy.contains("Bulk Payments Upload").should("be.visible");
 cy.wait(1000);
 cy.contains("Bulk Payments Upload Status").should("be.visible");
 cy.wait(1000);
 cy.reload();

}

PaymentTestPage_02(){
    
    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnDownloadTemplate).click();
    cy.wait(3000);

}


PaymentTestPage_download_03(){

    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnDownloadTemplate).click();
    cy.wait(3000);
    
}
PaymentTestPage_03_upload(){

    cy.get('#bulk-trail-file').attachFile('BulkPaymentsUploadTemplate.xlsx');
    cy.wait(3000);
    cy.get(this.locators.ClickOnUploadSubmit).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDialogOK).click();
    cy.wait(3000);
    // cy.get('.ng-trigger').should("be,visible");
    // cy.wait(2000);
 
    //#############################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env('transactionID', transactionId);
          cy.wait(1000);
        }
      });
  

    cy.contains("Bulk Payments Upload Status").scrollIntoView().should("be.visible").click();
      cy.wait(1000);
      cy.then(() => {
        const transactionId = Cypress.env('transactionID');
        cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });
     cy.get('#bulk-trail-search-button').click();
     cy.wait(3000);
     cy.contains("Processed").should("be.visible");
     cy.wait(1000);
     cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
     cy.wait(3000);
     //cy.get('[role="alert"]').should('be.visible').and('contain', 'File Downloaded Sucessfully');
     cy.wait(2000);

}


PaymentTestPage_04(){

    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Bulk Payments Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get('#bulk-trail-status').select("Uploaded");
    cy.wait(2000);
    cy.get(this.locators.ClickOnSubmitBtn).click();
    cy.wait(2000);

}

PaymentTestPage_05(){

    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Bulk Payments Upload Status").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnSubmitBtn).click({force: true});
    cy.wait(2000);                      
    cy.get('[role="alert"]').should('be.visible').and('contain', 'Enter at least one filter value');
    cy.wait(2000);

}

PaymentTestPage_06(){

    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
  cy.contains("Bulk Payments Upload").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnDownloadTemplate).click();
    cy.wait(3000);
    

    const downloadsFolder = Cypress.config('downloadsFolder');
    const fixturesFolder = 'cypress/fixtures';


    //  Move File to Fixtures before Uploading
    cy.task('moveAllDownloadsToFixtures').then(result => {
        cy.log(result); // Log file move result
    cy.wait(4000);

    });
    cy.get('#bulk-trail-file').attachFile('BulkPaymentsUploadTemplate.xlsx');
    cy.wait(3000);
    cy.get(this.locators.ClickOnUploadSubmit).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDialogOK).click();
    cy.wait(3000);
    // cy.get('.ng-trigger').should("be,visible");
    // cy.wait(2000);






}

PaymentTestPage_07(){
    
    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Receive Money From Collector").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnCollectorcode).type(2, {force: true});
    cy.wait(2000);
    cy.get("h5[class='ng-star-inserted']").first().click({force: true});
    cy.wait(1000);
    // cy.get(this.locators.ClickOnCollectorcode).type(2163);
    // cy.wait(1000);
    //cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click();

    cy.get(this.locators.ClickOnFromDate).click();
                        cy.wait(2000);
                        cy.get('.previous > span').click();
                        cy.wait(2000);
                        const pastDate = new Date();
                        pastDate.setDate(pastDate.getDate() - 30);
                        const pastDay = pastDate.getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', pastDay).click();
                        cy.wait(2000);
                        cy.get(this.locators.ClickOnTODate).click();
                        cy.wait(2000);
                        const today = new Date().getDate().toString();
                        cy.get('.bs-datepicker-body').contains('span', today).click();
                        cy.wait(2000);


    // cy.wait(1000);
    // cy.get(this.locators.ClickOnFromDate).type("01/06/2025");
    // cy.wait(1000);
    // cy.get(this.locators.ClickOnTODate).click();
    // cy.wait(1000);
    // cy.get('.today-date').click();
    // cy.wait(1000);
    cy.get(this.locators.ClickSearchButton).click();
    cy.wait(3000);

}

PaymentTestPage_08(){

    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Receive Money From Collector").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnCollectorcode).type(2163);
    cy.wait(1000);
    //cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click();                     
    cy.wait(1000);
    cy.get(this.locators.ClickOnTODate).type("01/06/2025").click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnFromDate).click();
    cy.wait(1000);
    cy.get('.today-date').click(); 
    cy.wait(2000);   
    // cy.get(this.locators.ClickSearchButton).click();
    // cy.wait(3000);
    // cy.get('[role="alert"]').should('be.visible').and('contain', 'From Date cannot be after To Date.');
    // cy.wait(2000);

   
}

PaymentTestPage_09(){

    cy.contains("Payments").scrollIntoView().should("be.visible").click();
    cy.wait(1000);
   cy.contains("Receive Money From Collector").scrollIntoView().should("be.visible").click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnCollectorcode).type(2163);
    cy.wait(1000);
    //cy.get('#ngb-typeahead-1-0 > .ng-star-inserted').click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnTODate).click();
    cy.wait(1000);
    cy.get('.today-date').click();
    cy.wait(1000);
    //cy.get(this.locators.ClickSearchButton).should("be.disabled");
    cy.wait(3000);


}




}

export default PaymentPage;