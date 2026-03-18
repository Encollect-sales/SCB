class AllocationPage {
  constructor(locators) {
    this.locators = locators;
  }
  
Allocation_loan_account_01(){
    const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}

Allocation_loan_account_02(){
    const filePath = 'PrimaryAgency_Accountlevel.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecalling_agency_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

    
  

}

Allocation_loan_account_03(){
     const filePath = 'PrimaryTeleCallingAgency_Accountlevel.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecalling_agency_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.field_agency_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');


}
Allocation_loan_account_04(){
     const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');


}
Allocation_loan_account_05(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}

Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_06(){
   const filePath = 'PrimaryAgency.xlsx'; 
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
}

Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_07(){
    const filePath = 'PrimaryTelecallingAgency_Customerlevel.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecalling_agency_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

}
Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_08(){

const filePath = 'PrimaryTeleCallingAgency.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecalling_agency_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.field_agency_upload).click({force:true});
    cy.wait(2000); 
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');
}
Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_09(){
     const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

}
Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_010(){
 const filePath = '3mbnew.xlsx';
    cy.wait(2000);
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
          cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}

Allocation_Agency_Bulk_Allocation_Customer_Level_loan_account_011(){
  const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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

 
  cy.contains('Agency Allocation Status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
}

Allocation_creditcard_012(){
   
    const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.credit_card).click({force:true});
   cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}


Allocation_creditcard_013(){
  
    const filePath = 'PrimaryAgency_Accountlevel.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
     cy.get(this.locators.credit_card).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.telecalling_agency_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

}
Allocation_creditcard_014(){
    const filePath = 'Staff(1).xlsx'
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.credit_card).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.telecalling_agency_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.field_agency_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

}
Allocation_creditcard_015(){
  
   const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
     cy.get(this.locators.credit_card).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

}
Allocation_creditcard_016(){
 
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
      cy.get(this.locators.credit_card).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}
