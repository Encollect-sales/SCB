import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
 
class PerformanceReportPage {
  constructor(locators) {
    this.locators = locators;
  }
PerformanceReportTestPage01(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible');
}
PerformanceReportTestPage02(){
     cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (MTD)").scrollIntoView().should('be.visible');

}
PerformanceReportTestPage03(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains("Performance Report (MTD)").scrollIntoView().should('be.visible');


}
PerformanceReportTestPage04(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-dropdown-panel-items')
  .find('.ng-option')
  .its('length')
  .then(count => {
    cy.log('Total months:', count);
    expect(count).to.eq(13);
  });



}

PerformanceReportTestPage05(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
   const date = new Date();
date.setMonth(date.getMonth() - 1);   // go to previous month

const lastMonth = date.toLocaleString('default', { month: 'long' });
const lastYear = date.getFullYear().toString().slice(-2);

const expectedMonth = `${lastMonth}-${lastYear}`;

cy.get(this.locators.Currentmonth)
  .should('contain.text', expectedMonth);
}
PerformanceReportTestPage06(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
   cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-dropdown-panel-items')
  cy.get('.ng-option-label')
  .each(($el, index) => {
    if (index < 8) {   // select first 8 options
      cy.wrap($el).click();
    }
  });

cy.contains('Maximum 6 months allowed')
  .should('be.visible');



}
PerformanceReportTestPage07(){
  
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
   cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
      cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-dropdown-panel-items')
    cy.get('.ng-option-label')
  .its('length')
  .then(count => {
    expect(count).to.be.lte(13);
  });


}
PerformanceReportTestPage08(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Month').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains("Product Group(s)").scrollIntoView().should('be.visible');


}
PerformanceReportTestPage09(){
     cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Agentstaff).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Agencyfield_agencystaff).click();   
cy.get('.ng-option-label')
  .its('length')
  .then(count => {
    cy.log('Total Agency entries: ' + count);
  });


}
PerformanceReportTestPage010(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-option-label')
  .each(($el, index) => {
    if (index < 4) {   // select first 7 options
      cy.wrap($el).click();
    }
  });
    cy.wait(2000);
    cy.get(this.locators.country).click({force:true});
cy.get('.ng-option-label').then(options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
  });
    cy.wait(2000);
    cy.contains('Generate Report').click({force:true});
}

PerformanceReportTestPage011(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Bankstaff).should('be.checked');
}

PerformanceReportTestPage012(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Bank Staff').scrollIntoView().should('be.visible');
    cy.contains('Agency Staff').scrollIntoView().should('be.visible');
}

PerformanceReportTestPage012(){
     cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.productgroup)
  .should('be.visible');
cy.wait(2000);
cy.get(this.locators.productgroup)
  .click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .should('have.length.greaterThan', 0);
cy.get('.ng-option-label').first().click({force:true});

}

PerformanceReportTestPage013(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
   cy.contains('Month').scrollIntoView().should('be.visible');
    cy.contains('Product Group(s)').scrollIntoView().should('be.visible');
    cy.contains('Product(s)').scrollIntoView().should('be.visible');
    cy.contains('Sub Product(s)').scrollIntoView().should('be.visible');
    cy.contains('City(s)').scrollIntoView().should('be.visible');
    cy.contains('Branch(s)').scrollIntoView().should('be.visible');
    cy.contains('User Branch(s)').scrollIntoView().should('be.visible');
    cy.contains('Staff(s)').scrollIntoView().should('be.visible');



}


PerformanceReportTestPage014(){
 
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
  });
    cy.wait(2000);
    cy.contains('Generate Report').click({force:true});



}

PerformanceReportTestPage015(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.deletebutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
  });
    cy.wait(2000);
    cy.contains('Generate Report').click({force:true});
    cy.wait(900);
    cy.contains('Something went wrong').should('exist');


}

PerformanceReportTestPage016(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click();
cy.get('.ng-option-label').then(options => {
  const randomIndexes = Cypress._.sampleSize([...Array(options.length).keys()], 2);
  randomIndexes.forEach(i => {
    cy.wrap(options[i]).click();
  });
});
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-option-label').then(options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.contains('Generate Report').click();



}

PerformanceReportTestPage017(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click();
cy.get('.ng-option-label').then(options => {
  const randomIndexes = Cypress._.sampleSize([...Array(options.length).keys()], 2);
  randomIndexes.forEach(i => {
    cy.wrap(options[i]).click();
  });
});
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-option-label').then(options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').and('not.be.disabled');

}
PerformanceReportTestPage018() {
  cy.wait(9000);
  cy.get(this.locators.Reports).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.PerformancePagereport).click({ force: true });
  cy.wait(2000);
  cy.contains('Performance Report (Monthly)')
    .scrollIntoView()
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.monthfield)
    .should('be.visible')
    .click();
  cy.get('.ng-dropdown-panel').should('be.visible');
  cy.contains('.ng-dropdown-panel .ng-option-label', 'February-26').click();
  cy.get(this.locators.monthfield)
    .parents('.form-ng-select')
    .should('contain', 'February-26');
  cy.get(this.locators.monthfield).click();
  cy.get('.ng-dropdown-panel').should('be.visible');
  cy.contains('.ng-dropdown-panel .ng-option-label', 'February-26').click();

}
PerformanceReportTestPage019(){
      cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click();
cy.get('.ng-dropdown-panel-items')
  .should('be.visible');
cy.get('.ng-dropdown-panel-items')
  .should($el => {
    expect($el[0].scrollHeight).to.be.greaterThan($el[0].clientHeight);
  });
}

