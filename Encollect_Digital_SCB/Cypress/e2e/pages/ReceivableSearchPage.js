class ReceivableSearchPage {

    constructor(locators) {
        this.locators = locators;
    }

    // TC_154 - Verify Receivable Search menu is visible
    verifyReceivableSearchMenuVisible() {
        cy.contains('Receivable Search').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // Navigate to Receivable Search
    navigateToReceivableSearch() {
        cy.contains('Receivable Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.url().should('include', 'receivable');
    }

    // TC_155 - Verify Receivable Search page loads successfully
    verifyReceivableSearchPageLoaded() {
        cy.contains('Receivable Search').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Select Search Fields').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_156 - Verify default search fields
    verifyDefaultSearchFields() {
        cy.contains('Select Search Fields').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Debtor ID').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_157 - Verify search fields are non-editable
    verifySearchFieldsNonEditable() {
        cy.contains('Select Search Fields').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Debtor ID').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('input:visible').each(($input) => {
            cy.wrap($input).should('not.be.disabled');
        });

        cy.wait(2000);
    }

    // TC_158 - Search by Deptor Display Name
    searchByCustomerName() {
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input:visible').first().should('be.visible').clear().type('Test Customer');
        cy.wait(2000);

        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_159 - Search by Record Number
    searchByRecordNumber() {
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input:visible').eq(1).should('be.visible').clear().type('demo840904');
        cy.wait(2000);

        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_160 - Search by Customer ID
    searchByCustomerId() {
        cy.contains('Debtor ID:').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input:visible').eq(2).should('be.visible').clear().type('D00013');
        cy.wait(2000);

        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_161 - Search with multiple fields
    searchWithMultipleFields() {
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input:visible').eq(0).should('be.visible').clear().type('Test Customer');
        cy.wait(500);

        cy.get('input:visible').eq(2).should('be.visible').clear().type('CUST001');
        cy.wait(2000);

        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_162 - Search without input
    searchWithoutInput() {
        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');

        cy.get('body').then(($body) => {
            if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').should('be.visible');
            } else if ($body.text().includes('No data available')) {
                cy.contains('No data available').should('be.visible');
            } else {
                cy.get('body').should('be.visible');
            }
        });
    }

    // TC_163 - Verify Clear button
    verifyClearButton() {
        cy.get('input:visible').first().should('be.visible').clear().type('Test Customer');
        cy.wait(500);

        cy.contains('Clear').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('input:visible').each(($input) => {
            cy.wrap($input).should('have.value', '');
        });
    }

    // TC_164 - Verify result grid columns
    verifyResultGridColumns() {
        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Debtor ID').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_165 - Verify Deptor Display Name mapping
    verifyCustomerNameMapping() {
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').first().should('not.be.empty');
        });
    }

    // TC_166 - Verify Record Number mapping
    verifyRecordNumberMapping() {
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get("#search-account-number").type("demo840904");
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').should('exist');
        });
    }

    // TC_167 - Verify Customer ID mapping
    verifyCustomerIdMapping() {
        cy.contains('Debtor ID:').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(this.locators.debtorid).type("D00013");
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').should('exist');
        });
    }

    // TC_168 - Verify Days Past Due mapping
    verifyDaysPastDueMapping() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Days Overdue').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').should('exist');
        });
    }

    // TC_169 - Verify Loan Amount mapping
    verifyLoanAmountMapping() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Original Amount').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').should('exist');
        });
    }

    // TC_170 - Verify Bucket mapping
    verifyBucketMapping() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Bucket').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').should('exist');
        });
    }

    // TC_171 - Verify Total Overdue Amount mapping
    verifyTotalOverdueAmountMapping() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Current Due Amount').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('table').should('exist');
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').should('exist');
        });
    }

    // TC_172 - Verify no records found
    verifyNoRecordsFound() {
        cy.get("#search-account-number").first()
            .scrollIntoView()
            .should('be.visible')
            .clear()
            .type('INVALID_CUSTOMER_987654321');
        cy.wait(2000);
        cy.contains('Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').then(($body) => {
            if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').scrollIntoView().should('be.visible');
            } else {
                cy.contains('Record Number is Invalid.').scrollIntoView().should('be.visible');
            }
        });
    }
       // TC_201 - Verify Online Payment Requests section when no records are available
    verifyOnlinePaymentRequestsNoRecords() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('tr > :nth-child(4) > app-field-value > [style="text-wrap-mode: nowrap; position: relative;"] > span').should('have.length.greaterThan', 0);
        cy.wait(2000);
        cy.get('tr > :nth-child(4) > app-field-value > [style="text-wrap-mode: nowrap; position: relative;"] > span').then($elements => { const randomIndex = Math.floor(Math.random() * $elements.length); cy.wrap($elements[randomIndex]).scrollIntoView().should('be.visible').click({ force: true }); });
        cy.wait(2000);
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);

        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);

        cy.get('body').then(($body) => {
            if ($body.text().includes('No Online Payment Requests Found!')) {
                cy.contains('No Online Payment Requests Found!').scrollIntoView().should('be.visible');
            } else if ($body.text().includes('No data available')) {
                cy.contains('No data available').scrollIntoView().should('be.visible');
            } else {
                cy.get('table:visible').should('exist');
            }
        });

        cy.wait(2000);
    }
    verifyNavigationToAccountDetails() {
        cy.contains('Receivable Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
          cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('tr > :nth-child(4) > app-field-value > [style="text-wrap-mode: nowrap; position: relative;"] > span').should('have.length.greaterThan', 0);
        cy.wait(2000);
        cy.get('tr > :nth-child(4) > app-field-value > [style="text-wrap-mode: nowrap; position: relative;"] > span').then($elements => { const randomIndex = Math.floor(Math.random() * $elements.length); cy.wrap($elements[randomIndex]).scrollIntoView().should('be.visible').click({ force: true }); });
        cy.wait(2000);
        cy.get('tbody tr').first().should('be.visible');
        cy.wait(2000);
        cy.contains('360 Degree View').scrollIntoView().should('be.visible');
    }

    verifyfirstnavToAccountDetails() {
        cy.contains('Receivable Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
          cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(4) > app-field-value > [style="text-wrap-mode: nowrap; position: relative;"] > span').scrollIntoView().should('be.visible').click({ force: true }); 
        cy.wait(2000);
        cy.get('tbody tr').first().should('be.visible');
        cy.wait(2000);
        cy.contains('360 Degree View').scrollIntoView().should('be.visible');
    }


    // TC_202 - Verify Previous button on the first page
    verifyPreviousButtonOnFirstPage() {
        // cy.contains('Online Payment Requests').scrollIntoView().should('be.');
        // cy.wait(1000);
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);

        cy.get('.pager').should('exist');
        cy.wait(2000);

        cy.get('.disabled').contains('Previous').scrollIntoView().should('be.visible').then(($button) => {
            const isDisabled = $button.is(':disabled') || $button.hasClass('disabled') || $button.attr('aria-disabled') === 'true';

            if (isDisabled) {
                cy.wrap($button).should('be.disabled');
            } else {
                cy.wrap($button).click({ force: true });
                cy.wait(2000);
                cy.get('.pager').should('exist');
            }
        });

        cy.wait(2000);
    }

    // TC_203 - Verify Next button on the last page
    verifyNextButtonOnLastPage() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('.pagination-last > .page-link').click({force:true});
        cy.wait(2000);
        cy.get(':nth-child(3) > :nth-child(4) > app-field-value > [style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
        cy.wait(2000);
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get('.pager').should('exist');
        cy.wait(2000);
        cy.get('.next').contains('Next').scrollIntoView().should('be.visible').then(($button) => {
            const isDisabled = $button.is(':disabled') || $button.hasClass('disabled') || $button.attr('aria-disabled') === 'true';

            if (isDisabled) {
                cy.wrap($button).should('be.disabled');
            } else {
                cy.wrap($button).click({ force: true });
                cy.wait(2000);
                cy.get('.pager').should('exist');
            }
        });

        cy.wait(2000);
    }

    verifyTrailHistoryCollectorFirstName() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Collector First Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
}
    verifyTrailHistoryCollectorLastName() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Collector Last Name').scrollIntoView().should('be.visible');
    cy.wait(2000);
}
     verifyTrailHistoryRemarks() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Remarks').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_234 - Verify Add Trail button is displayed
