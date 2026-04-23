import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
import { faker } from "@faker-js/faker";

class ContactEnrichmentPage {
  constructor(locators) {
    this.locators = locators;
  }

CE_BCU_002(){
 cy.get('#nav-item-1-contact-enrichment').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_Contact_upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnDownload).click({force:true});
}
downloadTemplate(){
  cy.get(this.locators.ClickOnDownload).click({force:true});
  cy.wait(4000);
}
// Upload SAME file and capture Transaction ID
uploadBulkFileAndCaptureTxn(){

  cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
  cy.wait(2000);

  cy.get(this.locators.ClickOnUploadBtn).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnOkay).click();

  return cy.contains("File Uploaded Successfully", { timeout: 15000 })
    .invoke("text")
    .then((popupText) => {

      const match = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      expect(match).to.not.be.null;

      const txnId = match[1];

      // ⚠️ IMPORTANT FIX → wrap the value
      return cy.wrap(txnId);
    });
}


// Verify file processed using Transaction ID
verifyFileProcessed(txnId){

  cy.get("#bulk-trail-trxn-id").clear().type(txnId);
  cy.get('#bulk-trail-search-button').click();

  cy.contains('td','Processed',{timeout:20000}).should('be.visible');
}

contacttemplate_processed_001(){
    cy.wait(5000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
 

    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
     cy.get('tbody > tr > :nth-child(4)').contains('Processed').should('be.visible');
    cy.wait(2000);
  cy.get('tbody > tr > :nth-child(5)').click();
    cy.wait(3000);
 
}


CE_BCU_003() {
 
 cy.get('#nav-item-1-contact-enrichment').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_Contact_upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.ClickOnUploadBtn).should('be.disabled');
  cy.log('Upload button is disabled initially');
  const fileName = 'BulkContactTemplate.xlsx';
  cy.get(this.locators.Uploadbtn).attachFile(fileName);
  cy.wait(1000);
  cy.log('File selected:', fileName);
  cy.get(this.locators.ClickOnUploadBtn).should('be.enabled');
  cy.log('Upload button is enabled after file selection');
}

contacttemplate_failed(){
  
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(5) > a").click();
    cy.wait(3000);
 
}
CE_BCU_005(){

    cy.get('#bulk-trail-file').attachFile("BulkContactTemplate.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnOkay).click();
    cy.wait(4000);

}
CE_BCU_006(){
 cy.get('#nav-item-1-contact-enrichment').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({force:true});
  cy.wait(2000);
    const expectedStatuses = [
    '--Select--',
    'Failed',
    'Invalid File Format',
    'Partially Processed',
    'Processed',
    'Uploaded'
  ];

  // Status is a <select>, NOT ng-select
  cy.get(this.locators.status)
    .should('exist')
    .find('option')
    .then(($options) => {

      const actualStatuses = [...$options].map(opt =>
        opt.textContent.trim()
      );

      expect(actualStatuses).to.deep.equal(expectedStatuses);
    });
    

}
CE_BCU_007(){
  const fileName = 'BulkContactLargeValid.xlsx'; 
 cy.get('#nav-item-1-contact-enrichment').click({force:true});
  cy.wait(2000);
 cy.get(this.locators.bulk_Contact_upload).click({force:true});
   cy.wait(2000);
  cy.get(this.locators.Uploadbtn).attachFile(fileName);
  cy.wait(2000);
  cy.get(this.locators.ClickOnUploadBtn)
    .should('be.enabled')
    .click({ force: true });
  cy.get(this.locators.ClickOnOkay).click({force:true});
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
}
CE_BCU_008(){
cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.bulk_Contact_upload).click({ force: true });
  cy.wait(2000);
  const invalidFile = 'BulkContactInvalid.csv'; // or .txt
  cy.get("#bulk-trail-file").attachFile(invalidFile);
  cy.contains('Info!').should('be.visible');
  cy.contains('You can only upload xls or xlsx files').should('be.visible');

}


contacttemplate_partiallyprocessed(){


   cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Partially Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(5) > a").click();
    cy.wait(3000);
 
}


