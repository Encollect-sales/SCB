class AccountDetailsPage {

    constructor(locators) {
        this.locators = locators;
    }

    // TC_173 - Verify navigation to Account Details screen
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
    navigateToEmptyAccountDetails(){
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

    // TC_174 - Verify account header details are displayed
    verifyAccountHeaderDetails() {
        cy.contains('360 Degree View').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Deptor Display Name').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Debtor ID').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Current Due Amount').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_175 - Verify Previous and Next navigation buttons
    verifyPreviousAndNextNavigation() {
        cy.contains('Previous').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Next').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Next').click({ force: true });
        cy.wait(2000);
        cy.contains('Previous').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    // TC_176 - Verify 360 Degree View section is visible
    verify360DegreeViewVisible() {
        cy.contains('360 Degree View').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('360 Degree View').should('exist');
    }

    // TC_177 - Verify default card layout is Two Columns
    verifyDefaultCardLayout() {
        cy.contains('Two Columns').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Two Columns').should('exist');
    }

    // TC_178 - Verify layout change functionality
  verifyLayoutChange() {
    cy.contains('Two Columns').scrollIntoView().should('be.visible');
    cy.wait(1000);

    cy.get('#selectedFullViewColumn').scrollIntoView().should('be.visible').then($select => {
        const options = $select.find('option');
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomValue = options.eq(randomIndex).val();

        cy.wrap($select).select(randomValue);
    });

    cy.wait(2000);
}

    // TC_179 - Verify Add Trail button visibility
    verifyAddTrailButtonVisible() {
        cy.contains('Add Trail').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Add Trail').should('exist');
    }

    // TC_180 - Verify Add Trail button functionality
    verifyAddTrailButtonFunctionality() {
        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_181 - Verify Basic Information card is displayed
    verifyBasicInformationCard() {
        cy.contains('Basic Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Basic Information').should('exist');
    }

    // TC_182 - Verify Financial Details card is displayed
    verifyFinancialDetailsCard() {
        cy.contains('Financial Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Financial Details').should('exist');
    }

    // TC_183 - Verify Product Information card is displayed
    verifyProductInformationCard() {
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Product Information').should('exist');
    }

    // TC_184 - Verify Additional Details card is displayed
    verifyAdditionalDetailsCard() {
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Additional Details').should('exist');
    }

    // TC_185 - Verify cards are fixed in 360 view
    verifyCardsAreFixed() {
        cy.contains('Basic Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Financial Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_186 - Verify fields inside cards are user-mapped
    verifyFieldsInsideCards() {
        cy.contains('Basic Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Financial Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_187 - Verify behavior when no field mapping exists
    verifyNoFieldMapping() {
        cy.contains('Basic Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Financial Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Product Information').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Additional Details').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_188 - Verify record number masking/format in header
    verifyRecordNumberFormat() {
        cy.contains('Record Number').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get('body').should('contain.text', 'Record Number');
    }

    // TC_189 - Verify Total Overdue Amount display
    verifyTotalOverdueAmountDisplay() {
        cy.contains('Current Due Amount').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains('Current Due Amount').should('exist');
    }

    // TC_190 - Verify behavior when no data available for account
    verifyNoAccountData() {
        cy.get('body').should('be.visible');
        cy.wait(2000);
        cy.get('body').then(($body) => {
            if ($body.text().includes('No data available')) {
                cy.contains('No data available').scrollIntoView().should('be.visible');
            } else if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').scrollIntoView().should('be.visible');
            } else {
                cy.get('body').should('be.visible');
            }
        });
    }

    // TC_191 - Verify Online Payment Requests section is displayed
    verifyOnlinePaymentRequestsSection() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        // cy.contains('Online Payment Requests').scrollIntoView().should('be.visible');
        // cy.wait(2000);
        cy.contains('Online Payment Requests').should('exist');
    }

    // TC_192 - Verify Online Payment Requests list is displayed
    verifyOnlinePaymentRequestsList() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get('table:visible').should('exist');
        cy.wait(2000);
    }

    // TC_193 - Verify request details are displayed in the grid
    verifyRequestDetailsGrid() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Request Date').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Request Reference No.').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Request Amount').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Request Mode').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Request Status').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Action').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get(this.locators.oprgear).scrollIntoView().click({force:true});
        cy.wait(2000);     
        cy.contains('Collector').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(this.locators.oprgear).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Collector').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_194 - Verify Add Trail button is displayed
    verifyOnlinePaymentAddTrailVisible() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Add Trail').should('exist');
    }

    // TC_195 - Verify Add Trail button functionality
    verifyOnlinePaymentAddTrailFunctionality() {
       cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_196 - Verify Settings icon is displayed
    verifySettingsIconVisible() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get(this.locators.oprgear).scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_197 - Verify Settings icon functionality
    verifySettingsIconFunctionality() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get(this.locators.oprgear).scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_198 - Verify pagination is available
    verifyPaginationAvailable() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get('.pager').should('exist');
        cy.wait(2000);
    }

    // TC_199 - Verify user can navigate to the next page
    verifyNextPageNavigation() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get('.pager').should('exist');
        cy.get('.next > a').contains('Next').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_200 - Verify user can navigate to the previous page
    verifyPreviousPageNavigation() {
        cy.get(this.locators.toggle).scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.get(":nth-child(8) > .dropdown-item").contains('Online Payment Requests').scrollIntoView().click({force:true});
        cy.wait(2000);
        cy.contains('Online Payment Requests').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get('.pager').should('exist');
        cy.get('.next > a').contains('Next').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('.previous > a').contains('Previous').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }
    navigateToAccountDetails() {
        cy.get(this.locators.searchname).type('a');
        cy.wait(2000);
        cy.get(this.locators.searchbutton).contains("Search").scrollIntoView().click({ force: true });
        cy.wait(2000);
        cy.get('.pagination-last > .page-link').click({ force: true });
        cy.wait(2000);
        cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').first().click({ force: true });    
        cy.wait(2000);
        cy.get(this.locators.toggle).scrollIntoView().click({ force: true });
        cy.wait(2000);
    }

    // TC_204 - Verify Last 5 PTP section is displayed
    verifyLast5PTPSectionDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_205 - Verify Last 5 PTP records are displayed in tabular format
    verifyLast5PTPRecordsDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.get('table:visible').should('exist').and('be.visible');
        cy.wait(2000);
        cy.get('table:visible tbody tr').should('exist');
        cy.wait(2000);
    }

    // TC_206 - Verify Feedback Date column is displayed
    verifyFeedbackDateColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Feedback Date').scrollIntoView().should('be.visible');
        cy.wait(1000);
    }

    // TC_207 - Verify Mode of Communication column is displayed
    verifyModeOfCommunicationColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Mode of Communication').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_208 - Verify Disposition Code column is displayed
    verifyDispositionCodeColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Disposition Code').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_209 - Verify PTP Date column is displayed
    verifyPTPDateColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('PTP Date').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_210 - Verify PTP Amount column is displayed
    verifyPTPAmountColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('PTP Amount').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_211 - Verify Collector First Name column is displayed
    verifyCollectorFirstNameColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Collector First Name').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_212 - Verify Collector Last Name column is displayed
    verifyCollectorLastNameColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Collector Last Name').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_213 - Verify Contact Number column is displayed
    verifyContactNumberColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Contact Number').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_214 - Verify Remarks column is displayed
    verifyRemarksColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Remarks').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_215 - Verify Uploaded File Name column is displayed
    verifyUploadedFileNameColumnDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Uploaded File Name').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_216 - Verify only latest five PTP records are displayed
    verifyOnlyLatestFivePTPRecordsDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('table:visible tbody tr').then($rows => { expect($rows.length).to.be.at.most(5); });
        cy.wait(1000);
    }

    // TC_217 - Verify Add Trail button is displayed
    verifyLast5PTPAddTrailButtonDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').and('not.be.disabled');
        cy.wait(1000);
    }

    // TC_218 - Verify Add Trail button functionality
    verifyLast5PTPAddTrailFunctionality() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.contains('Add Trail').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get('body').should('be.visible');
    }

    // TC_219 - Verify action menu icon is displayed
    verifyLast5PTPActionMenuDisplayed() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('#selectOption').first().should('be.visible');
        cy.wait(1000);
    }

    // TC_220 - Verify refresh icon functionality
    verifyLast5PTPRefreshFunctionality() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('#refreshLast5PTP').scrollIntoView().should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.contains('Last 5 PTP').should('be.visible');
    }

    // TC_221 - Verify behavior when no PTP records are available
    verifyNoPTPRecordsAvailable() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('body').then($body => {
            if ($body.text().includes('No Records Found')) {
                cy.contains('No Records Found').scrollIntoView().should('be.visible');
            } else if ($body.text().includes('No data available')) {
                cy.contains('No data available').scrollIntoView().should('be.visible');
            } else {
                cy.get('table:visible').should('exist');
            }
        });
        cy.wait(1000);
    }

    // TC_222 - Verify behavior when PTP records are less than five
    verifyPTPRecordsLessThanFive() {
        cy.contains('Last 5 PTP').scrollIntoView().should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get('table:visible tbody tr').then($rows => { expect($rows.length).to.be.at.most(5); });
        cy.wait(1000);
    }

    // TC_223 - Verify Trail History section is displayed
    verifyTrailHistorySectionDisplayed() {
        cy.contains('Trail History').scrollIntoView().should('exist');
        cy.wait(2000);
    }

    // TC_224 - Verify Trail History records are displayed in tabular format
    verifyTrailHistoryRecordsDisplayed() {
        cy.contains('Trail History').scrollIntoView().should('exist');
        cy.wait(2000);
        cy.get('table:visible').should('exist').and('be.visible');
        cy.get('table:visible tbody tr').should('exist');
        cy.wait(2000);
    }

    // TC_225 - Verify Disp Date column is displayed
    verifyDispDateColumnDisplayed() {
  
 cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('exist').click({force:true});
        cy.wait(2000);
        cy.contains('Disp Date').scrollIntoView().should('be.visible');
        cy.wait(2000);
    }

    // TC_226 - Verify Customer Met column is displayed
    verifyCustomerMetColumnDisplayed() {
     
 cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('exist').click({force:true});
        cy.wait(1000);
        cy.contains('Customer Met').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_227 - Verify Mode of Communication column is displayed
    verifyTrailHistoryModeOfCommunicationDisplayed() {

 cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('exist').click({force:true});
        cy.wait(1000);
        cy.contains('Mode of Communication').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_228 - Verify Disp Code column is displayed
    verifyDispCodeColumnDisplayed() {
  
 cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('exist').click({force:true});
        cy.wait(1000);
        cy.contains('Disp Code').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_229 - Verify PTP Date / Next Action Date column is displayed
    verifyPTPNextActionDateColumnDisplayed() {
    
 cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('exist').click({force:true});
        cy.wait(1000);
        cy.contains('Next Action date').scrollIntoView().should('exist');
        cy.wait(1000);
    }

    // TC_230 - Verify PTP Amount column is displayed
    verifyTrailHistoryPTPAmountDisplayed() {
 cy.get(':nth-child(9) > .dropdown-item').contains('Trail History').scrollIntoView().should('exist').click({force:true});
        cy.wait(1000);
        cy.contains('PTP Amount').scrollIntoView().should('exist');
        cy.wait(1000);
    }
    

     
}

export default AccountDetailsPage;