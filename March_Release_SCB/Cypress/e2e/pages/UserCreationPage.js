import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
const path = require("path");

class UserCreationPage {
  constructor(locators) {
    this.locators = locators;
  }

  UserCreationAgentTemplate_download() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnUserCreationUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDownloadAgentRadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDownloadTempBtn).click();
    cy.wait(3000);
  }

  UserCreationAgentTemplate_upload() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadAgentRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("AgentTemplate.xlsx");
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

    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(2000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationAgentTemplate_upload_01() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadAgentRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("AgentTemplate.xlsx");
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

    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(3000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
  cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationAgencyTemplate_download() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnUserCreationUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDownloadAgencyRadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDownloadTempBtn).click();
    cy.wait(3000);
  }

  UserCreationAgencyTemplate_upload() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadAgencyRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("AgencyTemplate.xlsx");
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

    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(3000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationAgencyTemplate_upload_01(){

       cy.wait(2000);
    cy.get(this.locators.ClickOnUploadAgencyRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("AgencyTemplate.xlsx");
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

    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(2000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);


  }



  UserCreationStaffTemplate_download() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnUserCreationUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDownloadStaffRadioBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnDownloadTempBtn).click();
    cy.wait(3000);
  }

  UserCreationStaffTemplate_upload() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadStaffRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("StaffTemplate.xlsx");
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

    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(2000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationStaffTemplate_upload01() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadStaffRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("StaffTemplate.xlsx");
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

    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(2000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationStaffTemplate_upload02() {
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadStaffRadioBtn).click();
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("StaffTemplate.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get("#confirm-dialog-okay").should("be.visible");
    cy.wait(2000);
    cy.get("#confirm-dialog-cancel").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);
  }

  UserCreationTestPage_40() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(2000);
    cy.contains("File Name").should("be.visible");
    cy.wait(2000);
    cy.contains("File Upload Date").should("be.visible");
    cy.wait(2000);
    cy.contains("Status").should("be.visible");
    cy.wait(1000);
    cy.contains("Transaction ID").should("be.visible");
    cy.wait(3000);
  }

  UserCreationTestPage_41() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(1000);
    cy.get(".form-select").select("Failed");
    cy.wait(1000);
    cy.get(".form-select").select("Uploaded");
    cy.wait(1000);
    cy.get(".form-select").select("Invalid File Format");
    cy.wait(1000);
  }

  UserCreationTestPage_42() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(1000);
    cy.get(".form-select").select("Failed");
    cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.contains("Download Status File").should("be.visible");
    cy.wait(2000);
  }

  UserCreationTestPage_43() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(1000);
    cy.get(".form-select").select("Failed");
    cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get("tbody > :nth-child(1) > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationTestPage_44() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(1000);
    cy.get(".form-select").select("Failed");
    cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
    cy.get("tbody > :nth-child(1) > :nth-child(4) > a").click();
    cy.wait(3000);
  }

  UserCreationTestPage_45() {
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click({ force: true });
    cy.wait(2000);
    cy.contains("Enter at least one filter value").should("be.visible");
    cy.wait(2000);
  }
}

export default UserCreationPage;
