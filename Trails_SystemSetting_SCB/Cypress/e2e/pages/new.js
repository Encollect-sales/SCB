Systemsettings_BulkMasters_Department_Designation_master_01(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Department and Designation Master');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('Department and Designation Master');
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
   cy.contains('button', 'Upload').should('be.enabled');

  }
 Systemsettings_BulkMasters_Department_Designation_master_02(){
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled');

  }

  Systemsettings_BulkMasters_Department_Designation_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.get(this.locators.upload).attachFile(filePath);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');
   }

   Systemsettings_BulkMasters_Department_Designation_master_04(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Department and Designation Master');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cancel).click({force:true});
  

   }
   Systemsettings_BulkMasters_Department_Designation_master_05(){
    cy.wait(9000);
       const filePath = 'empty.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
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
  cy.get('#status-file-type').select('Base Department and Designation Master');
  cy.wait(2000);
  cy.get('#nav-item-3-masters-upload-status').click({force:true});
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
   Systemsettings_BulkMasters_Department_Designation_master_06(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
       cy.contains(
  "The file you've chosen is too large (max 2MB). Please try again",
  { timeout: 10000 }
).should('be.visible');
   }

   Systemsettings_BulkMasters_Department_Designation_master_07(){
    const filePath = 'Staff(1).xlsx';
    cy.wait(7000);
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
   }
   Systemsettings_BulkMasters_Department_Designation_master_08(){
     const filePath = "BulktrailHeaders.xlsx";

    cy.get('[title="System Settings"]').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.get('#upload-template-file').attachFile(filePath);
    
    // OR if you want more than 2 clicks
    cy.contains('button', 'Upload')
        .should('be.enabled')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });

 
   

   }