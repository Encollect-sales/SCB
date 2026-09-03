import { tr } from "@faker-js/faker";

class PermissionsPage {

    constructor(locators) {
        this.locators = locators;
    }

    // =========================================================
    // TC_054 - Verify Permissions menu is visible
    // =========================================================

    verifyPermissionsMenu() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_055 - Verify Define Permission Schemes submenu
    // =========================================================

    verifyDefinePermissionSchemesMenu() {
       cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Define Permission Schemes').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_056 - Verify Search Permission Schemes submenu
    // =========================================================

    verifySearchPermissionSchemesMenu() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Permission Schemes').should('be.visible');

    }


    // =========================================================
    // TC_057 - Verify Assign Permission Scheme to Designations
    // =========================================================

    verifyAssignPermissionSchemeMenu() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        // cy.wait(2000);
        // cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Assign Permission Scheme to Designations').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_058 - Verify Search Permissions submenu
    // =========================================================

    verifySearchPermissionsMenu() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Permissions').should('be.visible');

    }


    // =========================================================
    // TC_059 - Verify Permissions menu is NOT visible
    // =========================================================

    verifyPermissionsMenuNotVisible() {
       cy.contains('Permissions').should('not.be.visible');

    }


    // =========================================================
    // TC_060 - Navigate to Define Permission Schemes
    // =========================================================

    navigateToDefinePermissionSchemes() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Define Permission Schemes').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Define Permission Schemes').should('be.visible');

    }


    // =========================================================
    // TC_061 - Navigate to Search Permission Schemes
    // =========================================================

    navigateToSearchPermissionSchemes() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Permission Schemes').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Permission Schemes').should('be.visible');

    }


    // =========================================================
    // TC_062 - Navigate to Assign Permission Scheme
    // =========================================================

    navigateToAssignPermissionScheme() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Assign Permission Scheme to Designations').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Assign Permission Scheme to Designations').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_063 - Navigate to Search Permissions
    // =========================================================

    navigateToSearchPermissions() {
        cy.contains('System Settings').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Permissions').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Permissions').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Search Permissions').scrollIntoView().should('be.visible');

    }

}

export default PermissionsPage;