Allocation_creditcard_017(){
  
 const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.credit_card).click({force:true});
   cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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

 
  cy.contains('Agency Allocation Status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
  }


  Allocation_Agency_bulk_allocation_customer_level_credit_card_018(){
      const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
    cy.wait(2000); 
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

  }
   Allocation_Agency_bulk_allocation_customer_level_credit_card_019(){
      const filePath = 'PrimaryAgency_Accountlevel.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
    cy.wait(2000); 
    cy.get(this.locators.telecalling_agency_upload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

   }
      Allocation_Agency_bulk_allocation_customer_level_credit_card_020(){
        const filePath = 'PrimaryTeleCallingAgency.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
    cy.wait(2000); 
    cy.get(this.locators.telecalling_agency_download).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.field_agency_upload).click({force:true});
    cy.wait(2000); 
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

      }
  Allocation_Agency_bulk_allocation_customer_level_credit_card_021(){
    const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
    cy.wait(2000); 
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

  }
  Allocation_Agency_Bulk_Allocation_customer_level_loan_account_022(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

  }

  AllocationPage_credit_card_023(){
     const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Allocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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

  cy.contains('Agency Allocation Status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
  }

  AllocationPage_agnecy_level_loan_account_024(){
    const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
 cy.contains('Agency Bulk Allocation Account Level').click({force:true});
 cy.wait(2000);
    // cy.get('#account-type-cc').click({force:true});
    // cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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
      cy.contains('Agency Allocation Status').click({force:true});
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);



  }

  DealloctionPage_025(){

     const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


  }
  DealloctionPage_026(){
     const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
     


  }
  DealloctionPage_027(){
    const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    // cy.get('#account-type-cc').click({force:true});
    // cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
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
      cy.contains('Agency Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);

  }

  DealloctionPage_028(){
      const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Deallocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
  }

  DealloctionPage_029(){

   

     const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get('#AllocationType2').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

  }

  DealloctionPage_030(){
     const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get('#AllocationType2').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

  }
  DealloctionPage_031(){
    const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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
      cy.contains('Agency Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
  }
  DealloctionPage_032(){
       const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Deallocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get('#AllocationType2').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
          cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');    

  }
 Agency_Bulk_Deallocation_Customer_Level_033(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get('#teleAgency').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

  }

   Agency_Bulk_Deallocation_Customer_Level_034(){
      const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get('#teleAgency').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }

   Agency_Bulk_Deallocation_Customer_Level_035(){
     const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains('Agency Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
  cy.get('#teleAgency').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
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
      cy.contains('Agency Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
  }
  Agency_Bulk_Deallocation_Customer_Level_036(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agency Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Deallocation Customer Level").click({force:true});
    cy.wait(2000);
    cy.get('#teleAgency').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
        cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');      }
   
   Agent_Bulk_Deallocation_Account_Level_037(){
    const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

   }
   Agent_Bulk_Deallocation_Account_Level_038(){
 
    const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
 cy.contains(
  /invalid|error|format|xlsx|upload failed|unsupported/i,
  { timeout: 10000 }
).should('be.visible');
   }

   Agent_Bulk_Deallocation_Account_Level_039(){
     const filePath = 'Staff(1).xlsx';
      cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');


   }
   Agent_Bulk_Deallocation_Account_Level_040(){
    
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
     cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


   }
   Agent_Bulk_Deallocation_Account_Level_041(){
    const filePath = 'empty.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
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
      cy.contains('Agent Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);

   }
   Agent_Bulk_Deallocation_account_level_agent_042(){
     const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
  cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
    
   }
   Agent_Bulk_Deallocation_account_level_agent_043(){
      const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
   cy.contains(
  /invalid|error|format|xlsx|upload failed|unsupported/i,
  { timeout: 10000 }
).should('be.visible');
   }
  Agent_Bulk_Deallocation_account_level_agent_044(){
     const filePath = 'Staff(1).xlsx';
      cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }
   Agent_Bulk_Deallocation_account_level_agent_045(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
   }


    Agent_Bulk_Deallocation_account_level_agent_046(){
      const filePath = 'empty.xlsx';
   
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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
      cy.contains('Agent Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
   }
   
    //  ##################################################################
Agent_Bulk_Deallocation_account_level_telecaller_047(){
     const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
  cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecaller).click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
    
   }
   Agent_Bulk_Deallocation_account_level_telecaller_048(){
      const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecaller).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
   cy.contains(
  /invalid|error|format|xlsx|upload failed|unsupported/i,
  { timeout: 10000 }
).should('be.visible');
   }
  Agent_Bulk_Deallocation_account_level_telecaller_049(){
     const filePath = 'Staff(1).xlsx';
      cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.telecaller).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }
   Agent_Bulk_Deallocation_account_level_telecaller_050(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.telecaller).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
   }


    Agent_Bulk_Deallocation_account_level_telecaller_051(){
      const filePath = 'empty.xlsx';
   
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
     cy.get(this.locators.telecaller).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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
      cy.contains('Agent Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
   }
   
// ########################################################################
Agent_Bulk_Deallocation_customer_level_staff_052(){
     const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
  cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.telecaller).click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
    
   }
   Agent_Bulk_Deallocation_customer_level_staff_053(){
      const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
       cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
   cy.contains(
  /invalid|error|format|xlsx|upload failed|unsupported/i,
  { timeout: 10000 }
).should('be.visible');
   }
  Agent_Bulk_Deallocation_customer_level_staff_054(){
     const filePath = 'Staff(1).xlsx';
      cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }
   Agent_Bulk_Deallocation_customer_level_staff_055(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
   }


    Agent_Bulk_Deallocation_customer_level_staff_056(){
      const filePath = 'empty.xlsx';
   
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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
      cy.contains('Agent Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
   }
  //  ##############################################agent

   Agent_Bulk_Deallocation_customer_level_agent_057(){
     const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
  cy.contains('Agent Bulk Deallocation Account Level').click({force:true});
    cy.wait(2000);
cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
    
   }
   Agent_Bulk_Deallocation_customer_level_agent_058(){
      const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
       cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
   cy.contains(
  /invalid|error|format|xlsx|upload failed|unsupported/i,
  { timeout: 10000 }
).should('be.visible');
   }
  Agent_Bulk_Deallocation_customer_level_agent_059(){
     const filePath = 'Staff(1).xlsx';
      cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }
   Agent_Bulk_Deallocation_customer_level_agent_060(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
   }


    Agent_Bulk_Deallocation_customer_level_agent_061(){
      const filePath = 'empty.xlsx';
   
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Deallocation Customer Level').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agent).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(5000);
      
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
      cy.contains('Agent Deallocation Status').click({force:true});
    
    cy.wait(900);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
    cy.get("#search").click({force:true});
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Invalid File Format').should('be.visible');
    cy.wait(2000);
   }

  //  ##########################################telecaller

// 062 - Upload button enable/disable
Agent_Bulk_Deallocation_customer_level_telecaller_062() {
  const filePath = 'AgencyTemplate.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Deallocation Customer Level').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.telecaller).click({ force: true });
  cy.wait(2000);

  cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);

  cy.get(this.locators.upload_field).attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');
}


// 063 - Invalid file format
Agent_Bulk_Deallocation_customer_level_telecaller_063() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Deallocation Customer Level').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.telecaller).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.upload_field).attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 064 - Special character filename
Agent_Bulk_Deallocation_customer_level_telecaller_064() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Deallocation Customer Level').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.telecaller).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.upload_field).attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({ force: true });

  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 065 - File size validation
Agent_Bulk_Deallocation_customer_level_telecaller_065() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Deallocation Customer Level').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.telecaller).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.upload_field).attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 066 - Empty file → Failed status
Agent_Bulk_Deallocation_customer_level_telecaller_066() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Deallocation Customer Level').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.telecaller).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.upload_field).attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({ force: true });
  cy.wait(5000);

  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Deallocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

//  cy.get('tbody > .ng-star-inserted > :nth-child(4)')
//     .contains('Invalid')
//     .should('be.visible');

 cy.get('tr.ng-star-inserted > :nth-child(4)')
  .should('contain.text', 'Invalid File Format');

}