PerformanceReportTestPage020(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains("Total Accounts")
  .scrollIntoView()
  .should('exist');
cy.wait(2000);
cy.contains("Normalization")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Roll Back")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Stabilized")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Roll Forward")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Resolved")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });    
}

PerformanceReportTestPage021(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
}
PerformanceReportTestPage022() {

  cy.wait(9000);
  cy.get(this.locators.Reports).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.PerformancePagereport).click({ force: true });
  cy.wait(2000);
  cy.contains("Performance Report (Monthly)")
    .should('exist')
    .click({ force: true });
  cy.wait(2000);
  cy.get('.ng-value-icon').click({force:true});
  cy.wait(2000); 
  cy.get(this.locators.monthfield).click({ force: true });
  cy.wait(2000);
  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 1)
    .then(($options) => {
      cy.wrap($options.eq(1)).click({ force: true }); 

    });
  cy.wait(2000);


  // -------- Select Product Group --------
  cy.get(this.locators.productgroup).click();

  cy.get('.ng-option')
    .should('have.length', 7)
    .each(($el) => {
      cy.wrap($el).click({ force: true });
    });

  // -------- Select Country --------
  cy.get(this.locators.country).click({ force: true });

  cy.contains('.ng-option-label', 'India').click();

  cy.wait(2000);

  // -------- Generate Report --------
  cy.contains('Generate Report')
    .should('be.visible')
    .click({ force: true });

  cy.wait(2000);

  // -------- Verify Search Result --------
  cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible');
}

PerformanceReportTestPage023(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get('thead th').each(($el) => {

  const text = $el.text().trim();

  const monthYearRegex = /(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4}/;

  if (monthYearRegex.test(text)) {
    cy.log("Month column found: " + text);
  }

});

}
PerformanceReportTestPage024(){

  cy.wait(9000);
  cy.get(this.locators.Reports).click({force:true});
  cy.wait(2000);

  cy.get(this.locators.PerformancePagereport).click({force:true});
  cy.wait(2000);

  cy.contains("Performance Report (Monthly)")
    .should('exist')
    .click({ force: true });

  cy.wait(2000);

  // -------- Select Months --------
  cy.get(this.locators.monthfield).click({ force: true });

  for (let i = 2; i <= 5; i++) {
    cy.get(`[id$="-${i}"] > .ng-option-label`)
      .click({ force: true });
  }

  cy.wait(2000);

  // -------- Select Product Group --------
  cy.get(this.locators.productgroup).click();

  cy.get('.ng-option')
    .should('have.length', 7)
    .each(($el) => {
      cy.wrap($el).click({ force: true });
    });

  // -------- Select Country --------
  cy.get(this.locators.country).click({force:true});

  cy.contains('.ng-option-label', 'India')
    .click({force:true});

  cy.wait(2000);

  // -------- Generate Report --------
  cy.contains('Generate Report')
    .should('be.visible')
    .click({force:true});

  cy.wait(4000);

  // -------- Verify Search Result --------
  cy.contains('Search Result')
    .scrollIntoView()
    .should('exist');

  cy.wait(2000);

  // -------- Table Header Validations --------
  cy.contains("Total Accounts")
    .scrollIntoView()
    .should('exist');

  cy.contains("No. of Accounts")
    .scrollIntoView()
    .should('exist');

  cy.contains("BOM POS (₹)")
    .scrollIntoView()
    .should('exist');

  cy.contains("% Count")
    .scrollIntoView()
    .should('exist');

  cy.contains("% BOM POS")
    .scrollIntoView()
    .should('exist');

}

PerformanceReportTestPage025(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(5)')
 .scrollIntoView().should('contain', '100');

cy.get('tbody > :nth-child(1) > :nth-child(9)')
 .scrollIntoView().should('contain', '100');

cy.get('tbody > :nth-child(1) > :nth-child(13)')
.scrollIntoView().should('contain', '100');

}
PerformanceReportTestPage026(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
let normalization, rollback, stab, resolved

cy.get('tbody tr').eq(1).find('td').eq(1).invoke('text').then(val=>{
  normalization = Number(val.replace(/,/g,''))
})

cy.get('tbody tr').eq(2).find('td').eq(1).invoke('text').then(val=>{
  rollback = Number(val.replace(/,/g,''))
})

cy.get('tbody tr').eq(3).find('td').eq(1).invoke('text').then(val=>{
  stab = Number(val.replace(/,/g,''))
})

cy.get('tbody tr').eq(5).find('td').eq(1).invoke('text').then(val=>{
  resolved = Number(val.replace(/,/g,''))
})

cy.then(()=>{
  expect(resolved).to.eq(normalization + rollback + stab)
})
   

}
PerformanceReportTestPage027(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
  const col = 1   // column index for the month (change if needed)

let normalization, rollback, stab, rollForward, totalAccounts

function getNum(text){
  return Number(text.replace(/,/g,'').trim())
}

cy.get('tbody tr').eq(1).find('td').eq(col).invoke('text').then(v=>{
  normalization = getNum(v)
})

cy.get('tbody tr').eq(2).find('td').eq(col).invoke('text').then(v=>{
  rollback = getNum(v)
})

cy.get('tbody tr').eq(3).find('td').eq(col).invoke('text').then(v=>{
  stab = getNum(v)
})

cy.get('tbody tr').eq(4).find('td').eq(col).invoke('text').then(v=>{
  rollForward = getNum(v)
})

cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v=>{
  totalAccounts = getNum(v)
})

