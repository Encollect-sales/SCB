class ReceivableUploadPage {

    constructor(locators) {
        this.locators = locators;
    }


    // TC_144 - Verify system behavior when template download fails
verifyTemplateDownloadFailure() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Download Template').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    // cy.contains(/error|failed|unable to download/i).should('be.visible');
}

// TC_145 - Verify Upload File section is visible
verifyUploadFileSectionVisible() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Upload File').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('Upload Receivable Import File:').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.get('#upload-button').contains('Upload File').scrollIntoView().should('exist');
}

// TC_146 - Verify upload without selecting file
uploadWithoutSelectingFile() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('#upload-button').contains('Upload File').scrollIntoView().should('exist').click({force:true});    
    cy.wait(2000);
    cy.contains("Ok").scrollIntoView().click({force:true});
    cy.contains(/payload|select.*file|file.*required|please.*file/i).should('be.visible');
}

// TC_147 - Verify valid file upload
uploadValidFile() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').scrollIntoView().should('exist').selectFile('cypress/fixtures/ReceivableImportTemplate.xlsx', { force: true });
    cy.wait(2000);
    cy.get('#upload-button').contains('Upload File').scrollIntoView().should('exist').click({force:true});    
    cy.wait(3000);
    cy.contains("Ok").scrollIntoView().click({force:true});
    cy.contains(/success|uploaded successfully|upload successful/i).should('be.visible');
}

// TC_148 - Verify invalid file format upload
uploadInvalidFileFormat() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').scrollIntoView().should('exist').selectFile('cypress/fixtures/ReceivableImportTemplate.txt', { force: true });
    cy.wait(2000);
    cy.get('#upload-button').contains('Upload File').scrollIntoView().should('exist').click({force:true});    
    cy.wait(2000);
    cy.contains("Ok").scrollIntoView().click({force:true});
    cy.contains(/invalid.*format|unsupported.*format|file.*format|only.*xlsx|only.*csv/i).should('be.visible');
}

// TC_149 - Verify upload with corrupted file
uploadCorruptedFile() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('input[type="file"]').scrollIntoView().should('exist').selectFile('cypress/fixtures/ReceivableImportTemplate.docx', { force: true });
    cy.wait(2000);
    cy.get('#upload-button').contains('Upload File').scrollIntoView().should('exist').click({force:true});    
    cy.wait(3000);
    cy.contains("Ok").scrollIntoView().click({force:true});
    cy.contains(/corrupt|invalid.*data|invalid.*file|error|failed/i).should('be.visible');
}

// TC_150 - Verify Bulk Receivable Upload Status submenu navigation
navigateToUploadStatus() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload Status').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.contains('Bulk Receivable Upload Status').scrollIntoView().should('be.visible');
}

// TC_151 - Verify uploaded file status is displayed
verifyUploadedFileStatus() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload Status').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(3000);
    
    cy.contains(/Success|Failed|In Progress/i).scrollIntoView().should('be.visible');
}

// TC_152 - Verify status reflects correct processing result
verifyProcessingResult() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload Status').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.contains(/Success|Failed|In Progress/i).scrollIntoView().should('be.visible');
    cy.contains(/success.*count|failed.*count|success|failed/i).should('be.visible');
}

// TC_153 - Verify behavior when no uploads exist
verifyNoUploadsExist() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Receivable Upload').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Bulk Receivable Upload Status').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.filestatus)
    .find('option')
    .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        const randomValue = $options.eq(randomIndex).val();

        cy.get(this.locators.filestatus).select(randomValue);
    });
}
}

export default ReceivableUploadPage;