// ##################################

Agent_Bulk_allocation_account_level_loan_account_staff_staff_067(){
    const filePath = 'empty.xlsx';
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_staff_staff_068() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_staff_staff_069() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_staff_staff_070() {
  const filePath = '3mbnew.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);
  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(20000);
  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 20000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_staff_staff_071() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}


// ###################################staff_agent
Agent_Bulk_allocation_account_level_loan_account_staff_agent_072(){
   const filePath = 'empty.xlsx';
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.disabled');
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');






}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_staff_agent_073() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_staff_agent_074() {
  const filePath = 'ENCollectSecondaryAllocationCollectionStaff_Accountlevel(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_staff_agent_075() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  // cy.contains('button', 'Upload')
  //   .should('be.enabled')
  //   .click({ force: true });

  // cy.get(this.locators.clickokbutton).click({force:true});

//cy.wait(5000);

  cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');


}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_staff_agent_076() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');
 

}

// ########################################staff_telecaller

Agent_Bulk_allocation_account_level_loan_account_staff_telecaller_077(){
  const filePath = "ENCollectSecondaryAllocationCollectionStaff.xlsx"
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
   cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_staff_telecaller_078() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#allocationType3').click({force:true});
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_staff_telecaller_079() {
  const filePath = 'ENCollectSecondaryAllocationTelecaller_(1)Accountlevel.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .click({ force: true });   

 cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_staff_telecaller_080() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

 cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_staff_telecaller_081() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#allocationType3').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .click({ force: true });
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');


}




// ##################################agent_staff

Agent_Bulk_allocation_account_level_loan_account_agent_staff_082(){
  const filePath = 'ENCollectSecondaryAllocationCollectionStaff.xlsx'
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload')
    .click({ force: true });

 cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_agent_staff_083() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_agent_staff_084() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_agent_staff_085() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_agent_staff_086() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}

// ############################################agent_agent

Agent_Bulk_allocation_account_level_loan_account_agent_agent_087(){
  const filePath = 'ENCollectSecondaryAllocationTelecaller.xlsx'
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_agent_agent_088() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_agent_agent_089() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_agent_agent_090() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_agent_agent_091() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}

// ###########################################agent_telecaller

Agent_Bulk_allocation_account_level_loan_account_agent_telecaller_092(){
  const filePath = 'StaffTemplate.xlsx'
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_agent_telecaller_093() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_agent_telecaller_094() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_agent_telecaller_095() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_agent_telecaller_096() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}

// ###################################telecaller_staff


Agent_Bulk_allocation_account_level_loan_account_telecaller_staff_097(){
  const filePath = 'AgencyTemplate.xlsx'
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType1').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_telecaller_staff_098() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType1').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_telecaller_staff_099() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType1').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_telecaller_staff_0100() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType1').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_telecaller_staff_0101() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType1').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}


// ##########################################telecaller_agent


Agent_Bulk_allocation_account_level_loan_account_telecaller_agent_0102(){
  const filePath = 'Bulktrail.xlsx'
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_telecaller_agent_0103() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_telecaller_agent_0104() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_telecaller_agent_0105() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_telecaller_agent_0106() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#AllocationType2').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}
// ####################################telecaller_telecallar

Agent_Bulk_allocation_account_level_loan_account_telecaller_telecaller_0107(){
  const filePath = 'AgentTemplate.xlsx'
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
cy.contains('Agent Bulk Allocation Account Level').click({force:true});
cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get("#AttachedFile").attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');




}


// 068 - Invalid file format
Agent_Bulk_allocation_account_level_loan_account_telecaller_telecaller_0108() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 069 - Special character filename
Agent_Bulk_allocation_account_level_loan_account_telecaller_telecaller_0109() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 070 - File size validation
Agent_Bulk_allocation_account_level_loan_account_telecaller_telecaller_0110() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(3000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 20000 }
  ).should('be.visible');
}


// 071 - Empty file upload
Agent_Bulk_allocation_account_level_loan_account_telecaller_telecaller_0111() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);

  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
cy.get('#allocationType3').click({force:true});
cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke("text")
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env("transactionID", match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
    cy.get('#Transactionid')
      .type(Cypress.env('transactionID').toString());
  });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}
// ######################################cc#############################

Agent_Bulk_allocation_account_level_loan_credit_card_staff_staff_0112(){
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
    const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.contains('button', 'Upload').should('be.disabled');
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');
}


// 098 - Invalid file format
Agent_Bulk_allocation_account_level_credit_card_staff_staff_0113() {
  const filePath = 'Aadhar.png';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 099 - Special character filename
Agent_Bulk_allocation_account_level_credit_card_staff_staff_0114() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });   
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 100 - File size validation
Agent_Bulk_allocation_account_level_credit_card_staff_staff_0115() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});