CE_BCU_0030(){
 cy.get('#nav-item-1-contact-enrichment').click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_Contact_upload).click({force:true});
  cy.wait(2000);
  const fileName = 'BulkContactLargeValid.xlsx'; 
   cy.get(this.locators.Uploadbtn).attachFile(fileName);
  cy.wait(2000);
  cy.get(this.locators.ClickOnUploadBtn)
    .should('be.enabled')
    .click({ force: true });
  cy.get(this.locators.cancel)
    .should('be.enabled')
    .click({ force: true });
  cy.get(this.locators.ClickOnOkay).click({force:true});
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

}

CE_CUS_001(){
   cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
   
     const headers = [
    'Transaction ID',
    'File Name',
    'File Uploaded Date',
    'Status',
    'Download Status File'
  ];

  headers.forEach(text => {
    cy.contains('thead', text).should('be.visible');
  });
   
    
 
}
CE_CUS_002() {

 cy.get('#nav-item-1-contact-enrichment').click({ force: true });

  cy.get(this.locators.contact_Upload_Status).click({ force: true });

  // Enter date and search
  cy.get(this.locators.bulk_trail_upload)
    .clear()
    .type('18-Dec-25');

  cy.get(this.locators.search).click({ force: true });

  // Set page size
  cy.get(this.locators.pageno).select('50');

  // Get text from table and use it
  cy.get('table tbody tr')
    .eq(2)              // 3rd row
    .find('td')
    .eq(1)              // 2nd column
    .invoke('text')
    .then(copiedText => {

      const text = copiedText.trim();

      // Type copied text into file name field
      cy.get('#bulk-trail-file-name')
        .clear()
        .type(text);

      // Clear date field
      cy.get(this.locators.bulk_trail_upload).clear();

      // Click search again
      cy.get(this.locators.search).click({ force: true });
    });
}

CE_CUS_003() {

cy.get('#nav-item-1-contact-enrichment').click({ force: true });

  cy.get(this.locators.contact_Upload_Status).click({ force: true });

  // ================= FAILED STATUS =================
  cy.get(this.locators.status).select('Failed');
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pageno).select('50');
  cy.wait(2000);
  this.clickRandomLinkFromColumn(4);

  // ============ PARTIALLY PROCESSED STATUS ============
  cy.get(this.locators.status).select('Partially Processed', { force: true });
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pageno).select('50');
  cy.wait(2000);

  this.clickRandomLinkFromColumn(4);
}


clickRandomLinkFromColumn(columnIndex = 4) {

  cy.get('table tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

      const randomRowIndex = Math.floor(Math.random() * $rows.length);
      cy.log(`Clicking row index: ${randomRowIndex}`);

      cy.wrap($rows)
        .eq(randomRowIndex)
        .find('td')
        .eq(columnIndex)
        .scrollIntoView({ block: 'center', inline: 'center' }) // 🔥 column visible
        .should('exist')
        .within(() => {
          cy.get('a')
            .should('exist')
            .click({ force: true });
        });
    });
}


   CE_CUS_004() {

   cy.get('#nav-item-1-contact-enrichment').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.contact_Upload_Status).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.search).click({ force: true });
    cy.contains('Enter at least one filter value').should('exist');

    
  }
  CE_CUS_005(){
 cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.file_name).type('INVALID_TXN_12345');
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.contains('No results found').should('be.visible');

  }

    CE_CUS_006(){
 cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
 

  }
CE_CUS_007(){
 cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status).select('Failed');
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.pageno).select('50');
  cy.get('table tbody tr').each(($row) => {
  cy.wrap($row)
    .find('td')
    .eq(3) 
    .should('have.text', 'Failed');
});



}

