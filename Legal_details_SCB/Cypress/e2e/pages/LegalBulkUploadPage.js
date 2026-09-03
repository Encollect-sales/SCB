class LegalBulkUploadPage {
  constructor(locators) {
    this.locators = locators;
  }

   DownloadLegalTemplate() {

        cy.contains("System Settings").click({ force: true });
        cy.wait(2000);
        cy.contains("Bulk Upload Of Legal").click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.bulkuploadlegal).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.downloaddropdown).select("Bulk Upload Of Sarfaesi Details");
        cy.wait(2000);
        cy.get(this.locators.downloadbutton).click({ force: true });
        cy.wait(3000);

    }

    UploadLegalTemplate(fileName) {
    
        cy.get(this.locators.uploaddropdown).select("Bulk Upload Of Sarfaesi Details");
        cy.wait(2000);
        cy.get(this.locators.chooseFileInput)
            .selectFile(`cypress/fixtures/${fileName}`, {
                force: true
            });

        cy.wait(2000);
        cy.get(this.locators.uploadbutton).click({ force: true });
        cy.wait(2000);

    }
       UploadLegalTemplate107(fileName) {
        cy.get(this.locators.bulkuploadlegal).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.uploaddropdown).select("Bulk Upload Of Sarfaesi Details");
        cy.wait(2000);
        cy.get(this.locators.chooseFileInput)
            .selectFile(`cypress/fixtures/${fileName}`, {
                force: true
            });

        cy.wait(2000);
        cy.get(this.locators.uploadbutton).click({ force: true });
        cy.wait(2000);

    }


 BulkLegalUpload_Processed() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);
    cy.get(this.locators.statusfiletype).select("Sarfaesi Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)").should("contain", "Processed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}

  BulkLegalUpload_Failed() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);

    cy.get(this.locators.statusfiletype).select("Sarfaesi Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)") .should("contain", "Failed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}
  
    OpenAccountDetailsScreen() {

        cy.get(this.locators.accountsearch).click({ force: true });
        cy.wait(3000);

    }


    EnterLoanAccountNumber(accountNumber) {

        cy.get(this.locators.searchacnumber).clear().type(accountNumber);
        cy.wait(2000);
        cy.get(this.locators.search).click({ force: true });
        cy.wait(4000);

    }


    OpenCustomerAccount() {

        cy.get(this.locators.accountnumber).click({ force: true });
        cy.wait(3000);
        cy.get(this.locators.togglebutton).click({ force: true });
        cy.wait(2000);

    }


    ClickLegalDetailsTab() {

        cy.contains("Legal Details").click({ force: true });
        cy.wait(3000);
        cy.contains("Sarfaesi Details").scrollIntoView().should("exist").click({force:true});
        cy.wait(2000);

    }

    
   ClickCaseDetailsTab() {

        cy.contains("Legal Details").click({ force: true });
        cy.wait(3000);
        // cy.contains("Case Details").scrollIntoView().should("exist").click({force:true});
        // cy.wait(2000);

    }



 VerifyLegalDetails(details) {

    if (details.noticeReferenceNo) {
        cy.contains(details.noticeReferenceNo).scrollIntoView().should('exist');
    }

    if (details.partyName) {
        cy.contains(details.partyName).scrollIntoView().should('exist');
    }

    if (details.sarfaesiStage) {
        cy.contains(details.sarfaesiStage).scrollIntoView().should('exist');
    }

    if (details.sarfaesiStatus) {
        cy.contains(details.sarfaesiStatus).scrollIntoView().should('exist');
    }

    if (details.noticeDate) {
        cy.contains(details.noticeDate).scrollIntoView().should('exist');
    }

    if (details.whatsappStatus) {
        cy.contains(details.whatsappStatus).scrollIntoView().should('exist');
    }

    if (details.whatsappDate) {
        cy.contains(details.whatsappDate).scrollIntoView().should('exist');
    }

    if (details.smsStatus) {
        cy.contains(details.smsStatus).scrollIntoView().should('exist');
    }

    if (details.smsDate) {
        cy.contains(details.smsDate).scrollIntoView().should('exist');
    }

    if (details.physicalStatus) {
        cy.contains(details.physicalStatus).scrollIntoView().should('exist');
    }

    if (details.physicalDate) {
        cy.contains(details.physicalDate).scrollIntoView().should('exist');
    }

    if (details.trackingId) {
        cy.contains(details.trackingId).scrollIntoView().should('exist');
    }
}
VerifyLegalDetailsNotExists(details) {

    // Verify Notice Reference Number does not exist
    if (
        details.noticeReferenceNo &&
        details.noticeReferenceNo.toString().trim() !== ''
    ) {
        cy.contains(details.noticeReferenceNo)
            .should('not.exist');
    }

    cy.wait(2000);

    // Verify Tracking ID only when it is provided
    if (
        details.trackingId &&
        details.trackingId.toString().trim() !== ''
    ) {
        cy.contains(details.trackingId)
            .should('not.exist');
    } else {
        cy.log('Tracking ID is blank - skipping Tracking ID verification');
    }

    cy.wait(2000);
}


VerifyCaseDetailsNotExists(details) {

    if (details.fileNumber) {
        cy.contains(details.fileNumber).should('not.exist');
        cy.wait(2000);
    }

    if (details.caseNumber) {
        cy.contains(details.caseNumber).should('not.exist');
        cy.wait(2000);
    }

    if (details.cnr) {
        cy.contains(details.cnr).should('not.exist');
        cy.wait(2000);
    }

}

BulkLegalUpload_PartiallyProcessed() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);
    cy.get(this.locators.statusfiletype).select("Sarfaesi Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)").should("contain", "Partially Processed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}


getTransactionId() {
    return cy.get(this.locators.transactionIdCell) // adjust to actual selector
        .invoke('text');
}

downloadStatusFile(txnId) {
    cy.contains('tr', txnId)
        .find('a').contains('Click here')
        .click();
}


DownloadCaseTemplate(){
        cy.contains("System Settings").click({ force: true });
        cy.wait(2000);
        cy.contains("Bulk Upload Of Legal").click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.bulkuploadlegal).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.downloaddropdown).select("Bulk Upload Of Case Details");
        cy.wait(2000);
        cy.get(this.locators.downloadbutton).click({ force: true });
        cy.wait(3000);
}
UploadCaseTemplate(fileName) {
    
        cy.get(this.locators.uploaddropdown).select("Bulk Upload Of Case Details");
        cy.wait(2000);
        cy.get(this.locators.chooseFileInput)
            .selectFile(`cypress/fixtures/${fileName}`, {
                force: true
            });

        cy.wait(2000);
        cy.get(this.locators.uploadbutton).click({ force: true });
        cy.wait(2000);

    }



