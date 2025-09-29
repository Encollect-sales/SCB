import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
const path = require('path');


class UserManagementPage {
  constructor(locators) {
    this.locators = locators;
  }


  UserManagementTestPage_01(){
 
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.contains('Bulk Enable/Disable Users').should("be.visible");
    cy.wait(1000);
    cy.contains('Bulk Enable/Disable Users Status').should("be.visible");
    cy.wait(1000);
 
  }

  UserManagementTestPage_02(){
 
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonEnableDisableUsers).click();
    cy.wait(1000);
    cy.get('#fileTypeAgent').click();
    cy.wait(1000);
    cy.get(this.locators.clickOnDownloadTempBtn).click();
    cy.wait(3000);
  
  }

  UserManagementTestPage_download_03(){

    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonEnableDisableUsers).click();
    cy.wait(1000);
    cy.get('#fileTypeAgent').click();
    cy.wait(1000);
    cy.get(this.locators.clickOnDownloadTempBtn).click();
    cy.wait(3000);

  }

 UserManagementTestPage_upload_03(){

  cy.wait(1000);
  cy.get(this.locators.UploadAgentRadioBtn).click();
  cy.wait(1000);
  cy.get('input[type="file"]').attachFile('Agent.xlsx');
  cy.wait(2000);
  cy.get(this.locators.ClickOnUploadBtn).click();
  cy.wait(2000);
  cy.get(this.locators.ClickOnOkay).click();
  cy.wait(2000);

//######################################################################


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

  cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
    cy.wait(3000);
    cy.then(() => {
      const transactionId = Cypress.env('transactionID');
      cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
    });

    //###########################################################

    cy.wait(1000);
    cy.get(this.locators.ClickOnStatusSearchBtn).click();
    cy.wait(3000);
   cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
    cy.wait(2000);
    cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
    cy.wait(3000);


 }

 UserManagementTestPage_download_04(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_04(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
   cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_05(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_05(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_06(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_06(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_07(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_07(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
   cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_08(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_08(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
   cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_09(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_09(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_10(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get('#fileTypeAgent').click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_10(){

cy.wait(1000);
cy.get(this.locators.UploadAgentRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

 


  UserManagementTestPage_11(){
 
    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBulkUpload).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonEnableDisableUsers).click();
    cy.wait(1000);
    cy.get(this.locators.DownloadAgentRadioBtn).click();
    cy.wait(1000);
    cy.get(this.locators.clickOnDownloadTempBtn).click();
    cy.wait(3000);
    cy.get(this.locators.UploadAgentRadioBtn).click();
    cy.wait(1000);

    cy.task('moveAllDownloadsToFixtures').then(result => {
      cy.log(result);
  });

  cy.get('input[type="file"]').attachFile('Agent.xlsx');
  cy.wait(2000);
  cy.get(this.locators.ClickOnUploadBtn).click();
  cy.wait(2000);
  cy.get('.modal-body').should("be.visible");
  cy.wait(1000);
  cy.get(this.locators.ClickOnOkay).click();
  cy.wait(2000);

}


UserManagementTestPage_12(){
 
  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadAgentRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.clickOnDownloadTempBtn).click();
  cy.wait(3000);

  cy.task('moveAllDownloadsToFixtures').then(result => {
    cy.log(result);
});

cy.get('input[type="file"]').attachFile('Agent.xlsx');
cy.wait(2000);
cy.contains("Please Select Type Before Uploading File").should("be.visible");
cy.wait(2000)

}

UserManagementTestPage_13(){
 
  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

}


UserManagementTestPage_download_14(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_14(){

cy.wait(1000);
cy.get(this.locators.UploadStaffRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
   cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_15(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_15(){

cy.wait(1000);
cy.get(this.locators.UploadStaffRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_16(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_16(){

cy.wait(1000);
cy.get(this.locators.UploadStaffRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_17(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_17(){

cy.wait(1000);
cy.get(this.locators.UploadStaffRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
   cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}

UserManagementTestPage_download_18(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

}

UserManagementTestPage_upload_18(){

cy.wait(1000);
cy.get(this.locators.UploadStaffRadioBtn).click();
cy.wait(1000);
cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

//######################################################################


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

cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(3000);
  cy.then(() => {
    const transactionId = Cypress.env('transactionID');
    cy.get('#transactionId').type(transactionId.toString()); // Convert to string if needed
  });

  //###########################################################

  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click();
  cy.wait(3000);
  cy.get('tr.ng-star-inserted > :nth-child(4)').contains('Failed').should('be.visible');
  cy.wait(2000);
  cy.get('tbody > .ng-star-inserted > :nth-child(4) > a').click();
  cy.wait(3000);


}


UserManagementTestPage_19(){
 
  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);
  cy.get(this.locators.UploadStaffRadioBtn).click();
  cy.wait(1000);

  cy.task('moveAllDownloadsToFixtures').then(result => {
    cy.log(result);
});

cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.get(this.locators.ClickOnUploadBtn).click();
cy.wait(2000);
cy.get('.modal-body').should("be.visible");
cy.wait(1000);
cy.get(this.locators.ClickOnOkay).click();
cy.wait(2000);

}

UserManagementTestPage_20(){
 
  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsers).click();
  cy.wait(1000);
  cy.get(this.locators.DownloadStaffRadioBtn).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStaffDownloadTempBtn).click();
  cy.wait(3000);

  cy.task('moveAllDownloadsToFixtures').then(result => {
    cy.log(result);
});

cy.get('input[type="file"]').attachFile('Staff.xlsx');
cy.wait(2000);
cy.contains("Please Select Type Before Uploading File").should("be.visible");
cy.wait(2000)

}

UserManagementTestPage_21(){
 
  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(1000);
  cy.contains("File Name:").should("be.visible");
  cy.wait(1000);
  cy.contains("File Upload Date:").should("be.visible");
  cy.wait(1000);
  cy.contains("Status:").should("be.visible");
  cy.wait(1000);
  cy.contains("Transaction ID:").should("be.visible");
  cy.wait(1000);

}

UserManagementTestPage_22(){
 
  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnBulkUpload).click();
  cy.wait(1000);
  cy.get(this.locators.ClickonEnableDisableUsersStatus).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnStatusSearchBtn).click({force:true});
  cy.wait(1000);
  cy.contains("Enter at least one filter value").should("be.visible");
  cy.wait(2000);

}
UserManagementTestPage_23(){

    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAddAgent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnLocalAddressDetails).click();
    cy.wait(1000);
    cy.contains("Blood Group:").should("be.visible");
    cy.wait(1000);
    cy.contains("Emergency Contact No").should("be.visible");
    cy.wait(1000);

  }

  UserManagementTestPage_25(){

    cy.get(this.locators.ClickOnUserManagement).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnAddAgent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnLocalAddressDetails).click();
    cy.wait(1000);
    cy.get('#bloodGroup').select("A-");
    cy.wait(1000);
    cy.get("#emer_contactNO").type("4548@$#!#$");
    cy.wait(1000);
    cy.contains("Only numbers allowed and must be 10 digits").should("be.visible");
    cy.wait(2000);

}

UserManagementTestPage_24(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgentEmpanel).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAddAgent).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnLocalAddressDetails).click();
  cy.wait(1000);
  cy.get('#bloodGroup').select("--Select--");
  cy.wait(1000);
  cy.contains('Blood Group is required').should("be.visible");
  cy.wait(1000);


}

UserManagementTestPage_26(){

  cy.get(this.locators.ClickOnUserManagement).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAgentEmpanel).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnAddAgent).click();
  cy.wait(1000);
  cy.get(this.locators.ClickOnLocalAddressDetails).click();
  cy.wait(1000);
  cy.get("#emer_contactNO").click();
  cy.wait(1000);
  cy.get('#bloodGroup').select("A+");
  cy.wait(1000);
  cy.contains('Emergency Contact No is required').should("be.visible");
  cy.wait(1000);

}

}

export default UserManagementPage;
