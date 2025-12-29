import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';

class SystemSettingPage {
  constructor(locators) {
    this.locators = locators;
  }

  systemSettingModule(){
    cy.wait(1000);
    cy.get(this.locators.clickOnSystemSetting).click();
  }

  AccountImportViaFrontEndBulkUploadLoan_988(){
    cy.wait(500);
    //cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(600);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(500);
    cy.get(this.locators.searchButton).click({force : true});
    cy.wait(500);
    cy.contains("Please enter one of the search criteria.").should("be.visible");
   
  }

  AccountImportViaFrontEndBulkUploadCreditCard_1013(){
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(500);
   // cy.get(this.locators.ClickAccountupStatus).click();
    
    cy.wait(500);
    cy.get(this.locators.creditCard_radioButton).click({force : true});
    cy.wait(500);
    cy.get(this.locators.searchButton).click({force : true});
    cy.wait(500);
    //cy.contains('Enter at least one filter value').should("be.visible");
  }

  AccountImportViaFrontEndBulkUploadCreditCard_1014(){
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(500);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(500);
    cy.get('#status-account-type-card').click({force : true});
    cy.wait(500);
    cy.get(this.locators.transactionID).type('20221128045055240');
    cy.wait(500);
    cy.get(this.locators.fileName).type('account_import_file_28 revised_2_20221128045055115.xlsx');
    cy.wait(500);
    cy.get(this.locators.searchButton).click();

  }