cy.then(()=>{
  const calculatedTotal = normalization + rollback + stab + rollForward
  expect(totalAccounts).to.eq(calculatedTotal)
})
}
PerformanceReportTestPage028(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
const col = 1   // month column index

let resolved, totalAccounts, resolvedPercent

function getNum(text){
  return Number(text.replace(/,/g,'').replace('%','').trim())
}

cy.get('tbody tr').eq(5).find('td').eq(col).invoke('text').then(v=>{
  resolved = getNum(v)
})

cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v=>{
  totalAccounts = getNum(v)
})

cy.get('tbody tr').eq(5).find('td').eq(col+2).invoke('text').then(v=>{
  resolvedPercent = getNum(v)
})

cy.then(()=>{
  const calculatedPercent = Number(((resolved / totalAccounts) * 100).toFixed(2))
  expect(resolvedPercent).to.eq(calculatedPercent)
})


}
PerformanceReportTestPage029(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({ force: true });

    for (let i = 2; i <= 5; i++) {
      cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
    }

    cy.wait(2000);
    cy.get(this.locators.productgroup).click();

    cy.get('.ng-option')
      .should('have.length', 7)
      .each(($el) => {
        cy.wrap($el).click({ force: true });
      });

    cy.get(this.locators.country).click({force:true});
    cy.contains('.ng-option-label', 'India').click();
    cy.wait(2000);
    cy.contains('Generate Report').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Search Result').scrollIntoView().should('be.visible');
    cy.wait(2000);

    const col = 2  // BOM POS column index for the selected month

    let resolvedBOM, totalBOM, resolvedPercent

    function getNum(text){
      return Number(text.replace(/,/g,'').replace('%','').trim())
    }

    // Total BOM POS
    cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v => {
      totalBOM = getNum(v)
    })

    // Resolved BOM POS
    cy.get('tbody tr').eq(5).find('td').eq(col).invoke('text').then(v => {
      resolvedBOM = getNum(v)
    })

    // Resolved % BOM POS
    cy.get('tbody tr').eq(5).find('td').eq(col + 2).invoke('text').then(v => {
      resolvedPercent = getNum(v)
    })

    cy.then(() => {
      const calculatedPercent = Number(((resolvedBOM / totalBOM) * 100).toFixed(1))
      expect(resolvedPercent).to.be.a('number')
      expect(resolvedPercent).to.be.within(calculatedPercent - 0.5, calculatedPercent + 0.5)
    })
}
PerformanceReportTestPage030(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
const col = 1   // No. of Accounts column for selected month

let normalizationCount, totalAccounts, normalizationPercent

function getNum(text){
  return Number(text.replace(/,/g,'').replace('%','').trim())
}

// Normalization Count
cy.get('tbody tr').eq(1).find('td').eq(col).invoke('text').then(v=>{
  normalizationCount = getNum(v)
})

// Total Accounts
cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v=>{
  totalAccounts = getNum(v)
})

// Normalization % Count
cy.get('tbody tr').eq(1).find('td').eq(col+2).invoke('text').then(v=>{
  normalizationPercent = getNum(v)
})