CE_CUS_008() {
  cy.wait(5000);
 cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
  // Enter date and search
  cy.get(this.locators.bulk_trail_upload)
    .type('18-Dec-25');
  
  cy.get(this.locators.search).click({ force: true });

  // Set page size
  cy.get(this.locators.pageno).select('50');

  // Pick file name and status from the same row
  cy.get('table tbody tr')
    .should('have.length.greaterThan', 0)
    .eq(1) // 2nd row
    .then($row => {

      // File Name (2nd column)
      cy.wrap($row)
        .find('td')
        .eq(1)
        .invoke('text')
        .then(fileName => {
          cy.get('#bulk-trail-file-name')
            .clear()
            .type(fileName.trim());
        });

      // Status (4th column)
      cy.wrap($row)
        .find('td')
        .eq(3)
        .invoke('text')
        .then(status => {
          cy.get('#bulk-trail-status')
            .select(status.trim());
        });
    });
     cy.get(this.locators.bulk_trail_upload).clear().type('18-12-2025');
     cy.wait(2000);
     cy.get(this.locators.search).click({ force: true });
     cy.wait(1000);
     const headers = [
  'Transaction ID',
  'File Name',
  'File Uploaded Date',
  'Status',
  'Download Status File'
];

headers.forEach(header => {
  cy.get('table thead')
    .contains('th', header)
    .scrollIntoView()
    .should('be.visible');
});




}
CE_CUS_009() {

  // ---------- helper : get today's date in DD-MM-YYYY ----------
  const getTodayDate = () => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const todayFormatted = getTodayDate();
  cy.log('Today Date' + todayFormatted);


  // ---------- Navigate to Contact Enrichment ----------
 cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.status).select('Failed');
  cy.wait(2000);

  cy.get(this.locators.search).click({ force: true });
  cy.wait(3000);

  cy.get(this.locators.pageno).select('50');
  cy.wait(4000);


  // ---------- Step 1 : Verify latest date (today) is on top ----------
  cy.get('table tbody tr')
    .first()
    .find('td')
    .eq(2)
    .invoke('text')
    .then(text => {
        const uiDate = text.replace(/\s+/g, '').trim();
        cy.log('Top row BEFORE sort ' + uiDate);
        expect(uiDate).to.eq(todayFormatted);
    });


  // ---------- Step 2 : Click sort icon twice (DESC → ASC) ----------
  cy.contains('th', 'File Uploaded Date').click(); // 1st click
  cy.wait(1500);
  cy.contains('th', 'File Uploaded Date').click(); // 2nd click (older first)
  cy.wait(2000);


  // ---------- Step 3 : Verify older date comes on top ----------
  cy.get('table tbody tr')
    .first()
    .find('td')
    .eq(2)
    .invoke('text')
    .then(text => {
        const uiDate = text.replace(/\s+/g, '').trim();
        cy.log('Top row AFTER sort ' + uiDate);

        expect(uiDate).to.not.eq(todayFormatted);
    });

}

CE_CUS_0010(){
 cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.bulk_trail_upload).type('18-Dec-25');
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.last_page).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.first_page).click({ force: true });
  cy.wait(2000);

 
}
CE_CUS_0011(){
cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.bulk_trail_upload).type('32-13-2025');
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.wait(2000);


}
CE_CUS_0012(){
cy.get('#nav-item-1-contact-enrichment').click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.contact_Upload_Status).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.status).select('Processed');
  cy.wait(2000);
  cy.get(this.locators.search).click({ force: true });
  cy.wait(2000);
  


}
CE_CUS_0001(){
 cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(5) > a").click();
    cy.wait(3000);
    cy.get(this.locators.accountsearch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.account_no).type('1667');
    cy.wait(2000);
    cy.get(this.locators.submit).click({force:true});
    cy.wait(2000);
    cy.get("tbody tr[class='ng-star-inserted'] td:nth-child(4) a:nth-child(1)").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggleButton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.customer_hub).click({force:true});
    cy.wait(2000);
    cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
    cy.wait(2000);
// Scroll table into view
cy.get(':nth-child(1) > :nth-child(1) > .enc-card > .card-header > h3')
  .scrollIntoView()
  .should('be.visible');

// -------------------- Verify Mobile Panel Headers --------------------
const mobileHeaders = [
  'Mobile Number',
  'Contact Update Date',
  'Contact Type',
  'Source'
];