VerifyUploadSuccess() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);
    cy.get(this.locators.statusfiletype).select("Case Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)").should("contain", "Processed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}

VerifyCaseDetails(details) {

    if (details.fileNumber) {
        cy.get(this.locators.fileNumberValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.fileNumber);
    }

    if (details.subLAN !== undefined) {
        cy.get(this.locators.subLANValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.subLAN);
    }

    if (details.caseFilingDate) {
        cy.get(this.locators.caseFilingDateValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.caseFilingDate);
    }

    if (details.forum) {
        cy.get(this.locators.forumValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.forum);
    }

    if (details.caseType) {
        cy.get(this.locators.caseTypeValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.caseType);
    }

    if (details.caseNumber) {
        cy.get(this.locators.caseNumberValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.caseNumber);
    }

    if (details.caseYear) {
        cy.get(this.locators.caseYearValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.caseYear);
    }

    if (details.petitioner) {
        cy.get(this.locators.petitionerValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.petitioner);
    }

    if (details.respondent) {
        cy.get(this.locators.respondentValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.respondent);
    }

    if (details.cnr) {
        cy.get(this.locators.cnrValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.cnr);
    }

    if (details.lawyer) {
        cy.get(this.locators.lawyerValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.lawyer);
    }

    if (details.nextHearingDate) {
        cy.get(this.locators.nextHearingDateValue)
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', details.nextHearingDate);
    }

}

VerifyUploadFailed(){
    
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);

    cy.get(this.locators.statusfiletype).select("Case Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)") .should("contain", "Failed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click({force:true});
    cy.wait(3000);


}

BulkCaseUpload_PartiallyProcessed() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);
    cy.get(this.locators.statusfiletype).select("Case Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)").should("contain", "Partially Processed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}

 DownloadLegalNoticeTemplate() {

        cy.contains("System Settings").click({ force: true });
        cy.wait(2000);
        cy.contains("Bulk Upload Of Legal").click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.bulkuploadlegal).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.downloaddropdown).select("Bulk Upload Of Notice Details");
        cy.wait(2000);
        cy.get(this.locators.downloadbutton).click({ force: true });
        cy.wait(3000);

    }

    UploadLegalNoticeTemplate(fileName) {
    
        cy.get(this.locators.uploaddropdown).select("Bulk Upload Of Notice Details");
        cy.wait(2000);
        cy.get(this.locators.chooseFileInput)
            .selectFile(`cypress/fixtures/${fileName}`, {
                force: true
            });

        cy.wait(2000);
        cy.get(this.locators.uploadbutton).click({ force: true });
        cy.wait(2000);

    }

    VerifyUploadNoticeFailed(){
    
    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);

    cy.get(this.locators.statusfiletype).select("Notice Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)") .should("contain", "Failed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click({force:true});
    cy.wait(3000);


}