cy.then(()=>{
  const calculatedPercent = Number(((normalizationCount / totalAccounts) * 100).toFixed(2))
  expect(normalizationPercent).to.eq(calculatedPercent)
})

}
PerformanceReportTestPage031(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({ force: true });

    for (let i = 2; i <= 5; i++) {
      cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
    }

    cy.wait(2000);
    cy.get(this.locators.productgroup).click();

    cy.get('.ng-option')
      .should('have.length', 7)
      .each(($el) => {
        cy.wrap($el).click({ force: true });
      });

    cy.get(this.locators.country).click({force:true});
    cy.contains('.ng-option-label', 'India').click();
    cy.wait(2000);
    cy.contains('Generate Report').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Search Result').scrollIntoView().should('be.visible');
    cy.wait(2000);

    const col = 1  // column index for the selected month

    function getNum(text){
      return Number(text.replace(/,/g,'').replace('%','').trim())
    }

    let stabCount, totalAccounts, stabPercent

    // Stab Count
    cy.get('tbody tr').eq(3).find('td').eq(col).invoke('text').then(v => {
      stabCount = getNum(v)
    })

    // Total Accounts
    cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v => {
      totalAccounts = getNum(v)
    })

    // Stab %
    cy.get('tbody tr').eq(3).find('td').eq(col + 2).invoke('text').then(v => {
      stabPercent = getNum(v)
    })

    cy.then(() => {
      const calc = Number(((stabCount / totalAccounts) * 100).toFixed(2))
      expect(stabPercent).to.be.a('number')
      expect(stabPercent).to.be.within(calc - 0.5, calc + 0.5)
    })
}
PerformanceReportTestPage032(){

  // helper function
  function getNum(value) {
    return Number(value.replace(/[^0-9.-]+/g, ""))
  }

  cy.wait(9000)

  cy.get(this.locators.Reports).click({force:true})
  cy.wait(2000)

  cy.get(this.locators.PerformancePagereport).click({force:true})
  cy.wait(2000)

  cy.contains("Performance Report (Monthly)")
    .should('exist')
    .click({ force: true })

  cy.wait(2000)

  cy.get(this.locators.monthfield).click({ force: true })

  for (let i = 2; i <= 5; i++) {
    cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true })
  }

  cy.wait(2000)

  cy.get(this.locators.productgroup).click()

  cy.get('.ng-option')
    .should('have.length', 7)
    .each(($el) => {
      cy.wrap($el).click({ force: true })
    })

  cy.get(this.locators.country).click({force:true})
  cy.contains('.ng-option-label', 'India').click()

  cy.wait(2000)

  cy.contains('Generate Report')
    .should('be.visible')
    .click({force:true})

  cy.wait(4000)

  cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible')


  // -------- Roll Forward % Validation --------

  const col = 1   // No. of Accounts column

  let rollForwardCount
  let totalAccounts
  let rollForwardPercent

  // Roll Forward Count
  cy.get('tbody tr').eq(4).find('td').eq(col).invoke('text').then(v => {
    rollForwardCount = getNum(v)
  })

  // Total Accounts
  cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v => {
    totalAccounts = getNum(v)
  })

  // Roll Forward %
  cy.get('tbody tr').eq(4).find('td').eq(col+2).invoke('text').then(v => {
    rollForwardPercent = getNum(v)
  })

  cy.then(() => {

    const calcPercent = Number(((rollForwardCount / totalAccounts) * 100).toFixed(2))

    expect(rollForwardPercent).to.eq(calcPercent)

  })

}
PerformanceReportTestPage033(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
      cy.get(this.locators.Agentstaff).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({ force: true });
for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();
cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains("Total Accounts")
  .scrollIntoView()
  .should('exist');
cy.wait(2000);
cy.contains("Normalization")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Roll Back")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Stabilized")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Roll Forward")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Resolved")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  

}
PerformanceReportTestPage034(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Performance Report (MTD)').scrollIntoView().should('be.visible');
    cy.wait(2000);
cy.contains('User Type').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Bank Staff').scrollIntoView().should('exist');
cy.wait(2000);
cy.contains('Agency Staff').scrollIntoView().should('exist');
cy.wait(2000);
cy.contains('Product Group(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Product(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Sub Product(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Bucket(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Country(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Region(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('State(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('City(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Branch(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('User Branch(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Staff(s)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Additional Filters').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('POS Band').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('EMI Band').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Disb Amt Band').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('MOB Band').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('SMA BKT').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('SMA DPD Band').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Bureau Score Band').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Age Group').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('Link Account').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains('NPA Stage ID').scrollIntoView().should('be.visible');

}
PerformanceReportTestPage035(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
     cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
  cy.get(this.locators.product_grp_mtd).click({force:true});
cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
  cy.wait(2000);
  cy.get(this.locators.bucket_mtd).click({ force: true })

cy.get('.ng-option')
  .should('have.length', 6)
  .each(($el) => {
    cy.wrap($el).click({ force: true })
  })
  cy.wait(2000);
  cy.get(this.locators.country_mtd).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('BOM BKT').scrollIntoView().should('be.visible');
cy.contains('Account Count').scrollIntoView().should('be.visible');
cy.contains('Norm').scrollIntoView().should('be.visible');
cy.contains('RB').scrollIntoView().should('be.visible');
cy.contains('Stab').scrollIntoView().should('be.visible');
cy.contains('RF').scrollIntoView().should('be.visible');
cy.contains('Resolution (%)').scrollIntoView().should('be.visible');
cy.contains('Norm (%)').scrollIntoView().should('be.visible');
cy.contains('RB (%)').scrollIntoView().should('be.visible');
cy.contains('Stab (%)').scrollIntoView().should('be.visible');
cy.contains('RF (%)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get(this.locators.by_amount).click({force:true});
cy.get('thead').within(() => {

const columns = [
'BOM BKT',
'BOM POS (₹)',
'Norm (₹)',
'RB (₹)',
'Stab (₹)',
'RF (₹)',
'Resolution (%)',
'Norm (%)',
'RB (%)',
'Stab (%)',
'RF (%)'
]

columns.forEach(col => {
  cy.contains(col).scrollIntoView().should('be.visible')
})

})

}
PerformanceReportTestPage036(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('Additional Filters').click({force:true});
    cy.wait(2000);
    // Open dropdown
cy.get(this.locators.npa_dropdown_open).scrollIntoView().click({ force: true })

// Select Yes
cy.contains('.ng-option-label', 'Yes').click({ force: true })

// Open dropdown again
cy.get(this.locators.npa_dropdown_open).click({ force: true })

// Select No
cy.contains('.ng-option-label', 'No').click({ force: true })



}
PerformanceReportTestPage037(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
     cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
  cy.get(this.locators.product_grp_mtd).click({force:true});
cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
  cy.wait(2000);
  cy.get(this.locators.bucket_mtd).click({ force: true })

cy.get('.ng-option')
  .should('have.length', 6)
  .each(($el) => {
    cy.wrap($el).click({ force: true })
  })
  cy.wait(2000);
  cy.get(this.locators.country_mtd).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Additional Filters').click({force:true});
cy.wait(2000);
cy.get(this.locators.npa_dropdown_open).click({ force: true });
cy.get('.ng-option-label').contains('Yes').click({ force: true });
cy.get(this.locators.npa_dropdown_open).click({ force: true });
cy.get('.ng-option-label').contains('No').click({ force: true });
cy.wait(2000);
cy.contains('Generate Report').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('BOM BKT').scrollIntoView().should('be.visible');
cy.contains('Account Count').scrollIntoView().should('be.visible');
cy.contains('Norm').scrollIntoView().should('be.visible');
cy.contains('RB').scrollIntoView().should('be.visible');
cy.contains('Stab').scrollIntoView().should('be.visible');
cy.contains('RF').scrollIntoView().should('be.visible');
cy.contains('Resolution (%)').scrollIntoView().should('be.visible');
cy.contains('Norm (%)').scrollIntoView().should('be.visible');
cy.contains('RB (%)').scrollIntoView().should('be.visible');
cy.contains('Stab (%)').scrollIntoView().should('be.visible');
cy.contains('RF (%)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get(this.locators.by_amount).click({force:true});
cy.get('thead').within(() => {

const columns = [
'BOM BKT',
'BOM POS (₹)',
'Norm (₹)',
'RB (₹)',
'Stab (₹)',
'RF (₹)',
'Resolution (%)',
'Norm (%)',
'RB (%)',
'Stab (%)',
'RF (%)'
]

columns.forEach(col => {
  cy.contains(col).scrollIntoView().should('be.visible')
})

})

cy.wait(2000);
cy.contains('Download Report').scrollIntoView().click({force:true});
}
PerformanceReportTestPage038(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
     cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.product_grp_mtd).click({force:true});
cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
  cy.wait(2000);
  cy.get(this.locators.bucket_mtd).click({ force: true })

cy.get('.ng-option')
  .should('have.length', 6)
  .each(($el) => {
    cy.wrap($el).click({ force: true })
  })
  cy.wait(2000);
  cy.get(this.locators.country_mtd).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Additional Filters').click({force:true});
cy.wait(2000);
cy.get(this.locators.npa_dropdown_open).click({ force: true });
cy.get('.ng-option-label').contains('Yes').click({ force: true });
cy.get(this.locators.npa_dropdown_open).click({ force: true });
cy.get('.ng-option-label').contains('No').click({ force: true });
cy.wait(2000);
cy.contains('Generate Report').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('BOM BKT').scrollIntoView().should('be.visible');
cy.contains('Account Count').scrollIntoView().should('be.visible');
cy.contains('Norm').scrollIntoView().should('be.visible');
cy.contains('RB').scrollIntoView().should('be.visible');
cy.contains('Stab').scrollIntoView().should('be.visible');
cy.contains('RF').scrollIntoView().should('be.visible');
cy.contains('Resolution (%)').scrollIntoView().should('be.visible');
cy.contains('Norm (%)').scrollIntoView().should('be.visible');
cy.contains('RB (%)').scrollIntoView().should('be.visible');
cy.contains('Stab (%)').scrollIntoView().should('be.visible');
cy.contains('RF (%)').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get(this.locators.by_amount).click({force:true});
cy.get('thead').within(() => {

const columns = [
'BOM BKT',
'BOM POS (₹)',
'Norm (₹)',
'RB (₹)',
'Stab (₹)',
'RF (₹)',
'Resolution (%)',
'Norm (%)',
'RB (%)',
'Stab (%)',
'RF (%)'
]

columns.forEach(col => {
  cy.contains(col).scrollIntoView().should('be.visible')
})
cy.wait(2000);

})
cy.contains("Download Report").scrollIntoView().click({force:true});


}
PerformanceReportTestPage039(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('not.exist');
    cy.wait(2000);

}
PerformanceReportTestPage040(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('label', 'Agency(s)').parent().contains('ABCDEF-12951').should('be.visible');
}
PerformanceReportTestPage041(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get('.card-content').should('not.contain', 'Bank Staff');


}
PerformanceReportTestPage042(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.contains('label', 'Agency(s)').parent().contains('ABCDEF-12951').should('be.visible');

}

PerformanceReportTestPage043(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (MTD)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get('.card-content').should('not.contain', 'Bank Staff');

}

PerformanceReportTestPage44(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-dropdown-panel-items')
  .find('.ng-option')
  .its('length')
  .then(count => {
    cy.log('Total months:', count);
    expect(count).to.eq(13);
  });
}
PerformanceReportTestPage45(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
   const date = new Date();
date.setMonth(date.getMonth() - 1);   // go to previous month

const lastMonth = date.toLocaleString('default', { month: 'long' });
const lastYear = date.getFullYear().toString().slice(-2);

const expectedMonth = `${lastMonth}-${lastYear}`;

cy.get(this.locators.Currentmonth)
  .should('contain.text', expectedMonth);
}

PerformanceReportTestPage46(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").scrollIntoView().should('be.visible').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.wait(9000);
    cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-dropdown-panel-items')
  cy.get('.ng-option-label')
  .each(($el, index) => {
    if (index < 8) {   // select first 8 options
      cy.wrap($el).click();
    }
  });

cy.contains('Maximum 6 months allowed')
  .should('be.visible');



}

PerformanceReportTestPage47(){
  
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
   cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
     cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.wait(9000);
      cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-dropdown-panel-items')
    cy.get('.ng-option-label')
  .its('length')
  .then(count => {
    expect(count).to.be.lte(13);
  });


}
PerformanceReportTestPage48(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.wait(9000);
    cy.contains('Month').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains("Product Group(s)").scrollIntoView().should('be.visible');


}

PerformanceReportTestPage049(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({force:true});
    cy.get('.ng-option-label')
  .each(($el, index) => {
    if (index < 4) {   // select first 7 options
      cy.wrap($el).click();
    }
  });
    cy.wait(2000);
    cy.get(this.locators.country).click({force:true});
cy.get('.ng-option-label').then(options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
  });
    cy.wait(2000);
    cy.contains('Generate Report').click({force:true});
}


PerformanceReportTestPage50(){
     cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
cy.get(this.locators.productgroup)
  .should('be.visible');
cy.wait(2000);
cy.get(this.locators.productgroup)
  .click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .should('have.length.greaterThan', 0);
cy.get('.ng-option-label').first().click({force:true});

}

PerformanceReportTestPage51(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
   cy.contains('Month').scrollIntoView().should('be.visible');
    cy.contains('Product Group(s)').scrollIntoView().should('be.visible');
    cy.contains('Product(s)').scrollIntoView().should('be.visible');
    cy.contains('Sub Product(s)').scrollIntoView().should('be.visible');
    cy.contains('City(s)').scrollIntoView().should('be.visible');
    cy.contains('Branch(s)').scrollIntoView().should('be.visible');
    cy.contains('User Branch(s)').scrollIntoView().should('be.visible');
    cy.contains('Staff(s)').scrollIntoView().should('be.visible');

}

PerformanceReportTestPage52(){
 
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
  });
    cy.wait(2000);
    cy.contains('Generate Report').click({force:true});



}

