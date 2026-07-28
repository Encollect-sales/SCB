import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class PayementGatewayPage {
  constructor(locators) {
    this.locators = locators;
  }

 BulkPaymentUpload_01() {
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.contains('button','Upload').should('be.disabled');

}
  BulkPaymentUpload_02(){
const filePath='adharcard.pdf';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload').should('be.disabled');
cy.contains(
'You can only upload the file with extension xls or csv'
).should('be.visible');

}
  BulkPaymentUpload_03(){

const filePath='3mb.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload').click({force:true});
cy.get(this.locators.clickokbutton).click({force:true});
cy.contains(
"The file you've chosen is too large (max 2MB). Please try again"
).should('be.visible');

}


BulkPaymentUpload_04(){

const filePath='Staff(1).xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload').click({force:true});
cy.get(this.locators.clickokbutton).click({force:true});
cy.contains(
'Filename should not contain any special characters'
).should('be.visible');

}

BulkPaymentUpload_05(){

const filePath='empty.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.wait(2000);
cy.contains('button','Upload').click({force:true});
cy.wait(2000);
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
cy.contains('File Uploaded Successfully')
.should('be.visible');

}

BulkPaymentUpload_06(){

const filePath='BulktrailHeaders.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload')
.should('be.enabled')
.click({force:true})
.click({force:true})
.click({force:true});

}

BulkPaymentUpload_07(){

const filePath='BulktrailHeaders.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.wait(2000);
cy.contains('button','Cancel').click({force:true});

}


BulkPaymentUpload_08(){

const filePath='Corrupted.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload').click({force:true});
cy.contains('Invalid File').should('be.visible');

}

BulkPaymentUpload_09(){

const filePath='BulkPaymentsUploadTemplate.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.wait(2000);
cy.contains('button','Upload').click({force:true});
cy.wait(3000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload').click({force:true});

}

BulkPaymentUpload_10(){

const filePath='Agent.xlsx';
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-file').attachFile(filePath);
cy.contains('button','Upload').click({force:true});
 cy.get('#nav-item-3-bulk-payments-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
   cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
    cy.wait(2000);

}

BulkPaymentUpload_Failed(){
 cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkPaymentsUploadTemplate.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
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

    // cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(3000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}
DownloadPaymentTemplate(){
cy.get(this.locators.payments).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkpaymentupload).click({force:true});
cy.wait(2000);
cy.get(this.locators.Bulkupload).click({force:true});
cy.wait(2000);
cy.get('#bulk-trail-download-template').click({force:true});
cy.wait(2000);

}

BulkPaymentUpload_Processed(){
 cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkPaymentsUploadTemplate.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
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

    // cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(3000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > tr > :nth-child(3)').contains('Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}


}

export default PayementGatewayPage;
