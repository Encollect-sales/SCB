class TrailHistoryReportPage {

    constructor(locators) {
        this.locators = locators;
    }

    navigateToTrailHistoryReport() {

        cy.get(this.locators.reports).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.trailReports).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.trailHistoryReport).click({force:true});
        cy.wait(2000);

    }

    verifyTrailHistoryPageLoaded() {

        cy.get(this.locators.pageTitle).scrollIntoView().should('be.visible').and('contain', 'Trail History Report');

    }

    verifyDispositionCodeGroupVisible() {
        cy.get(this.locators.dispositionCodeGroup).scrollIntoView().should('be.visible');

    }

    verifyDispositionCodeVisible() {

        cy.get(this.locators.dispositionCode).scrollIntoView().should('be.visible');

    }
    clickonagencystaff(){
        cy.get(this.locators.agencyradio).click({force:true});
    }
selectAllProductGroups() {

    cy.get(this.locators.productgroup).click({ force: true });
    cy.wait(2000);
      cy.get('.ng-option-label').each(($option) => {
        cy.wrap($option).click({ force: true });
    });

    cy.get('body').click(0, 0);
}

selectAllProducts() {

    cy.get(this.locators.product).click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').each(($option) => {
        cy.wrap($option).click({ force: true });
    });

    cy.get('body').click(0, 0);

}

selectAllBuckets() {

    cy.get(this.locators.bucket).click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').each(($option) => {
        cy.wrap($option).click({ force: true });
    });

    cy.get('body').click(0, 0);

}

selectAllRegions() {

    cy.get(this.locators.region).click({force:true});
    cy.wait(2000);
    cy.get('.ng-option-label').each(($option) => {
        cy.wrap($option).click({ force: true });
    });

    cy.get('body').click(0, 0);

}
   
Dispositionselectopt(){
    cy.wait(2000);
    cy.get('#discCodeGroup option').then(($options) => {
    const randomOption = Cypress._.sample($options.toArray());
    cy.get('#discCodeGroup').select(randomOption.value);

});
    cy.wait(2000);
    cy.get('#discCode option').first().then(($option) => {
    cy.get('#discCode').select($option.val());
  });

    cy.wait(2000);

}

Alldispositionoption(){
   cy.wait(2000);
   cy.get('#discCodeGroup option').then(($options) => {
    const values = $options.map((i, el) => el.value).get();
    cy.get('#discCodeGroup').select(values);

});
    cy.get('#discCode option').then(($options) => {
    const values = $options.map((i, el) => el.value).get();
    cy.get('#discCode').select(values);

});
}

 getRandomDateRange() {

    const today = new Date();

    // Random From Date within last 5 months
    const fromDate = new Date(today);
    fromDate.setMonth(today.getMonth() - Math.floor(Math.random() * 5 + 1));

    // Random day (1-28 to avoid invalid dates)
    fromDate.setDate(Math.floor(Math.random() * 28) + 1);

    // To Date = From Date + random days (1-29)
    const toDate = new Date(fromDate);
    toDate.setDate(fromDate.getDate() + Math.floor(Math.random() * 29) + 1);

    // To Date should not exceed today
    if (toDate > today) {
        toDate.setTime(today.getTime());
    }

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = date.toLocaleString('en-GB', { month: 'short' });
        const year = String(date.getFullYear()).slice(-2);
        return `${day}-${month}-${year}`;
    };

    return {
        fromDate: formatDate(fromDate),
        toDate: formatDate(toDate)
    };
}

// Shared helper: sets value via native setter to bypass datepicker masking,
// then fires input/change events Angular listens for.
setDateFieldValue(selector, date) {

    cy.get(selector)
        .scrollIntoView()
        .click({ force: true })
        .then($input => {

            const input = $input[0];

            // Bail out early with a clear error if the field is readonly —
            // in that case this approach still works because we set the
            // DOM property directly (browsers only block real keystrokes,
            // not scripted value assignment).
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'value'
            ).set;

            nativeInputValueSetter.call(input, '');
            input.dispatchEvent(new Event('input', { bubbles: true }));

            nativeInputValueSetter.call(input, date);
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            input.dispatchEvent(new Event('blur', { bubbles: true }));
        });

    cy.get(selector).blur();
}

enterTrailFromDate(date) {

    this.setDateFieldValue(this.locators.trailFromDate, date);

    cy.get(this.locators.trailFromDate)
        .should('have.value', date)
        .and('not.have.class', 'ng-invalid');
}

enterTrailToDate(date) {

    this.setDateFieldValue(this.locators.trailToDate, date);

    cy.get(this.locators.trailToDate)
        .should('have.value', date)
        .and('not.have.class', 'ng-invalid');
}

    clickDownloadReport() {

        cy.get(this.locators.downloadReport).click();

    }
    
    clickDownloadReportforcefully() {

        cy.get(this.locators.downloadReport).click({force:true});

    }

    verifyReportDownloaded() {

        cy.get(this.locators.successToast)
            .should('be.visible');

    }

    verifyTrailFromDateValidation() {
        cy.contains('Validation Error!').scrollIntoView().should('be.visible');
        cy.get('#trailDate_to').click({force:true});
        cy.wait(2000);
        // cy.get("#trailDate_from").click().should('contain', 'Trail From Date is required');
        // cy.get('body').click(0, 0);

    }

    verifyTrailToDateValidation() {
        cy.contains('Validation Error!').scrollIntoView().should('be.visible');
        // cy.get('#trailDate_to').click({force:true}).should('contain', 'Trail To Date is required');
        // cy.wait(2000);
        // cy.get("#trailDate_from").click({force:true});

    }

    verifyNoDispositionValidation() {

        cy.contains('Disposition Code Group is required')
            .should('not.exist');

        cy.contains('Disposition Code is required')
            .should('not.exist');

    }

    verifyDispositionFieldsNotMandatory() {

        cy.get(this.locators.dispositionCodeGroupMandatory)
            .should('not.exist');

        cy.get(this.locators.dispositionCodeMandatory)
            .should('not.exist');

    }

}

export default TrailHistoryReportPage;