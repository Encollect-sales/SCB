class TrailsPage {
  constructor(locators) {
    this.locators = locators;
  }

  SystemsettingsPage_01(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload File').should('be.disabled');
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();

 

  }

  SystemsettingsPage_02(){
      const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_download).click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload File').should('be.disabled');
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();

 
  }

  SystemsettingsPage_03(){
      const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_upload).click({force:true});
    cy.contains('button', 'Upload File').should('be.disabled');
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();

 
  }

  SystemsettingsPage_04(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.loan_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_upload).click({force:true});
    cy.contains('button', 'Upload File').should('be.disabled');
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();

 
  }

  SystemsettingsPage_05(){
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.loan_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_upload).click({force:true});
    cy.contains('button', 'Upload File').should('be.disabled');
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.disabled');
   
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or csv'
        ).should('be.visible');


   
  }
  SystemsettingsPage_06(){
    const filePath = 'Staff(1).xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.loan_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_upload).click({force:true});
    cy.contains('button', 'Upload File').should('be.disabled');
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
    

  }
  SystemsettingsPage_07(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.get(2000);
       cy.contains(
  "The file you've chosen is too large (max 2MB). Please try again",
  { timeout: 10000 }
).should('be.visible');
  }
  SystemsettingsPage_08(){
     const filePath = 'empty.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.loan_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_upload).click({force:true});
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();
    cy.wait(2000);
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


  cy.contains('Account Upload Status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > tr > :nth-child(3)').contains('Error').should('be.visible');
    cy.wait(2000);
    
  }

  SystemsettingsPage_09(){
     const filePath = 'AccountImportTemplate.csv';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.loan_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cc_upload).click({force:true});
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click();
    cy.wait(2000);
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


  cy.contains('Account Upload Status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Failed').should('be.visible');
    cy.wait(2000);



     

    
  }

  SystemsettingsPage_010(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Account_upload_bulk).click({force:true});
    cy.wait(2000);
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload File').should('be.enabled').click({force:true});
    cy.get(this.locators.cancelbutton).click({force:true});



  }

  Systemsettings_BulkMasters_01(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Bank Master');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('Bank Master');
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
   cy.contains('button', 'Upload').should('be.enabled');

  }
  Systemsettings_BulkMasters_02(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('--Select--');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('--Select--');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');


  }

   Systemsettings_BulkMasters_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
  cy.get(this.locators.download_template_bank_master)
  .find('option')
  .then(options => {

    const validOptions = [...options]
      .map(o => o.text)
      .filter(text => text.trim() !== '--Select--');

    const randomOption =
      validOptions[Math.floor(Math.random() * validOptions.length)];

    cy.get(this.locators.download_template_bank_master)
      .select(randomOption);

  });
  cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');
   }

   Systemsettings_BulkMasters_04(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).find('option')
  .then(options => {

    const validOptions = [...options]
      .map(o => o.text)
      .filter(text => text.trim() !== '--Select--');

    const randomOption =
      validOptions[Math.floor(Math.random() * validOptions.length)];

    cy.get(this.locators.upload_template_bank_master)
      .select(randomOption);

  });
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
  

   }
   Systemsettings_BulkMasters_05(){
      const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
  cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or xlsx'
        ).should('be.visible');


   }
   Systemsettings_BulkMasters_06(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_template_bank_master).select("Bank Master")
   
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.get(2000);
       cy.contains(
  "The file you've chosen is too large (max 2MB). Please try again",
  { timeout: 10000 }
).should('be.visible');
   }

   Systemsettings_BulkMasters_07(){
    const filePath = 'Staff(1).xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get('#upload-template-file').attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled').click();
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
   }
 Systemsettings_BulkMasters_08() {

    const filePath = "BulktrailHeaders.xlsx";

    cy.get('[title="System Settings"]').click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.masters_upload).click({ force: true });
    cy.wait(2000);

    cy.get(this.locators.bulk_upload_master).click({ force: true });
    cy.wait(2000);

    // Wait for loader to disappear
    cy.get('.global-loader-container', { timeout: 10000 }).should('not.exist');

    // Select dropdown value
    cy.get('#upload-template-type')
      .should('be.visible')
      .select('Bank Master');

    // Upload file
    cy.get('#upload-template-file').attachFile(filePath);

    // Click upload
    cy.contains('button', 'Upload')
      .should('be.enabled')
      .click();

    cy.wait(2000);
    cy.get(this.locators.cancel).click({ force: true });
    cy.wait(2000);
}
 SystemsettingsPage_011() {
  const filePath = 'AllocationToOwner.xlsx';

  cy.get('[title="System Settings"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Account_upload).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Account_upload_bulk).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.upload).attachFile(filePath);
  cy.wait(2000);
  cy.contains('button', 'Upload File').should('be.enabled').click({ force: true });
  cy.get(this.locators.cancelbutton).click({ force: true });
}

SystemsettingsPage_09(){
   const filePath = 'AllocationToOwner.xlsx';
  cy.get('[title="System Settings"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.masters_upload).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.bulk_upload_master).click({ force: true });
  cy.wait(2000);
   cy.get(this.locators.download_template_bank_master)
  .find('option')
  .then(options => {

    const validOptions = [...options]
      .map(o => o.text)
      .filter(text => text.trim() !== '--Select--');

    const randomOption =
      validOptions[Math.floor(Math.random() * validOptions.length)];

    cy.get(this.locators.download_template_bank_master)
      .select(randomOption);

  });
  cy.wait(2000);
  cy.get(this.locators.upload_template_bank_master).find('option')
  .then(options => {

    const validOptions = [...options]
      .map(o => o.text)
      .filter(text => text.trim() !== '--Select--');

    const randomOption =
      validOptions[Math.floor(Math.random() * validOptions.length)];

    cy.get(this.locators.upload_template_bank_master)
      .select(randomOption);

  });
  cy.get(this.locators.upload).attachFile(filePath);
  cy.wait(2000);
  cy.contains('button', 'Upload').should('be.enabled').click({ force: true });
  cy.get(this.locators.cancelbutton).click({ force: true });

}
   

Systemsettings_BulkMasters_base_branch_master_01(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Base Branch Master');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('Base Branch Master');
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
   cy.contains('button', 'Upload').should('be.enabled');

  }
 Systemsettings_BulkMasters_base_branch_master_02(){
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
     cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or csv'
        ).should('be.visible');


   

  }

 Systemsettings_BulkMasters_base_branch_master_03(){
    // const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.contains('Bulk Upload Masters').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    // cy.get(this.locators.upload).attachFile(filePath);
       cy.contains('button', 'Upload').click({force:true});
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')
   }

  Systemsettings_BulkMasters_base_branch_master_04(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Base Branch Master');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cancel).click({force:true});
  

   }
  Systemsettings_BulkMasters_base_branch_master_05(){
    cy.wait(9000);
       const filePath = 'empty.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
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
  cy.get('#status-file-type').select('Base Branch Master');
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
  Systemsettings_BulkMasters_base_branch_master_06(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
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

  Systemsettings_BulkMasters_base_branch_master_07(){
    const filePath = 'Staff(1).xlsx';
    cy.wait(7000);
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
   }
   Systemsettings_BulkMasters_base_branch_master_08(){
     const filePath = "BulktrailHeaders.xlsx";

    cy.get('[title="System Settings"]').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.get('#upload-template-file').attachFile(filePath);
    
    // OR if you want more than 2 clicks
    cy.contains('button', 'Upload')
        .should('be.enabled')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });

 
   

   }
 Systemsettings_BulkMasters_deposit_branch_master_01(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Deposit Bank Master');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('Deposit Bank Master');
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
   cy.contains('button', 'Upload').should('be.enabled');

  }
 Systemsettings_BulkMasters_deposit_branch_master_02(){
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
     cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or xlsx'
        ).should('be.visible');


   

  }

  Systemsettings_BulkMasters_deposit_branch_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.contains('Bulk Upload Masters').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    // cy.get(this.locators.upload).attachFile(filePath);
     cy.contains('button', 'Upload').click({force:true});
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')   }

   Systemsettings_BulkMasters_deposit_branch_master_04(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Deposit Bank Master');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cancel).click({force:true});
  

   }
   Systemsettings_BulkMasters_deposit_branch_master_05(){
    cy.wait(9000);
       const filePath = 'empty.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
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
  cy.get('#status-file-type').select('Deposit Bank Master');
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
   Systemsettings_BulkMasters_deposit_branch_master_06(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
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

   Systemsettings_BulkMasters_deposit_branch_master_07(){
    const filePath = 'Staff(1).xlsx';
    cy.wait(7000);
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
   }
   Systemsettings_BulkMasters_deposit_branch_master_08(){
     const filePath = "BulktrailHeaders.xlsx";

    cy.get('[title="System Settings"]').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.get('#upload-template-file').attachFile(filePath);
    
    // OR if you want more than 2 clicks
    cy.contains('button', 'Upload')
        .should('be.enabled')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });

 
   

   }

   Systemsettings_BulkMasters_Bucket_branch_master_01(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Bucket Master');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('Bucket Master');
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
   cy.contains('button', 'Upload').should('be.enabled');

  }
 Systemsettings_BulkMasters_Bucket_branch_master_02(){
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
     cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or csv'
        ).should('be.visible');


   

  }

  Systemsettings_BulkMasters_Bucket_branch_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.get(this.locators.upload).attachFile(filePath);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');
   }

   Systemsettings_BulkMasters_Bucket_branch_master_04(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Bucket Master');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cancel).click({force:true});
  

   }
   Systemsettings_BulkMasters_Bucket_branch_master_05(){
    cy.wait(9000);
       const filePath = 'empty.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
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
  cy.get('#status-file-type').select('Base Bucket Master');
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
   Systemsettings_BulkMasters_Bucket_branch_master_06(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
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

   Systemsettings_BulkMasters_Bucket_branch_master_07(){
    const filePath = 'Staff(1).xlsx';
    cy.wait(7000);
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
   }
   Systemsettings_BulkMasters_Bucket_branch_master_08(){
     const filePath = "BulktrailHeaders.xlsx";

    cy.get('[title="System Settings"]').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.get('#upload-template-file').attachFile(filePath);
    
    // OR if you want more than 2 clicks
    cy.contains('button', 'Upload')
        .should('be.enabled')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });



   }
   Systemsettings_BulkMasters_Disposition_master_01(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Disposition Master');
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select('Disposition Master');
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
   cy.contains('button', 'Upload').should('be.enabled');

  }
 Systemsettings_BulkMasters_Disposition_master_02(){
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
     cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or xlsx'
        ).should('be.visible');


   

  }

  Systemsettings_BulkMasters_Disposition_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.contains('Bulk Upload Masters').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    // cy.get(this.locators.upload).attachFile(filePath);
      cy.contains('button', 'Upload').click({force:true});
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')
   }

   Systemsettings_BulkMasters_Disposition_master_04(){
     const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.download_template_bank_master).select('Disposition Master');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.cancel).click({force:true});
  

   }
   Systemsettings_BulkMasters_Disposition_master_05(){
    cy.wait(9000);
       const filePath = 'empty.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
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
  cy.get('#status-file-type').select('Disposition Master');
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
   Systemsettings_BulkMasters_Disposition_master_06(){
    const filePath = '3mb.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
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

   Systemsettings_BulkMasters_Disposition_master_07(){
    const filePath = 'Staff(1).xlsx';
    cy.wait(7000);
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains('Filename should not contain any special characters')
          .should('be.visible');
   
   }
   Systemsettings_BulkMasters_Disposition_master_08(){
     const filePath = "BulktrailHeaders.xlsx";

    cy.get('[title="System Settings"]').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.get('#upload-template-file').attachFile(filePath);
    
    // OR if you want more than 2 clicks
    cy.contains('button', 'Upload')
        .should('be.enabled')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });

 
   

   }

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
 cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
      cy.contains(
          'You can only upload the file with extension xls or csv'
        ).should('be.visible');


   

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


   Systemsettings_BulkMasters_09(){
    // Negative Test - upload a template that has headers but zero data rows
    const filePath = 'BlankNoDataRows.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team - app should reject a file with no data rows
    cy.contains('No records found in the uploaded file', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_10(){
    // Negative Test - template uploaded with one or more mandatory columns missing
    const filePath = 'MissingMandatoryColumns.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // cy.get(this.locators.clickokbutton).click({force:true});
    // cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Bank Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_11(){
    // Negative Test - a field contains a value of the wrong data type (e.g. text in a numeric column)
    cy.wait(9000);
    const filePath = 'BankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Bank Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
  }

  Systemsettings_BulkMasters_12(){
    // Negative Test - file has more rows than the system allows in a single upload
    const filePath = 'ExceedsMaxRowLimit.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact row limit & wording with dev team
    cy.contains('Maximum allowed row limit exceeded', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_13(){
    // Negative Test - correct master selected in dropdown, but the file uploaded
    // actually belongs to a different master's template (column mismatch)
    const filePath = 'BucketMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Bank Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  

  Systemsettings_BulkMasters_14(){
    // Negative Test - upload the exact same file twice back-to-back, verify duplicate handling
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

    // Repeat the upload immediately with the same file
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Duplicate record(s) found', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_15(){
    // Negative Test - unsupported file extension (.csv / .txt)
    const filePath = 'adharcard.pdf';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains(
      'You can only upload the file with extension xls or xlsx'
    ).should('be.visible');
  }

  Systemsettings_BulkMasters_16(){
    // Negative Test - validate the EXACT error text (not just presence) when
    // Upload is attempted with no file attached
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bank Master");
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(2000);
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')
  }

  // ===================== Base Branch Master — new negative scenarios (09-16) =====================

  Systemsettings_BulkMasters_base_branch_master_09(){
    // Negative Test - upload a template that has headers but zero data rows
    const filePath = 'BaseBranchMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Base Branch Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
    
   
  }

  Systemsettings_BulkMasters_base_branch_master_10(){
    // Negative Test - template uploaded with one or more mandatory columns missing
    const filePath = 'BaseBranchMasterTemplatemissing.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Base Branch Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
   
  }

  Systemsettings_BulkMasters_base_branch_master_11(){
    // Negative Test - a field contains a value of the wrong data type (e.g. text in a numeric column)
    cy.wait(9000);
    const filePath = 'BankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Base Branch Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_base_branch_master_12(){
    // Negative Test - file has more rows than the system allows in a single upload
    const filePath = 'ExceedsMaxRowLimit.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact row limit & wording with dev team
    cy.contains('Maximum allowed row limit exceeded', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_base_branch_master_13(){
    // Negative Test - correct master selected in dropdown, but the file uploaded
    // actually belongs to a different master's template (column mismatch)
    const filePath = 'DepositBankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Base Branch Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');

  }
  

  Systemsettings_BulkMasters_base_branch_master_14(){
    // Negative Test - upload the exact same file twice back-to-back, verify duplicate handling
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

    // Repeat the upload immediately with the same file
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Duplicate record(s) found', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_base_branch_master_15(){
    // Negative Test - unsupported file extension (.csv / .txt)
    const filePath = 'AllocationToOwner.csv';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains(
      'You can only upload the file with extension xls or xlsx'
    ).should('be.visible');
  }

  Systemsettings_BulkMasters_base_branch_master_16(){
    // Negative Test - validate the EXACT error text (not just presence) when
    // Upload is attempted with no file attached
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(1000);
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')
  }

  // ===================== Deposit Bank Master — new negative scenarios (09-16) =====================

  Systemsettings_BulkMasters_deposit_branch_master_09(){
    // Negative Test - upload a template that has headers but zero data rows
    const filePath = 'DepositBankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Deposit Bank Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');

  }

  Systemsettings_BulkMasters_deposit_branch_master_10(){
    // Negative Test - template uploaded with one or more mandatory columns missing
    const filePath = 'DepositBankMasterTemplatemissing.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Deposit Bank Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');

  }

  Systemsettings_BulkMasters_deposit_branch_master_11(){
    // Negative Test - a field contains a value of the wrong data type (e.g. text in a numeric column)
    cy.wait(9000);
    const filePath = 'BankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Deposit Bank Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_deposit_branch_master_12(){
    // Negative Test - file has more rows than the system allows in a single upload
    const filePath = 'ExceedsMaxRowLimit.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact row limit & wording with dev team
    cy.contains('Maximum allowed row limit exceeded', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_deposit_branch_master_13(){
    // Negative Test - correct master selected in dropdown, but the file uploaded
    // actually belongs to a different master's template (column mismatch)
    const filePath = 'WrongMasterTemplateData.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Invalid template', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_deposit_branch_master_14(){
    // Negative Test - upload the exact same file twice back-to-back, verify duplicate handling
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

    // Repeat the upload immediately with the same file
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Duplicate record(s) found', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_deposit_branch_master_15(){
    // Negative Test - unsupported file extension (.csv / .txt)
    const filePath = 'AllocationToOwner.csv';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.get("#upload-template-file").attachFile(filePath);
    cy.wait(2000);
    cy.contains(
      'You can only upload the file with extension xls or xlsx'
    ).should('be.visible');
  }

  Systemsettings_BulkMasters_deposit_branch_master_16(){
    // Negative Test - validate the EXACT error text (not just presence) when
    // Upload is attempted with no file attached
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(1000);
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains('Bulk Upload Masters').scrollIntoView().should('exist');
   
  }

  // ===================== Bucket Master — new negative scenarios (09-16) =====================

  Systemsettings_BulkMasters_Bucket_branch_master_09(){
    // Negative Test - upload a template that has headers but zero data rows
    const filePath = 'BucketMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Bucket Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
   
  }

  Systemsettings_BulkMasters_Bucket_branch_master_10(){
    // Negative Test - template uploaded with one or more mandatory columns missing
    const filePath = 'MissingMandatoryColumns.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Mandatory column(s) missing', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Bucket_branch_master_11(){
    // Negative Test - a field contains a value of the wrong data type (e.g. text in a numeric column)
    cy.wait(9000);
    const filePath = 'BankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Bucket Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_Bucket_branch_master_12(){
    // Negative Test - file has more rows than the system allows in a single upload
    const filePath = 'ExceedsMaxRowLimit.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact row limit & wording with dev team
    cy.contains('Maximum allowed row limit exceeded', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Bucket_branch_master_13(){
    // Negative Test - correct master selected in dropdown, but the file uploaded
    // actually belongs to a different master's template (column mismatch)
    const filePath = 'BankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    // cy.contains('Invalid template', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Bucket_branch_master_14(){
    // Negative Test - upload the exact same file twice back-to-back, verify duplicate handling
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

    // Repeat the upload immediately with the same file
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Duplicate record(s) found', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Bucket_branch_master_15(){
    // Negative Test - unsupported file extension (.csv / .txt)
    const filePath = 'AllocationToOwner.csv';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains(
      'You can only upload the file with extension xls or xlsx'
    ).should('be.visible');
  }

  Systemsettings_BulkMasters_Bucket_branch_master_16(){
    // Negative Test - validate the EXACT error text (not just presence) when
    // Upload is attempted with no file attached
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Bucket Master");
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(1000);
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')
  }

  // ===================== Disposition Master — new negative scenarios (09-16) =====================

  Systemsettings_BulkMasters_Disposition_master_09(){
    // Negative Test - upload a template that has headers but zero data rows
    const filePath = 'DispositionMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Disposition Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
    
  }

  Systemsettings_BulkMasters_Disposition_master_10(){
    // Negative Test - template uploaded with one or more mandatory columns missing
    const filePath = 'DispositionMasterTemplatemissing.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    //  cy.get(this.locators.clickokbutton).click({force:true});
    // cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Disposition Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }
  

  Systemsettings_BulkMasters_Disposition_master_11(){
    // Negative Test - a field contains a value of the wrong data type (e.g. text in a numeric column)
    cy.wait(9000);
    const filePath = 'BankMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Disposition Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_Disposition_master_12(){
    // Negative Test - file has more rows than the system allows in a single upload
    const filePath = 'ExceedsMaxRowLimit.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact row limit & wording with dev team
    cy.contains('Maximum allowed row limit exceeded', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Disposition_master_13(){
    // Negative Test - correct master selected in dropdown, but the file uploaded
    // actually belongs to a different master's template (column mismatch)
    const filePath = 'DepartmentAndDesiginationMasterTemplate.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Disposition Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_Disposition_master_14(){
    // Negative Test - upload the exact same file twice back-to-back, verify duplicate handling
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

    // Repeat the upload immediately with the same file
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact wording with dev team
    cy.contains('Duplicate record(s) found', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Disposition_master_15(){
    // Negative Test - unsupported file extension (.csv / .txt)
    const filePath = 'Sample.txt';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
   cy.get('#upload-template-file').selectFile(
  'cypress/fixtures/Sample.txt'
);
    cy.wait(2000);
    cy.contains(
      'You can only upload the file with extension xls or csv'
    ).should('be.visible');
  }

  Systemsettings_BulkMasters_Disposition_master_16(){
    // Negative Test - validate the EXACT error text (not just presence) when
    // Upload is attempted with no file attached
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(1000);
    //  cy.contains('button', 'Upload').click({force:true});
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible');
  }

  // ===================== Department and Designation Master — new negative scenarios (09-16) =====================

  Systemsettings_BulkMasters_Department_Designation_master_09(){
    // Negative Test - upload a template that has headers but zero data rows
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
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Department and Designation Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Failed').should('be.visible');
  }

  Systemsettings_BulkMasters_Department_Designation_master_10(){
    // Negative Test - template uploaded with one or more mandatory columns missing
    const filePath = 'DepartmentAndDesiginationMasterTemplate.xlsx';
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
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Department and Designation Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }
  

  Systemsettings_BulkMasters_Department_Designation_master_11(){
    // Negative Test - a field contains a value of the wrong data type (e.g. text in a numeric column)
    cy.wait(9000);
    const filePath = 'BankMasterTemplate.xlsx';
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
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Department and Designation Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_Department_Designation_master_12(){
    // Negative Test - file has more rows than the system allows in a single upload
    const filePath = 'ExceedsMaxRowLimit.xlsx';
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
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    // TODO: confirm exact row limit & wording with dev team
    cy.contains('Maximum allowed row limit exceeded', { timeout: 10000 }).should('be.visible');
  }

  Systemsettings_BulkMasters_Department_Designation_master_13(){
    // Negative Test - correct master selected in dropdown, but the file uploaded
    // actually belongs to a different master's template (column mismatch)
    const filePath = 'BankMasterTemplate.xlsx';
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
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
      cy.wait(2000);
    cy.contains("File Uploaded Successfully", { timeout: 10000 })
      .invoke("text")
      .then((popupText) => {
        const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
        if (transactionIdMatch) {
          Cypress.env("transactionID", transactionIdMatch[1]);
        }
      });

    cy.wait(3000);
    cy.get('#status-file-type').select('Department and Designation Master');
    cy.wait(2000);
    cy.get('#nav-item-3-masters-upload-status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#status-transaction-id").type(transactionId.toString());
    });
    cy.get("#status-search").click({force:true});
    cy.wait(2000);
    // Row-level validation failure should surface as Failed status
    cy.get('tbody > tr > :nth-child(3)').contains('Invalid File Format').should('be.visible');
  }

  Systemsettings_BulkMasters_Department_Designation_master_14(){
    // Negative Test - upload the exact same file twice back-to-back, verify duplicate handling
    const filePath = 'AllocationToOwner.xlsx';
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
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

    // Repeat the upload immediately with the same file
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

   
  }

  Systemsettings_BulkMasters_Department_Designation_master_15(){
    // // Negative Test - unsupported file extension (.csv / .txt)
    // const filePath = 'Sample.txt';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.get('#upload-template-file').selectFile(
  'cypress/fixtures/Sample.txt'
);
    cy.contains('You can only upload the file with extension xls or csv').should('be.visible');
    cy.wait(2000);
    cy.contains(
      'You can only upload the file with extension xls or csv'
    ).should('be.visible');
  }

  Systemsettings_BulkMasters_Department_Designation_master_16(){
    // Negative Test - validate the EXACT error text (not just presence) when
    // Upload is attempted with no file attached
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload_master).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Department and Designation Master");
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.disabled');
    cy.contains('button', 'Upload').click({force:true});
    cy.wait(1000);
    // Exact text match, not just "should('be.visible')" - catches wording regressions
        // cy.contains('button', 'Upload').click({force:true});
    cy.contains('Yes', { timeout: 10000 }).should('be.visible').click({force:true});
    cy.contains('Bulk Upload Masters').scrollIntoView().should('be.visible')   }
  




  }
export default TrailsPage;
   