PerformanceReportTestPage53(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.deletebutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-dropdown-panel-items')
  .find('.ng-option-label')
  .then(options => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click();
  });
    cy.wait(2000);
    cy.contains('Generate Report').click({force:true});
    cy.wait(900);
    cy.contains('Something went wrong').should('exist');


}

PerformanceReportTestPage54(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
cy.get(this.locators.monthfield).click();
cy.get('.ng-option-label').then(options => {
  const randomIndexes = Cypress._.sampleSize([...Array(options.length).keys()], 2);
  randomIndexes.forEach(i => {
    cy.wrap(options[i]).click();
  });
});
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-option-label').then(options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.contains('Generate Report').click();



}

PerformanceReportTestPage55(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
cy.get(this.locators.monthfield).click();
cy.get('.ng-option-label').then(options => {
  const randomIndexes = Cypress._.sampleSize([...Array(options.length).keys()], 2);
  randomIndexes.forEach(i => {
    cy.wrap(options[i]).click();
  });
});
cy.wait(2000);
cy.get(this.locators.productgroup).click();
cy.get('.ng-option-label').then(options => {
  const randomIndex = Math.floor(Math.random() * options.length);
  cy.wrap(options[randomIndex]).click();
});
cy.wait(2000);
cy.get(this.locators.country).click({ force: true });
cy.contains('.ng-option-label', 'India')
  .should('be.visible')
  .click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').and('not.be.disabled');

}

