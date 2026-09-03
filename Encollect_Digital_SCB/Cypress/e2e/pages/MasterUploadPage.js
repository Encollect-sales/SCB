class MastersUploadPage {

    constructor(locators) {
        this.locators = locators;
    }

    NavigateToBulkUploadMasters() {

        cy.contains('System Settings').should('be.visible').click();
        cy.wait(2000);
        cy.contains('Masters Upload').should('be.visible').click();
        cy.wait(2000);
        cy.contains('Bulk Upload Masters').should('be.visible').click();

    }

    VerifyBulkUploadMastersScreen() {

        cy.contains('Bulk Upload Masters').should('be.visible');

    }
    
    verifyMasterTemplates() {
    cy.get('#download-template-type').should('be.visible');
    cy.wait(2000);
    cy.get('#download-template-type option').contains('Bank Master').should('exist');
    cy.wait(2000);
    cy.get('#download-template-type option').contains('Base Branch Master').should('exist');
    cy.wait(2000);
    cy.get('#download-template-type option').contains('Base Branch Master').should('exist');
    cy.wait(2000);
    cy.get('#download-template-type option').contains('Bucket Master').should('exist');
    cy.wait(2000);
    cy.get('#download-template-type option').contains('Disposition Master').should('exist');
    cy.wait(2000);
    cy.get('#download-template-type option').contains('Department and Designation Master').should('exist');
}



    selectMasterTemplate(masterName) {
    cy.get('#download-template-type').should('be.visible').select(masterName);
    cy.wait(2000);
    cy.get('#download-template-type').find('option:selected') .should('contain.text', masterName);

}
verifyNoMasterTemplateSelected() {
    cy.get('#download-template-type').should('be.visible');
    cy.wait(2000);
    cy.get('#download-template-type option:selected').should('contain.text', 'Bank Master');

}

verifyDownloadTemplateSection() {
    cy.contains('Download Template').should('be.visible');
    cy.wait(2000);
    cy.get('#download-template-type').should('be.visible');

}


verifyUploadFileSection() {
    cy.contains('Upload File').should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.uploadtype).should('exist');

}

verifyProceedWithUploadForDropdown() {

    cy.contains('Proceed with Upload For').should('be.visible');
    cy.wait(2000);
    cy.get('ng-select').filter(':visible').should('exist');

}
verifyFileUploadControl() {
    cy.contains('Upload File').should('be.visible');
    cy.wait(2000);
    // cy.contains('Choose File').should('exist');

}


    selectFile(fileName) {
        cy.get(this.locators.uploadtype).select('Bank Master');
        cy.wait(2000);
         cy.get('#upload-template-file')
        .should('exist')
        .selectFile(`cypress/fixtures/${fileName}`, { force: true });
        cy.get('button').contains('Upload').should('be.visible').and('be.enabled');

    }

    verifySelectedFile(fileName) {

        cy.contains(fileName).should('be.visible');
  

    }
    verifyUploadButtonEnabled() {
        cy.get(this.locators.uploadtype).select('Bank Master');
        cy.wait(2000);
        cy.get('button').contains('Upload').should('be.visible').and('be.enabled');

}

uploadBankMasterFile() {


    cy.get(this.locators.masterTemplateDropdown).should('be.visible').select('Bank Master');
    cy.wait(2000);
    cy.get('#upload-template-file').should('exist').selectFile('cypress/fixtures/BankMasterTemplate.xlsx', {
            force: true
        });

   cy.wait(2000);
    cy.contains('Proceed with Upload For')
        .parent()
        .find('select')
        .should('be.visible')
        .select(1);
    cy.wait(2000);
    cy.contains('button', 'Upload')
        .should('be.visible')
        .and('be.disabled');
        
}

verifyMastersUploadStatusMenu() {

    cy.contains('Masters Upload Status').should('exist').and('be.visible');

}

verifyViewAndDisableMastersMenu() {

    cy.contains('View and Disable Masters').should('be.visible');

}

verifyProductHierarchyScreen() {
    cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Manage Masters')
        .should('be.visible')
        .click();
    cy.wait(2000);
    cy.contains('Product Hierarchy')
        .should('be.visible')
        .click();
    cy.wait(2000);
    cy.contains('Product Hierarchy')
        .should('be.visible');

}

