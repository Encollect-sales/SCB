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
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Failed').should('be.visible');
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
          'You can only upload the file with extension xls or csv'
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
    cy.contains('button', 'Upload').should('be.enabled');

  }

 Systemsettings_BulkMasters_base_branch_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Base Branch Master");
    cy.get(this.locators.upload).attachFile(filePath);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');
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
    cy.contains('button', 'Upload').should('be.enabled');

  }

  Systemsettings_BulkMasters_deposit_branch_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Deposit Bank Master");
    cy.get(this.locators.upload).attachFile(filePath);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');
   }

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
    cy.contains('button', 'Upload').should('be.enabled');

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
    cy.contains('button', 'Upload').should('be.enabled');

  }

  Systemsettings_BulkMasters_Disposition_master_03(){
    const filePath = 'AllocationToOwner.xlsx';
    cy.get('[title="System Settings"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.masters_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_template_bank_master).select("Disposition Master");
    cy.get(this.locators.upload).attachFile(filePath);
    cy.contains('Please Select Proceed with Upload For Before Uploading File', { timeout: 10000 }).should('be.visible');
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
  cy.get('#status-file-type').select('Base Disposition Master');
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



  }
export default TrailsPage;
   