PerformanceReportTestPage56() {
 cy.wait(9000);
  cy.get(this.locators.Reports).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.PerformancePagereport).click({ force: true });
  cy.wait(2000);
  cy.contains('Performance Report (Monthly)')
    .scrollIntoView()
    .click({ force: true });
  cy.wait(2000);
  // Open Month dropdown
  cy.get(this.locators.monthfield)
    .should('be.visible')
    .click();
  // Ensure dropdown is visible
  cy.get('.ng-dropdown-panel').should('be.visible');
  // Select February-26
  cy.contains('.ng-dropdown-panel .ng-option-label', 'February-26').click();
  // ✅ Assert chip is visible - scope to .form-ng-select wrapper
  cy.get(this.locators.monthfield)
    .parents('.form-ng-select')
    .should('contain', 'February-26');
  // Re-open dropdown
  cy.get(this.locators.monthfield).click();
  // Ensure dropdown is visible
  cy.get('.ng-dropdown-panel').should('be.visible');
  // Deselect February-26
  cy.contains('.ng-dropdown-panel .ng-option-label', 'February-26').click();
}
PerformanceReportTestPage57(){
      cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.agencybutton).click({force:true});
    cy.wait(2000);
cy.get(this.locators.monthfield).click();
cy.get('.ng-dropdown-panel-items')
  .should('be.visible');
cy.get('.ng-dropdown-panel-items')
  .should($el => {
    expect($el[0].scrollHeight).to.be.greaterThan($el[0].clientHeight);
  });
}



/////////////////////////////////////////

PerformanceReportTestPage58(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.contains("Total Accounts")
  .scrollIntoView()
  .should('exist');
cy.wait(2000);
cy.contains("Normalization")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Roll Back")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Stabilized")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Roll Forward")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });  
cy.wait(2000);
cy.contains("Resolved")
  .scrollIntoView()
  .should('exist')
  .should('be.visible', { force: true });    
}


PerformanceReportTestPage59() {

  cy.wait(9000);
  cy.get(this.locators.Reports).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.PerformancePagereport).click({ force: true });
  cy.wait(2000);
  cy.contains("Performance Report (Monthly)")
    .should('exist')
    .click({ force: true });
  cy.wait(2000);
  cy.get('.ng-value-icon').click({force:true});
  cy.wait(2000); 
  cy.get(this.locators.monthfield).click({ force: true });
  cy.wait(2000);
  cy.get('.ng-dropdown-panel .ng-option')
    .should('have.length.greaterThan', 1)
    .then(($options) => {
      cy.wrap($options.eq(1)).click({ force: true }); 

    });
  cy.wait(2000);


  // -------- Select Product Group --------
  cy.get(this.locators.productgroup).click();

  cy.get('.ng-option')
    .should('have.length', 7)
    .each(($el) => {
      cy.wrap($el).click({ force: true });
    });

  // -------- Select Country --------
  cy.get(this.locators.country).click({ force: true });

  cy.contains('.ng-option-label', 'India').click();

  cy.wait(2000);

  // -------- Generate Report --------
  cy.contains('Generate Report')
    .should('be.visible')
    .click({ force: true });

  cy.wait(2000);

  // -------- Verify Search Result --------
  cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible');
}

