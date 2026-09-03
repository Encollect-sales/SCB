import { tr } from "@faker-js/faker";

class ReportsPage {

    constructor(locators) {
        this.locators = locators;
    }

    // =========================================================
    // TC_070 - Verify Reports menu is visible
    // =========================================================

    verifyReportsMenu() {

        cy.contains('Reports').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_071 - Verify Trail History Report is available
    // =========================================================

    verifyTrailHistoryReportMenu() {

        cy.contains('Reports').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
         cy.contains('Trail Reports').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Trail History Report').scrollIntoView().should('be.visible');

    }


    // =========================================================
    // TC_072 - Verify Payment Report is available
    // =========================================================

    verifyPaymentReportMenu() {

        cy.contains('Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Report').should('be.visible');

    }


    // =========================================================
    // TC_073 - Verify Communication History Report
    // =========================================================

    verifyCommunicationHistoryReportMenu() {

        cy.contains('Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Communication History Report').should('be.visible');

    }


    // =========================================================
    // TC_074 - Verify Performance Report (MTD)
    // =========================================================

    verifyPerformanceReportMenu() {

        cy.contains('Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Report (MTD)').should('be.visible');

    }


    // =========================================================
    // TC_075 - Verify Reports menu is NOT visible
    // for unauthorized user
    // =========================================================

    verifyReportsMenuNotVisible() {

        cy.contains('Reports').should('not.be.visible');

    }


    // =========================================================
    // TC_076 - Navigate to Trail History Report
    // =========================================================

    navigateToTrailHistoryReport() {

        cy.contains('Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Trail Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Trail History Report').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Trail History Report').should('be.visible');

    }


    // =========================================================
    // TC_077 - Navigate to Payment Report
    // =========================================================

    navigateToPaymentReport() {

        cy.contains('Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Report').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Payment Report').should('be.visible');

    }


    // =========================================================
    // TC_078 - Navigate to Communication History Report
    // =========================================================

    navigateToCommunicationHistoryReport() {

        cy.contains('Reports').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Communication History Report').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Communication History Report').should('be.visible');

    }


    // =========================================================
    // TC_079 - Navigate to Performance Report (MTD)
    // =========================================================

    navigateToPerformanceReport() {

        cy.contains('Reports').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Report').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Report (MTD)').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Report (MTD)').should('be.visible');

    }

}

export default ReportsPage;