mobileHeaders.forEach(header => {
  cy.get('.panel-open .panel-body')
    .contains('th', header)
    .scrollIntoView()
    .should('be.visible');
});

// -------------------- Get First Row Data --------------------
cy.get('#flip-scroll .scrollable-table .table tbody tr')
  .first()
  .then($row => {

    // -------- Mobile Number --------
    cy.wrap($row)
      .find('td')
      .eq(0)
      .invoke('text')
      .should('not.be.empty');

    // -------- Contact Update Date (Today, time may vary) --------
    cy.wrap($row)
  .find('td')
  .eq(1) // Contact Update Date column
  .invoke('text')
  .then(dateText => {

    const uiDateText = dateText.trim();

    // Convert UI date string to Date object
    const uiDate = new Date(uiDateText);

    // Get today's date
    const today = new Date();

    // Compare only DATE (ignore time)
    expect(uiDate.getDate()).to.equal(today.getDate());
    expect(uiDate.getMonth()).to.equal(today.getMonth());
    expect(uiDate.getFullYear()).to.equal(today.getFullYear());
  });


    // -------- Contact Type --------
    cy.wrap($row)
      .find('td')
      .eq(2)
      .invoke('text')
      .should('not.be.empty');

    // -------- Source --------
    cy.wrap($row)
      .find('td')
      .eq(3)
      .invoke('text')
      .should('not.be.empty');
  });

  
  }

  CE_CCH_0004(){
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
    cy.get('tbody > tr > :nth-child(4)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(5)").click();
    cy.wait(3000);
    cy.get(this.locators.accountsearch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.account_no).type('1667');
    cy.wait(2000);
    cy.get(this.locators.submit).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggleButton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.customer_hub).click({force:true});
    cy.wait(2000);
    cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
    cy.wait(2000);
// Scroll table into view
cy.get(':nth-child(1) > :nth-child(1) > .enc-card > .card-header > h3')
  .scrollIntoView()
  .should('be.visible');

cy.get('#flip-scroll > .scrollable-table > .table > tbody > tr')
  .first()
  .find('td')
  .eq(0) // Mobile Number column
  .invoke('text')
  .then(mobileNumber => {

    const mobile = mobileNumber.trim();
    cy.log(`Mobile Number: ${mobile}`);

    // Regex to detect special characters
    const hasSpecialChar = /[^0-9]/.test(mobile);

    // Assert mobile number contains special characters
    expect(hasSpecialChar).to.be.true;
  });


  }
  CE_CCH_0005(){
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
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
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });
 
    //###########################################################
 
    cy.wait(2000);
    cy.get('#bulk-trail-search-button').click();
    cy.wait(3000);
   cy.get('tbody > tr > :nth-child(4)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get('tbody > tr > :nth-child(5)').click();
    cy.wait(3000);
    cy.get(this.locators.accountsearch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.account_no).type('1667');
    cy.wait(2000);
    cy.get(this.locators.submit).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggleButton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.customer_hub).click({force:true});
    cy.wait(2000);
    cy.get('[heading="History"] > .panel > .panel-heading').click({force:true});
    cy.wait(2000);
// Scroll table into view
cy.get(':nth-child(1) > :nth-child(1) > .enc-card > .card-header > h3')
  .scrollIntoView()
  .should('be.visible');
  cy.get('.panel-open > .panel > .panel-collapse > .panel-body > :nth-child(1) > :nth-child(1)')
  .contains('Contact Type')
  .scrollIntoView()
  .should('exist');