PerformanceReportTestPage60(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get('thead th').each(($el) => {

  const text = $el.text().trim();

  const monthYearRegex = /(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4}/;

  if (monthYearRegex.test(text)) {
    cy.log("Month column found: " + text);
  }

});

}
PerformanceReportTestPage61(){

  cy.wait(9000);

  cy.get(this.locators.Reports).click({force:true});
  cy.wait(2000);

  cy.get(this.locators.PerformancePagereport).click({force:true});
  cy.wait(2000);

  cy.contains("Performance Report (Monthly)")
    .should('exist')
    .click({ force: true });

  cy.wait(2000);

  // -------- Select Months --------
  cy.get(this.locators.monthfield).click({ force: true });

  for (let i = 2; i <= 5; i++) {
    cy.get(`[id$="-${i}"] > .ng-option-label`)
      .click({ force: true });
  }

  cy.wait(2000);

  // -------- Select Product Group --------
  cy.get(this.locators.productgroup).click();

  cy.get('.ng-option')
    .should('have.length', 7)
    .each(($el) => {
      cy.wrap($el).click({ force: true });
    });

  // -------- Select Country --------
  cy.get(this.locators.country).click({force:true});

  cy.contains('.ng-option-label', 'India')
    .click({force:true});

  cy.wait(2000);

  // -------- Generate Report --------
  cy.contains('Generate Report')
    .should('be.visible')
    .click({force:true});

  cy.wait(4000);

  // -------- Verify Search Result --------
  cy.contains('Search Result')
    .scrollIntoView()
    .should('exist');

  cy.wait(2000);

  // -------- Table Header Validations --------
  cy.contains("Total Accounts")
    .scrollIntoView()
    .should('exist');

  cy.contains("No. of Accounts")
    .scrollIntoView()
    .should('exist');

  cy.contains("BOM POS (₹)")
    .scrollIntoView()
    .should('exist');

  cy.contains("% Count")
    .scrollIntoView()
    .should('exist');

  cy.contains("% BOM POS")
    .scrollIntoView()
    .should('exist');

}

PerformanceReportTestPage62(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
cy.get('tbody tr:nth-child(1) td:nth-child(5)')
 .scrollIntoView().should('contain', '100');

cy.get('tbody > :nth-child(1) > :nth-child(9)')
 .scrollIntoView().should('contain', '100');

cy.get('tbody > :nth-child(1) > :nth-child(13)')
.scrollIntoView().should('contain', '100');

}
PerformanceReportTestPage63(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
let normalization, rollback, stab, resolved

cy.get('tbody tr').eq(1).find('td').eq(1).invoke('text').then(val=>{
  normalization = Number(val.replace(/,/g,''))
})

cy.get('tbody tr').eq(2).find('td').eq(1).invoke('text').then(val=>{
  rollback = Number(val.replace(/,/g,''))
})

cy.get('tbody tr').eq(3).find('td').eq(1).invoke('text').then(val=>{
  stab = Number(val.replace(/,/g,''))
})

cy.get('tbody tr').eq(5).find('td').eq(1).invoke('text').then(val=>{
  resolved = Number(val.replace(/,/g,''))
})

cy.then(()=>{
  expect(resolved).to.eq(normalization + rollback + stab)
})
   

}
PerformanceReportTestPage64(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
  const col = 1   // column index for the month (change if needed)

let normalization, rollback, stab, rollForward, totalAccounts

function getNum(text){
  return Number(text.replace(/,/g,'').trim())
}

cy.get('tbody tr').eq(1).find('td').eq(col).invoke('text').then(v=>{
  normalization = getNum(v)
})

cy.get('tbody tr').eq(2).find('td').eq(col).invoke('text').then(v=>{
  rollback = getNum(v)
})

cy.get('tbody tr').eq(3).find('td').eq(col).invoke('text').then(v=>{
  stab = getNum(v)
})

cy.get('tbody tr').eq(4).find('td').eq(col).invoke('text').then(v=>{
  rollForward = getNum(v)
})

cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v=>{
  totalAccounts = getNum(v)
})

cy.then(()=>{
  const calculatedTotal = normalization + rollback + stab + rollForward
  expect(totalAccounts).to.eq(calculatedTotal)
})
}
PerformanceReportTestPage65(){
  cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
const col = 1   // month column index

let resolved, totalAccounts, resolvedPercent

function getNum(text){
  return Number(text.replace(/,/g,'').replace('%','').trim())
}

cy.get('tbody tr').eq(5).find('td').eq(col).invoke('text').then(v=>{
  resolved = getNum(v)
})

cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v=>{
  totalAccounts = getNum(v)
})

cy.get('tbody tr').eq(5).find('td').eq(col+2).invoke('text').then(v=>{
  resolvedPercent = getNum(v)
})

cy.then(()=>{
  const calculatedPercent = Number(((resolved / totalAccounts) * 100).toFixed(2))
  expect(resolvedPercent).to.eq(calculatedPercent)
})


}
PerformanceReportTestPage66(){
   cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({ force: true });

    for (let i = 2; i <= 5; i++) {
      cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
    }

    cy.wait(2000);
    cy.get(this.locators.productgroup).click();

    cy.get('.ng-option')
      .should('have.length', 7)
      .each(($el) => {
        cy.wrap($el).click({ force: true });
      });

    cy.get(this.locators.country).click({force:true});
    cy.contains('.ng-option-label', 'India').click();
    cy.wait(2000);
    cy.contains('Generate Report').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Search Result').scrollIntoView().should('be.visible');
    cy.wait(2000);

    const col = 2  // BOM POS column index for the selected month

    let resolvedBOM, totalBOM, resolvedPercent

    function getNum(text){
      return Number(text.replace(/,/g,'').replace('%','').trim())
    }

    // Total BOM POS
    cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v => {
      totalBOM = getNum(v)
    })

    // Resolved BOM POS
    cy.get('tbody tr').eq(5).find('td').eq(col).invoke('text').then(v => {
      resolvedBOM = getNum(v)
    })

    // Resolved % BOM POS
    cy.get('tbody tr').eq(5).find('td').eq(col + 2).invoke('text').then(v => {
      resolvedPercent = getNum(v)
    })

    cy.then(() => {
      const calculatedPercent = Number(((resolvedBOM / totalBOM) * 100).toFixed(1))
      expect(resolvedPercent).to.be.a('number')
      expect(resolvedPercent).to.be.within(calculatedPercent - 0.5, calculatedPercent + 0.5)
    })
}
PerformanceReportTestPage67(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
cy.get(this.locators.monthfield).click({ force: true });

for (let i = 2; i <= 5; i++) {
  cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
}
   cy.wait(2000);
   cy.get(this.locators.productgroup).click();

cy.get('.ng-option')
  .should('have.length', 7)
  .each(($el) => {
    cy.wrap($el).click({ force: true });
  });
cy.get(this.locators.country).click({force:true});
cy.contains('.ng-option-label', 'India').click();
cy.wait(2000);
cy.contains('Generate Report').should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Search Result').scrollIntoView().should('be.visible');
cy.wait(2000);
const col = 1   // No. of Accounts column for selected month

let normalizationCount, totalAccounts, normalizationPercent

function getNum(text){
  return Number(text.replace(/,/g,'').replace('%','').trim())
}

// Normalization Count
cy.get('tbody tr').eq(1).find('td').eq(col).invoke('text').then(v=>{
  normalizationCount = getNum(v)
})

// Total Accounts
cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v=>{
  totalAccounts = getNum(v)
})