verifyProductHierarchyCounts() {
    cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('ProductGroup').should('be.visible');
    cy.wait(2000);
    cy.contains('Product').scrollIntoView().should('exist');
    cy.wait(2000);
    cy.contains('SubProduct').scrollIntoView().should('exist');

}


verifyProductRootNode() {

    cy.contains('Product').scrollIntoView().should('be.visible');

}

verifyProductChildNodes() {

    // cy.contains('Debit Card').scrollIntoView().should('be.visible');
    // cy.wait(2000);
    cy.contains('Consumer Loan').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('LOANS PRODUCTS').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('CreditCard').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Cash Loans').scrollIntoView().should('be.visible');

}

verifyZoomControls() {

    cy.get('button').filter(':visible').should('have.length.greaterThan', 0);

}

verifyZoomInFunctionality() {

    cy.get(this.locators.zoomin).should('be.visible').click();

}

verifyProductHierarchyPan() {

    cy.get('svg')
        .filter(':visible')
        .first()
        .should('be.visible')
        .trigger('mousedown', { which: 1, clientX: 300, clientY: 300 })
        .trigger('mousemove', { which: 1, clientX: 450, clientY: 350 })
        .trigger('mouseup', { force: true });
    cy.wait(2000);
    cy.get('svg')
        .filter(':visible')
        .first()
        .should('be.visible');

}

verifyProductHierarchyMenu() {
    cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Manage Masters').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Product Hierarchy').should('be.visible');

}


verifyProductHierarchyNavigation() {
     cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Product Hierarchy').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Product Hierarchy').scrollIntoView().should('exist');

}

verifyEmptyProductHierarchy() {
     cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Manage Masters').should('be.visible').click();
    cy.wait(2000);
    cy.contains('Product Hierarchy').should('be.visible').click();
    cy.wait(2000);
    cy.contains('No data available').should('be.visible');

}

verifyEmptyProductHierarchy() {
     cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Manage Masters').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Product Hierarchy').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('No data available').scrollIntoView().should('be.visible');

}
verifyGeoHierarchyScreen() {
    cy.contains("System Settings").should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Manage Masters').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Geo Hierarchy').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Geo Hierarchy').should('be.visible');

}
verifyGeoHierarchyCounts() {
    cy.contains('Country').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Region').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('State').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('City').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Branch').scrollIntoView().should('be.visible');

}
verifyGeoHierarchyVisualization() {

    cy.get('svg')
        .filter(':visible')
        .first()
        .should('be.visible');

}

verifyGeoRootNode() {

    cy.contains('Geo').scrollIntoView().should('be.visible');

}

verifyGeoChildNodes() {
    cy.contains('Srilanka').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Canada').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Kuwait').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Malaysia').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('INDIA').scrollIntoView().should('be.visible');

}

verifyGeoZoomControls() {
    cy.wait(5000);
    cy.get(this.locators.zoomingeo).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.zoomoutgeo).should('be.visible');

}

verifyGeoZoomInFunctionality() {
    cy.wait(2000);
    cy.get(this.locators.zoomingeo).should('be.visible').click({force:true});

}

verifyGeoZoomOutFunctionality() {
    cy.wait(5000);
    cy.get(this.locators.zoomoutgeo).should('be.visible').click({force:true});

}

verifyGeoHierarchyPan() {
    cy.wait(2000);
    cy.get('svg')
        .filter(':visible')
        .first()
        .should('be.visible')
        .trigger('mousedown', {
            which: 1,
            clientX: 300,
            clientY: 300,
            force: true
        })
        .trigger('mousemove', {
            which: 1,
            clientX: 450,
            clientY: 350,
            force: true
        })
        .trigger('mouseup', {
            force: true
        });

}


verifyGeoHierarchyNavigation() {
    cy.contains("System Settings").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains("Manage Masters").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Geo Hierarchy').should('be.visible').click({force:true});
    cy.url()
        .should('include', '/settings/manage-geo-hierarchy');

}

verifyEmptyGeoHierarchy() {
    cy.contains('System Settings').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Manage Masters').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Geo Hierarchy').should('be.visible').click({ force: true });
    cy.url().should('include', '/settings/manage-geo-hierarchy');
    cy.wait(3000);
    // cy.contains('No data available', { timeout: 30000 }).should('be.visible');
}

verifyPermissionsMenu() {

    cy.contains('Permissions').scrollIntoView().should('be.visible');

}
}

export default MastersUploadPage;