  AccountImportViaFrontEndBulkUploadCreditCard_1019(){
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true} );
    cy.wait(500);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(500);
    cy.get('#status-account-type-card').click({force : true});
    cy.wait(800);
    cy.get('#status-file-status').select('Uploaded');
    cy.wait(800);
    cy.get('#status-search').click();
    cy.wait(800);



    

  }

  AccountImportViaFrontEndBulkUploadLoan_996(){
    const filePath = 'Cypress/fixtures/AccountImportTemplate.xlsx'
    cy.wait(4000);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true});
    cy.wait(200)
   // cy.get(this.locators.uploadFileBtn).selectFile(filePath, { force: true }); 
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
         cy.get("input[name='attachedFile']").attachFile({
           fileContent,
           fileName: 'AccountImportTemplate.xlsx',
           mimeType: 'text/xlsx',
         });
         cy.get(this.locators.ClickUPload).click();
    cy.wait(1000);
       }); 

       cy.contains("Confirm File Upload?", { timeout: 10000 })
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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }


  AccountImportViaFrontEndBulkUploadLoan_1001(){
    const filePath = 'SuperstoreData.csv'
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.DownloadTmplet).click({force : true});
    cy.wait(500);
    cy.get(this.locators.uploadFileBtn).selectFile(`cypress/fixtures/${filePath}`, { force: true });
    cy.wait(500);
    cy.get(this.locators.ClickUPload).click();
    cy.wait(500);
    cy.get(this.locators.ClickOk).click();
    cy.wait(5000);
    //cy.contains('File Uploaded Successfully. Transaction ID :').should("be.visible");
     
    
  } 
  
  AccountImportViaFrontEndBulkUploadLoan_1002(){
    const filePath = 'Cypress/fixtures/SuperstoreData.csv'
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.DownloadTmplet).click({force : true});
    cy.wait(500);
    cy.get(this.locators.uploadFileBtn).selectFile(filePath, { force: true });
    cy.wait(500);
    cy.get(this.locators.ClickUPload).click();
    cy.wait(500);
    cy.get(this.locators.ClickOk).click();
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   " File Uploaded Successfully. Transaction ID : "
    // )
    // cy.log('File Uploaded Successfully...');

    
  }

  AccountImportViaFrontEndBulkUploadLoan_1007(){
    const filePath = 'Cypress/fixtures/Sample6mb.csv'
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.DownloadTmplet).click({force : true});
    cy.wait(500);
    cy.get(this.locators.uploadFileBtn).selectFile(filePath, { force: true });
    cy.wait(500);
    //cy.get(this.locators.ClickOk).click();
    cy.wait(5000);
    // cy.get('[role="alert"]').should(
    //   "contain.text",
    //   " File Uploaded Successfully. Transaction ID : "
    // )
  }

  SystemSettingTestPage_989(){
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(600);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(4000);
    cy.get(this.locators.TranID).type("20231115093442496");
    cy.wait(4000);
    cy.get(this.locators.Src).click();
  }


  SystemSettingTestPage_990(){
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(600);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(5000);
    cy.get("select[name='status']").select("Processed",{force: true});
    cy.wait(4000);
    cy.get(this.locators.TranID).click();
    cy.wait(4000);
    cy.get(this.locators.Src).click();
  }

  SystemSettingTestPage1011(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(1000);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplate.xlsx',
          mimeType: 'text/xlsx',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });

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

     cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
     cy.contains("Processed").should("be.visible");
      cy.wait(2000);
    
  }

  SystemSettingTestPage1012(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(1000);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplateABC.xlsx',
          mimeType: 'text/xlsx',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });

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

     cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
     cy.contains("Processed").should("be.visible");
      cy.wait(2000);
    
  }
  SystemSettingTestPage1021(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('#download-template-button').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplateA.txt',
          mimeType: 'text/xlsx',
        });
      });

      cy.wait(500);
    cy.contains("You can only upload the file with extension xls or xlsx ").should("be.visible")

    
    
  }
  SystemSettingTestPage1020(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('#download-template-button').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplateAB.xlsx',
          mimeType: 'text/xlsx',
        });
    cy.get(this.locators.ClickUPload).click();
    cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });

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

     cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
     cy.contains("Processed").should("be.visible");
      cy.wait(2000);
  }
  SystemSettingTestPage1027(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplate.xlsx',
          mimeType: 'text/xlsx',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
    
  }
  SystemSettingTestPage1028(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplatethzero.xlsx',
          mimeType: 'text/xlsx',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }
  SystemSettingTestPage1029(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplatetwofive.csv',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });
    
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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }
  SystemSettingTestPage1030(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplatetf.csv',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });
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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
    
  }
  SystemSettingTestPage1031(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplatetfa.csv',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });
    
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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }
  SystemSettingTestPage1032(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplategre.csv',
          mimeType: 'text/csv',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
    
  }

  SystemSettingTest_1015(){
    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(500);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(500);
    cy.get('#status-account-type-card').click({force : true});
    cy.wait(800);
    cy.get('#status-file-status').select('Processed');
    cy.wait(800);
    cy.get('#status-search').click();
    cy.wait(800);

}
SystemSettingTest_1016(){
  cy.wait(500);
  cy.get(this.locators.clickOnSystemSetting).click();
  cy.wait(900);
  cy.get(this.locators.ClickAccountUpload).click();
  cy.wait(500);
  cy.get(this.locators.ClickAccountupStatus).click();
  cy.wait(500);
  cy.get("#status-account-type-card").click({force : true});
  cy.wait(800);
  cy.get('#status-file-status').select('Partially Processed');
    cy.wait(800);
    cy.get('#status-search').click();
    cy.wait(800);

}
SystemSettingTest_1017(){
  cy.wait(500);
  cy.get(this.locators.clickOnSystemSetting).click();
  cy.wait(900);
  cy.get(this.locators.ClickAccountUpload).click();
  cy.wait(500);
  cy.get(this.locators.ClickAccountupStatus).click();
  cy.wait(500);
  cy.get("#status-account-type-card").click({force : true});
    cy.wait(800);
    cy.get('#status-file-status').select('Failed');
    cy.wait(800);
    cy.get('#status-search').click();
    cy.wait(800);

}
SystemSettingTest_1018(){
  cy.wait(500);
  cy.get(this.locators.clickOnSystemSetting).click();
  cy.wait(900);
  cy.get(this.locators.ClickAccountUpload).click();
  cy.wait(500);
  cy.get(this.locators.ClickAccountupStatus).click();
  cy.wait(500);
  cy.get("#status-account-type-card").click({force : true});
    cy.wait(800);
    cy.get('#status-file-status').select('Invalid File Format');
    cy.wait(800);
    cy.get('#status-search').click();
    cy.wait(800);

}

