import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import { faker } from '@faker-js/faker';

class TrailsPage {
  constructor(locators) {
    this.locators = locators;
  }

  TrailsTestPage_01(){
    cy.get(this.locators.Clickontrials).contains('Trails').should('be.visible');
    cy.wait(2000);

  }

  TrailsTestPage_02(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).contains('Trail Upload Status').should('be.visible');
  cy.wait(2000);

  }

  TrailsTestPage_03(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.contains('Trail Upload Status').should('be.visible');
  cy.wait(2000);

  }

   TrailsTestPage_04(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.contains('File Name').should('be.visible');
  cy.wait(2000);

   }

   TrailsTestPage_05(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.contains('File Upload Date').should('be.visible');
  cy.wait(2000);

   }
   
     TrailsTestPage_06(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.contains('Status:').should('be.visible');
  cy.wait(2000);

   }

  TrailsTestPage_07(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.contains('Transaction ID:').should('be.visible');
  cy.wait(2000);
  }

TrailsTestPage_08(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).contains('Search').should('be.visible');
  cy.wait(2000);
}

TrailsTestPage_09(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickoncancel).contains('Cancel').should('be.visible');
  cy.wait(2000);
}

   TrailsTestPage_10(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Failed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);

   }

  TrailsTestPage_11(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Failed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(3)').contains("Failed").should("be.visible");
  cy.wait(2000);
  }

TrailsTestPage_12(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Invalid File Format");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(3)').contains("Invalid File Format").should("be.visible");
  cy.wait(2000);

}
 
TrailsTestPage_13(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Partially Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(3)').contains("Partially Processed").should("be.visible");
  cy.wait(2000);
}

TrailsTestPage_14(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(3)').contains("Processed").should("be.visible");
  cy.wait(2000);
}

TrailsTestPage_15(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Uploaded");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.contains("Search Result").should("be.visible");
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(3)').contains("Uploaded").should("be.visible");
  cy.wait(2000);
  
}

TrailsTestPage_16(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.get('.pagination-next > .page-link').click();
  cy.wait(3000);
  cy.get('.pagination-next > .page-link').click();
  cy.wait(3000);
  cy.get('.pagination-next > .page-link').click();
  cy.wait(3000);
  cy.get('.pagination-next > .page-link').click();
  cy.wait(3000);
  cy.get('.active > .page-link').contains("5").should("be.visible");
  cy.wait(2000);

}

TrailsTestPage_17(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.get(':nth-child(7) > .page-link').click();
  cy.wait(2000);
  cy.get('.pagination-prev > .page-link').click();
  cy.wait(3000);
  cy.get('.pagination-prev > .page-link').click();
  cy.wait(3000);
  cy.get('.pagination-prev > .page-link').click();
  cy.wait(3000);
  cy.get('.pagination-prev > .page-link').click();
  cy.wait(3000);
  cy.get('.active > .page-link').contains("1").should("be.visible");
  cy.wait(2000);
}

TrailsTestPage_18(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.get(".pagination-last > .page-link").click();
  cy.wait(2000);
  cy.get('.pagination-last').should('have.class', 'disabled');
  cy.wait(2000);
}

TrailsTestPage_19(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.get('.pagination-first').should('have.class', 'disabled');
  cy.wait(2000);
}

TrailsTestPage_20(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.get(this.locators.lastpage).click({force:true});
  cy.wait(2000);

}

TrailsTestPage_21(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
   cy.get(this.locators.lastpage).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.firstpage).click({force:true });
  cy.wait(2000);
}

TrailsTestPage_22(){
  cy.get(this.locators.Clickontrials).click();
  cy.wait(2000);
  cy.get(this.locators.Clickontrailuploadstatus).click();
  cy.wait(2000);
  cy.get(this.locators.Clickonstatus).select("Processed");
  cy.wait(2000);
  cy.get(this.locators.Clickonsearch).click();
  cy.wait(2000);
  cy.get("#ItemsPerPage").select("10");
  cy.wait(2000);
  cy.get("#ItemsPerPage").select("15");
  cy.wait(2000);
  cy.get("#ItemsPerPage").select("20");
  cy.wait(2000);
  cy.get("#ItemsPerPage").select("30");
  cy.wait(2000);
  cy.get("#ItemsPerPage").select("40");
  cy.wait(2000);
  cy.get("#ItemsPerPage").select("50");
  cy.wait(2000);
}

BulkTrailTemplate_download(){
  cy.get(this.locators.Clickontrials).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_upload).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.download_button).click({force:true});


  



}


Bulktrail_Processed(){

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

    cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
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

Bulktrail_Failed(){
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

    cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
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

BulkTrail_Partially_Processed() {

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

    cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(3000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
  cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains('Partially Processed').should('be.visible');
    cy.wait(2000);
    cy.get("tbody > .ng-star-inserted > :nth-child(4) > a").click();
    cy.wait(3000);

}

Bulktrail_canceled(){
 cy.wait(2000);
    cy.get('input[type="file"]').attachFile("Bulktrail.xlsx");
    cy.wait(2000);
    cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.cancelbutton).click();
    cy.wait(4000);
    cy.contains('Account Search').should('be.visible');

}

Bulktrail_Failed_csv_file(){
  cy.get(this.locators.Clickontrials).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_upload).click({force:true});
  cy.wait(2000);
  cy.get('#bulk-trail-file').attachFile("AllocationToOwner.csv");
  cy.contains('Info!', { timeout: 5000 }).should('be.visible');
  cy.contains(/xls or xlsx/i).should('be.visible');
    
}

Bulktrail_Failed_empty_file(){
  cy.get(this.locators.Clickontrials).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_upload).click({force:true});
  cy.wait(2000);
  cy.get('#bulk-trail-file').attachFile("empty.xlsx");
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

    cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
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
Bulktrail_Empty_with_headers(){
   cy.get(this.locators.Clickontrials).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_upload).click({force:true});
  cy.wait(2000);
  cy.get('#bulk-trail-file').attachFile("BulktrailHeaders.xlsx");
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

    cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
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
Bulktrail_Reupload_While_Processing(){
   cy.get(this.locators.Clickontrials).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_upload).click({force:true});
  cy.wait(2000);
  cy.get('#bulk-trail-file').attachFile("Bulktrail.xlsx");
  cy.get(this.locators.ClickOnUploadBtn).click();
    cy.wait(2000);
    cy.get(this.locators.cancelbutton).click();
    cy.wait(4000);
    cy.get(this.locators.Clickontrials).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.bulk_upload).click({force:true});
    cy.wait(2000);
    cy.get('#bulk-trail-file').attachFile("Bulktrail.xlsx");
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

    cy.get(this.locators.Clickontrailuploadstatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env("transactionID");
      cy.get("#bulk-trail-trxn-id").type(transactionId.toString()); // Convert to string if needed
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

Upload_button_disabled(){
  cy.get(this.locators.Clickontrials).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.bulk_upload).click({force:true});
  cy.wait(2000);
   cy.contains('button', 'Upload')
    .should('be.disabled');
  cy.get('input[type="file"]')
    .attachFile('Bulktrail.xlsx');
  cy.contains('button', 'Upload')
    .should('be.enabled');
}


  }
export default TrailsPage;
   