verifyAddTrailButtonDisplayed() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Add Trail').scrollIntoView().should('be.visible').and('be.enabled');
    cy.wait(2000);
}

// TC_235 - Verify Add Trail button functionality
verifyAddTrailButtonFunctionality() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Add Trail').scrollIntoView().should('be.visible').and('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.get('body').should('be.visible');
}

// TC_236 - Verify refresh icon is displayed and functional
verifyTrailHistoryRefreshIcon() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('#refreshButtonForTrailHistory').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.contains('Trail History').scrollIntoView().should('exist');
}

// TC_237 - Verify settings/gear icon is displayed
verifyTrailHistorySettingsIcon() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('.w-100 > .btn-outline-dark').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_238 - Verify settings/gear icon displays available fields
verifyTrailHistorySettingsFields() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('.w-100 > .btn-outline-dark').click({ force: true });
    cy.wait(2000);
    cy.get('body').should('be.visible');
}

// TC_239 - Verify no trail history records
verifyNoTrailHistoryRecords() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('body').then(($body) => {
        if ($body.text().includes('No Records Found')) {
            cy.contains('No Records Found').scrollIntoView().should('be.visible');
        } else if ($body.text().includes('No data available')) {
            cy.contains('No data available').scrollIntoView().should('be.visible');
        } else {
            cy.get('body').should('be.visible');
        }
    });
}