SystemSettingTest_983(){
  cy.get(this.locators.clickOnSystemSetting).click();
  cy.wait(900);
  cy.get(this.locators.ClickAccountUpload).click();
  cy.wait(600);
  cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
  cy.wait(700);
  cy.get(this.locators.DownloadTmplet).click({force: true});
  cy.wait(600);
  cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
  cy.get(this.locators.ClickUPload).click();
  cy.wait(500);
  cy.get(this.locators.ClickOk).click();
  cy.wait(1000);
    });
    cy.log('File upload completed');

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }


  SystemSettingTest_1008(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(1000);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplate.xlsx',
          mimeType: 'text/xlsx',
        });
    cy.get(this.locators.ClickUPload).click();
    cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });
      cy.log('File upload completed');

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }
  SystemSettingTest_1009(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplate.xlsx',
          mimeType: 'text/xlsx',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });
    
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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }


  Systemsetting992(){

    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(600);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(600);
    cy.wait(4000);
    cy.get("#status-file-status").select("Failed");
    cy.wait(4000);
    cy.get(this.locators.Src).click();


  }
  Systemsetting993(){

    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(600);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(600);
    cy.wait(4000);
    cy.get("#status-file-status").select("Invalid File Format");
    cy.wait(4000);
    cy.get(this.locators.Src).click();


  }
  Systemsetting994(){

    cy.wait(500);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(600);
    cy.get(this.locators.ClickAccountupStatus).click();
    cy.wait(600);
    cy.wait(4000);
    cy.get("#status-file-status").select("Uploaded");
    cy.wait(4000);
    cy.get(this.locators.Src).click();


  }

  Systemsetting995(){
    cy.wait(4000);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(500);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true});
    cy.wait(200)
    cy.get(".col-md-12 > .btn").click({force: true});
    cy.wait(200);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(this.locators.ClickUPload).click();
    cy.wait(200)
    cy.get(this.locators.ClickOk).click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }

  Systemsetting986(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get(this.locators.DownloadTmplet).click({force: true});
      cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(this.locators.ClickUPload).click();
    cy.wait(500);
    cy.get(this.locators.ClickOk).click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }


  Systemsetting987(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get(this.locators.DownloadTmplet).click({force: true});
    cy.wait(200);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(this.locators.ClickUPload).click();
    cy.wait(500);
    cy.get(this.locators.ClickOk).click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }

  Systemsetting1009(){
    cy.wait(4000);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.uploadclick).click({force: true});
    cy.wait(200)
    cy.get("input[value='card']").click({force:true});
    cy.wait(200)

    cy.get(".col-md-12 > .btn").click({force: true});
    cy.wait(200);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(".btn-success").click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }

  Systemsetting1010(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(1000);
    cy.get('.col-md-12 > .btn').click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(this.locators.ClickUPload).click();
    cy.get(this.locators.ClickOk).click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }

  Systemsetting1026(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(700);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(1000);

    cy.get(".col-md-12 > .btn").click({force: true});
    cy.wait(200);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(this.locators.ClickUPload).click();
    cy.get(this.locators.ClickOk).click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
  }

  Systemsetting1033(){
    cy.wait(4000);
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(5000);
    cy.get(this.locators.ClickAccountUpload).click({force: true});
    cy.wait(500);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true});
    cy.wait(200)
    cy.get(".col-md-12 > .btn").click({force: true});
    cy.wait(200);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get("#upload-button").click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }

  Systemsetting1034(){
    cy.get(this.locators.clickOnSystemSetting).click();
    cy.wait(900);
    cy.get(this.locators.ClickAccountUpload).click();
    cy.wait(600);
    cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
    cy.wait(500);
    cy.get('#radio-download-template-card').click({force: true});
    cy.wait(800);

    cy.get(".col-md-12 > .btn").click({force: true});
    cy.wait(200);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
      cy.get("input[name='attachedFile']").attachFile({
        fileContent,
        fileName: 'AccountImportTemplate.xlsx',
        mimeType: 'text/xlsx',
      });
    });
    cy.wait(200)
    cy.get(this.locators.ClickUPload).click();
    cy.get(this.locators.ClickOk).click();

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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);

  }

  SystemSettingTest_985(){
  cy.get(this.locators.clickOnSystemSetting).click();
  cy.wait(900);
  cy.get(this.locators.ClickAccountUpload).click();
  cy.wait(600);
  cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
  cy.wait(700);
  cy.get(this.locators.DownloadTmplet).click({force: true});
    cy.wait(600);
    cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
        cy.get("input[name='attachedFile']").attachFile({
          fileContent,
          fileName: 'AccountImportTemplate.xlsx',
          mimeType: 'text/xlsx',
        });
        cy.get(this.locators.ClickUPload).click();
        cy.wait(500);
        cy.get(this.locators.ClickOk).click();
    cy.wait(1000);
      });
      cy.log('File upload completed');
      cy.wait(4000);
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

    // cy.get(this.locators.ClickOnUserCreationUploadStatus).click();
    // cy.wait(3000);
    // cy.then(() => {
    //   const transactionId = Cypress.env("transactionID");
    //   cy.get(":nth-child(4) > .form-control").type(transactionId.toString()); // Convert to string if needed
    // });

    //  cy.wait(1000);
    // cy.get(this.locators.ClickOnStatusSearchBtn).click();
    // cy.wait(3000);
    //  cy.contains("Processed").should("be.visible");
    //   cy.wait(2000);
    }


    SystemSettingTest_1022(){
      cy.get(this.locators.clickOnSystemSetting).click();
      cy.wait(900);
      cy.get(this.locators.ClickAccountUpload).click();
      cy.wait(600);
      cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
      cy.wait(500);
      cy.get('#radio-download-template-card').click({force: true});
      cy.wait(800);
      cy.get('#download-template-button').click({force: true});
      cy.wait(600);
      cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'ffc127d-sample_receipt.png',
            mimeType: 'text/xlsx',
          });
         
        });
      
        cy.log('You can only Upload the file with extension Xsl or xlsx');

              
    
    }
    SystemSettingTest_1023(){
      cy.get(this.locators.clickOnSystemSetting).click();
      cy.wait(900);
      cy.get(this.locators.ClickAccountUpload).click();
      cy.wait(600);
      cy.get(this.locators.ClickBulkAccUpload).click({force: true} );
      cy.wait(500);
      cy.get('#radio-download-template-card').click({force: true});
      cy.wait(800);
      cy.get('#download-template-button').click({force: true});
      cy.wait(600);
        cy.fixture('AccountImportTemplate.xlsx').then((fileContent) => {
            cy.get("input[name='attachedFile']").attachFile({
              fileContent,
              fileName: 'AccountImportTemplate.xlsx',
              mimeType: 'text/xlsx',
            });
            cy.get(this.locators.ClickUPload).click();
            cy.wait(500);
            cy.get(this.locators.ClickOk).click();
        cy.wait(1000);
          });
          cy.log('File upload completed');
          
           cy.get(this.locators.ClickAccountupStatus).click();
      cy.wait(1000);
      cy.get('#transactionid').type(transactionID);
      cy.wait(1000);
      cy.contains("Processed").should("be.visible");
      cy.wait(2000);cy.contains("File Uploaded Successfully", { timeout: 10000 })
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

     cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
     cy.contains("Processed").should("be.visible");
      cy.wait(2000);
      
        
    }
    SystemSettingTest_1024(){
      cy.get(this.locators.clickOnSystemSetting).click();
      cy.wait(900);
      cy.get(this.locators.ClickAccountUpload).click();
      cy.wait(900);
      cy.get(this.locators.ClickAccountupStatus).click();
        cy.wait(800);
        cy.get('#status-account-type-card').click( {force: true});
        cy.wait(800);
        cy.get('#status-file-status').select('Failed');
        cy.wait(800);
        cy.get('#status-search').click();
        cy.wait(800);
    
      }
      SystemSettingTest_1025(){
        cy.get(this.locators.clickOnSystemSetting).click();
        cy.wait(900);
        cy.get(this.locators.ClickAccountUpload).click();
        cy.wait(900);
        cy.get(this.locators.ClickAccountupStatus).click();
          cy.wait(800);
          cy.get('#status-account-type-card').click( {force: true});
        cy.wait(800);
        cy.get('#status-transaction-id').type('20240717053322992');
        cy.wait(800);
        cy.get('#status-search').click();
        cy.wait(800);
        }
 
        SystemSettingTestPage_991(){
          cy.wait(500);
          cy.get(this.locators.clickOnSystemSetting).click();
          cy.wait(900);
          cy.get(this.locators.ClickAccountUpload).click({force: true});
          cy.wait(600);
          cy.get(this.locators.ClickAccountupStatus).click();
          cy.wait(600);
          cy.get("select[name='status']").select("Partially Processed",{force: true});
          cy.wait(4000);
          cy.get(this.locators.TranID).click();
          cy.wait(4000);
          cy.get(this.locators.Src).click();
      }

}

export default SystemSettingPage;