cy.get(':nth-child(2) > .col-md-6 > .enc-card > .card-header > h3').scrollIntoView().should('be.visible');
  cy.get(':nth-child(2) > .col-md-6')
  .contains('Contact Type')
  .scrollIntoView()
  .should('exist');



  }

  CE_CCH_0006() {
    cy.get(this.locators.accountsearch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.account_no).type('1667');
    cy.wait(2000);
    cy.get(this.locators.submit).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggleButton).click({force:true});
    cy.wait(2000);
  cy.get(this.locators.customer_hub).click({ force: true });
  cy.wait(2000);

  // Open History Tab
  cy.get('[heading="History"] > .panel > .panel-heading')
    .click({ force: true });

  cy.wait(2000);

  // Ensure at least 2 records exist
  cy.get('#flip-scroll .table tbody tr')
    .should('have.length.greaterThan', 1);

  const contactTypes = [];

  // Validate each contact row
  cy.get('#flip-scroll .table tbody tr').each($row => {

    // ---- Mobile Number ----
    cy.wrap($row)
      .find('td')
      .eq(0)
      .invoke('text')
      .should('not.be.empty');

    // ---- Contact Update Date ----
    cy.wrap($row)
      .find('td')
      .eq(1)
      .invoke('text')
      .should('not.be.empty');

    // ---- Contact Type ----
    cy.wrap($row)
      .find('td')
      .eq(2)
      .invoke('text')
      .then(type => {
        const trimmedType = type.trim();
        expect(trimmedType).to.not.be.empty;
        contactTypes.push(trimmedType);
      });

    // ---- Address / Source ----
    cy.wrap($row)
      .find('td')
      .eq(3)
      .invoke('text')
      .should('not.be.empty');
  })
  .then(() => {
    // Verify multiple different Contact Types exist
    const uniqueContactTypes = [...new Set(contactTypes)];
    expect(uniqueContactTypes.length).to.be.greaterThan(1);
  });
}

 CE_CCH_0007() {

    cy.get(this.locators.accountsearch).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.account_no).type('1667');
    cy.wait(2000);
    cy.get(this.locators.submit).click({force:true});
    cy.wait(2000);
   cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggleButton).click({force:true});
    cy.wait(2000);
  cy.get(this.locators.customer_hub).click({ force: true });

  cy.get('[heading="History"] > .panel > .panel-heading')
    .click({ force: true });

  // Ensure at least 2 records are present
  cy.get('#flip-scroll .table tbody tr')
    .should('have.length.at.least', 2);

  // Get first & second row dates and compare
  cy.get('#flip-scroll .table tbody tr').then(rows => {

    const firstRowDateText = Cypress.$(rows[0])
      .find('td')
      .eq(1)
      .text()
      .trim();

    const secondRowDateText = Cypress.$(rows[1])
      .find('td')
      .eq(1)
      .text()
      .trim();

    const firstRowDate = new Date(firstRowDateText);
    const secondRowDate = new Date(secondRowDateText);

    // Assertion: latest date should be on top
    expect(firstRowDate.getTime()).to.be.greaterThan(
      secondRowDate.getTime()
    );
  });
   cy.get('.col-md-6')
    .eq(1) // 2nd card (0-based index)
    .scrollIntoView()
    .within(() => {

      // Verify card header is visible
      cy.get('.enc-card .card-header h3')
        .should('be.visible');

      // Ensure at least 2 records exist for sorting check
      cy.get('.table tbody tr')
        .should('have.length.at.least', 2);

      // Validate latest-first sorting (date column)
      cy.get('.table tbody tr').then(rows => {

        const firstRowDateText = Cypress.$(rows[0])
          .find('td')
          .eq(1) // Contact Update Date column
          .text()
          .trim();

        const secondRowDateText = Cypress.$(rows[1])
          .find('td')
          .eq(1)
          .text()
          .trim();

        const firstRowDate = new Date(firstRowDateText);
        const secondRowDate = new Date(secondRowDateText);

        // Assertion: most recent date should be on top
        expect(firstRowDate.getTime()).to.be.greaterThan(
          secondRowDate.getTime()
        );
      });
    });
}

CE_BCU_015(){
   cy.get('#nav-item-1-contact-enrichment').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_Contact_upload).click({force:true});
    cy.wait(2000);
    cy.wait(2000);
    cy.get('input[type="file"]').attachFile("BulkContactTemplate.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.cancel).click();
    cy.wait(4000);
 

}



  




}

export default ContactEnrichmentPage;