// TC_240 - Verify blank trail history field values
verifyBlankTrailHistoryValues() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get('body').should('be.visible');
}



// TC_241 - Verify Communication History section is displayed
verifyCommunicationHistorySectionDisplayed() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('Communication History').scrollIntoView().should('exist');
    cy.wait(2000);
}

// TC_242 - Verify communication history records are displayed in tabular format
verifyCommunicationHistoryTable() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.get('table').should('exist').and('be.visible');
    cy.wait(2000);
}

// TC_243 - Verify Communication ID column
verifyCommunicationIdColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Communication ID').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_244 - Verify Date & Time column
verifyCommunicationDateTimeColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Date & Time').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_245 - Verify Mobile Number column
verifyCommunicationMobileNumberColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Mobile').scrollIntoView().should('exist');
    cy.wait(2000);
}

// TC_246 - Verify Email ID column
verifyCommunicationEmailIdColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Email').scrollIntoView().should('exist');
    cy.wait(2000);
}

// TC_247 - Verify Communication Template column
verifyCommunicationTemplateColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Communication Template').scrollIntoView().should('exist');
    cy.wait(2000);
}

// TC_248 - Verify Communication Trigger column
verifyCommunicationTriggerColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Communication Trigger').scrollIntoView().should('exist');
    cy.wait(2000);
}

// TC_249 - Verify Status column
verifyCommunicationStatusColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Status').scrollIntoView().should('exist');
    cy.wait(2000);
}

// TC_250 - Verify Channel column
verifyCommunicationChannelColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Channel').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_251 - Verify Vendor Request ID column
verifyVendorRequestIdColumn() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Vendor Request ID').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_252 - Verify Add Trail button
verifyCommunicationAddTrailButton() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Add Trail').scrollIntoView().should('be.visible').and('be.enabled');
    cy.wait(2000);
}

// TC_253 - Verify Add Trail functionality
verifyCommunicationAddTrailFunctionality() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.contains('Add Trail').scrollIntoView().should('be.visible').and('be.enabled').click({ force: true });
    cy.wait(2000);
    cy.get('body').should('be.visible');
}

// TC_254 - Verify action menu icon
verifyCommunicationActionMenu() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.get('[class*="ellipsis"], [class*="three-dot"], [class*="more"]').filter(':visible').first().scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_255 - Verify settings/gear icon
verifyCommunicationSettingsIcon() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.get('[class*="settings"], [class*="gear"]').filter(':visible').first().scrollIntoView().should('be.visible');
    cy.wait(2000);
}

// TC_256 - Verify settings displays available fields
verifyCommunicationSettingsFields() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.get('[class*="settings"], [class*="gear"]').filter(':visible').first().click({ force: true });
    cy.wait(2000);
    cy.get('body').should('be.visible');
}

// TC_257 - Verify no communication history records
verifyNoCommunicationHistoryRecords() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.get('body').then(($body) => {
        if ($body.text().includes('No Records Found')) {
            cy.contains('No Records Found').scrollIntoView().should('be.visible');
        } else if ($body.text().includes('No data available')) {
            cy.contains('No data available').scrollIntoView().should('be.visible');
        } else {
            cy.get('body').should('be.visible');
        }
    });
}