// Normalization % Count
cy.get('tbody tr').eq(1).find('td').eq(col+2).invoke('text').then(v=>{
  normalizationPercent = getNum(v)
})

cy.then(()=>{
  const calculatedPercent = Number(((normalizationCount / totalAccounts) * 100).toFixed(2))
  expect(normalizationPercent).to.eq(calculatedPercent)
})

}
PerformanceReportTestPage68(){
    cy.wait(9000);
    cy.get(this.locators.Reports).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.PerformancePagereport).click({force:true});
    cy.wait(2000);
    cy.contains("Performance Report (Monthly)").should('exist').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.monthfield).click({ force: true });

    for (let i = 2; i <= 5; i++) {
      cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true });
    }

    cy.wait(2000);
    cy.get(this.locators.productgroup).click();

    cy.get('.ng-option')
      .should('have.length', 7)
      .each(($el) => {
        cy.wrap($el).click({ force: true });
      });

    cy.get(this.locators.country).click({force:true});
    cy.contains('.ng-option-label', 'India').click();
    cy.wait(2000);
    cy.contains('Generate Report').should('be.visible').click({force:true});
    cy.wait(2000);
    cy.contains('Search Result').scrollIntoView().should('be.visible');
    cy.wait(2000);

    const col = 1  // column index for the selected month

    function getNum(text){
      return Number(text.replace(/,/g,'').replace('%','').trim())
    }

    let stabCount, totalAccounts, stabPercent

    // Stab Count
    cy.get('tbody tr').eq(3).find('td').eq(col).invoke('text').then(v => {
      stabCount = getNum(v)
    })

    // Total Accounts
    cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v => {
      totalAccounts = getNum(v)
    })

    // Stab %
    cy.get('tbody tr').eq(3).find('td').eq(col + 2).invoke('text').then(v => {
      stabPercent = getNum(v)
    })

    cy.then(() => {
      const calc = Number(((stabCount / totalAccounts) * 100).toFixed(2))
      expect(stabPercent).to.be.a('number')
      expect(stabPercent).to.be.within(calc - 0.5, calc + 0.5)
    })
}
PerformanceReportTestPage69(){

  // helper function
  function getNum(value) {
    return Number(value.replace(/[^0-9.-]+/g, ""))
  }

  cy.wait(9000)

  cy.get(this.locators.Reports).click({force:true})
  cy.wait(2000)

  cy.get(this.locators.PerformancePagereport).click({force:true})
  cy.wait(2000)

  cy.contains("Performance Report (Monthly)")
    .should('exist')
    .click({ force: true })

  cy.wait(2000)

  cy.get(this.locators.monthfield).click({ force: true })

  for (let i = 2; i <= 5; i++) {
    cy.get(`[id$="-${i}"] > .ng-option-label`).click({ force: true })
  }

  cy.wait(2000)

  cy.get(this.locators.productgroup).click()

  cy.get('.ng-option')
    .should('have.length', 7)
    .each(($el) => {
      cy.wrap($el).click({ force: true })
    })

  cy.get(this.locators.country).click({force:true})
  cy.contains('.ng-option-label', 'India').click()

  cy.wait(2000)

  cy.contains('Generate Report')
    .should('be.visible')
    .click({force:true})

  cy.wait(4000)

  cy.contains('Search Result')
    .scrollIntoView()
    .should('be.visible')


  // -------- Roll Forward % Validation --------

  const col = 1   // No. of Accounts column

  let rollForwardCount
  let totalAccounts
  let rollForwardPercent

  // Roll Forward Count
  cy.get('tbody tr').eq(4).find('td').eq(col).invoke('text').then(v => {
    rollForwardCount = getNum(v)
  })

  // Total Accounts
  cy.get('tbody tr').eq(0).find('td').eq(col).invoke('text').then(v => {
    totalAccounts = getNum(v)
  })

  // Roll Forward %
  cy.get('tbody tr').eq(4).find('td').eq(col+2).invoke('text').then(v => {
    rollForwardPercent = getNum(v)
  })

  cy.then(() => {

    const calcPercent = Number(((rollForwardCount / totalAccounts) * 100).toFixed(2))

    expect(rollForwardPercent).to.eq(calcPercent)

  })

}

 }
 
export default PerformanceReportPage;