cy.wait(5000);

  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 101 - Empty file upload
Agent_Bulk_allocation_account_level_credit_card_staff_staff_0116() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.wait(2000);

  cy.contains('button', 'Upload')
    .should('be.enabled')
    .click({ force: true });

  cy.wait(5000);
 
cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
  cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
  cy.wait(900);

  cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });

  cy.get('#search').click({ force: true });
  cy.wait(2000);

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}
// ======================= staff_agent =======================

// 102 - Upload button enable check
Agent_Bulk_allocation_account_level_credit_card_staff_agent_0117() {
  const filePath = 'StaffTemplate.xlsx'
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({ force: true });
  cy.wait(2000);
  cy.contains('button', 'Upload').should('be.disabled');
  cy.get('#AttachedFile').attachFile(filePath);
  // cy.contains('button', 'Upload').should('be.enabled');
  cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

}


// 103 - Invalid file format
Agent_Bulk_allocation_account_level_credit_card_staff_agent_0118() {
  const filePath = 'Aadhar.png';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 104 - Special character filename
Agent_Bulk_allocation_account_level_credit_card_staff_agent_0119() {
  const filePath = 'ENCollectSecondaryAllocationCollection#Staff_Accountlevel.xlsx';
  
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
 
  cy.get(this.locators.clickokbutton).click({force:true});

 cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

}


// 105 - File size validation
Agent_Bulk_allocation_account_level_credit_card_staff_agent_0120() {
  const filePath = '3mbnew.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

}


// 106 - Empty file upload
Agent_Bulk_allocation_account_level_credit_card_staff_agent_0121() {
  const filePath = 'empty.xlsx';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({ force: true });
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');
}

// ======================= staff_telecaller =======================

// 107 - Upload button enable check
Agent_Bulk_allocation_account_level_credit_card_staff_telecaller_0122() {
  //   cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
      const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#allocationType3').click({ force: true });
  cy.wait(2000);
  cy.contains('button', 'Upload').should('be.disabled');
  cy.get('#AttachedFile').attachFile(filePath);
   cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');
}


// 108 - Invalid file format
Agent_Bulk_allocation_account_level_credit_card_staff_telecaller_0123() {
  const filePath = 'Aadhar.png';
  

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#allocationType3').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 109 - Special character filename
Agent_Bulk_allocation_account_level_credit_card_staff_telecaller_0124() {
  const filePath = 'Staff(1).xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#allocationType3').click({ force: true });
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 110 - File size validation
Agent_Bulk_allocation_account_level_credit_card_staff_telecaller_0125() {
  const filePath = 'ENCollectSecondaryAllocationTelecaller_Accountlevel.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#allocationType3').click({ force: true });
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 111 - Empty file upload
Agent_Bulk_allocation_account_level_credit_card_staff_telecaller_0126() {
  const filePath = 'empty.xlsx';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#allocationType3').click({ force: true });
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

}
// 112
Agent_Bulk_allocation_account_level_credit_card_agent_staff_0127() {
   
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    const filePath = 'empty.xlsx';
   cy.contains('button', 'Upload').should('be.disabled');
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled');

}


// 113
Agent_Bulk_allocation_account_level_credit_card_agent_staff_0128() {
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


// 114
Agent_Bulk_allocation_account_level_credit_card_agent_staff_0129() {
  const filePath = 'Staff(1).xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
   cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    'Filename should not contain any special characters',
    { timeout: 10000 }
  ).should('be.visible');
}


// 115
Agent_Bulk_allocation_account_level_credit_card_agent_staff_0130() {
  const filePath = '3mbnew.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains(
    "The file you've chosen is too large (max 2MB). Please try again",
    { timeout: 10000 }
  ).should('be.visible');
}


// 116
Agent_Bulk_allocation_account_level_credit_card_agent_staff_0131() {
  const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);


  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

  cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');

    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);

   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}


Agent_Bulk_allocation_account_level_credit_card_agent_agent_0132(){

  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
    cy.get('#AllocationType2').click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get("#AttachedFile").attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
 

}
Agent_Bulk_allocation_account_level_credit_card_agent_agent_0133(){

 const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Account Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}
Agent_Bulk_allocation_account_level_credit_card_agent_agent_0134(){

 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
      cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
  cy.wait(2000);
    cy.get("#AttachedFile").attachFile(filePath);
    cy.wait(2000); 
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

}
Agent_Bulk_allocation_account_level_credit_card_agent_agent_0135(){
  const filePath = '3mbnew.xlsx';
  cy.get('[title="Allocation"]').click({force:true});
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("#AllocationType2").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload).attachFile(filePath);
  cy.contains('button', 'Upload').should('be.enabled').click({force:true});
  cy.get(this.locators.clickokbutton).click({force:true});
  cy.wait(2000);
  cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
      }