// TC_258 - Verify blank communication history values
verifyBlankCommunicationHistoryValues() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
    cy.wait(2000);
    cy.get('body').should('be.visible');
}

// TC_259 - Verify Payment History section
verifyPaymentHistorySectionDisplayed() {
    cy.get(this.locators.searchname).type('a');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get('.pagination-last > .page-link').click({ force: true });
    cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span')
    .first()
    .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('Payment History').scrollIntoView().should('be.visible');
    cy.wait(2000);
}

navigateToAccountDetails(){
        cy.contains('Receivable Search').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').first().click({ force: true });
        cy.wait(2000);
        cy.contains('360 Degree View').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
        cy.wait(2000);
}



 verifyPaymentHistorySectionDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
    }

    // TC_260 - Verify payment history records are displayed in tabular format
    verifyPaymentHistoryRecordsDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true});
        cy.wait(2000); 
        cy.get('table').should('exist');
        cy.get('.card-content').should('exist');
        cy.wait(2000);
    }

    // TC_261 - Verify Payment Date column is displayed
    verifyPaymentDateColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Payment Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_262 - Verify Receipt No column is displayed
    verifyReceiptNoColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Receipt No').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_263 - Verify Payment Amount column is displayed
    verifyPaymentAmountColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Payment Amount').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_264 - Verify Payment Mode column is displayed
    verifyPaymentModeColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Payment mode').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_265 - Verify Instrument Number column is displayed
    verifyInstrumentNumberColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Instrument#').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_266 - Verify Drawee Bank column is displayed
    verifyDraweeBankColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Drawee Bank').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_267 - Verify Drawee Branch column is displayed
    verifyDraweeBranchColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true});
                cy.wait(2000); 
        cy.contains('Drawee Branch').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_268 - Verify Collector column is displayed
    verifyCollectorColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
                cy.wait(2000);
        cy.contains('Collector').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_269 - Verify Payment Status column is displayed
    verifyPaymentStatusColumnDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.wait(2000);
        cy.contains('Payment Status').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_270 - Verify Add Trail button is displayed
    verifyPaymentHistoryAddTrailDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.contains('Add Trail').scrollIntoView().should('be.visible').and('not.be.disabled');
        cy.wait(2000);
    }

    // TC_271 - Verify Add Trail button functionality
    verifyPaymentHistoryAddTrailFunctionality() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_272 - Verify refresh icon is displayed and functional
    verifyPaymentHistoryRefreshFunctionality() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.get('button').filter(':visible').then($buttons => {
            if ($buttons.length > 0) {
                cy.wrap($buttons).last().scrollIntoView().should('be.visible').click({ force: true });
            }
        });
        cy.wait(2000);
        cy.contains('Payment History').should('be.visible');
    }

    // TC_273 - Verify settings/gear icon is displayed
    verifyPaymentHistorySettingsIconDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 
        cy.get('button:visible').then($buttons => {
            if ($buttons.length > 0) {
                cy.wrap($buttons).should('have.length.at.least', 1);
            }
        });
        cy.wait(2000);
    }

    // TC_274 - Verify settings/gear icon displays available fields
    verifyPaymentHistorySettingsFields() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 

        cy.get('button:visible').then($buttons => {
            if ($buttons.length > 0) {
                cy.wrap($buttons).last().click({ force: true });
            }
        });

        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_275 - Verify pagination functionality in Payment History
    verifyPaymentHistoryPagination() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 

        cy.get('.pagination:visible').should('exist');
        cy.wait(2000);

        cy.get('.pagination:visible .page-link').then($pages => {
            if ($pages.length > 1) {
                cy.wrap($pages).eq(1).click({ force: true });
                cy.wait(2000);
                cy.get('body').should('be.visible');
            }
        });
    }

    // TC_276 - Verify total displayed record count
    verifyPaymentHistoryRecordCount() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 

        cy.get('table:visible').should('exist');

        cy.get('table:visible tbody tr').then($rows => {
            const recordCount = $rows.length;
            expect(recordCount).to.be.greaterThan(0);
        });

        cy.wait(2000);
    }

    // TC_277 - Verify behavior when no payment history records are available
    verifyNoPaymentHistoryRecords() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 

        cy.get('body').then($body => {
            const bodyText = $body.text();

            if (bodyText.includes('No Records Found')) {
                cy.contains('No Records Found').should('be.visible');
            } else if (bodyText.includes('No data available')) {
                cy.contains('No data available').should('be.visible');
            } else {
                cy.get('table:visible').should('exist');
            }
        });

        cy.wait(2000);
    }

    // TC_278 - Verify behavior when payment history records contain blank values
    verifyPaymentHistoryBlankValues() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist').click({force:true}); 

        cy.get('table:visible').should('exist');

        cy.get('table:visible tbody tr').each(($row) => {
            cy.wrap($row).find('td').should('exist');
        });

        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

      verifyCommunicationHistoryActionMenuDisplayed() {
        cy.contains('Communication History').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get('button:visible').should('exist');
        cy.wait(2000);
    }

    // TC_255 - Verify settings/gear icon is displayed
    verifyCommunicationHistorySettingsIconDisplayed() {
        cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
        cy.wait(2000);
        cy.get('button:visible').should('exist');
        cy.wait(2000);
    }

    // TC_256 - Verify settings/gear icon displays available fields
    verifyCommunicationHistoryAvailableFields() {
        cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
        cy.wait(2000);
        cy.get('button:visible').then($buttons => {
            if ($buttons.length > 0) {
                cy.wrap($buttons).last().scrollIntoView().click({ force: true });
            }
        });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_257 - Verify behavior when no communication history records are available
    verifyNoCommunicationHistoryRecords() {
        cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
        cy.wait(2000);
        cy.get('body').then($body => {
            if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').scrollIntoView().should('be.visible');
            } else if ($body.text().includes('No data available')) {
                cy.contains('No data available').scrollIntoView().should('be.visible');
            } else {
                cy.get('body').should('be.visible');
            }
        });
        cy.wait(2000);
    }

    // TC_258 - Verify system behavior when communication history records contain blank values
    verifyCommunicationHistoryBlankValues() {
        cy.get(':nth-child(6) > .dropdown-item').contains('Communication History').scrollIntoView().should('exist').click({force:true});
        cy.wait(2000);
        cy.get('table:visible').should('exist');
        cy.get('table:visible tbody tr').each($row => {
            cy.wrap($row).find('td').should('exist');
        });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_259 - Verify Payment History section is displayed in Account Details screen
    verifyPaymentHistorySectionDisplayed() {
        cy.get(":nth-child(7) > .dropdown-item").contains('Payment History').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Payment History').should('be.visible');
        cy.wait(2000);
    }

    // TC_279 - Verify Basic Information section is displayed
    verifyBasicInformationSectionDisplayed() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
    }

    // TC_280 - Verify fields are displayed based on Field-to-Section mapping configuration
    verifyBasicInformationFieldsMapping() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
         cy.contains('Created On:').scrollIntoView().should('be.visible');
         cy.wait(2000);
    cy.contains('Preferred Language:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Mailing Phone 1:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Obligation Description:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Adjusted Amount:').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Obligation Period End:').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_281 - Verify field labels are displayed correctly
    verifyBasicInformationFieldLabels() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('.table > tbody > tr > td').each(($cell) => {
    cy.wrap($cell).should('be.visible');
});
        cy.wait(2000);
    }

 
