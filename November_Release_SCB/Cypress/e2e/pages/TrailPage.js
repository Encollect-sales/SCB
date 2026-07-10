import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class TrailPage {
  constructor(locators) {
    this.locators = locators;

  }

  trailpagedowload_template(){
    cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_button).click({force:true});
    cy.wait(2000);


  }
  bulkupload_approved_001(){
  // cy.get('[title="Contact Enrichment"]').click({force:true});
  // cy.wait(2000);
  // cy.get(this.locators.bulk_Contact_upload).click({force:true});
  //  cy.wait(2000);
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("Bulktrail.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
 
    //##################################################
 
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env("transactionID", transactionId);
          cy.wait(1000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
    cy.get('tbody > tr > :nth-child(3)').contains('Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);
 
}

  bulkupload_approved_002(){
  // cy.get('[title="Contact Enrichment"]').click({force:true});
  // cy.wait(2000);
  // cy.get(this.locators.bulk_Contact_upload).click({force:true});
  //  cy.wait(2000);
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("Bulktrail.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
 
    //##################################################
 
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env("transactionID", transactionId);
          cy.wait(1000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
    cy.get('tbody > tr > :nth-child(3)').contains('Partially Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);
 
  }
  bulkupload_failed_003(){
  // cy.get('[title="Contact Enrichment"]').click({force:true});
  // cy.wait(2000);
  // cy.get(this.locators.bulk_Contact_upload).click({force:true});
  //  cy.wait(2000);
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("Bulktrail.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
 
    //##################################################
 
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env("transactionID", transactionId);
          cy.wait(1000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
 cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');

    cy.wait(2000);
    // cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    // cy.wait(3000);
 
}

BULKTRL_017(){
    cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("adharcard.pdf");
    cy.wait(2000);
    cy.contains('You can only the file with extension xls or xlsx').should('not.exist');
}
  
BULKTRL_018(){
   cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("LoginData.json");
    cy.wait(2000);
    cy.contains('You can only the file with extension xls or xlsx').should('not.exist');
}
BULKTRL_019(){
   cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("3mb.xlsx");
    cy.wait(2000);
    cy.contains('You can only the file with extension xls or xlsx').should('not.exist');
}    


BULKTRL_020(){
   cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("empty.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(2000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env("transactionID", transactionId);
          cy.wait(1000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
   cy.get('tbody tr').first().find('td').eq(2)
  .invoke('text')
  .then(text => {
    expect(text.trim()).to.match(/Error|Failed/);
  });

    cy.wait(2000);
    // cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    // cy.wait(3000);
   

}
BULKTRL_022(){
  cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulktrailAgentid.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(2000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env("transactionID", transactionId);
          cy.wait(1000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
   cy.get('tbody tr').first().find('td').eq(2)
  .invoke('text')
  .then(text => {
    expect(text.trim()).to.match(/Error|Failed/);
  });

    cy.wait(2000);
    // cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    // cy.wait(3000);
   





}
BULKTRL_023(){
   cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("Bulktrailnewcol.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(2000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(1000);
          Cypress.env("transactionID", transactionId);
          cy.wait(1000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
   cy.get('tbody tr').first().find('td').eq(2)
  .invoke('text')
  .then(text => {
    expect(text.trim()).to.match(/Error|Failed/);
  });

    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
   


}
BULKTRL_032(){
   cy.get(this.locators.trail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_trail_upload).click({force:true});
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulktrailLargeFile.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click({force:true});
    cy.wait(8000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        cy.log(`Popup text: ${popupText}`);
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          const transactionId = transactionIdMatch[1];
          cy.log(`Transaction ID: ${transactionId}`);
          cy.wait(2000);
          Cypress.env("transactionID", transactionId);
          cy.wait(2000);
        }
      });
 
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(this.locators.trail_upload_status).click({force:true});
      cy.get(this.locators.bulk_trans_no).type(transactionId.toString()); // Convert to string if needed
    });
    cy.wait(2000);
    cy.get(this.locators.search).click({force:true});
    cy.wait(3000);
   cy.get('tbody tr').first().find('td').eq(2)
  .invoke('text')
  .then(text => {
    expect(text.trim()).to.match(/Error|Failed/);
  });

    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
   

}
 BULKTRL_042(){
  cy.wait(2000);
    cy.get('input[type="file"]').attachFile("Bulktrail.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(8000);
    cy.contains('Something went wrong. Please try after some time.').should('not.exist');


 }





}

export default TrailPage;