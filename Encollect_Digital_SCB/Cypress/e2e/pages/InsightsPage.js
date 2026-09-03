class InsightsPage {

    constructor(locators) {
        this.locators = locators;
    }

    // TC_080
    verifyInsightsMenu() {

        cy.contains('Insights').scrollIntoView().should('be.visible');

    }


    // TC_081
    verifyPerformanceInsightsMenu() {

        cy.contains('Insights').scrollIntoView().should('be.visible').click();
        cy.wait(1000);
        cy.contains('Performance Insights').should('be.visible');

    }


    // TC_082
    verifyInsightsMenuNotVisible() {

        cy.contains('Insights').should('not.exist');

    }


    // TC_083
    navigateToPerformanceInsights() {

        cy.contains('Insights').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Insights').should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Insights').should('be.visible');

    }


    // TC_084
    verifyPerformanceInsightsScreen() {

        cy.contains('Insights').should('be.visible');
        cy.wait(2000);
        cy.contains('Insights').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Insights').should('be.visible');
        cy.wait(2000);
        cy.contains('Performance Insights').click({force:true});
        cy.wait(2000);
        cy.contains('Performance Insights').should('be.visible');

    }

}

export default InsightsPage;