BulkNoticeUpload_PartiallyProcessed() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);
    cy.get(this.locators.statusfiletype).select("Notice Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)").should("contain", "Partially Processed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}

VerifyUploadNoticeSuccess() {

    cy.wait(2000);
    cy.get(this.locators.clickokbutton).click();
    cy.wait(5000);
    cy.contains("File Uploaded Successfully", { timeout: 15000 })
        .invoke("text")
        .then((popupText) => {

            cy.log("Popup Text: " + popupText);
            console.log("Popup Text:", popupText);

            const transactionIdMatch = popupText.match(/\d+/);

            expect(transactionIdMatch, "Transaction ID found in popup").to.not.be.null;

            const transactionId = transactionIdMatch[0];

            Cypress.env("transactionID", transactionId);

            cy.log("Transaction ID: " + transactionId);

        });

    cy.then(() => {

        const transactionId = Cypress.env("transactionID");

        expect(transactionId, "Transaction ID").to.not.be.undefined;

        cy.get("#status-transaction-id")
            .clear()
            .type(transactionId.toString());

    });

    cy.wait(2000);
    cy.get(this.locators.statusfiletype).select("Notice Details");
    cy.wait(2000);
    cy.get(this.locators.statussearchbutton).click({ force: true });
    cy.wait(4000);
    cy.get("tbody > tr > :nth-child(3)").should("contain", "Processed");
    cy.wait(2000);
    cy.get("tbody > tr > :nth-child(4)").click();
    cy.wait(3000);

}


VerifyLegalDetailsNotExistsdata(data) {

    // Verify Notice Reference Number only when value is not blank
    if (
        data.noticeReferenceNo !== undefined &&
        data.noticeReferenceNo !== null &&
        data.noticeReferenceNo.toString().trim() !== ''
    ) {
        cy.contains(data.noticeReferenceNo)
            .should('not.exist');
    } else {
        cy.log('Notice Reference Number is blank - cy.contains() skipped');
    }

    // Verify Tracking ID only when value is available
    if (
        data.trackingId !== undefined &&
        data.trackingId !== null &&
        data.trackingId.toString().trim() !== ''
    ) {
        cy.contains(data.trackingId)
            .should('not.exist');
    } else {
        cy.log('Tracking ID is blank - cy.contains() skipped');
    }
}

uploadMissingColumnFile(fileName) {
    cy.contains("System Settings").click({ force: true });
    cy.wait(2000);
    cy.contains("Bulk Upload Of Legal").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.bulkuploadlegal).click({ force: true });
    cy.wait(2000);
    cy.get('#upload-template-type').select("Bulk Upload Of Sarfaesi Details");
    cy.wait(2000);
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${fileName}`, { force: true });
    cy.wait(2000);
    cy.contains('button', 'Upload')
        .should('be.visible')
        .click({ force: true });
}
}



export default LegalBulkUploadPage;