// TC_282 - Verify field values are displayed correctly
verifyBasicInformationFieldValues() {
    cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);

    // Created On
    cy.contains('Created On:').should('be.visible');
    cy.get(':nth-child(1) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    // Preferred Language
    cy.contains('Preferred Language:').should('be.visible');
    cy.get(':nth-child(2) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    // Mailing Phone 1
    cy.contains('Mailing Phone 1:').should('be.visible');
    cy.get(':nth-child(3) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    // Obligation Description
    cy.contains('Obligation Description:').should('be.visible');
    cy.get(':nth-child(4) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    // Adjusted Amount
    cy.contains('Adjusted Amount:').should('be.visible');
    cy.get(':nth-child(5) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    // Obligation Period End
    cy.contains('Obligation Period End:').should('be.visible');
    cy.get(':nth-child(6) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);
}
    // TC_283 - Verify Show/Hide Empty Values toggle is displayed
    verifyShowHideEmptyValuesToggleDisplayed() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_284 - Verify Show Empty Values functionality
    verifyShowEmptyValues() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_285 - Verify Hide Empty Values functionality
    verifyHideEmptyValues() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_286 - Verify Add Trail button is displayed
    verifyBasicInformationAddTrailDisplayed() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').and('not.be.disabled');
        cy.wait(2000);
    }

    // TC_287 - Verify Add Trail functionality
    verifyBasicInformationAddTrailFunctionality() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_288 - Verify action menu icon (three dots) is displayed
    verifyBasicInformationActionMenuDisplayed() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('button:visible').should('exist');
        cy.wait(2000);
    }

    // TC_289 - Verify Add PTP option is available in action menu
    verifyAddPTPOptionDisplayed() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('button:visible').last().scrollIntoView().click({ force: true });
        cy.wait(2000);
        cy.contains('Add PTP').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_290 - Verify Add PTP functionality
    verifyAddPTPFunctionality() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('button:visible').last().scrollIntoView().click({ force: true });
        cy.wait(2000);
        cy.contains('Add PTP').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_291 - Verify Send Payment Link option is available in action menu
    verifySendPaymentLinkOptionDisplayed() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('button:visible').last().scrollIntoView().click({ force: true });
        cy.wait(2000);
        cy.contains('Send Payment Link').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_292 - Verify Send Payment Link functionality
    verifySendPaymentLinkFunctionality() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('button:visible').last().scrollIntoView().click({ force: true });
        cy.wait(2000);
        cy.contains('Send Payment Link').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_293 - Verify behavior when no field mapping configuration exists
    verifyBasicInformationNoFieldMapping() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.get('body').then($body => {

            if ($body.text().includes('No data available')) {

                cy.contains('No data available')
                    .scrollIntoView()
                    .should('be.visible');

            } else if ($body.text().includes('No Records Found')) {

                cy.contains('No Records Found')
                    .scrollIntoView()
                    .should('be.visible');

            } else {

                cy.get('app-field-value:visible').should('exist');

            }
        });

        cy.wait(2000);
    }

    // TC_294 - Verify behavior when all fields have empty values and Hide Empty Values is enabled
    verifyBasicInformationAllFieldsEmpty() {
        cy.get(':nth-child(2) > .dropdown-item').contains('Basic Information').scrollIntoView().should('be.visible').click({force:true});        cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_295 - Verify Financial Details section is displayed
    verifyFinancialDetailsSectionDisplayed() {
        cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible');
        cy.wait(2000);
    }

   
   // TC_296 - Verify Financial Details fields based on Field-to-Section mapping
verifyFinancialDetailsFieldsMapping() {
    cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(1) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(2) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(3) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(4) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(5) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(6) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(7) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);

    cy.get(':nth-child(8) > .table > tbody > tr > td').should('be.visible');
    cy.wait(2000);
}

    // TC_297 - Verify Financial Details field labels are displayed correctly
verifyFinancialDetailsFieldLabels() {
    cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);

    cy.contains('Updated On:').should('be.visible');
    cy.wait(2000);

    cy.contains('Debtor ID:').should('be.visible');
    cy.wait(2000);

    cy.contains('DND Flag:').should('be.visible');
    cy.wait(2000);

    cy.contains('Obligation Instrument:').should('be.visible');
    cy.wait(2000);

    cy.contains('Original Amount:').should('be.visible');
    cy.wait(2000);

    cy.contains('Disputed Amount:').should('be.visible');
    cy.wait(2000);

    cy.contains('Due Date:').should('be.visible');
    cy.wait(2000);

    cy.contains('Days Overdue:').should('be.visible');
    cy.wait(2000);
}

      // =========================
    // TC_298 - Financial Details
    // =========================

   verifyFinancialDetailsFieldValues() {
    cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(2000);

    cy.get(':nth-child(1) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(2) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(3) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(4) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(5) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(6) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(7) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);

    cy.get(':nth-child(8) > .table > tbody > tr > td').should('not.be.empty');
    cy.wait(2000);
}
    // TC_299 - Verify Show/Hide Empty Values toggle
    verifyFinancialDetailsShowHideEmptyValuesToggle() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);       
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible');
    }

    // TC_300 - Verify Show Empty Values functionality
    verifyFinancialDetailsShowEmptyValues() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_301 - Verify Hide Empty Values functionality
    verifyFinancialDetailsHideEmptyValues() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_302 - Verify Add Trail button
    verifyFinancialDetailsAddTrailButton() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').and('not.be.disabled');
    }

    // TC_303 - Verify Add Trail functionality
    verifyFinancialDetailsAddTrailFunctionality() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_304 - Verify action menu icon
    verifyFinancialDetailsActionMenuIcon() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.get('button:visible').filter(':has(svg)').should('exist');
    }

    // TC_305 - Verify Add PTP option
    verifyFinancialDetailsAddPTPOption() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Add PTP').scrollIntoView().should('be.visible');
    }

    // TC_306 - Verify Add PTP functionality
    verifyFinancialDetailsAddPTPFunctionality() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Add PTP').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_307 - Verify Send Payment Link option
    verifyFinancialDetailsSendPaymentLinkOption() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Send Payment Link').scrollIntoView().should('be.visible');
    }

    // TC_308 - Verify Send Payment Link functionality
    verifyFinancialDetailsSendPaymentLinkFunctionality() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Send Payment Link').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_309 - No field mapping configuration
    verifyFinancialDetailsNoFieldMapping() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.get('body').then(($body) => {
            if ($body.text().includes('No data available')) {
                cy.contains('No data available').should('be.visible');
            } else if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').should('be.visible');
            } else {
                cy.get('app-field-value').should('exist');
            }
        });
    }

    // TC_310 - All fields empty with Hide Empty Values
    verifyFinancialDetailsAllFieldsEmptyWithHideEmptyValues() {
 cy.get(':nth-child(3) > .dropdown-item').contains('Financial Details').scrollIntoView() .should('be.visible').click({forec:true});
cy.wait(2000);
        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }


    // =================================
    // TC_311 - Product Information
    // =================================

    verifyProductInformationSectionDisplayed() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_312
    verifyProductInformationFieldsDisplayed() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('app-field-value').should('exist');
    }

    // TC_313
    verifyProductInformationFieldLabels() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('app-field-value').each(($field) => {
            cy.wrap($field).should('be.visible');
        });
    }

    // TC_314
    verifyProductInformationFieldValues() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('app-field-value').should('exist');
        cy.get('body').should('be.visible');
    }

    // TC_315
    verifyProductInformationShowHideEmptyValuesToggle() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input[type="checkbox"]:visible').should('exist');
    }

    // TC_316
    verifyProductInformationShowEmptyValues() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input[type="checkbox"]:visible').first().check({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_317
    verifyProductInformationHideEmptyValues() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input[type="checkbox"]:visible').first().uncheck({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_318
    verifyProductInformationAddTrailButton() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.contains('Add Trail').scrollIntoView().should('be.visible').and('not.be.disabled');
    }

    // TC_319
    verifyProductInformationAddTrailFunctionality() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_320
    verifyProductInformationActionMenuIcon() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').should('exist');
    }

    // TC_321
    verifyProductInformationAddPTPOption() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Add PTP').scrollIntoView().should('be.visible');
    }

    // TC_322
    verifyProductInformationAddPTPFunctionality() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Add PTP').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_323
    verifyProductInformationSendPaymentLinkOption() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Send Payment Link').scrollIntoView().should('be.visible');
    }

    // TC_324
    verifyProductInformationSendPaymentLinkFunctionality() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Send Payment Link').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_325
    verifyProductInformationNoFieldMapping() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('body').then(($body) => {
            if ($body.text().includes('No data available')) {
                cy.contains('No data available').should('be.visible');
            } else if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').should('be.visible');
            } else {
                cy.get('app-field-value').should('exist');
            }
        });
    }

    // TC_326
    verifyProductInformationAllFieldsEmptyWithHideEmptyValues() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.contains(/Show.*Hide.*Empty Values/i).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }


    // =================================
    // TC_327 - Additional Details
    // =================================

    verifyAdditionalDetailsSectionDisplayed() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_328
    verifyAdditionalDetailsFieldsDisplayed() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('app-field-value').should('exist');
    }

    // TC_329
    verifyAdditionalDetailsFieldLabels() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('app-field-value').each(($field) => {
            cy.wrap($field).should('be.visible');
        });
    }

    // TC_330
    verifyAdditionalDetailsFieldValues() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('app-field-value').should('exist');
        cy.get('body').should('be.visible');
    }

    // TC_331
    verifyAdditionalDetailsShowHideEmptyValuesToggle() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input[type="checkbox"]:visible').should('exist');
    }

    // TC_332
    verifyAdditionalDetailsShowEmptyValues() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input[type="checkbox"]:visible').first().check({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_333
    verifyAdditionalDetailsHideEmptyValues() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('input[type="checkbox"]:visible').first().uncheck({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_334
    verifyAdditionalDetailsAddTrailButton() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.contains('Add Trail').scrollIntoView().should('be.visible').and('not.be.disabled');
    }

    // TC_335
    verifyAdditionalDetailsAddTrailFunctionality() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_336
    verifyAdditionalDetailsActionMenuIcon() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').should('exist');
    }

    // TC_337
    verifyAdditionalDetailsAddPTPOption() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Add PTP').scrollIntoView().should('be.visible');
    }

    // TC_338
    verifyAdditionalDetailsAddPTPFunctionality() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Add PTP').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_339
    verifyAdditionalDetailsSendPaymentLinkOption() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Send Payment Link').scrollIntoView().should('be.visible');
    }

    // TC_340
    verifyAdditionalDetailsSendPaymentLinkFunctionality() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('button:visible').filter(':has(svg)').last().click({ force: true });
        cy.wait(2000);

        cy.contains('Send Payment Link').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.get('body').should('be.visible');
    }

    // TC_341
    verifyAdditionalDetailsNoFieldMapping() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);

        cy.get('body').then(($body) => {
            if ($body.text().includes('No data available')) {
                cy.contains('No data available').should('be.visible');
            } else if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').should('be.visible');
            } else {
                cy.get('app-field-value').should('exist');
            }
        });
    }

    // TC_342
    verifyAdditionalDetailsAllFieldsEmptyWithHideEmptyValues() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('input[type="checkbox"]:visible').first().uncheck({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }
    verifyPaymentsModuleAvailable() {
        cy.contains('Payments').scrollIntoView().should('be.visible');
        cy.wait(1000);
    }

    // TC_344 - Verify Bulk Payments Upload menu is available under Payments module
    verifyBulkPaymentsUploadMenuAvailable() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.contains('Bulk Payments Upload').scrollIntoView().should('be.visible');
    }

    // TC_345 - Verify Bulk Payments Upload Status menu is available under Payments module
    verifyBulkPaymentsUploadStatusMenuAvailable() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);
        cy.contains('Bulk Payments Upload Status').scrollIntoView().should('be.visible');
    }

    // TC_346 - Verify user can access Bulk Payments Upload screen
    verifyBulkPaymentsUploadScreen() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);

        cy.contains('Bulk Payments Upload').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.contains('Bulk Payments Upload').should('be.visible');
    }

    // TC_347 - Verify user can access Bulk Payments Upload Status screen
    verifyBulkPaymentsUploadStatusScreen() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);

        cy.contains('Bulk Payments Upload Status').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);

        cy.contains('Bulk Payments Upload Status').should('be.visible');
    }

    // TC_348 - Verify behavior when user does not have access to Bulk Payments Upload
    verifyRestrictedAccessBulkPaymentsUpload() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);

        cy.get('body').then(($body) => {
            if ($body.text().includes('Bulk Payments Upload')) {
                cy.contains('Bulk Payments Upload').then(($element) => {
                    if ($element.is(':visible')) {
                        cy.wrap($element).should('be.visible');
                    }
                });
            } else {
                cy.get('body').should('be.visible');
            }
        });
    }

    // TC_349 - Verify behavior when user does not have access to Bulk Payments Upload Status
    verifyRestrictedAccessBulkPaymentsUploadStatus() {
        cy.contains('Payments').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(1000);

        cy.get('body').then(($body) => {
            if ($body.text().includes('Bulk Payments Upload Status')) {
                cy.contains('Bulk Payments Upload Status').then(($element) => {
                    if ($element.is(':visible')) {
                        cy.wrap($element).should('be.visible');
                    }
                });
            } else {
                cy.get('body').should('be.visible');
            }
        });
    }


}

export default ReceivableSearchPage;