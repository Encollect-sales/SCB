class CollectionStrategyPage {

    constructor(locators) {
        this.locators = locators;
    }

    verifyCollectionStrategyVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyCreateSegmentVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Create Segment').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifySegmentListVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Segment List').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyDesignDigitalStrategyVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Design Digital Strategy').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyDigitalStrategiesVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Digital Strategies').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifySetUpDigitalCampaignVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Set up Digital Campaign').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyDigitalCampaignsVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Digital Campaigns').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    verifyDigitalCampaignRunsVisible() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Digital Campaign Runs').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    navigateToCreateSegment() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Create Segment').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    navigateToSegmentList() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Segment List').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    navigateToDesignDigitalStrategy() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Design Digital Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    navigateToDigitalStrategies() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Digital Strategies').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    navigateToSetUpDigitalCampaign() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Set up Digital Campaign').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    navigateToDigitalCampaigns() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Digital Campaigns').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    navigateToDigitalCampaignRuns() {
        cy.contains('Collection Strategy').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Digital Campaign Runs').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    verifyCollectionStrategyNotVisible() {
        cy.contains('Collection Strategy').should('not.be.visible');
    }
}

export default CollectionStrategyPage;