Agent_Bulk_allocation_account_level_credit_card_agent_agent_0136(){
const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get('#AllocationType2').click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click({force:true});

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      





}
Agent_Bulk_allocation_account_level_credit_card_agent_telecaller_0137(){
  
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.contains('Agent Bulk Upload').click({ force: true });
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("#allocationType3").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
}
Agent_Bulk_allocation_account_level_credit_card_agent_telecaller_0138(){
  const filePath = 'Aadhar.png';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("#allocationType3").click({force:true});
    cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');


}
Agent_Bulk_allocation_account_level_credit_card_agent_telecaller_0139(){
  
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
      cy.get('#account-type-cc').click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("#allocationType3").click({force:true});
    cy.wait(2000);
    cy.get("#AttachedFile").attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');


}
Agent_Bulk_allocation_account_level_credit_card_agent_telecaller_0140(){

    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("#allocationType3").click({force:true});
    cy.wait(2000);
    cy.get("#AttachedFile").attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}
Agent_Bulk_allocation_account_level_credit_card_agent_telecaller_0141(){

  
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("#allocationType3").click({force:true});
    cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');


}
Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0142(){
  
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);

    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');




}
Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0143(){
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');






}
Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0144(){

  
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
     cy.get('#AttachedFile').attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      

}
Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0145(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
 cy.get('#AttachedFile').attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
          cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}
Agent_Bulk_allocation_account_level_credit_card_telecaller_staff_0146(){
   
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');


}

Agent_Bulk_allocation_account_level_credit_card_telecaller_agent_0147(){
  
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#AllocationType2").click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');



}

Agent_Bulk_allocation_account_level_credit_card_telecaller_agent_0148(){

const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
   cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#AllocationType2").click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

}
Agent_Bulk_allocation_account_level_credit_card_telecaller_agent_0245(){

   const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#AllocationType2").click({force:true});
  cy.wait(2000);
 cy.get('#AttachedFile').attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      

}
Agent_Bulk_allocation_account_level_credit_card_telecaller_agent_0246(){
    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#AllocationType2").click({force:true});
  cy.wait(2000);
    cy.get('#AttachedFile').attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
        cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(10000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');
      }
Agent_Bulk_allocation_account_level_credit_card_telecaller_agent_0247(){
  
  const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#AllocationType2").click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });
  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();
 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
}



Agent_Bulk_allocation_account_level_credit_card_telecaller_telecaller_0244(){
  
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
       cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#allocationType3").click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get("#AttachedFile").attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');



}

Agent_Bulk_allocation_account_level_credit_card_telecaller_telecaller_0149(){

  
const filePath = 'Aadhar.png';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
  cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#allocationType3").click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');


}
Agent_Bulk_allocation_account_level_credit_card_telecaller_telecaller_0150(){
  

 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#allocationType3").click({force:true});
  cy.wait(2000);
 cy.get('#AttachedFile').attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      

}
Agent_Bulk_allocation_account_level_credit_card_telecaller_telecaller_0151(){

    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
    cy.wait(2000);
     cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#allocationType3").click({force:true});
  cy.wait(2000);
    cy.get('#AttachedFile').attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


}
Agent_Bulk_allocation_account_level_credit_card_telecaller_telecaller_0152(){
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Account Level']").click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
  cy.wait(2000);
  cy.get('#downloadTemplateType3').click({force:true});
  cy.wait(2000);
  cy.get("#allocationType3").click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

}

// ######################################cl_la
Agent_Bulk_allocation_customer_Level_loan_account_staff_staff_0153(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


}
Agent_Bulk_allocation_customer_Level_loan_account_staff_staff_0154(){
const filePath = 'Aadhar.png';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


Agent_Bulk_allocation_customer_Level_loan_account_staff_staff_0155(){

 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      }

      Agent_Bulk_allocation_customer_Level_loan_account_staff_staff_0156(){
        
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


      }
      Agent_Bulk_allocation_customer_Level_loan_account_staff_staff_0157(){
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Customer Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

  cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');

  cy.get(this.locators.clickokbutton).click({force:true});

   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      }


      Agent_Bulk_allocation_customer_Level_loan_account_staff_agent_0158(){

const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');



      }

       Agent_Bulk_allocation_customer_Level_loan_account_staff_agent_0159(){

const filePath = 'Aadhar.png';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Customer Level').click({ force: true });
  cy.wait(2000);
 cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');



        
      }
       Agent_Bulk_allocation_customer_Level_loan_account_staff_agent_0160(){

        
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
     cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
      cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');


        
      }
       Agent_Bulk_allocation_customer_Level_loan_account_staff_agent_0161(){
          const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
     cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
   cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

        
      }
       Agent_Bulk_allocation_customer_Level_loan_account_staff_agent_0162(){

         const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
 cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
     cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');

        
      }

     Agent_Bulk_allocation_customer_Level_loan_account_staff_telecaller_0163(){

const filePath = 'Aadhar.png';
 
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

     }
     
     Agent_Bulk_allocation_customer_Level_loan_account_staff_telecaller_0164(){


  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
      cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

     }
     
     Agent_Bulk_allocation_customer_Level_loan_account_staff_telecaller_0165(){

 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
      cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
     cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

     }
     
     Agent_Bulk_allocation_customer_Level_loan_account_staff_telecaller_0166(){

        
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
      cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);

    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
        cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(1000);
   cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 1000}
  ).should('be.visible');  
       }
     
     Agent_Bulk_allocation_customer_Level_loan_account_staff_telecaller_0167(){
        const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

     }
   Agent_Bulk_allocation_customer_Level_loan_account_agent_staff_0168(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType2').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

   }
   Agent_Bulk_allocation_customer_Level_loan_account_agent_staff_0169(){
    const filePath = 'Aadhar.png';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 1000 }
  ).should('be.visible');

   }
   Agent_Bulk_allocation_customer_Level_loan_account_agent_staff_0170(){

    
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
    cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }
   Agent_Bulk_allocation_customer_Level_loan_account_agent_staff_0171(){

      const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
        cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


   }
   Agent_Bulk_allocation_customer_Level_loan_account_agent_staff_0172(){
    
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
     cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      


   }

      Agent_Bulk_allocation_customer_Level_loan_account_agent_agent_0173(){

        
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
        cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


      }
        Agent_Bulk_allocation_customer_Level_loan_account_agent_agent_0174(){
          
const filePath = 'Aadhar.png';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
     cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');


      }
        Agent_Bulk_allocation_customer_Level_loan_account_agent_agent_0175(){


 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
       cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      
      }
        Agent_Bulk_allocation_customer_Level_loan_account_agent_agent_0176(){
      

        
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
       cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

      }
        Agent_Bulk_allocation_customer_Level_loan_account_agent_agent_0177(){
       const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
      cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      }
