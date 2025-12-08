import { th } from '@faker-js/faker';
import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';
import 'cypress-file-upload';


class Trailspage {
  constructor(locators) {
    this.locators = locators;
  }
  TrailsTestPage_466(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.uploadTrails).click({force: true});
    cy.wait(1000);
    cy.get(this.locators.downloadfile).click({force: true});
    cy.wait(1000);
    cy.get('#bulk-trail-file').click({force: true} );
    cy.wait(800);
    cy.fixture('Bulktrail.xlsx').then((fileContent) => {
        cy.get("#bulk-trail-file").attachFile({
          fileContent,
          fileName: 'Bulktrail.xlsx',
          mimeType: 'text/csv',
        });
        cy.get('#bulk-trail-upload-button').click({force: true});
        cy.wait(2000);
        cy.get('#confirm-dialog-okay').click();
         cy.wait(2000);
          });
          cy.wait(5000);
          cy.contains("File Uploaded Successfully. Transaction ID :").should("be.visible");
           cy.wait(2000);
         

        
     
    }
    TrailsTestPage_467(){
      cy.get(this.locators.clickonTrails).click();
      cy.wait(1000);
        cy.get(this.locators.CickTrailus).click();
        cy.wait(800);
        cy.get(this.locators.SelectStatus).select('Processed');
        cy.wait(800);
        cy.get(this.locators.SearchButton).click();
        cy.wait(800);
        //cy.get('.history-table > h3').should('be.visible').click();
        //cy.wait(800);
    }
    TrailsTestPage_927(){
      cy.get(this.locators.clickonTrails).click();
      cy.wait(1000);
      cy.get(this.locators.uploadTrails).click();
        cy.wait(800);
        cy.get(this.locators.downloadfile).click({force: true});
        cy.wait(800);
        cy.log('open the downloaded template, enter the data and save the file.');
        cy.wait(800);


    }
    TrailsTestPage_928(){
        cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.uploadTrails).click({force: true});
    cy.wait(1000);
        cy.get(this.locators.downloadfile).click({force: true} );
        cy.wait(800);
        cy.fixture('Bulktrail.xlsx').then((fileContent) => {
            cy.get("input[name='attachedFile']").attachFile({
              fileContent,
              fileName: 'Bulktrail.xlsx',
              mimeType: 'text/csv',
            });
            cy.get(this.locators.ClickOnUpload).click({force: true});
             cy.wait(2000);
              });
              cy.get(this.locators.ClickOnOK).click();
              cy.wait(3000);
              cy.get('.ng-trigger').should('contain','File Uploaded Successfully. Transaction ID :',{force: true});
               cy.wait(2000);
             

    }



    TrailsTestPage_929(){
      cy.get(this.locators.clickonTrails).click();
      cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click({force: true} );
      cy.wait(200)
      //cy.get('.form-group > .btn').click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
      
      
    
    
    }

    TrailsTestPage_930(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.uploadTrails).click({force: true});
    cy.wait(1000);
    cy.get(this.locators.downloadfile).click({force: true} );
        cy.wait(800);
        cy.fixture('Bulktrail.xlsx').then((fileContent) => {
            cy.get("input[name='attachedFile']").attachFile({
              fileContent,
              fileName: 'Bulktrail.xlsx',
              mimeType: 'text/csv',
            });
          });
          cy.get(this.locators.ClickOnUpload).click();
          cy.wait(800);
          cy.get(this.locators.ClickOnOK).click({force: true});
          cy.wait(800);
          // cy.get(':nth-child(1) > .form-group > .form-control').type('a',{force: true});
          // cy.wait(800);
          // cy.get('.btn').click({force: true});
          // cy.wait(800);
          //cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click({force: true});
          //cy.wait(800);
          //cy.get('#tab-selectbyid20-link > span').click({force: true});
          //cy.wait(800);
          //cy.get('#tab-selectbyid20-link > span').should('be.visible',{force: true});
          //cy.wait(800);
           
              
              
              

    }
    TrailsTestPage_931(){
      cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.uploadTrails).click({force: true});
      cy.wait(800);
      cy.get(this.locators.downloadfile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
        });
        cy.get(this.locators.ClickOnCancel).click();
        // cy.get('.btn-danger').click();
        // cy.log('File cancel sucessfully!')

    }
    TrailsTestPage_932(){
      cy.get(this.locators.clickonTrails).click();
      cy.wait(1000);
      cy.get(this.locators.CickTrailus).click();
      cy.wait(800);
      cy.get(this.locators.EnterFilename).type('Bulktrail_20240731104807220.xlsx');
      cy.wait(800);
      cy.get(this.locators.ClickOnSearch).click();
      cy.wait(800);
      // cy.get('.history-table > h3').should('be.visible').click();
      // cy.wait(800);

    }
    TrailsTestPage_933(){
      cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.CickTrailus).click();
    cy.wait(1000);
      cy.get(this.locators.EnterDate).type('31/07/2024');
      cy.wait(800);
      cy.get(this.locators.ClickOnSearch).click();
      cy.wait(800);
      //cy.get('.history-table > h3').should('be.visible').click();
      //cy.wait(800);

    }
    TrailsTestPage_934(){
      cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.CickTrailus).click();
      cy.wait(800);
      cy.get(this.locators.EnterTranId).type('07312024104807402');
      cy.wait(800);
      cy.get(this.locators.ClickOnSearch).click();
      cy.wait(800);
      //cy.get('.history-table > h3').should('be.visible').click();
      //cy.wait(800);

    }
    TrailsTestPage_935(){
      cy.get(this.locators.clickonTrails).click();
      cy.wait(1000);
      cy.get(this.locators.CickTrailus).click();    
      cy.wait(800);
      cy.get(this.locators.SelectStatus).select('Processed');
      cy.wait(800);
      cy.get(this.locators.ClickOnSearch).click();
      cy.wait(800);
      
      

    }
    TrailsTestPage_936(){
      cy.get(this.locators.clickonTrails).click();
      cy.wait(1000);
      cy.get(this.locators.CickTrailus).click();    
      cy.wait(800);
      cy.get(this.locators.SelectStatus).select('Processed');
      cy.wait(800);
      cy.get(this.locators.ClickOnSearch).click();
      cy.wait(800);
      //cy.get('.history-table > h3').should('be.visible').click();
      cy.wait(800);
      //cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)').scrollIntoView();
      cy.wait(800);
      cy.get(this.locators.SelectStatus).select('Failed');
      cy.wait(800);
      cy.get(this.locators.ClickOnSearch).click();
      cy.wait(800);
      
    }
    TrailsTestPage_938(){

      cy.wait(200);
      cy.get(this.locators.clickonTrails).click();
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click({force: true});
      cy.wait(2000)
      cy.get(this.locators.ClickOnUpload).click({force: true});
  
  }
  
  TrailsTestPage_939(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Allocation#ToOwner.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Allocation#ToOwner.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });

            cy.get(this.locators.ClickOnOK).click({force: true});
      
      
  
  
  }
  
  
  TrailsTestPage_940(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.ClickOnCancel).click();
  
  }
  
  
  TrailsTestPage_941(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
      
      
  
  
  }
  
  
  TrailsTestPage_942(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
  
  }
  
  TrailsTestPage_943(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
      
      
  
  
  }
  
  TrailsTestPage_944(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
  }
  
  TrailsTestPage_945(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
  }
  
  TrailsTestPage_946(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
  }
  
  TrailsTestPage_947(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
  }
  
  TrailsTestPage_948(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.uploadTrails).click();
      cy.wait(200);
      cy.get(this.locators.downloadfile).click();
      cy.wait(200)
      cy.get(this.locators.SelectFile).click({force: true} );
      cy.wait(800);
      cy.fixture('Bulktrail.xlsx').then((fileContent) => {
          cy.get("input[name='attachedFile']").attachFile({
            fileContent,
            fileName: 'Bulktrail.xlsx',
            mimeType: 'text/csv',
          });
          cy.get(this.locators.ClickOnUpload).click({force: true});
           cy.wait(2000);
            });
  
      cy.get(this.locators.ClickOnOK).click()
  }
  
  
  TrailsTestPage_949(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.CickTrailus).click();
      cy.wait(200);
      cy.get(this.locators.SearchButton).click();
      cy.wait(200)
      //cy.get("button[type='submit']").click({force:true});
      
  }
  
  TrailsTestPage_950(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.CickTrailus).click();
      cy.wait(200);
      cy.get(this.locators.EnterFilename).type("xxxxx");
      cy.wait(200);
      cy.get(this.locators.EnterTranId).type("123455");
      cy.wait(200);
      cy.get(this.locators.SearchButton).click({force:true});
      cy.wait(200);
      
  }
  
  TrailsTestPage_951(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
      cy.wait(200);
      cy.get(this.locators.CickTrailus).click();
      cy.wait(200);
      
      cy.get(this.locators.SelectStatus).select("Processed");
      cy.wait(200);
      cy.get(this.locators.SearchButton).click({force:true});
      cy.wait(200);
      cy.get(this.locators.ClickPeg).click();
      cy.wait(200);
      
  }
  TrailsTestPage_287(){

    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.TrailUploadStatus).click();
    cy.wait(1000);
    cy.contains("File Name").should ("be.visible");
    cy.wait(1000);
    cy.contains("File Upload Date").should ("be.visible");
    cy.wait(1000);
    cy.contains("Status:").should ("be.visible");
    cy.wait(1000);
    cy.contains("Transaction ID").should ("be.visible");
    cy.wait(1000);
    cy.get("#bulk-trail-search-button").should ("be.visible");
    cy.wait(1000);
  
  
  }
  TrailsTestPage_288(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.TrailUploadStatus).click();
    cy.wait(1000);
    cy.get("#bulk-trail-status").select('Failed');
    cy.wait(1000);
    cy.get("#bulk-trail-search-button").click();
    cy.wait(3000);
    cy.contains("Download Status File").should ("be.visible");
    cy.wait(3000);
  
  }
  TrailsTestPage_289(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.TrailUploadStatus).click();
    cy.wait(1000);
    cy.get("#bulk-trail-status").select('Failed');
    cy.wait(1000);
    cy.get("#bulk-trail-search-button").click();
    cy.wait(3000);
    cy.contains("Download Status File").should ("be.visible");
    cy.wait(3000);
    cy.get(this.locators.ClickOnClickHere).click();
    cy.wait(3000);
  
  
  
  }
  TrailsTestPage_download_290(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_290(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Processed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);


    // three colums should be visible
  }

  TrailsTestPage_291(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.TrailUploadStatus).click();
    cy.wait(1000);
    cy.get("#bulk-trail-search-button").click();
    cy.wait(1000);
  
  
  }
  TrailsTestPage_292(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
    
  
  }
  TrailsTestPage_293(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
    
  }
  TrailsTestPage_download_294(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_294(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.get('tbody > .ng-star-inserted > :nth-child(3)').contains("Processed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
    cy.get('.account-search > a.ng-star-inserted > span.ng-star-inserted').scrollIntoView().click();
    cy.wait(1000);
    cy.get('#search-account-number').type(1667);
    cy.wait(2000);
    cy.get('#search-submit-button').click();
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(1000);
    cy.get('#toggleButton').click();
    cy.wait(1000);
    cy.get(':nth-child(15) > .dropdown-item').click();
    cy.wait(3000);




  }
  TrailsTestPage_295(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
   
  
    const firstfilePath = 'DispositionMasterTemplate.xlsx'
      cy.get("input[name='attachedFile']").click({force: true});
      cy.wait(2000);
      cy.get('input[type="file"]').attachFile(firstfilePath);
      cy.wait(2000);
      cy.get(this.locators.ClickOnCancel).click();
      cy.wait(2000);
      cy.get(this.locators.BulkTrailUpload).click();
      cy.wait(1000);
      const secondfilePath = 'Bulktrail.xlsx'
      cy.get("input[name='attachedFile']").click({force: true});
      cy.wait(2000);
      cy.get('input[type="file"]').attachFile(secondfilePath);
      cy.wait(2000);
      cy.get(this.locators.ClickOnUpload).click();
      cy.wait(2000);
      cy.get(this.locators.ClickOnOk).click();
      cy.wait(5000);
      
  }
  TrailsTestPage_296(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnUpload).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ClickOnOk).click();
    cy.wait(5000);
    
  
  }
  TrailsTestPage_297(){
  
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    const filePath = 'Aadhar-image.png'
      cy.get("input[name='attachedFile']").click({force: true});
      cy.wait(2000);
      cy.get('input[type="file"]').attachFile(filePath);
      cy.wait(2000);
      cy.get(this.locators.ClickOnUpload).click({force: true});
      cy.wait(2000);
      cy.get(this.locators.ClickOnOk).click();
      cy.wait(5000);
  
  
  }
  
  TrailsTestPage_download_298(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_298(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Processed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
  
  
  }
  
  
  TrailsTestPage_download_299(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_299(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Processed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
  
  
  }
  TrailsTestPage_download_300(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_300(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Failed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
  
  
  }
  
  TrailsTestPage_download_301(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_301(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Failed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
  
  
  }
  
  TrailsTestPage_download_302(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_302(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Processed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
  
  
  }
  
  TrailsTestPage_download_303(){
    cy.get(this.locators.clickonTrails).click();
    cy.wait(1000);
    cy.get(this.locators.BulkTrailUpload).click();
    cy.wait(1000);
    cy.get("#bulk-trail-download-template").click();
    cy.wait(1000);
    cy.log('File Downloaded sucessfully')
    cy.wait(2000);
  
  
  }
  TrailsTestPage_upload_303(){
   

    cy.wait(2000);
    cy.get('input[type="file"]').attachFile('Bulktrail.xlsx');
    cy.wait(2000);
    cy.get('.fileupload-new').click({ force: true });
    cy.wait(2000);
    cy.get('#confirm-dialog-okay').click();
    cy.wait(7000);

    //#########################################################

    cy.contains('File Uploaded Successfully', { timeout: 7000 }).invoke('text').then((popupText) => {
      cy.log(`Popup text: ${popupText}`);
      const transactionIdMatch = /Transaction ID\s*:\s*(\d+)/.exec(popupText);
      if (transactionIdMatch) {
        const transactionId = transactionIdMatch[1];
        cy.log(`Transaction ID: ${transactionId}`);
        cy.wait(1000);
        Cypress.env('transactionID', transactionId);
        cy.wait(1000);
      }
    });
    
    
    cy.get('.trails > .sub-nav-list > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#bulk-trail-trxn-id').type(transactionId.toString()); // Convert to string if needed
    });


    //####################################################

    cy.get('#bulk-trail-search-button').click();
    cy.wait(4000);
    cy.contains("Processed").should("be.visible");
    cy.wait(1000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(5000);
  
  
  }
  
  


    }
    
    


export default Trailspage;
