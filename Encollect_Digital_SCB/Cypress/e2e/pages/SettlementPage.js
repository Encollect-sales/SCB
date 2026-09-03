class StaffEmpanelmentPage {

    constructor(locators) {
        this.locators = locators;
    }

    // TC_064
    verifyStaffEmpanelmentMenu() {

        cy.contains('User Management').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Staff Empanelment').scrollIntoView().should('be.visible');

    }


    // TC_065
    verifyAddStaffMenu() {

        cy.contains('User Management').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Staff Empanelment').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Add Staff').scrollIntoView().should('be.visible');

    }


    // TC_066
    verifySearchStaffMenu() {

        cy.contains('User Management').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Staff Empanelment').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Staff').scrollIntoView.should('be.visible');

    }


    // TC_067
    verifyStaffEmpanelmentNotVisible() {

        cy.contains('Staff Empanelment').should('not.exist');

    }


    // TC_068
    navigateToAddStaff() {

        cy.contains('User Management').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Staff Empanelment').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Add Staff').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.url()
            .should('include', 'add-staff');

    }


    // TC_069
    navigateToSearchStaff() {
        cy.contains('User Management').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Staff Empanelment').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Staff').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.url()
            .should('include', 'search-staff');

    }

}

export default StaffEmpanelmentPage;