Agent_Bulk_allocation_customer_Level_loan_account_agent_telecaller_0178(){
  


  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}

Agent_Bulk_allocation_customer_Level_loan_account_agent_telecaller_0179(){
  const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

}
Agent_Bulk_allocation_customer_Level_loan_account_agent_telecaller_0180(){
   const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
     cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      

}
Agent_Bulk_allocation_customer_Level_loan_account_agent_telecaller_0181(){

    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
       cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

}
Agent_Bulk_allocation_customer_Level_loan_account_agent_telecaller_0182(){

      
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');



}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_staff_0183(){
  


  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_staff_0184(){
  

const filePath = 'Aadhar.png';
  
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_staff_0185(){
  
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
     cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_staff_0186(){
          
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
      cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_staff_0187(){    
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
      cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
 

}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_agent_0188(){
  
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_agent_0189(){

const filePath = 'Aadhar.png';
  
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_agent_0190(){


 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      


}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_agent_0191(){
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_agent_0192(){
     
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');


}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_telecaller_0193(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_telecaller_0194(){
  
const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');



}

Agent_Bulk_allocation_customer_Level_loan_account_telecaller_telecaller_0195(){

  
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
     cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
  

}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_telecaller_0196(){

          
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
    cy.wait(2000);
     cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}
Agent_Bulk_allocation_customer_Level_loan_account_telecaller_telecaller_0197(){

      const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
 cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

}
Agent_Bulk_allocation_customer_credit_card_account_staff_staff_0199(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


}
Agent_Bulk_allocation_customer_credit_card_account_staff_staff_0200(){
const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("#account-type-cc").click({force:true});
cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}


Agent_Bulk_allocation_customer_credit_card_account_staff_staff_0201(){

 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);

    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      }

      Agent_Bulk_allocation_customer_credit_card_account_staff_staff_0202(){
        
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


      }
      Agent_Bulk_allocation_customer_credit_card_account_staff_staff_0203(){
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Customer Level').click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      }


      Agent_Bulk_allocation_customer_credit_card_account_staff_agent_0204(){

const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Upload']").click({force:true});
    cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Account Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains("The selected template does not match the 'Proceed with Allocation For' option. Please review and select the correct template to proceed.",    { timeout: 10000 }
        ).should('be.visible');


      }

       Agent_Bulk_allocation_customer_credit_card_account_staff_agent_0205(){
const filePath = 'Aadhar.png';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Allocation Customer Level').click({ force: true });
  cy.wait(2000);
  cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
 cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');


        
      }
       Agent_Bulk_allocation_customer_credit_card_account_staff_agent_0206(){

        
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

        
      }
       Agent_Bulk_allocation_customer_credit_card_account_staff_agent_0207(){
          const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
      cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');
        
      }
       Agent_Bulk_allocation_customer_credit_card_account_staff_agent_0208(){
         const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
 cy.get("input[value='Agent'][name='allocationType']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
     cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');


        
      }

     Agent_Bulk_allocation_customer_credit_card_account_staff_telecaller_0209(){

const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
  cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

     }
     
     Agent_Bulk_allocation_customer_credit_card_account_staff_telecaller_0210(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
      cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

     }
     
     Agent_Bulk_allocation_customer_credit_card_account_staff_telecaller_0211(){

 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    
      cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);

    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
   cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');

     }
     
     Agent_Bulk_allocation_customer_credit_card_account_staff_telecaller_0212(){

        
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
      cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);

    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
        cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
     cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible');     
      }
     
     Agent_Bulk_allocation_customer_credit_card_account_staff_telecaller_0213(){
        const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("#account-type-cc").click({force:true});
  cy.wait(2000);
  cy.get("input[value='Telecaller']").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
   cy.contains(
    /invalid|error|format|xlsx|upload failed|does not/i,
    { timeout: 10000 }
  ).should('be.visible'); 


     }
   Agent_Bulk_allocation_customer_credit_card_account_agent_staff_0214(){

  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType2').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

   }
   Agent_Bulk_allocation_customer_credit_card_account_agent_staff_0215(){
    const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

   }
   Agent_Bulk_allocation_customer_credit_card_account_agent_staff_0216(){

    
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');

   }
   Agent_Bulk_allocation_customer_credit_card_account_agent_staff_0217(){

      const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
        cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


   }
   Agent_Bulk_allocation_customer_credit_card_account_agent_staff_0218(){   
        const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
  cy.get("#account-type-cc").click({force:true});
  cy.wait(2000);
  cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

cy.get(this.locators.clickokbutton).click({force:true});
cy.wait(2000);
 cy.contains('Agent Allocation Status').click({ force: true });
 cy.wait(2000);
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

 
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
   }

      Agent_Bulk_allocation_customer_credit_card_account_agent_agent_0219(){

        
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
        cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


      }
        Agent_Bulk_allocation_customer_credit_card_account_agent_agent_0220(){
          
const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');


      }
        Agent_Bulk_allocation_customer_credit_card_account_agent_agent_0221(){


 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
       cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      
      }
        Agent_Bulk_allocation_customer_credit_card_account_agent_agent_0222(){
      

        
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
       cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

      }
        Agent_Bulk_allocation_customer_credit_card_account_agent_agent_0223(){
       const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
      cy.get('#downloadTemplateType2').click({force:true});
  cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType']").click({force:true});
  cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
cy.get(this.locators.clickokbutton).click({force:true});

  cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      }
Agent_Bulk_allocation_customer_credit_card_account_agent_telecaller_0224(){
  


  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}

Agent_Bulk_allocation_customer_credit_card_account_agent_telecaller_0225(){
  const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

}
Agent_Bulk_allocation_customer_credit_card_account_agent_telecaller_0226(){
   const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      

}
Agent_Bulk_allocation_customer_credit_card_account_agent_telecaller_0227(){

    const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
       cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

}
Agent_Bulk_allocation_customer_credit_card_account_agent_telecaller_0228(){

      
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType2").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
cy.wait(2000);
 cy.get(this.locators.clickokbutton).click({force:true});
 
  cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');

  cy.get(this.locators.upload_btn_new).click({force:true});
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');



}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_staff_0229(){
  


  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_staff_0230(){
  

const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_staff_0231(){
  
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_staff_0232(){
          
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
      cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(8000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');




}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_staff_0233(){
  
      
    
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
      cy.get('#downloadTemplateType3').click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.get(this.locators.clickokbutton).click({force:true});
  cy.wait(2000);
  cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible').click({force:true});

   

   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');
 

}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_agent_0234(){
  
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');


}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_agent_0235(){

const filePath = 'Aadhar.png';
  // cy.get('#account-type-cc').click({force:true});
  // cy.wait(2000);
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
  cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_agent_0236(){


 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      


}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_agent_0237(){
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');

}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_agent_0238(){
     
        const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
   cy.get("input[value='Agent'][name='allocationType'] ").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
  cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

  cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
  cy.get(this.locators.clickokbutton).click({force:true});
  cy.wait(2000);  

    // cy.contains('button', 'Upload').click({ force: true });

   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');


}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_telecaller_0239(){
  const filePath = 'AgencyTemplate.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
 cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
    cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
    cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_telecaller_0240(){
  
const filePath = 'Aadhar.png';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
    cy.get('#account-type-cc').click({force:true});
  cy.wait(2000);
   cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);

  cy.get(this.locators.upload_btn_new).attachFile(filePath);

  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');



}

Agent_Bulk_allocation_customer_credit_card_account_telecaller_telecaller_0241(){

  
 const filePath = 'Staff(1).xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
     cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
  

}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_telecaller_0242(){

          
  const filePath = '3mbnew.xlsx';
    cy.get('[title="Allocation"]').click({force:true});
    cy.wait(2000);
   cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
   cy.get("a[title='Agent Bulk Allocation Customer Level']").click({force:true});
    cy.wait(2000);
    cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
     cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.upload_field).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');}
Agent_Bulk_allocation_customer_credit_card_account_telecaller_telecaller_0243(){

      const filePath = 'empty.xlsx';

  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.contains('Agent Bulk Upload').click({ force: true });
  cy.wait(2000);
  cy.get("a[title='Agent Bulk Allocation Customer Level']").click({ force: true });
  cy.wait(2000);
   cy.get("#account-type-cc").click({force:true});
    cy.wait(2000);
 cy.get("#downloadTemplateType3").click({force:true});
    cy.wait(2000);
    cy.get("input[value='Telecaller']").click({force:true});
    cy.wait(2000);

  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

 

  cy.get(this.locators.clickokbutton).click({force:true});
 cy.contains('Agent Allocation Status', { timeout: 10000 })
    .should('be.visible');
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Agent Allocation Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click();

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

}

Allocation_Owner_Bulk_Upload_248(){
    const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Account_Level).click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
    cy.get(this.locators.upload).attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');
}
Allocation_Owner_Bulk_Upload_249(){
  const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
    cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Account_Level).click({force:true});
  cy.wait(2000);
   cy.get('#AttachedFile').attachFile(filePath);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');
}

Allocation_Owner_Bulk_Upload_250(){
   const filePath = 'Staff(1).xlsx';
     cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
   cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Account_Level).click({force:true});
  cy.wait(2000);
   cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      


}


Allocation_Owner_Bulk_Upload_251(){
   const filePath = '3mbnew.xlsx';
     cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Account_Level).click({force:true});
  cy.wait(2000);
     cy.get(this.locators.upload).attachFile(filePath);
    cy.wait(2000);
    cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
      cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


}

Allocation_Owner_Bulk_Upload_252(){
const filePath = 'empty.xlsx';
  cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Account_Level).click({force:true});
  cy.wait(2000);
  cy.get('#AttachedFile').attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });
  cy.wait(2000);
 cy.get(this.locators.clickokbutton).click({force:true});
  cy.contains('Allocation Owner Upload Status', { timeout: 10000 })
    .should('be.visible');

   
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
  cy.contains('Allocation Owner Upload Status').click({ force: true });

     cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  
  cy.get('#search').click({force:true});

 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

}

Allocation_Owner_Bulk_Upload_253(){
   const filePath = 'AgencyTemplate.xlsx';
     cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Customer_Level).click({force:true});
  cy.wait(2000);
    cy.contains('button', 'Upload') .should('be.disabled');
    cy.wait(2000);
   cy.get('#uploadTemp').attachFile(filePath);
    cy.contains('button', 'Upload').should('be.enabled');

}
Allocation_Owner_Bulk_Upload_254(){
  const filePath = 'Aadhar.png';
    cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Customer_Level).click({force:true});
  cy.wait(2000);
  cy.get('#uploadTemp').attachFile(filePath);
  cy.contains(
    /invalid|error|format|xlsx|upload failed|unsupported/i,
    { timeout: 10000 }
  ).should('be.visible');

}
Allocation_Owner_Bulk_Upload_255(){
 const filePath = 'Staff(1).xlsx';
   cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Customer_Level).click({force:true});
  cy.wait(2000);
  cy.get('#uploadTemp').attachFile(filePath);
   cy.contains('button', 'Upload').should('be.enabled').click({force:true});
    cy.get(this.locators.clickokbutton).click({force:true});
    cy.contains(
          'Filename should not contain any special characters',
          { timeout: 10000 }
        ).should('be.visible');
      

}
Allocation_Owner_Bulk_Upload_256(){
    const filePath = '3mbnew.xlsx';
      cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
    cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Customer_Level).click({force:true});
  cy.wait(2000);
  cy.get('#uploadTemp').attachFile(filePath);
     cy.contains('button', 'Upload').should('be.enabled').click({force:true});
            cy.get(this.locators.clickokbutton).click({force:true});
    cy.wait(2000);
    cy.contains(
          "The file you've chosen is too large (max 2MB). Please try again",
          { timeout: 10000 }
        ).should('be.visible');


}
Allocation_Owner_Bulk_Upload_0198(){

    const filePath = 'empty.xlsx';
 cy.get('[title="Allocation"]').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Allocation_Owner_Bulk_Upload_Customer_Level).click({force:true});
  cy.wait(2000);
   cy.get(this.locators.upload_btn_new).attachFile(filePath);
  cy.contains('button', 'Upload').click({ force: true });

  cy.contains('Allocation Owner Upload Status', { timeout: 10000 })
    .should('be.visible');

  cy.get(this.locators.clickokbutton).click({force:true});
  cy.wait(2000);
   cy.contains("File Uploaded Successfully", { timeout: 10000 })
    .invoke('text')
    .then((popupText) => {
      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (match) {
        Cypress.env('transactionID', match[1]);
      }
    });

  cy.contains('Allocation Owner Upload Status').click({ force: true });
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#Transactionid").type(transactionId.toString()); // Convert to string if needed
    });
  cy.get('#search').click({force:true});
 cy.get('tbody > .ng-star-inserted > :nth-child(4)')
    .contains('Invalid File Format')
    .should('be.visible');

      













}




}

export default AllocationPage;