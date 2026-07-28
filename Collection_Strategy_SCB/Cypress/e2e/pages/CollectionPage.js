import { getLocators } from '../utils/locatorUtils';
import { getBaseUrl } from '../utils/configUtils';
import 'cypress-wait-until';
import { faker } from '@faker-js/faker';


class CollectionPage {
  constructor(locators) {
    this.locators = locators;
  }
  
CreateTestPage_01(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should('be.visible').click();
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should('be.visible').click();
     cy.wait(2000);
     cy.get('.title').contains("Create Segment").should('be.visible');
     cy.wait(1000);
}

CreateTestPage_02(){
  cy.wait(2000);
     cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should('be.visible').click();
     cy.wait(2000);
     cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should('be.visible').click();
     cy.wait(8000);
     cy.get('.title').contains("Create Segment").should('be.visible');
     cy.wait(1000);
     cy.contains('Segment Name').should('be.visible');

    
}

CreateTestPage_03(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should('be.visible').click();
     cy.wait(2000);
     cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should('be.visible').click();
     cy.wait(2000);
     cy.get('.title').contains("Create Segment").should('be.visible');
     cy.wait(2000);
     cy.contains('Segment Name').should('be.visible');
     cy.wait(2000);
     cy.get(this.locators.Segment_Name_field).type('Testname').clear();;
     cy.wait(2000);
     cy.contains('Name is required').should('be.visible');
   

    
}

CreateTestPage_04() {

  cy.get(this.locators.CollectionStrategy)
    .contains("Collection Strategy")
    .should("be.visible")
    .click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment)
    .contains("Create Segment")
    .should("be.visible")
    .click();
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field)
    .should("exist")
    .should("be.visible");
  cy.wait(2000);
  const segmentName = `DPD_${faker.company.name()}_${faker.number.int({
    min: 100,
    max: 999,
  })}`;

  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field)
    .first()
    .clear()
    .type(segmentName);
  cy.wait(2000);
  const descriptions = [
    "Collection campaign targeting customers with overdue payments.",
    "Campaign created to improve payment recovery rates.",
    "Monthly collection strategy for retail loan customers.",
    "Target segment for EMI reminder notifications.",
    "Campaign for high-risk accounts requiring immediate follow-up.",
    "Collection strategy for overdue accounts between 30 and 90 days."
  ];
  cy.wait(2000);
  const description = Cypress._.sample(descriptions);
  
  cy.get(this.locators.Segment_Description_field)
    .should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field)
    .first()
    .clear()
    .type(description);
  cy.wait(2000);
  cy.contains("Product Filters")
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow)
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  const productNames = [
    "Consumer Loan",
    "Loan Products",
    "CreditCard",
    "HL",
    "Cards"
  ];

  productNames.forEach((name) => {

    cy.contains(".ng-option-label", name, { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

  });

  cy.wait(2000);

  cy.contains("Bucket Filters")
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket)
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "All", { timeout: 10000 })
    .scrollIntoView()
    .click({ force: true });
    cy.wait(2000);
  cy.contains("Geography Filters")
    .should("be.visible")
    .click({ force: true });
cy.wait(2000);
  cy.get(this.locators.Country)
    .should("be.visible")
    .click({ force: true });
cy.wait(2000);
  cy.get(this.locators.product_group_arrow)
    .should("be.visible")
    .click({ force: true });
cy.wait(2000);
  cy.get(this.locators.Country)
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").then(($options) => {

    const total = $options.length;

    for (let i = 0; i < total; i++) {

      cy.get(".ng-option-label")
        .eq(i)
        .scrollIntoView()
        .click({ force: true });

    }

  });

  cy.wait(2000);

  cy.get(this.locators.Save_segment)
    .should("be.enabled")
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection)
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  cy.contains("Success!", { timeout: 10000 })
    .should("be.visible");
  cy.wait(2000);
  cy.contains("Segment has been created Successfully.", { timeout: 10000 })
    .should("be.visible");
  cy.wait(2000);
  cy.get(":nth-child(1) > .actions > .d-flex > span", { timeout: 10000 })
    .should(($el) => {
      expect($el.text().trim()).to.equal(segmentName);
    });

}
CreateTestPage_05() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment)
    .contains("Create Segment")
    .should("be.visible")
    .click();
  cy.wait(2000);

  const segmentName = `DPD_${faker.company.name()}_${faker.number.int({ min: 100, max: 999 })}`;
  cy.get(this.locators.Segment_Name_field)
    .first()
    .should("be.visible")
    .clear()
    .type(segmentName);
  cy.wait(2000);

  const descriptions = [
    "Collection campaign targeting customers with overdue payments.",
    "Campaign created to improve payment recovery rates.",
    "Monthly collection strategy for retail loan customers.",
    "Target segment for EMI reminder notifications.",
    "Campaign for high-risk accounts requiring immediate follow-up.",
    "Collection strategy for overdue accounts between 30 and 90 days.",
  ];
  const description = Cypress._.sample(descriptions);

  cy.get(this.locators.Segment_Description_field)
    .first()
    .should("be.visible")
    .clear()
    .type(description);
  cy.wait(2000);

  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });

  const productNames = [
   "Consumer Loan",
    "Loan Products",
    "CreditCard",
    "HL",
    "Cards"
  ];
  cy.wrap(productNames).each((name) => {
    cy.contains(".ng-option-label", name)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  });
  cy.wait(2000);

  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "All").scrollIntoView().should("be.visible").click({ force: true });
  cy.wait(2000);

  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").each(($option) => {
    cy.wrap($option).scrollIntoView().click({ force: true });
  });
  cy.wait(2000);

  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");
  cy.wait(2000);
  cy.get(":nth-child(1) > .actions > .d-flex > span").should(($el) => {
    expect($el.text().trim()).to.equal(segmentName);
  });
  cy.reload();
  // ---- Attempt to create a second segment reusing the same name, to confirm duplicate-name validation ----
  cy.wait(5000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(5000);
  cy.get(this.locators.Segment_Name_field).first().should("be.visible").type(segmentName);
  cy.wait(5000);
  cy.get(this.locators.Segment_Description_field).first().should("be.visible").type("Duplicate segment name test.");
  cy.wait(5000);

  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });

  // Reuse the same productNames array declared above — do NOT redeclare it here.
  cy.wrap(productNames).each((name) => {
    cy.contains(".ng-option-label", name)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  });
  cy.wait(2000);

  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "All").scrollIntoView().should("be.visible").click({ force: true });
  cy.wait(2000);

  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").each(($option) => {
    cy.wrap($option).scrollIntoView().click({ force: true });
  });
  cy.wait(2000);

  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(5000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(5000);
  cy.contains("already exists", { matchCase: false }).should("be.visible");
  cy.contains("Segment has been created Successfully.").should("not.exist");
}


CreateTestPage_06() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().should("exist").and("be.visible").and("not.be.disabled");
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().should("have.prop", "tagName", "TEXTAREA");
  cy.wait(2000);
  const testInput = "Test description for field availability check.";
  cy.get(this.locators.Segment_Description_field).first().clear().type(testInput).should("have.value", testInput);
}
CreateTestPage_07(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    const segmentName = `${faker.company.name()}-${faker.number.int({ min: 1000, max: 9999 })}`;
    cy.get(this.locators.Segment_Name_field).first().clear().type(segmentName);
    cy.wait(2000);
    cy.get(this.locators.Segment_Description_field).first().clear().type("Test description for field availability check.").wait(1000).clear();
    cy.contains("Description is required").should("be.visible");

    
}

CreateTestPage_08(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  const segmentName = `${faker.company.name()}-${faker.number.int({ min: 100, max: 999 })}`;
  cy.get(this.locators.Segment_Name_field).first().should("be.visible").clear().type(segmentName);
  const paragraph = "This segment is designed to group customers with similar payment behavior for collection and recovery purposes. It helps the business automate follow-up actions, improve collection efficiency, reduce overdue accounts, and ensure compliance with organizational policies. ";
  const longDescription = paragraph.repeat(8);
  cy.get(this.locators.Segment_Description_field).first().clear().type(longDescription, { delay: 0 });
  cy.get(this.locators.Segment_Description_field).first().invoke("val")
    .then((value) => {
      expect(value).to.not.be.empty;
      cy.log(`Description Length: ${value.length}`);
    });

  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  const productNames = [
    "Consumer Loan",
    "Loan Products",
    "CreditCard",
    "HL",
    "Cards",
   
  ];

  cy.wrap(productNames).each((name) => {
    cy.contains(".ng-option-label", name)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  });

  cy.wait(2000);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "All").scrollIntoView().click({ force: true });
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").each(($option) => {
    cy.wrap($option)
      .scrollIntoView()
      .click({ force: true });
  });

  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");

  cy.wait(2000);

  cy.get(":nth-child(1) > .actions > .d-flex > span")
    .should(($el) => {
      expect($el.text().trim()).to.equal(segmentName);
    });
}



  
CreateTestPage_09(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Product Filters").should("be.visible").click({ force: true });
  cy.wait(2000);

 


}

CreateTestPage_10(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Bucket Filters").scrollIntoView().should("be.visible").click({ force: true });
  cy.wait(2000);


}

CreateTestPage_11(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Geography Filters").scrollIntoView().should("be.visible").click({ force: true });
  cy.wait(2000);
 
  
}

CreateTestPage_12(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Advanced Filters").scrollIntoView().should("be.visible").click({ force: true });
  cy.wait(2000);

}

CreateTestPage_13(){


  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(1000);

  cy.get(".ng-option")
    .should("have.length.greaterThan", 0)
    .each(($option) => {
      cy.wrap($option).should("be.visible");
      cy.log($option.text().trim());
    });

}



CreateTestPage_14(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  const segmentName = `Segment-${Date.now()}`;
  cy.get(this.locators.Segment_Name_field).first().clear().type(segmentName);
  cy.get(this.locators.Segment_Description_field).first().clear().type("Testing Product Filter validation.");
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Current_Bucket).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.State).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.City).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Branch).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.contains('Save Segment').should("be.disabled");


}



 CreateTestPage_15() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Product Filters").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.product_group_arrow).click({ force: true });
    cy.wait(2000);
    cy.get(".ng-dropdown-panel .ng-option")
      .each(($option) => {
        cy.wrap($option)
          .scrollIntoView()
          .click({ force: true });
      });

    cy.get("body").click(0, 0);

    cy.wait(2000);
    cy.get(this.locators.product).click({ force: true });
    cy.wait(2000);
    cy.get(".ng-dropdown-panel .ng-option")
      .each(($option) => {
        cy.wrap($option)
          .scrollIntoView()
          .click({ force: true });
      });

    cy.get("body").click(0, 0);
    cy.wait(2000);
    cy.get(this.locators.sub_product).click({ force: true });
    cy.wait(2000);
    cy.get(".ng-dropdown-panel .ng-option")
      .each(($option) => {
        cy.wrap($option)
          .scrollIntoView()
          .click({ force: true });
      });

    cy.get("body").click(0, 0);

    cy.wait(2000);

}


CreateTestPage_16() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.wait(1000);
  const subProducts = ["Personal Loan"];

cy.get(this.locators.sub_product).click({ force: true });

cy.get(".ng-option").then(($options) => {

  const optionTexts = [...$options].map(el => el.innerText.trim());

  subProducts.forEach((item) => {
    if (optionTexts.includes(item)) {
      cy.contains(".ng-option", item)
        .click({ force: true });
    } else {
      cy.log(`${item} is not available in Sub Product dropdown`);
    }
  });

});

cy.get("body").click(0, 0);

}

CreateTestPage_17() {

  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy)
    .contains("Collection Strategy")
    .click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment)
    .contains("Create Segment")
    .click({ force: true });
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0)
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex]).click({ force: true });
    });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option")
    .should("have.length.greaterThan", 0);
  cy.get(".ng-option").each(($option) => {
    cy.wrap($option).should("be.visible");
  });

}
CreateTestPage_18() {

  cy.wait(2000);

  cy.get(this.locators.CollectionStrategy)
    .contains("Collection Strategy")
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.Click_CreateSegment)
    .contains("Create Segment")
    .click({ force: true });

  cy.wait(2000);

  cy.contains("Product Filters").click({ force: true });

  cy.wait(2000);

  // Select random Product Group
  cy.get(this.locators.product_group_arrow).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0)
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex])
        .scrollIntoView()
        .click({ force: true });
    });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0)
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex])
        .scrollIntoView()
        .click({ force: true });
    });

  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.sub_product)
    .click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option")
    .should("have.length.greaterThan", 0);
  cy.get(".ng-option-label")
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex])
        .scrollIntoView()
        .click({ force: true });
    });

  cy.get("body").click(0, 0);

}
CreateTestPage_19() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click();
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Bucket Filters").scrollIntoView().should("be.visible").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).should("be.visible").click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option").should("have.length.greaterThan", 0)
    .then(($options) => {

      const bucketValues = [];

      Cypress.$($options).each((index, option) => {
        const text = option.innerText.trim();
        bucketValues.push(text);
        cy.log(text);
      });
      expect(bucketValues.length).to.be.greaterThan(0);

      cy.log("Bucket Values: " + bucketValues.join(", "));
    });

 cy.wait(2000);
  cy.get(".ng-option").each(($option) => {
    cy.wrap($option)
      .scrollIntoView()
      .should("be.visible");
  });

}
  CreateTestPage_20() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);

  // Select first three bucket values
  cy.get(".ng-option")
    .should("have.length.greaterThan", 2)
    .then(($options) => {

      cy.wrap($options.eq(0)).click({ force: true });
      cy.wrap($options.eq(1)).click({ force: true });
      cy.wrap($options.eq(2)).click({ force: true });

    });

  // Close dropdown
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(".ng-value-label")
    .should("have.length.greaterThan", 0);

}

CreateTestPage_21(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Current_Bucket).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option").should("have.length.greaterThan", 2);
  cy.get(".ng-option").then(($options) => {
    cy.wrap($options.eq(0)).click({ force: true });
    cy.wrap($options.eq(1)).click({ force: true });
    cy.wrap($options.eq(2)).click({ force: true });

  });
  cy.get("body").click(0, 0);
  cy.wait(1000);
  cy.get(this.locators.Current_Bucket).should("be.visible");

}

CreateTestPage_22(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(5000);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option")
    .should("have.length.greaterThan", 0);
  cy.get(".ng-option").each(($option) => {
    cy.log($option.text().trim());
  });


}

CreateTestPage_23(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
cy.get(".ng-option").each(($option) => {
  cy.log($option.text().trim());
});

}


CreateTestPage_24(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option")
    .should("have.length.greaterThan", 0)
    .each(($option) => {
      cy.wrap($option).should("be.visible");
      cy.log($option.text().trim());
    });

}

CreateTestPage_25() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.contains(".ng-option", "India").click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({ force: true });
  cy.get(".ng-option")
    .should("have.length.greaterThan", 0);

}

CreateTestPage_26() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.get(this.locators.Country).click({ force: true });
  cy.contains(".ng-option-label", "India").click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.Region).click({ force: true });
  cy.get(".ng-option-label").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.State).click({ force: true });
  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0);

}

CreateTestPage_27() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.get(this.locators.Country).click({ force: true });
  cy.get(".ng-option-label").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.Region).click({ force: true });
  cy.get(".ng-option-label").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.State).click({ force: true });
  cy.get(".ng-option-label").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.City).click({ force: true });
  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0);

}

CreateTestPage_28(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.get(this.locators.Country).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.Region).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.State).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.City).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.get(this.locators.Branch).click({ force: true });
  cy.get(".ng-option")
    .should("have.length.greaterThan", 0);

}
CreateTestPage_29(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({ force: true });
  cy.get(this.locators.Country).click({ force: true });
  cy.get(".ng-option")
    .should("have.length.greaterThan", 1)
    .then(($options) => {
      cy.wrap($options.eq(0)).click({ force: true });
      cy.wrap($options.eq(1)).click({ force: true });
    });

  cy.get("body").click(0, 0);

  cy.get(this.locators.Country)
    .should("be.visible");

}

CreateTestPage_30(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  const segmentName = `Segment-${Date.now()}`;
  cy.get(this.locators.Segment_Name_field).first().type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Testing mandatory Geography filter validation.");
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.product).click({ force: true });
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.contains(".ng-option-label", "Personal Loan").click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.contains("Bucket Filters").click({ force: true });
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.get(".ng-option").first() .click({ force: true });
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Current_Bucket).click({ force: true });
  cy.get(".ng-option").first().click({ force: true });
  cy.get("body").click(0, 0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.contains('Save Segment').should("be.disabled");


}
CreateTestPage_031(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({force:true});
  cy.wait(2000);
  cy.contains("Add Filter").scrollIntoView().should("be.visible");
  cy.wait(2000);
}
CreateTestPage_32(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({force:true});
  cy.wait(2000);
  cy.contains("Add Filter").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Add_filter).click({force:true});
  cy.wait(2000);
  const filters = [
  "BOM POS",
  "Credit Score",
  "Current DPD",
  "Customer Delinquency Risk Score",
  "Customer Persona",
  "Latest Disposition Code",
  "DND Flag",
  "Due Date",
  "NPA Status",
  "Principal Overdue",
  "Total Outstanding",
  "Total Overdue"
];

cy.wrap(filters).each((filter) => {
  cy.contains(".ng-option-label", filter)
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });

  cy.get(this.locators.Add_filter).click({ force: true });
  cy.wait(2000);

});
  


}
CreateTestPage_34(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({force:true});
  cy.wait(2000);
  cy.contains("Add Filter").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Add_filter).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Add_filter_inputfield).should("be.visible");
}

CreateTestPage_33(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
}

CreateTestPage_35(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({force:true});
  cy.wait(2000);
  cy.contains("Add Filter").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Add_filter).click({force:true});
  cy.wait(2000);
  const filters = [
  "BOM POS",
  "Credit Score",
  "Current DPD",
  "Customer Delinquency Risk Score",
  "Customer Persona",
  "Latest Disposition Code",
  "DND Flag",
  "Due Date",
  "NPA Status",
  "Principal Overdue",
  "Total Outstanding",
  "Total Overdue"
];

cy.wrap(filters).each((filter) => {
  cy.contains(".ng-option-label", filter)
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });

  cy.get(this.locators.Add_filter).click({ force: true });
  cy.wait(2000);

});

}
CreateTestPage_36(){

  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Add_filter).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Credit Score").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_filter).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Credit Score").should("not.exist");

}
CreateTestPage_37(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({ force: true });
  cy.wait(2000);

  const filters = [
    "Credit Score",
    "Current DPD",
    "Due Date"
  ];

  cy.wrap(filters).each((filter) => {
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.wait(1000);
    cy.contains(".ng-option-label", filter)
      .scrollIntoView()
      .click({ force: true });
    cy.wait(1000);
  });

  cy.wrap(filters).each((filter) => {
    cy.contains(filter).scrollIntoView().should("be.visible");
  });

}

CreateTestPage_38(){
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  const segmentName=`Segment-${Date.now()}`;

  cy.get(this.locators.Segment_Name_field).first().type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation Test Segment");
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Bucket Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Save_segment).should("be.visible").and("not.be.disabled");

}
CreateTestPage_39(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  const segmentName=`Segment-${Date.now()}`;

  cy.get(this.locators.Segment_Name_field).first().type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation Test Segment");
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Bucket Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({force:true});
  cy.wait(2000);
  cy.contains("Segment has been created Successfully.").should("be.visible");

}
CreateTestPage_40(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  const segmentName=`Segment-${Date.now()}`;

  cy.get(this.locators.Segment_Name_field).first().type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation Test Segment");
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Bucket Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({force:true});
  cy.wait(2000);
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");
}

CreateTestPage_41(){
   cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
 const dpdTypes = [
    "Low_DPD",
    "Medium_DPD",
    "High_DPD",
    "Critical_DPD",
    "Recovery_DPD"
];

const descriptions = [
    "This segment includes customers with low Days Past Due who require early payment reminders and proactive follow-up to avoid further delinquency.",
    "This segment contains customers with overdue accounts identified for collection activities based on their Days Past Due and repayment behavior.",
    "This segment targets high-risk delinquent customers who have crossed the defined DPD threshold and require immediate collection actions.",
    "This segment is created for customers requiring multiple collection follow-ups, reminder notifications, and recovery campaign execution based on DPD status.",
    "This segment includes accounts that are eligible for recovery processes, payment negotiations, and advanced collection strategies based on Days Past Due."
];

const randomIndex = Cypress._.random(0, dpdTypes.length - 1);
const uniqueId = Date.now();

const segmentName = `${dpdTypes[randomIndex]}_${uniqueId}`;
const segmentDescription = descriptions[randomIndex];

   cy.get(this.locators.Segment_Name_field).first().type(segmentName);
   cy.wait(2000);
   cy.get(this.locators.Segment_Description_field).first().type(segmentDescription);
   cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Bucket Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({force:true});
  cy.wait(2000);
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");  

}
CreateTestPage_42(){
  

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);

    const dpdTypes = [
        "Low_DPD",
        "Medium_DPD",
        "High_DPD",
        "Critical_DPD",
        "Recovery_DPD"
    ];

    const descriptions = [
        "This segment includes customers with low Days Past Due who require early payment reminders and proactive follow-up to avoid further delinquency.",
        "This segment contains customers with overdue accounts identified for collection activities based on their Days Past Due and repayment behavior.",
        "This segment targets high-risk delinquent customers who have crossed the defined DPD threshold and require immediate collection actions.",
        "This segment is created for customers requiring multiple collection follow-ups, reminder notifications, and recovery campaign execution based on DPD status.",
        "This segment includes accounts that are eligible for recovery processes, payment negotiations, and advanced collection strategies based on Days Past Due."
    ];

    const randomIndex = Cypress._.random(0, dpdTypes.length - 1);
    const uniqueId = Date.now();
    const segmentName = `${dpdTypes[randomIndex]}_${uniqueId}`;
    const segmentDescription = descriptions[randomIndex];
    cy.get(this.locators.Segment_Name_field).first().type(segmentName);
    cy.get(this.locators.Segment_Description_field).first().type(segmentDescription);
    cy.contains("Product Filters").click({ force: true });
    cy.get(this.locators.product_group_arrow).click({ force: true });
    cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
    cy.get("body").click(0, 0);
    cy.contains("Bucket Filters").click({ force: true });
    cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
    cy.contains(".ng-option-label", "All").click({ force: true });
    cy.get("body").click(0, 0);
    cy.contains("Geography Filters").click({ force: true });
    cy.get(this.locators.Country).click({ force: true });
    cy.get(".ng-option-label").first().click({ force: true });
    cy.get("body").click(0, 0);
    cy.reload();
    cy.wait(3000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Segment_Name_field).first().should("have.value", "");
    cy.wait(2000);
    cy.get(this.locators.Segment_Description_field).first().should("have.value", "");

}

CreateTestPage_43() {
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Segment_Name_field).first().clear();
    cy.wait(2000);
    cy.get(this.locators.Segment_Description_field).first().clear();
    cy.wait(2000);
    cy.get(this.locators.Save_segment).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.save_confirm_selection).click({ force: true });
    cy.wait(3000);
    cy.get('body').click(0, 0);
    cy.contains("Name is required").should("be.visible");
    cy.contains("Description is required").should("be.visible");
}
CreateTestPage_44() {

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment) .contains("Create Segment").click();
  cy.wait(2000);
  // Dynamic segment name with special characters
  const prefixes = ["DPD", "Recovery", "Collection", "HighRisk", "Overdue"];
  const specialChars = ["@", "#", "$", "%", "&", "*", "!"];

  const segmentName =
    `${Cypress._.sample(prefixes)}${Cypress._.sample(specialChars)}${Cypress._.random(1000,9999)}${Cypress._.sample(specialChars)}Segment`;

  cy.get(this.locators.Segment_Name_field).first().clear().type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().clear().type("Automation test for special characters in segment name.");
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "All").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true })
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(3000);
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");
  cy.contains(segmentName).should("be.visible");
}
CreateTestPage_45(){
  
}
CreateTestPage_46(){}
CreateTestPage_47(){
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.wait(1000);
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.get(".ng-value-icon").first().click({force:true});
  cy.wait(1000);
  cy.contains("Consumer Loan").should("not.exist");

}

CreateTestPage_48(){
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Advanced Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Add_filter).click({force:true});
  cy.wait(1000);
  cy.contains(".ng-option-label","Credit Score").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Delete_filter).click({force:true});
  cy.wait(1000);
  cy.contains("Credit Score").should("not.exist");

}

CreateTestPage_49(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.contains("Bucket Filters").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.contains("Geography Filters").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.contains("Advanced Filters").scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).scrollIntoView().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Save_segment).scrollIntoView().should("be.visible");

}


CreateTestPage_50(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(1000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.get(".ng-option-label", { timeout: 10000 })
    .should("have.length.greaterThan", 0);

}

CreateTestPage_51(){
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Save_segment).should("be.visible").and("be.disabled");

}

CreateTestPage_52(){
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).first().type("     Test Segment");
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation description for trimming validation.");
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Personal Loan").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "All").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(2000);
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");

}

CreateTestPage_53(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  const spaceCount = Cypress._.random(1, 20); // 1 to 20 spaces
  const segmentName = "Test Segment" + " ".repeat(spaceCount);
  cy.get(this.locators.Segment_Name_field)
  .first()
  .type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation description for trailing space validation.");
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Personal Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "All").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0, 0);
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(2000);
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");

}
CreateTestPage_54(){
  let spaceCount = 1;
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field)
  .first()
  .type(" ".repeat(spaceCount));
spaceCount++;
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().clear().type("Automation testing description");
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Personal Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(3000);
  cy.contains("Invalid request payload").should("be.visible");

}

CreateTestPage_55(){
  let spaceCount = 1;
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).first().type("Automation Segment");
  cy.wait(1000);
  cy.get(this.locators.Segment_Description_field) .first().type(" ".repeat(spaceCount)); 
  spaceCount++;
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","Consumer Loan").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","Unsecured").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","Personal Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label","All").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(3000);
  cy.contains("Description is required").should("be.visible");

}

CreateTestPage_56() {

  const segmentName = `DPD_${faker.string.alphanumeric(6).toUpperCase()}_${faker.number.int({ min: 100, max: 999 })}`;
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).first().type(segmentName);
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation testing for alphanumeric segment name.");
  cy.wait(1000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Consumer Loan") .click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0, 0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0, 0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Personal Loan").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0, 0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "All").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0, 0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(2000);
  cy.contains("Success!").should("be.visible");
}
CreateTestPage_57(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).first().type("@#$%^&*()!");
  cy.wait(2000);
  cy.get(this.locators.Segment_Description_field).first().type("Automation testing for invalid special characters.");
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","Consumer Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","Unsecured").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","Personal Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.Save_segment).click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({force:true});
  cy.wait(2000);
  cy.contains("Invalid Segment Name").should("be.visible");

}

CreateTestPage_58() {

  cy.wait(3000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").should("be.visible").click({force:true});
  cy.wait(3000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").should("be.visible").click({force:true});
  cy.wait(5000);
  const segmentName = `DPD_${faker.company.name().replace(/\s+/g, '')}_${faker.number.int({ min: 100, max: 999 })}`;
  cy.get(this.locators.Segment_Name_field, { timeout: 30000 }).first().should("be.visible");
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).first().clear({ force: true });
  cy.wait(2000);
  cy.get(this.locators.Segment_Name_field).first().type(segmentName, { delay: 100 });
  cy.wait(3000);
 const longText =
  "Collection strategy for overdue accounts between 30 and 90 days. " +
  "This segment targets customers with delinquent EMI payments across multiple product lines including personal loans, CreditCards, and home loans. " +
  "The strategy focuses on early intervention.";

const expectedText =
  "Collection strategy for overdue accounts between 30 and 90 days. This segment targets customers with delinquent EMI payments across multiple product lines including personal loans, CreditCards, and h";
cy.wait(2000);
cy.get(this.locators.Segment_Description_field)
  .first()
  .clear()
  .type(longText);
cy.wait(2000);
cy.get(this.locators.Segment_Description_field)
  .first()
  .should("have.value", expectedText);
 
}

CreateTestPage_59(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group).type("Consumer");
  cy.contains(".ng-option-label","Consumer Loan").should("be.visible");

}


CreateTestPage_60(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.product).click({force:true});
  cy.wait(2000);
  cy.get(".panel-open > .panel > .panel-collapse > .panel-body > .row > :nth-child(2) > .form-control-group > .form-ng-select > .ng-select-container").type("Unsecured");
  cy.contains(".ng-option-label","Unsecured").should("be.visible");

}

CreateTestPage_61(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(1000);
  cy.get(this.locators.Country).type("India");
  cy.wait(1000);
  cy.contains(".ng-option-label","India").should("be.visible");

}
CreateTestPage_62(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(".ng-clear-wrapper").first().click({force:true});
  cy.wait(2000);
  cy.contains("Consumer Loan").should("not.exist");

}

CreateTestPage_63() {

  cy.get(this.locators.CollectionStrategy)
    .contains("Collection Strategy")
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.Click_CreateSegment)
    .contains("Create Segment")
    .click();

  cy.wait(2000);

  cy.contains("Product Filters").click({ force: true });

  cy.wait(2000);

  // Select random Product Group
  cy.get(this.locators.product_group_arrow).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0)
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex]).click({ force: true });
    });

  cy.wait(2000);

  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Select random Product
  cy.get(this.locators.product).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 0)
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex]).click({ force: true });
    });

  cy.wait(2000);

  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Change Product Group to another random value
  cy.get(this.locators.product_group_arrow).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("have.length.greaterThan", 1)
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex]).click({ force: true });
    });

  cy.wait(2000);

  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Verify Product field no longer contains the old value
  cy.get(this.locators.product)
    .should("be.visible");
}

CreateTestPage_64() {

  cy.get(this.locators.CollectionStrategy)
    .contains("Collection Strategy")
    .click({ force: true });

  cy.wait(2000);

  cy.get(this.locators.Click_CreateSegment)
    .contains("Create Segment")
    .click();

  cy.wait(2000);

  cy.contains("Product Filters").click({ force: true });

  cy.wait(4000);

  // Product Group
  cy.get(this.locators.product_group_arrow).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("be.visible")
    .then(($options) => {
      const index = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[index]).click({ force: true });
    });

  cy.wait(2000);
  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Product
  cy.get(this.locators.product).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("be.visible")
    .then(($options) => {
      const index = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[index]).click({ force: true });
    });

  cy.wait(2000);
  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Sub Product
  cy.get(this.locators.sub_product).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("be.visible")
    .then(($options) => {
      const index = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[index]).click({ force: true });
    });

  cy.wait(2000);
  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Change Product randomly
  cy.get(this.locators.product).click({ force: true });

  cy.wait(2000);

  cy.get(".ng-option-label")
    .should("be.visible")
    .then(($options) => {
      const index = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[index]).click({ force: true });
    });

  cy.wait(2000);
  cy.get("body").click(0, 0);

  cy.wait(2000);

  // Verify sub-product field is visible
  cy.get(this.locators.sub_product)
    .should("be.visible");
}
CreateTestPage_65(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.get(this.locators.Country).click({force:true});
  cy.contains(".ng-option-label","India").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.contains(".ng-option-label","India").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Region).should("not.contain","India");

}

CreateTestPage_66(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.State).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({force:true});
  cy.get(".ng-option-label").eq(1).click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.State).should("not.have.value");

}

CreateTestPage_67(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.State).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.City).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.State).click({force:true});
  cy.get(".ng-option-label").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.City).should("not.have.value");

}

CreateTestPage_68(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Region).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.State).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.City).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Branch).click({force:true});
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.City).click({force:true});
  cy.get(".ng-option-label").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Branch).should("not.have.value");

}

CreateTestPage_69(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label",{timeout:10000})
    .should("have.length.greaterThan",0);

}
CreateTestPage_70(){
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.wait(2000);
  cy.get(".ng-dropdown-panel-items").scrollTo("bottom");
  cy.wait(2000);
  cy.get(".ng-option").last().scrollIntoView().should("be.visible");

}

CreateTestPage_071() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(2000);
    cy.contains("Add Filter").scrollIntoView().should("be.visible");

    const filters = [
        "BOM POS",
        "Credit Score",
        "Current DPD",
        "Customer Delinquency Risk Score",
        "Customer Persona",
        "Latest Disposition Code",
        "DND Flag",
        "Due Date",
        "NPA Status",
        "Principal Overdue",
        "Total Outstanding",
        "Total Overdue"
    ];

    cy.wrap(filters).each((filter) => {

        cy.get(this.locators.Add_filter).click({ force: true });
        cy.contains(".ng-option-label", filter).scrollIntoView().should("be.visible").click({ force: true });

        cy.wait(1000);

    });
     cy.get(this.locators.Delete_filter).click({ force: true });
    cy.wait(2000);
  cy.contains("BOM POS").should("not.exist");
  cy.contains("Credit Score").scrollIntoView().should("be.visible");
  cy.contains("Current DPD").scrollIntoView().should("be.visible");
  cy.contains("Customer Delinquency Risk Score").scrollIntoView().should("be.visible");
  cy.contains("Customer Persona").scrollIntoView().should("be.visible");
  cy.contains("Latest Disposition Code").scrollIntoView().should("be.visible");
  cy.contains("DND Flag").scrollIntoView().should("be.visible");
  cy.contains("Due Date").scrollIntoView().should("be.visible");
  cy.contains("NPA Status").scrollIntoView().should("be.visible");
  cy.contains("Principal Overdue").scrollIntoView().should("be.visible");
  cy.contains("Total Outstanding").scrollIntoView().should("be.visible");
  cy.contains("Total Overdue").scrollIntoView().should("be.visible");

}

CreateTestPage_072(){
  
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(2000);
    cy.contains("Add Filter").scrollIntoView().should("be.visible");

    const filters = [
        "BOM POS",
        "Credit Score",
        "Current DPD",
        "Customer Delinquency Risk Score",
        "Customer Persona",
        "Latest Disposition Code",
        "DND Flag",
        "Due Date",
        "NPA Status",
        "Principal Overdue",
        "Total Outstanding",
        "Total Overdue"
    ];

    cy.wrap(filters).each((filter) => {

        cy.get(this.locators.Add_filter).click({ force: true });
        cy.contains(".ng-option-label", filter).scrollIntoView().should("be.visible").click({ force: true });

        cy.wait(1000);

    });
    cy.wait(2000);
    for (let i = 0; i < 11; i++) {
    cy.get(this.locators.Delete_filter).click({ force: true });
    cy.wait(500);
}


}


CreateTestPage_073() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.wait(2000);
    cy.contains("Customer Persona").click({ force: true });
    cy.wait(2000)
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Customer Persona")
        .should("not.exist");

}

CreateTestPage_074() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.wait(2000);
    cy.contains(".ng-option-label", "Latest Disposition Code").click({ force: true });
    cy.wait(2000);
    cy.get("body").click(0, 0);
    cy.wait(2000);
    cy.get(this.locators.Disposition_Code_Group).click({ force: true });
    cy.wait(2000);
    cy.get(".ng-option-label")
        .should("have.length.greaterThan", 0)
        .then(($options) => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click({ force: true });
        });
    cy.wait(2000);
    cy.get("body").click(0, 0);
    cy.wait(2000);
    cy.get(this.locators.Disposition_Code).click({ force: true });
    cy.wait(2000);
    cy.get(".ng-option-label")
        .should("have.length.greaterThan", 0)
        .then(($options) => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click({ force: true });
        });
    cy.wait(2000);
    cy.get("body").click(0, 0);
    cy.wait(2000);  
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.wait(2000);
    cy.contains(".ng-option-label", "NPA Status").click({ force: true });
    cy.wait(2000);
    cy.get("body").click(0, 0);
    cy.wait(2000);
    cy.get(this.locators.NPA_Status).click({ force: true });
    cy.wait(2000);
    cy.get(".ng-option-label")
        .should("have.length.greaterThan", 0)
        .then(($options) => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click({ force: true });
        });

}
CreateTestPage_075(){
cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
cy.wait(2000);
cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
cy.wait(2000);
cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
cy.wait(2000);
cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
cy.wait(2000);
cy.contains("Advanced Filters").click({ force: true });
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Credit Score").click({ force: true });
cy.get(this.locators.CreditScore_From).clear().type("300");
cy.get(this.locators.CreditScore_To).clear().type("900");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Customer Delinquency Risk Score").click({ force: true });
cy.get(this.locators.CustomerRisk_From).clear().type("0");
cy.get(this.locators.CustomerRisk_To).clear().type("100");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Current DPD").click({ force: true });
cy.get(this.locators.CurrentDPD_From).clear().type("0");
cy.get(this.locators.CurrentDPD_To).clear().type("5000");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Customer Persona").click({ force: true });
cy.get(this.locators.CustomerPersona).clear().type("Regular Customer");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "BOM POS").click({ force: true });
cy.get(this.locators.BOMPOS_From).clear().type("1");
cy.get(this.locators.BOMPOS_To).clear().type("5000000000");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "DND Flag").click({ force: true });
cy.get(this.locators.DNDFlag).clear().type("No");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Principal Overdue").click({ force: true });
cy.get(this.locators.PrincipalOverdue_From).clear().type("1");
cy.get(this.locators.PrincipalOverdue_To).clear().type("5000000000");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Total Outstanding").click({ force: true });
cy.get(this.locators.TotalOutstanding_From).clear().type("1");
cy.get(this.locators.TotalOutstanding_To).clear().type("5000000000");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Total Overdue").click({ force: true });
cy.get(this.locators.TotalOverdue_From).clear().type("1");
cy.get(this.locators.TotalOverdue_To).clear().type("5000000000");



}
CreateTestPage_076(){
cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
cy.wait(2000);
cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
cy.wait(2000);
cy.contains("Advanced Filters").scrollIntoView().click({ force: true });
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "Customer Persona").click({ force: true });
cy.get(this.locators.CustomerPersona).clear().type("Regular Customer");
cy.wait(2000);
cy.get(this.locators.Add_filter).click({ force: true });
cy.contains(".ng-option-label", "DND Flag").click({ force: true });
cy.get(this.locators.DNDFlag).clear().type("No");
cy.wait(2000);
}

CreateTestPage_077() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({force:true});
    cy.contains(".ng-option-label","Credit Score").click({force:true});
    cy.get(this.locators.CreditScore_From).type("900");
    cy.get(this.locators.CreditScore_To).type("300");
    cy.contains("To value must be greater than or equal to From").should("be.visible");

}
CreateTestPage_078(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({force:true});
    cy.wait(2000);
    cy.contains(".ng-option-label","Current DPD").click({force:true});
    cy.get(this.locators.CurrentDPD_From).type("10.5");
    cy.get(this.locators.CurrentDPD_To).type("20.5");
    cy.get(this.locators.CurrentDPD_From).should("have.value","10.5");
    cy.get(this.locators.CurrentDPD_To).should("have.value","20.5");

}
CreateTestPage_079() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({force:true});
    cy.wait(2000);
    cy.contains(".ng-option-label","Current DPD").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CurrentDPD_From).type("-5");
    cy.get(this.locators.CurrentDPD_To).type("-1");
    cy.contains("Invalid value").should("be.visible");

}
CreateTestPage_080(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").scrollIntoView().click({ force: true });
    cy.wait(2000);
   cy.get(this.locators.Add_filter).click({ force: true });
   cy.contains(".ng-option-label", "BOM POS").scrollIntoView().should("be.visible").click({ force: true });
   cy.wait(1000);

}
CreateTestPage_081(){

  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  cy.wait(2000);
 const dpdTypes = [
    "Low_DPD",
    "Medium_DPD",
    "High_DPD",
    "Critical_DPD",
    "Recovery_DPD"
];

const descriptions = [
    "This segment includes customers with low Days Past Due who require early payment reminders and proactive follow-up to avoid further delinquency.",
    "This segment contains customers with overdue accounts identified for collection activities based on their Days Past Due and repayment behavior.",
    "This segment targets high-risk delinquent customers who have crossed the defined DPD threshold and require immediate collection actions.",
    "This segment is created for customers requiring multiple collection follow-ups, reminder notifications, and recovery campaign execution based on DPD status.",
    "This segment includes accounts that are eligible for recovery processes, payment negotiations, and advanced collection strategies based on Days Past Due."
];

const randomIndex = Cypress._.random(0, dpdTypes.length - 1);
const uniqueId = Date.now();

const segmentName = `${dpdTypes[randomIndex]}_${uniqueId}`;
const segmentDescription = descriptions[randomIndex];

cy.get(this.locators.Segment_Name_field).first().type(segmentName);
cy.get(this.locators.Segment_Description_field).first().type(segmentDescription);
  cy.contains("Product Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({force:true});
  cy.contains(".ng-option-label","Consumer Loan").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Bucket Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Month_Opening_Bucket).click({force:true});
  cy.wait(2000);
  cy.contains(".ng-option-label","All").click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.contains("Geography Filters").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Country).click({force:true});
  cy.wait(2000);
  cy.get(".ng-option-label").first().click({force:true});
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.wait(2000);
  cy.get(this.locators.Save_segment).click({force:true});
  cy.wait(2000);
  cy.get(this.locators.save_confirm_selection).click({force:true});
  cy.wait(2000);
  cy.contains("Segment created successfully").should("be.visible");

}

CreateTestPage_082() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);

    const segmentName = `Automation_Segment_${Cypress._.random(1000, 9999)}`;
    cy.get(this.locators.SegmentName).type(segmentName);
    cy.get(this.locators.Description).type(`Automation Description ${Cypress._.random(1000, 9999)}`);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Credit Score").click({ force: true });
    cy.get(this.locators.CreditScore_From).type("300");
    cy.get(this.locators.CreditScore_To).type("900");
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Customer Delinquency Risk Score").click({ force: true });
    cy.get(this.locators.CustomerRisk_From).type("0");
    cy.get(this.locators.CustomerRisk_To).type("100");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Current DPD").click({ force: true });
    cy.get(this.locators.CurrentDPD_From).type("0");
    cy.get(this.locators.CurrentDPD_To).type("5000");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Customer Persona").click({ force: true });
    cy.get(this.locators.CustomerPersona).type("Retail");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "BOM POS").click({ force: true });
    cy.get(this.locators.BOMPOS_From).type("1");
    cy.get(this.locators.BOMPOS_To).type("5000000000");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Latest Disposition Code").click({ force: true });
    cy.get(this.locators.DispositionCodeGroup).click({ force: true });
    cy.get(".ng-option-label").first().click({ force: true });
    cy.get(this.locators.DispositionCode).click({ force: true });
    cy.get(".ng-option-label").first().click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "DND Flag").click({ force: true });
    cy.get(this.locators.DNDFlag).type("No");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Due Date").click({ force: true });
    cy.get(this.locators.DueDate_Days).clear().type("0");
    cy.get(this.locators.DueDate_After).click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "NPA Status").click({ force: true });
    cy.get(this.locators.NPAStatus).click({ force: true });
    cy.contains(".ng-option-label", "Yes").click({ force: true });
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Principal Overdue").click({ force: true });
    cy.get(this.locators.PrincipalOverdue_From).type("1");
    cy.get(this.locators.PrincipalOverdue_To).type("5000000000");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Total Outstanding").click({ force: true });
    cy.get(this.locators.TotalOutstanding_From).type("1");
    cy.get(this.locators.TotalOutstanding_To).type("5000000000");
     cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Total Overdue").click({ force: true });
    cy.get(this.locators.TotalOverdue_From).type("1");
    cy.get(this.locators.TotalOverdue_To).type("5000000000");
    cy.wait(2000);
    cy.get(this.locators.Save).click({ force: true });

    cy.contains("Segment created successfully").should("be.visible");

}

CreateTestPage_083(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({force:true});
    cy.contains(".ng-option-label","Customer Persona").click();
    cy.get(this.locators.CustomerPersona).type("Retail");
    cy.get(this.locators.Add_filter).click({force:true});
    cy.contains(".ng-option-label","Customer Persona").click();
    cy.contains("Duplicate filter").should("be.visible");

}
CreateTestPage_084(){

}
CreateTestPage_085(){

}
CreateTestPage_086(){
cy.wait(2000);
cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
cy.wait(2000);
cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
cy.wait(2000);
cy.contains("Advanced Filters").click({ force: true });
cy.wait(2000);
cy.contains("Add Filter").scrollIntoView().should("be.visible");
const filters = [
    "BOM POS",
    "Credit Score",
    "Current DPD",
    "Customer Delinquency Risk Score",
    "Customer Persona",
    "Latest Disposition Code",
    "DND Flag",
    "Due Date",
    "NPA Status",
    "Principal Overdue",
    "Total Outstanding",
    "Total Overdue"
];

cy.wrap(filters).each((filter) => {
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", filter).scrollIntoView().should("be.visible").click({ force: true });
    cy.wait(1000);
});

cy.wait(2000);
cy.get(".form-label.required.mb-0")
    .should("have.length", filters.length);
}

CreateTestPage_087(){

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Credit Score").click({ force: true });
    cy.wait(1000);
    cy.get(this.locators.CreditScore_From).type("300");
    cy.get(this.locators.CreditScore_To).type("900");
    cy.get(this.locators.CreditScore_From).clear();
    cy.get(this.locators.CreditScore_To).clear();
    cy.get(".form-error")
        .should("be.visible");
    cy.get(this.locators.CreditScore_From).type("300");
    cy.get(this.locators.CreditScore_To).type("900");
    cy.get(".form-error")
        .should("not.exist");


}
CreateTestPage_088() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    cy.contains("Advanced Filters").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Add_filter).click({ force: true });
    cy.contains(".ng-option-label", "Credit Score").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CreditScore_From).type("300");
    cy.get(this.locators.CreditScore_To).type("900");
    cy.get(this.locators.CreditScore_From).clear();
    cy.get(this.locators.CreditScore_To).clear();
    cy.get(".form-error").should("be.visible");
    cy.get(this.locators.CreditScore_From).type("300");
    cy.get(this.locators.CreditScore_To).type("900");
    cy.get(".form-error").should("not.exist");

}
CreateTestPage_089(){

}
CreateTestPage_090(){

}
CreateTestPage_091(){
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
  const segmentName = `Automation_Segment_${Cypress._.random(1000, 9999)}`;
  cy.get(this.locators.SegmentName).type(segmentName);
  cy.get(this.locators.Description).type(`Automation Description ${Cypress._.random(1000, 9999)}`);
  cy.contains("Advanced Filters").click({ force: true });
  cy.wait(2000);
  cy.contains("Product Filters").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.product_group_arrow).click({ force: true });
  cy.wait(2000);
  cy.contains(".ng-option-label", "Consumer Loan").click({ force: true });
  cy.wait(2000);
  cy.get("body").click(0,0);
  cy.get(this.locators.product).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Unsecured").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.get(this.locators.sub_product).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "Personal Loan").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.contains("Bucket Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Month_Opening_Bucket).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label", "All").click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.contains("Geography Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Country).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(1000);
  cy.get("body").click(0,0);
  cy.contains("Advanced Filters").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Add_filter).click({ force: true });
  cy.wait(1000);
  cy.contains(".ng-option-label","Credit Score").click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Operator).click({ force: true });
  cy.wait(1000);
  cy.get(".ng-option-label").first().click({ force: true });
  cy.wait(1000);
  cy.get(this.locators.Value_field).type("700");
  cy.wait(1000);
  cy.get(this.locators.Save).click({ force: true });
  cy.get(this.locators.Save).click({ force: true });
  cy.get(this.locators.Save).click({ force: true });
  cy.get(this.locators.save_confirm_selection).click({ force: true });
  cy.wait(2000);
  cy.contains("Success!").should("be.visible");
  cy.contains("Segment has been created Successfully.").should("be.visible");

}
CreateTestPage_092(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Click_CreateSegment).contains("Create Segment").click({force:true});
    cy.wait(2000);
    const segmentName = `Automation Segment ${Cypress._.random(1000,9999)}`;
    cy.get(this.locators.SegmentName).type(segmentName);
    cy.get(this.locators.Description).type("Automation Testing");
    cy.contains("Advanced Filters").click({ force: true });
    const filters = [
        "BOM POS",
        "Credit Score",
        "Current DPD",
        "Customer Delinquency Risk Score",
        "Customer Persona",
        "Latest Disposition Code",
        "DND Flag",
        "Due Date",
        "NPA Status",
        "Principal Overdue",
        "Total Outstanding",
        "Total Overdue"
    ];

    cy.wrap(filters).each((filter) => {

        cy.get(this.locators.Add_filter).click({ force: true });
        cy.contains(".ng-option-label", filter).click({ force: true });

        if (filter === "BOM POS") {
            cy.get(this.locators.BOMPOS_From).type("1");
            cy.get(this.locators.BOMPOS_To).type("5000000000");
        }

        if (filter === "Credit Score") {
            cy.get(this.locators.CreditScore_From).type("300");
            cy.get(this.locators.CreditScore_To).type("900");
        }

        if (filter === "Current DPD") {
            cy.get(this.locators.CurrentDPD_From).type("0");
            cy.get(this.locators.CurrentDPD_To).type("5000");
        }

        if (filter === "Customer Delinquency Risk Score") {
            cy.get(this.locators.CustomerRisk_From).type("0");
            cy.get(this.locators.CustomerRisk_To).type("100");
        }

        if (filter === "Customer Persona") {
            cy.get(this.locators.CustomerPersona).type("Retail");
        }

        if (filter === "Latest Disposition Code") {
            cy.get(this.locators.DispositionCodeGroup).click();
            cy.get(".ng-option-label").first().click();
            cy.get(this.locators.DispositionCode).click();
            cy.get(".ng-option-label").first().click();
        }

        if (filter === "DND Flag") {
            cy.get(this.locators.DNDFlag).type("No");
        }

        if (filter === "Due Date") {
            cy.get(this.locators.DueDate_Days).clear().type("0");
            cy.get(this.locators.DueDate_After).click();
        }

        if (filter === "NPA Status") {
            cy.get(this.locators.NPAStatus).click();
            cy.contains(".ng-option-label", "Yes").click();
        }

        if (filter === "Principal Overdue") {
            cy.get(this.locators.PrincipalOverdue_From).type("1");
            cy.get(this.locators.PrincipalOverdue_To).type("5000000000");
        }

        if (filter === "Total Outstanding") {
            cy.get(this.locators.TotalOutstanding_From).type("1");
            cy.get(this.locators.TotalOutstanding_To).type("5000000000");
        }

        if (filter === "Total Overdue") {
            cy.get(this.locators.TotalOverdue_From).type("1");
            cy.get(this.locators.TotalOverdue_To).type("5000000000");
        }

    });

    cy.get(this.locators.Save).click({ force: true });

    cy.get(this.locators.Loader).should("be.visible");
    cy.get(this.locators.Loader, { timeout: 10000 }).should("not.exist");

    cy.contains("Segment created successfully").should("be.visible");

}
CreateTestPage_093(){

}
SegmentListTestPage_111(){
   cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Name").scrollIntoView().should("be.visible");
    cy.contains("Total Accounts").scrollIntoView().should("be.visible");
    cy.contains("Active Run Accounts").scrollIntoView().should("be.visible");
    cy.contains("Available").scrollIntoView().should("be.visible");
    cy.contains("Allocation").scrollIntoView().should("be.visible");
    cy.contains("Digital Strategy").scrollIntoView().should("be.visible");
    cy.contains("Campaign Name").scrollIntoView().should("be.visible");
}
SegmentListTestPage_112(){


    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Create Segment").should("be.visible").click({force:true});

}
SegmentListTestPage_113() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Name").scrollIntoView().should("be.visible");
    cy.get(this.locators.NameColumn).should("have.length.greaterThan",0);

}
SegmentListTestPage_114() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Total Accounts").scrollIntoView().should("be.visible");
    cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then((text) => {
    const totalAccounts = Number(text.trim());
    expect(totalAccounts).to.be.at.least(0);
  });

}
SegmentListTestPage_115() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Active Run Accounts").scrollIntoView().should("be.visible");
    cy.get(this.locators.ActiveRunAccountsColumn)
        .should("have.length.greaterThan",0);

}
SegmentListTestPage_116() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Available").scrollIntoView().should("be.visible");
    cy.get(this.locators.AvailableColumn)
        .should("have.length.greaterThan",0);

}
SegmentListTestPage_117() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Allocation").scrollIntoView().should("be.visible");
    cy.get('tbody tr').first().find('td').eq(4).should('not.be.empty');

}
SegmentListTestPage_118(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Strategy").scrollIntoView().should("be.visible");
    cy.get(this.locators.DigitalStrategyColumn)
        .should("have.length.greaterThan",0);

}
SegmentListTestPage_119(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.contains("Campaign Name").scrollIntoView().should("be.visible");
    cy.get(this.locators.CampaignNameColumn)
        .should("have.length.greaterThan",0);

}

SegmentListTestPage_120() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RefreshButton).click();
    cy.wait(3000);
    cy.contains("Success! Refreshed count for").should("be.visible");

}
SegmentListTestPage_121() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);

    cy.contains("Segment List").click();
    cy.wait(2000);

    cy.get(this.locators.RefreshButton).click();
    cy.wait(3000);

    cy.get(this.locators.ActiveRunAccountsColumn).should("have.length.greaterThan", 0);

}
SegmentListTestPage_122(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RefreshButton).click();
    cy.wait(3000);
    cy.get(this.locators.AvailableColumn).should("have.length.greaterThan", 0);


}
SegmentListTestPage_123(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($rows[randomIndex])
            .find('td:nth-child(5) .d-flex > :nth-child(1)')
            .scrollIntoView()
            .should('be.visible');

    });

}
SegmentListTestPage_124() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($rows[randomIndex])
            .find('td:nth-child(5) .d-flex > :nth-child(2)')
            .scrollIntoView()
            .should('be.visible');

    });

}
SegmentListTestPage_125() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(".form-select").select("50");
    cy.wait(2000);
    cy.get('tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($rows[randomIndex])
            .find('td:nth-child(5) .d-flex > :nth-child(2)')
            .scrollIntoView()
            .should('be.visible');

    });

}
SegmentListTestPage_126() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(".form-select").select("50");
    cy.wait(2000);
     cy.get('tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($rows[randomIndex])
            .find('td:nth-child(5) .d-flex > :nth-child(1)')
            .scrollIntoView()
            .should('be.visible');

    });
    cy.wait(2000);
     cy.get('tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($rows[randomIndex])
            .find('td:nth-child(5) .d-flex > :nth-child(2)')
            .scrollIntoView()
            .should('be.visible');

    });
    cy.wait(2000);
      cy.get('tbody tr')
    .should('have.length.greaterThan', 0)
    .then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($rows[randomIndex])
            .find('td:nth-child(5) .d-flex > :nth-child(2)')
            .scrollIntoView()
            .should('be.visible');

    });

}
SegmentListTestPage_127() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategyColumn)
        .first()
        .invoke("text")
        .should("not.equal", "-");

}
SegmentListTestPage_128() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr').then(($rows) => {

    const randomIndex = Cypress._.random(0, $rows.length - 1);

    cy.wrap($rows[randomIndex])
        .scrollIntoView()
        .find('td:nth-child(6)')
        .invoke('text')
        .then((text) => {

            const value = text.trim();

            cy.log(`Column Value: ${value}`);

            expect(value).to.not.equal('');

        });

});
}
SegmentListTestPage_129(){
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignNameColumn)
        .first()
        .invoke("text")
        .should("not.equal", "-");

}
SegmentListTestPage_130() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('tbody tr').then(($rows) => {

    const randomIndex = Cypress._.random(0, $rows.length - 1);

    cy.wrap($rows[randomIndex])
        .scrollIntoView()
        .find('td:nth-child(7)')
        .invoke('text')
        .then((text) => {

            const value = text.trim();

            cy.log(`Column 7 Value: ${value}`);

            expect(value).to.not.equal('');

            if (value === '-') {
                cy.log('No data available.');
            } else {
                cy.log('Data found: ' + value);
            }

        });

});

}
SegmentListTestPage_131() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
  cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
  const randomIndex = Math.floor(Math.random() * $buttons.length);

  cy.wrap($buttons.eq(randomIndex)).click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Duplicate')) {
      cy.get('.dropdown-item').contains('Duplicate').click({ force: true });
      cy.contains('Duplicate Segment').should('be.visible');
    } else {
      cy.log('Duplicate option not found');
    }
  });
});

}
SegmentListTestPage_132() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
  const randomIndex = Math.floor(Math.random() * $buttons.length);

  cy.wrap($buttons.eq(randomIndex)).click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Duplicate')) {
      cy.get('.dropdown-item').contains('Duplicate').click({ force: true });
      cy.contains('Duplicate Segment').should('be.visible');
    } else {
      cy.log('Duplicate option not found');
    }
  });
});
  cy.wait(2000);
  cy.get('.col-md-6 > .form-control-group > .form-control').invoke('val').should('not.be.empty');
  cy.wait(2000);
  cy.get('.col-md-12 > .form-control-group > .form-control').invoke('val').should('not.be.empty');

}
SegmentListTestPage_133() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
  const randomIndex = Math.floor(Math.random() * $buttons.length);

  cy.wrap($buttons.eq(randomIndex)).click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Duplicate')) {
      cy.get('.dropdown-item').contains('Duplicate').click({ force: true });
      cy.contains('Duplicate Segment').should('be.visible');
    } else {
      cy.log('Duplicate option not found');
    }
  });
});
  cy.wait(2000);
  cy.get('.col-md-6 > .form-control-group > .form-control').invoke('val').should('not.be.empty');
  cy.wait(2000);

}
SegmentListTestPage_134() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
  const randomIndex = Math.floor(Math.random() * $buttons.length);

  cy.wrap($buttons.eq(randomIndex)).click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Duplicate')) {
      cy.get('.dropdown-item').contains('Duplicate').click({ force: true });
      cy.contains('Duplicate Segment').should('be.visible');
    } else {
      cy.log('Duplicate option not found');
    }
  });
});
cy.wait(2000);
    const segmentName = `Duplicate Segment ${Cypress._.random(1000,9999)}`;
    cy.wait(2000);
    cy.get(this.locators.SegmentName).clear().type(segmentName);
    cy.wait(2000);
    cy.get(this.locators.Save).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.save_confirm_selection).click({force:true});
    cy.wait(2000);
    cy.contains("Segment has been created Successfully.").should("be.visible");

}
SegmentListTestPage_135() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
     cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
  const randomIndex = Math.floor(Math.random() * $buttons.length);

  cy.wrap($buttons.eq(randomIndex)).click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Duplicate')) {
      cy.get('.dropdown-item').contains('Duplicate').click({ force: true });
      cy.contains('Duplicate Segment').should('be.visible');
    } else {
      cy.log('Duplicate option not found');
    }
  });
});
    cy.wait(2000);
    cy.get(this.locators.Save).click();
    cy.wait(2000);
    cy.get(this.locators.save_confirm_selection).click({force:true});
    cy.wait(2000);
    cy.contains("A segment with same name already exists. Please use another name.").should("be.visible");

}
SegmentListTestPage_136() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click();
});
    cy.wait(2000);
    cy.get(this.locators.AddToCampaign).click({ force: true });
    cy.wait(2000);
    cy.contains("Add to Campaign").should("be.visible");

}
SegmentListTestPage_137() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click();
});
    cy.wait(2000);
    cy.get(this.locators.AddToCampaign).first().click();
    cy.wait(2000);
    const prefixes = ['Summer', 'Winter', 'Retail', 'Digital', 'Growth', 'Sales'];
    const prefix = Cypress._.sample(prefixes);
    const campaignName = `${prefix}_Campaign_${Cypress._.random(1000, 9999)}`;
    cy.get('.form-control').clear().type(campaignName);
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.get('.ng-option').then(($options) => {
    const randomIndex = Cypress._.random(0, $options.length - 1);
    cy.wrap($options.eq(randomIndex)).click();
});
    cy.get(".btn-secondary").contains('Add to Campaign').click({force:true});
    cy.wait(2000);
    cy.contains("Campaign created successfully!").should("be.visible");

}
SegmentListTestPage_138() {

     cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click();
});
    cy.wait(2000);
    cy.get(this.locators.AddToCampaign).first().click();
    cy.wait(2000);
    const prefixes = ['Summer', 'Winter', 'Retail', 'Digital', 'Growth', 'Sales'];
    const prefix = Cypress._.sample(prefixes);
    const campaignName = `${prefix}_Campaign_${Cypress._.random(1000, 9999)}`;
    cy.get('.form-control').clear().type(campaignName);
    cy.wait(2000);
    cy.get('.ng-arrow-wrapper').click({force:true});
    cy.get('.ng-option').then(($options) => {
    const randomIndex = Cypress._.random(0, $options.length - 1);
    cy.wrap($options.eq(randomIndex)).click();
    });
    cy.get(".btn-secondary").contains('Add to Campaign').click({force:true});
    cy.wait(2000);
    cy.contains("Success Campaign created successfully!").should("be.visible");

}
SegmentListTestPage_139() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click();
    });
    cy.wait(2000);
    cy.get(this.locators.View).first().click({ force: true });
    cy.wait(2000);
    cy.contains("View Segment").should("be.visible");

}
SegmentListTestPage_140() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click();
    });
    cy.wait(2000);
    cy.get(this.locators.View).first().click({ force: true });
    cy.wait(2000);
    cy.contains("View Segment").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SegmentName).should("be.disabled");
    cy.wait(2000);
    cy.get(this.locators.Segment_Description_field).should("be.disabled");

}
SegmentListTestPage_141() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click();
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click();
    });
    cy.wait(2000);
    cy.get(this.locators.View).first().click({ force: true });
    cy.wait(2000);
    cy.contains("View Segment").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SegmentName).should("not.have.value", "");
    cy.get(this.locators.Description).should("not.have.value", "");

}
SegmentListTestPage_142() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.NextPage).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PreviousPage).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PageNumber).should("be.visible");

}


SegmentListTestPage_145() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    const start = Date.now();
    cy.contains("Segment List").click();
    cy.get(this.locators.NameColumn).should("be.visible").then(() => {

        const end = Date.now();
        const loadTime = end - start;

        cy.log("Page Load Time: " + loadTime + " ms");

        expect(loadTime).to.be.lessThan(5000);

    });

}
SegmentListTestPage_146() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Segment List").click({force:true});
    cy.wait(2000);
    cy.reload();
    cy.wait(3000);
    cy.contains("Segment List").should("exist").scrollIntoView();
    cy.contains("Manage Segments").scrollIntoView().should("be.visible");
    cy.get(this.locators.NameColumn)
        .should("have.length.greaterThan", 0);

}

DesignDigitalStrategyTestPage_147() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.contains("Design Digital Strategy").should("be.visible");
    cy.get(this.locators.DescribeDigitalStrategy).should("be.visible");
    cy.get(this.locators.GenerateStrategy).should("be.visible");

}
DesignDigitalStrategyTestPage_148() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.DescribeDigitalStrategy).should("be.visible").and("be.enabled");

}

DesignDigitalStrategyTestPage_149() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    const description = "Create a digital strategy for customers with DPD greater than 30 using SMS followed by WhatsApp and Call.";

    cy.get(this.locators.DescribeDigitalStrategy).type(description);

    cy.get(this.locators.DescribeDigitalStrategy)
        .should("have.value", description);

}
DesignDigitalStrategyTestPage_150() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.GenerateStrategy).click();
    cy.get(".form-error").should("be.visible");

}

DesignDigitalStrategyTestPage_151() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    const longText = "Digital Strategy ".repeat(500);

    cy.get(this.locators.DescribeDigitalStrategy)
        .type(longText, { delay: 0 });

}

DesignDigitalStrategyTestPage_152() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.DescribeDigitalStrategy)
        .type("@#$%^&*()_+{}[]<>?/! Collection Strategy");

    cy.get(this.locators.DescribeDigitalStrategy)
        .should("contain.value", "@#$");

}

DesignDigitalStrategyTestPage_153() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.DescribeDigitalStrategy).type("Generate a collection strategy for high-risk customers with DPD above 60 using SMS, WhatsApp, and Call.");
    cy.get(this.locators.GenerateStrategy).click();
    cy.get(this.locators.GeneratedStrategy).should("be.visible");

}

DesignDigitalStrategyTestPage_154() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.DescribeDigitalStrategy).type("Generate a collection strategy.");
    cy.get(this.locators.GenerateStrategy).click();
    cy.get(this.locators.Loader).should("be.visible");
    cy.get(this.locators.Loader, { timeout: 30000 }).should("not.exist");

}

DesignDigitalStrategyTestPage_155() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.DescribeDigitalStrategy).type("Generate strategy for medium-risk customers with DPD 90.");
    cy.get(this.locators.GenerateStrategy).click();
    cy.get(this.locators.GeneratedStrategy).should("be.visible");

}

DesignDigitalStrategyTestPage_156() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DesignDigitalStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.DescribeDigitalStrategy).type("Generate a strategy for low-risk customers using SMS.");
    cy.get(this.locators.GenerateStrategy).click();
    cy.get(this.locators.CommunicationStrategyName).should("be.visible").invoke("val").should("not.be.empty");

}

DigitalStrategiesTestPage_199() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.contains("Digital Strategies").scrollIntoView().should("be.visible");
    cy.contains("Strategy").scrollIntoView().should("be.visible");
    cy.contains("Channels").scrollIntoView().should("be.visible");
    cy.contains("Duration").scrollIntoView().should("be.visible");
    cy.contains("Steps").scrollIntoView().should("be.visible");
    cy.contains("Created Date").scrollIntoView().should("be.visible");

}

DigitalStrategiesTestPage_200() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get(this.locators.CreateStrategy).click();
    cy.wait(2000);
    cy.contains("Design Digital Strategy").should("be.visible");

}
DigitalStrategiesTestPage_201() {
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click({ force: true });
    cy.wait(3000);
    cy.contains("Strategy").should("be.visible");
    cy.wait(2000);
    cy.get("tbody .actions")
        .should("have.length.greaterThan", 0)
        .then(($strategies) => {

            const randomIndex = Cypress._.random(0, $strategies.length - 1);

            cy.log(`Selected Strategy Row: ${randomIndex + 1}`);

            cy.wrap($strategies.eq(randomIndex))
                .scrollIntoView()
                .invoke("text")
                .then((strategyName) => {

                    cy.log(`Strategy Name: ${strategyName.trim()}`);

                    expect(strategyName.trim()).to.not.equal("");
                });

        });

}

DigitalStrategiesTestPage_202() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.contains("Channels").should("be.visible");
    cy.get(this.locators.ChannelsColumn).should("have.length.greaterThan", 0);

}

DigitalStrategiesTestPage_203() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.contains("Duration").should("be.visible");
    cy.get(this.locators.DurationColumn).should("have.length.greaterThan", 0);
}

DigitalStrategiesTestPage_204() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.contains("Steps").should("be.visible");
    cy.get(this.locators.StepsColumn).should("have.length.greaterThan", 0);

}
DigitalStrategiesTestPage_205() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.contains("Created Date").should("be.visible");
    cy.get(this.locators.CreatedDateColumn).should("have.length.greaterThan", 0);

}

DigitalStrategiesTestPage_206() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get(this.locators.Date_Select).select('50');
    cy.wait(2000);
    cy.get('tbody tr').should('have.length.greaterThan', 0);
    cy.get('tbody tr').each(($row) => {

    cy.wrap($row)
        .find('td:nth-child(1) div:nth-child(1) button:nth-child(1)')
        .should('exist').scrollIntoView()
        .and('be.visible');

});

}

DigitalStrategiesTestPage_207() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.log(`Random Row Selected: ${randomIndex + 1}`);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });

    });
    cy.get(":nth-child(2) > .dropdown-item").contains("Duplicate").should("be.visible");

}

DigitalStrategiesTestPage_208() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Strategy: ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.get(":nth-child(2) > .dropdown-item").contains('Duplicate', { timeout: 10000 }) .should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.contains("Design Digital Strategy").should("be.visible");

}

DigitalStrategiesTestPage_209() {

    let strategyName;

    cy.get(this.locators.CollectionStrategy)
        .contains("Collection Strategy")
        .click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.DigitalStrategies)
        .click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.Total_page)
        .select("50", { force: true });

    cy.wait(3000);

    cy.get("tbody tr").then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Selected Row: ${randomIndex + 1}`);

        // Print every column of the selected row
        cy.wrap($rows.eq(randomIndex))
            .find("td")
            .each(($td, index) => {
                cy.log(`Column ${index + 1}: ${$td.text().trim()}`);
            });

        // <-- CHANGE THIS COLUMN AFTER CHECKING THE LOGS
        cy.wrap($rows.eq(randomIndex))
            .find("td:nth-child(2)")
            .invoke("text")
            .then((text) => {

                strategyName = text.trim();

                cy.log("Captured Strategy Name: " + strategyName);

                // Click Action button
                cy.wrap($rows.eq(randomIndex))
                    .find(".action-icon-button")
                    .click({ force: true });

                cy.wait(2000);

                // Click Duplicate
                cy.contains(".dropdown-item", "Duplicate")
                    .click({ force: true });

                cy.wait(3000);

                // Verify pre-populated Strategy Name
                cy.get(this.locators.CommunicationStrategyName)
                    .should("be.visible")
                    .invoke("val")
                    .then((value) => {

                        cy.log("Form Strategy Name: " + value);

                        expect(value.trim()).to.equal(strategyName);

                    });

            });

    });

}

DigitalStrategiesTestPage_210() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Strategy: ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.get(":nth-child(2) > .dropdown-item").contains('Duplicate').click({ force: true });
    cy.wait(3000);
    cy.get(".form-control").should('be.visible').clear();
    cy.contains('Duplicate Strategy').click({ force: true });
    cy.contains("Digital Strategy Name is required").should("be.visible");

  


}

DigitalStrategiesTestPage_211() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get(this.locators.ActionsMenu).first().click();
    cy.contains("Duplicate").click();
    const strategyName = `Digital Strategy ${Cypress._.random(1000,9999)}`;
    cy.get(this.locators.CommunicationStrategyName).clear().type(strategyName);
    cy.wait(2000);
    cy.get(this.locators.SaveStrategy).click();
    cy.contains("Strategy saved successfully").should("be.visible");

}

DigitalStrategiesTestPage_212() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get("tbody tr:nth-child(2) td:nth-child(1) div:nth-child(1) button:nth-child(1)").click({force:true});
    cy.wait(2000);
    cy.get(":nth-child(2) > .dropdown-item").contains("Duplicate").click();
    cy.wait(2000);
    cy.get("input[placeholder='Enter strategy name']").clear().type("ReminderWhatsappSoft");
    cy.wait(2000);
    cy.contains("Duplicate Strategy").click();
    cy.contains("A segment with same name already exists. Please use another name.").should("be.visible");

}

DigitalStrategiesTestPage_213() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DigitalStrategies).click({ force: true });
  cy.wait(2000);
  cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)').should('have.length.greaterThan', 0)
    .then(($buttons) => {

      const randomIndex = Cypress._.random(0, $buttons.length - 1);

      cy.log(`Selected Strategy Index: ${randomIndex}`);

      cy.wrap($buttons.eq(randomIndex)).scrollIntoView().click({ force: true });
    });

  cy.wait(2000);

  cy.contains('.dropdown-item', 'View').should('be.visible').and('not.have.class', 'disabled');
}

DigitalStrategiesTestPage_214() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
     cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Strategy: ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains("View").click({ force: true });
    cy.contains("Design Digital Strategy").should("be.visible");

}
DigitalStrategiesTestPage_215() {
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
  cy.wait(2000);
  cy.get(this.locators.DigitalStrategies).click({ force: true });
  cy.wait(2000);
  cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click({ force: true });
  });
  cy.wait(2000);
  cy.contains('.dropdown-item', 'View').click({ force: true });
  cy.wait(2000);

  cy.get(this.locators.CommunicationStrategyName)
    .should("be.visible")
    .should(($el) => {
      const isLocked = $el.attr("readonly") !== undefined || $el.attr("disabled") !== undefined;
      expect(isLocked, "field should be readonly or disabled in View mode").to.be.true;
    });
  cy.wait(2000);
  cy.get(this.locators.Timeline).scrollIntoView().should("be.visible")
  cy.wait(2000);
  cy.get(this.locators.Alsuggestedmessage) .scrollIntoView().should("be.visible")
  cy.wait(2000);
  cy.get(this.locators.Strategy_Decisions).scrollIntoView().should("be.visible")
    
}

DigitalStrategiesTestPage_216() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
     cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click({ force: true });
});
    cy.get(":nth-child(1) > .dropdown-item").contains("View").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CommunicationStrategyName).should("not.have.value", "");
    cy.wait(2000);
    cy.get(this.locators.Timeline).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Alsuggestedmessage).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Strategy_Decisions).scrollIntoView().should("be.visible");

}

DigitalStrategiesTestPage_217() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click({ force: true });
});
    cy.get(":nth-child(1) > .dropdown-item").contains("View").click({ force: true });
    cy.get(this.locators.TimelineSection).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.TimelineRows).should("have.length.greaterThan", 0);

}


DigitalStrategiesTestPage_218() {
  cy.wait(2000);
  cy.wait(2000);
  cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
  cy.wait(2000);
  cy.get(this.locators.DigitalStrategies).contains("Digital Strategies").click({force:true});
  cy.wait(2000);
  cy.get('tbody > :nth-child(1) > :nth-child(2)')
  .invoke('text')
  .then((text) => {
    expect(text).to.match(/SMS|WhatsApp|Email|Call|Field/);
  });
}

DigitalStrategiesTestPage_219() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get('.actions > .d-flex > .action-icon-button').then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.wrap($buttons.eq(randomIndex)).click({ force: true });
});
    cy.get(":nth-child(1) > .dropdown-item").contains("View").click({ force: true });
    cy.get(this.locators.DurationValue).should("be.visible").should("not.be.empty");

}

DigitalStrategiesTestPage_220() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get(this.locators.ActionsMenu).first().click({ force: true });
    cy.contains("View").click({ force: true });
    cy.get(this.locators.TimelineRows).then(($rows) => {
        const actualSteps = $rows.length;
        cy.get(this.locators.StepCount)
            .invoke("text")
            .then((text) => {

                expect(parseInt(text.trim())).to.eq(actualSteps);

            });

    });

}

DigitalStrategiesTestPage_221() {
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalStrategies).click();
    cy.wait(2000);
    cy.get(this.locators.NextPage).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PreviousPageds).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PageNumberds).should("be.visible");

}

SetUpDigitalCampaignTestPage_222() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(5000);
    cy.get(".title").contains("Set up Digital Campaign").scrollIntoView().should("be.visible");
    cy.get(this.locators.CampaignName).should("be.visible");
    cy.get(this.locators.SelectStrategy).should("be.visible");
    cy.get(this.locators.SelectSegment).should("be.visible");

}

SetUpDigitalCampaignTestPage_223() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).should("be.visible").and("be.enabled");

}

SetUpDigitalCampaignTestPage_224() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(8000);
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.get(".form-error").should("be.visible");

}

SetUpDigitalCampaignTestPage_225() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    const campaign = `Digital Campaign ${Cypress._.random(1000,9999)}`;
    cy.get(this.locators.CampaignName).type(campaign);
    cy.get(this.locators.CampaignName)
        .should("have.value", campaign);

}

SetUpDigitalCampaignTestPage_226() {
 let campaignNames = [];
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaigns").scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.wait(2000);
    cy.get(':nth-child(1) > .actions').each(($el) => {
        campaignNames.push($el.text().trim());
    }).then(() => {

        const randomCampaign =
            campaignNames[Math.floor(Math.random() * campaignNames.length)];

        cy.log("Selected Campaign: " + randomCampaign);
     
        cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.CampaignName).clear().type(randomCampaign);
        cy.wait(2000);
        cy.get(this.locators.SelectedStrategy).click();
        cy.get('.ng-dropdown-panel-items .ng-option').then($options => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
  });
      
    });
    cy.get(this.locators.Select_Segment).click();
    cy.get('.ng-dropdown-panel-items .ng-option').then($options => {
    const randomIndex = Math.floor(Math.random() * $options.length);

    cy.wrap($options[randomIndex]).click();
  });
  cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.get("Error! A campaign with same name already exists. Please use another name.").should("be.visible");
}

SetUpDigitalCampaignTestPage_227() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName)
      .first()
      .clear()
      .type("           ");

    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click({ force: true });
    cy.get(".form-error").should("be.visible");
}

SetUpDigitalCampaignTestPage_228() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy") .click();
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    const longName = "Campaign".repeat(100);
    cy.get(this.locators.CampaignName)
  .first()
  .clear()
  .type(longName)
  .invoke('val')
  .then((value) => {
    cy.log(`Accepted length: ${value.length}`);
    console.log(`Accepted length: ${value.length}`);
    console.log(`Accepted value: ${value}`);
  });

}
SetUpDigitalCampaignTestPage_229() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type("@#$%^&* Campaign");
    cy.get(this.locators.CampaignName).should("contain.value","@#$");

}

SetUpDigitalCampaignTestPage_230() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(".ng-dropdown-panel").should("be.visible");

}

SetUpDigitalCampaignTestPage_231() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(".ng-option").should("have.length.greaterThan",0);

}

SetUpDigitalCampaignTestPage_232() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
  cy.get('.secondary-text-color').each(($el) => {
  const text = $el.text();

  expect(text).to.match(/Day|Days/i);
  expect(text).to.match(/Email|SMS|WhatsApp|Call|Field/i);
});

}

SetUpDigitalCampaignTestPage_233() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategyOptions).first().click();
    cy.get(this.locators.SelectedStrategy).should("have.length",1);

}
SetUpDigitalCampaignTestPage_234() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategySearch).type("Digital");
    cy.get(this.locators.StrategyOptions).should("have.length.greaterThan",0);

}

SetUpDigitalCampaignTestPage_235() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategySearch).type("XYZ123456");
    cy.contains("No items found").should("be.visible");

}

SetUpDigitalCampaignTestPage_236() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.SelectedStrategy).should("be.visible");

}

SetUpDigitalCampaignTestPage_237() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.get(".form-error").should("be.visible");

}

SetUpDigitalCampaignTestPage_238() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(".ng-dropdown-panel").should("be.visible");

}

SetUpDigitalCampaignTestPage_239() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).should("have.length.greaterThan",0);

}

SetUpDigitalCampaignTestPage_240() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.contains("Total").should("be.visible");
    cy.contains("Active").should("be.visible");
    cy.contains("Available").should("be.visible");

}

SetUpDigitalCampaignTestPage_241() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).first().click();
    cy.get(this.locators.SelectedSegment).should("have.length",1);

}

SetUpDigitalCampaignTestPage_242() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).first().click();
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SelectedSegment).should("be.visible");

}

SetUpDigitalCampaignTestPage_243() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentSearch).type("Segment");
    cy.get(this.locators.SegmentOptions).should("have.length.greaterThan", 0);

}
SetUpDigitalCampaignTestPage_244() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
        cy.get(this.locators.CampaignName).clear().type("New Campaign");
        cy.wait(2000);
        cy.get(this.locators.SelectedStrategy).click();
        cy.get('.ng-dropdown-panel-items .ng-option').then($options => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
  });

    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.get(".form-error").should("be.visible");

}

SetUpDigitalCampaignTestPage_245() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type("Automation Campaign");
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.contains("Please select a strategy").should("be.visible");

}

SetUpDigitalCampaignTestPage_246() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type("Automation Campaign");
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.contains("Please select a segment").should("be.visible");

}

SetUpDigitalCampaignTestPage_247() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectedStrategy).click();
    cy.get('.ng-dropdown-panel-items .ng-option').then($options => {

        const firstIndex = Math.floor(Math.random() * $options.length);
        const firstStrategy = $options[firstIndex].innerText.split('\n')[0].trim();

        cy.wrap($options[firstIndex]).click();


        cy.get(this.locators.SelectedStrategy).click();

        cy.get('.ng-dropdown-panel-items .ng-option').then($newOptions => {

            let secondIndex;
            let secondStrategy;

            do {
                secondIndex = Math.floor(Math.random() * $newOptions.length);
                secondStrategy = $newOptions[secondIndex].innerText.split('\n')[0].trim();
            } while (secondStrategy === firstStrategy);

            cy.wrap($newOptions[secondIndex]).click();

            cy.get('#strategyCtrlGroup .ng-select-container')
                .invoke('text')
                .then((text) => {

                    const selectedStrategy = text
                        .replace('Type to search more strategies...', '')
                        .replace('×', '')
                        .replace(/\s+/g, ' ')
                        .trim();

                    expect(selectedStrategy).to.contain(secondStrategy);
                    expect(selectedStrategy).not.to.contain(firstStrategy);

                    cy.log('Previous Strategy: ' + firstStrategy);
                    cy.log('Current Strategy: ' + secondStrategy);
                });

        });

    });

}


SetUpDigitalCampaignTestPage_248() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Select_Segment).click();
    cy.get('.ng-dropdown-panel-items .ng-option').then($options => {
        const firstIndex = Math.floor(Math.random() * $options.length);
        const firstSegment = $options[firstIndex].innerText.split('\n')[0].trim();
        cy.wrap($options[firstIndex]).click();
        cy.get(this.locators.Select_Segment).click();

        cy.get('.ng-dropdown-panel-items .ng-option').then($newOptions => {

            let secondIndex;
            let secondSegment;

            do {
                secondIndex = Math.floor(Math.random() * $newOptions.length);
                secondSegment = $newOptions[secondIndex].innerText.split('\n')[0].trim();
            } while (secondSegment === firstSegment);

            cy.wrap($newOptions[secondIndex]).click();
            cy.get('#segmentCtrlGroup .ng-select-container')
                .invoke('text')
                .then((text) => {

                    const selectedSegment = text
                        .replace('Type to search more segments...', '')
                        .replace('×', '')
                        .replace(/\s+/g, ' ')
                        .trim();

                    expect(selectedSegment).to.contain(secondSegment);
                    expect(selectedSegment).not.to.contain(firstSegment);

                    cy.log("Previous Segment: " + firstSegment);
                    cy.log("Current Segment: " + secondSegment);
                });

        });

    });

}
SetUpDigitalCampaignTestPage_249() {

    const campaign = `Automation Campaign ${Cypress._.random(1000,9999)}`;

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type(campaign);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategyOptions).first().click();
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).first().click();
    cy.get(this.locators.SaveCampaign).click();
    cy.contains("Campaign created successfully").should("be.visible");

}

SetUpDigitalCampaignTestPage_250() {

    const campaign = `Automation Campaign ${Cypress._.random(1000,9999)}`;

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type(campaign);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategyOptions).first().click();
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).first().click();
    cy.get(this.locators.SaveCampaign).click();
    cy.contains("Campaign created successfully").should("be.visible");

}


SetUpDigitalCampaignTestPage_251() {

    const campaign = `Automation Campaign ${Cypress._.random(1000, 9999)}`;
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).first().type(campaign);
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get(this.locators.SegmentOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click();
    cy.wait(3000);
    cy.reload();
    cy.wait(2000);
    cy.get(':nth-child(1) > .actions')
      .should('be.visible')
      .should('contain.text', campaign);

}
SetUpDigitalCampaignTestPage_252() {

    const campaign = `Automation Campaign ${Cypress._.random(1000,9999)}`;

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true}); 
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click(); 
    cy.wait(2000);
    cy.get(this.locators.CampaignName).first().type(campaign); 
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click(); 
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).first().click(); 
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click(); 
    cy.wait(2000);
    cy.get(this.locators.SegmentOptions).first().click(); 
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).dblclick();
    cy.contains("Campaign created successfully").should("be.visible");
    cy.reload(); cy.wait(2000);
    cy.wait(2000);
    cy.get(':nth-child(1) > .actions')
      .filter(`:contains("${campaign}")`)
      .should('have.length', 1);

}

SetUpDigitalCampaignTestPage_253() {

    const campaign = `Automation Campaign ${Cypress._.random(1000,9999)}`;

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).first().type(campaign);
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get(this.locators.SegmentOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click();
     cy.contains("Loading...").should("be.visible");
    cy.wait(2000);
  

}
SetUpDigitalCampaignTestPage_254() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).invoke("attr", "placeholder").should("not.be.empty");

}

SetUpDigitalCampaignTestPage_255() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectedStrategy).click();
    cy.contains("Type to search more strategies...").should("be.visible");

}

SetUpDigitalCampaignTestPage_256() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.contains("Type to search more segments...").should("be.visible");

}

SetUpDigitalCampaignTestPage_257() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(".ng-dropdown-panel").should("be.visible");

}

SetUpDigitalCampaignTestPage_258() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(".ng-dropdown-panel").should("be.visible");

}

SetUpDigitalCampaignTestPage_259() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategyOptions).first().click();
    cy.get(".ng-dropdown-panel").should("not.exist");

}

SetUpDigitalCampaignTestPage_260() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).first().click();
    cy.get(".ng-dropdown-panel").should("not.exist");

}

SetUpDigitalCampaignTestPage_261() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(".ng-dropdown-panel-items").scrollTo("bottom");
    cy.wait(2000);
    cy.get(".ng-dropdown-panel-items").scrollTo("top");

}

SetUpDigitalCampaignTestPage_262() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get(".ng-dropdown-panel-items").scrollTo("bottom");
    cy.wait(2000);
    cy.get(".ng-dropdown-panel-items").scrollTo("top");

}

SetUpDigitalCampaignTestPage_263() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel-items .ng-option')
        .first()
        .then(($option) => {

            const strategy = $option
                .text()
                .split('\n')[0]
                .trim();

            cy.wrap($option).click();

            // Verify the selected strategy
            cy.get('#strategyCtrlGroup .ng-select-container')
                .invoke('text')
                .then((text) => {

                    const selected = text
                        .replace('Type to search more strategies...', '')
                        .replace('×', '')
                        .replace(/\s+/g, ' ')
                        .trim();

                    expect(selected).to.contain(strategy);
                });

        });

}

SetUpDigitalCampaignTestPage_264() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel-items .ng-option')
        .first()
        .then(($option) => {
            const segmentName = $option.text().split('\n')[0].trim();

            cy.wrap($option).click();

            cy.wait(2000);
            cy.get('#segmentCtrlGroup .ng-select-container')
                .invoke('text')
                .then((text) => {

                    const selectedSegment = text
                        .replace('Type to search more segments...', '')
                        .replace('×', '')
                        .replace(/\s+/g, ' ')
                        .trim();

                    expect(selectedSegment).to.contain(segmentName);

                });

        });

}

SetUpDigitalCampaignTestPage_265() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get('.ng-dropdown-panel-items .ng-option').each(($option) => {

        cy.wrap($option)
            .find('.secondary-text-color')
            .should('be.visible')
            .scrollIntoView()
            .invoke('text')
            .then((text) => {

                expect(text).to.include('Total');
                expect(text).to.include('Active');
                expect(text).to.include('Available');

            });

    });

}

SetUpDigitalCampaignTestPage_266() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.contains("0").click({ force: true });
    cy.get(this.locators.SaveCampaign).should("be.visible");

}

SetUpDigitalCampaignTestPage_267() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(1000);
    cy.get("body").click(0, 0);
    cy.wait(1000);
    cy.get(".form-error").should("be.visible");
    cy.get(this.locators.SelectStrategy).click();
    cy.get(".ng-dropdown-panel-items .ng-option").first().click();
    cy.wait(2000);
    cy.get(".form-error").should("not.exist");

}

SetUpDigitalCampaignTestPage_268() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get(".ng-dropdown-panel-items .ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get("body").click(0, 0);
    cy.wait(1000);
    cy.get(".form-error").should("be.visible");
    cy.get(this.locators.SelectSegment).click();
    cy.get(".ng-dropdown-panel-items .ng-option").first().click();
    cy.wait(2000);
    cy.get(".form-error").should("not.exist");

}
SetUpDigitalCampaignTestPage_269() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).should("be.disabled");
    cy.get(this.locators.CampaignName).type(`Automation Campaign ${Cypress._.random(1000,9999)}`);
    cy.get(this.locators.SaveCampaign).should("be.disabled");

}

SetUpDigitalCampaignTestPage_274() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);

    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);

    cy.get(this.locators.SelectStrategy).click();

    cy.get(this.locators.StrategySearch).type("Dig");

    cy.get(this.locators.StrategyOptions)
        .should('have.length.greaterThan',0);

}

SetUpDigitalCampaignTestPage_275() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);

    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);

    cy.get(this.locators.SelectSegment).click();

    cy.get(this.locators.SegmentSearch).type("Seg");

    cy.get(this.locators.SegmentOptions)
        .should('have.length.greaterThan',0);

}

SetUpDigitalCampaignTestPage_276() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);

    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);

    cy.get(this.locators.SelectStrategy).click();

    cy.get(this.locators.StrategySearch).type("XYZ123456");

    cy.contains("No items found").should("be.visible");

}

SetUpDigitalCampaignTestPage_277() {

    const campaign = `Campaign ${Cypress._.random(1000,9999)}`;

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);

    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);

    cy.get(this.locators.CampaignName).type(campaign);

    cy.get(this.locators.SelectStrategy).click();
    cy.get(this.locators.StrategyOptions).first().click();

    cy.get(this.locators.SelectSegment).click();
    cy.get(this.locators.SegmentOptions).first().click();

    cy.get(this.locators.SaveCampaign).click();

    cy.contains("Campaign created successfully").should("be.visible");

}

SetUpDigitalCampaignTestPage_278() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.get(".form-error").should("be.visible");

}

SetUpDigitalCampaignTestPage_279() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000)
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get('.ng-dropdown-panel-items .ng-option').first().click();
    cy.wait(2000);
    cy.get('#strategyCtrlGroup .ng-clear-wrapper').click({ force: true });
    cy.wait(2000);
    cy.get('#strategyCtrlGroup .ng-placeholder')
      .should('be.visible')
      .and('contain.text', 'Type to search more strategies...');

}

SetUpDigitalCampaignTestPage_280() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.get('.ng-dropdown-panel-items .ng-option').first().click();
    cy.wait(2000);
    cy.get('#segmentCtrlGroup .ng-clear-wrapper').click();
    cy.wait(2000);
    cy.get('#segmentCtrlGroup .ng-placeholder')
      .should('contain.text', 'Type to search more segments...');

}

SetUpDigitalCampaignTestPage_281() {

    const campaign = `Campaign ${Cypress._.random(1000,9999)}`;

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).clear().type(campaign);
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click({force:true});
    cy.wait(2000);
    cy.get(".form-error").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.CampaignName).should("have.value", campaign);
    cy.get("#strategyCtrlGroup .ng-placeholder") .should("be.visible");  
    cy.get("#segmentCtrlGroup .ng-placeholder").should("be.visible");
}
SetUpDigitalCampaignTestPage_282() {

    const campaign = `Campaign ${Cypress._.random(1000,9999)}`;
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type(campaign);
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get(this.locators.SegmentOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click();
    cy.wait(2000);
    cy.contains("Campaign created successfully").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.SearchCampaign).type(campaign);
    cy.wait(2000);
    cy.contains(campaign).click();
    cy.get(this.locators.CreatedDate).should("be.visible");

}

SetUpDigitalCampaignTestPage_283() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignName).type("Automation Campaign");
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get(this.locators.SegmentOptions).first().click();
    cy.wait(2000);
    cy.get(this.locators.SaveCampaign).click();
    cy.wait(2000);
    cy.contains("already exists").should("be.visible");

}


SetUpDigitalCampaignTestPage_284() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.get('.ng-dropdown-panel-items').find('.ng-option').should('have.length.greaterThan', 1);

}

SetUpDigitalCampaignTestPage_285() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
   cy.get('.ng-dropdown-panel-items')
  .find('.ng-option')
  .then(($options) => {
    cy.log('Options found: ' + $options.length);
    console.log('Options:', $options.length);
  });

}
SetUpDigitalCampaignTestPage_286() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectStrategy).click();
    cy.wait(2000);
    cy.get(this.locators.StrategyOptions).each(($el) => {

        cy.wrap($el).should("be.visible");

    });

}
SetUpDigitalCampaignTestPage_287() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SetUpDigitalCampaign).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.SelectSegment).click();
    cy.wait(2000);
    cy.get(this.locators.SegmentOptions).each(($el) => {

        cy.wrap($el).should("be.visible");

    });

}

DigitalCampaignsTestPage_289() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaigns").scrollIntoView().should("be.visible");

}

DigitalCampaignsTestPage_290() { 
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Table).scrollIntoView().should("be.visible");

}

DigitalCampaignsTestPage_291() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaigns").click({ force: true });
    cy.wait(2000);
    cy.get('.form-select').select("50", { force: true });
    cy.wait(3000);
    cy.contains("Campaign Name").should("be.visible");
    cy.get('.text-muted')
        .filter(':not(:empty)')
        .then(($campaigns) => {

            const randomIndex = Cypress._.random(0, $campaigns.length - 1);

            cy.wrap($campaigns[randomIndex])
                .scrollIntoView()
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.not.be.empty;
                });

        });

}
DigitalCampaignsTestPage_292() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaigns").click({ force: true });
    cy.wait(2000);
    cy.get('.form-select').select("50", { force: true });
    cy.wait(3000);
    cy.contains("Creator ID").should("be.visible");

    cy.get('tbody tr')
        .should('have.length.greaterThan', 0)
        .then(($rows) => {

            const randomIndex = Cypress._.random(0, $rows.length - 1);

            cy.wrap($rows[randomIndex])
                .scrollIntoView()
                .find('td:nth-child(3)')
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.not.be.empty;
                });

        });

}


DigitalCampaignsTestPage_293() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaigns").click({ force: true });
    cy.wait(2000);
    cy.get('.form-select').select("50", { force: true });
    cy.wait(3000);
    cy.contains("Segment").should("be.visible");
    cy.get('tbody tr')
        .should('have.length.greaterThan', 0)
        .then(($rows) => {

            const randomIndex = Cypress._.random(0, $rows.length - 1);

            cy.wrap($rows[randomIndex])
                .find('td:nth-child(4)')
                .scrollIntoView({ block: 'center' })
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.not.equal('');
                });

        });

}
DigitalCampaignsTestPage_294() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaigns").click({ force: true });
    cy.wait(2000);

    cy.get('.form-select').select("50", { force: true });
    cy.wait(3000);

    cy.contains("Strategy").should("be.visible");

    cy.get('tbody tr')
        .should('have.length.greaterThan', 0)
        .then(($rows) => {

            const randomIndex = Cypress._.random(0, $rows.length - 1);

            cy.wrap($rows[randomIndex])
                .scrollIntoView()
                .find('td:nth-child(5)')
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.not.equal('');
                });

        });

}

DigitalCampaignsTestPage_295() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get('.form-select').select("50", { force: true });
    cy.wait(3000);
    cy.get(this.locators.CreatedDateColumnDC).scrollIntoView().should("be.visible");
    cy.get('tbody tr td:nth-child(5)')
    .should('have.length.greaterThan', 0)
    .then(($dates) => {

        const randomIndex = Cypress._.random(0, $dates.length - 1);

        cy.wrap($dates[randomIndex])
            .invoke('text')
            .then((date) => {

                const value = date.trim();

                cy.log("Created Date: " + value);

                expect(value).to.not.be.empty;
                expect(value).to.match(
                    /^(0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{2}$/
                );

            });

    });

}

DigitalCampaignsTestPage_296() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.last_page).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.first_page).click({force:true});
   

}

DigitalCampaignsTestPage_297() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(3000);
    const pageSizes = ['5', '10', '15', '20', '30', '40', '50'];

    pageSizes.forEach((size) => {

        cy.log(`Selecting ${size} records`);

        cy.get(this.locators.Total_page).select(size, { force: true }).should('have.value', size);
        cy.wait(2000);
        cy.get('tbody tr').then(($rows) => {
            expect($rows.length).to.be.at.most(Number(size));
        });

    });

}

DigitalCampaignsTestPage_298() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.AddCampaign).click();

    cy.contains("Set up Digital Campaign").should("be.visible");

}

DigitalCampaignsTestPage_299() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    const dates = [];

    cy.get('tbody tr td:nth-child(5)').each(($cell) => {

        const text = $cell.text().trim();
        dates.push(text);

    }).then(() => {

        cy.log("Dates: " + dates.join(", "));
        const parsedDates = dates.map(date => new Date(date));
        const sortedDates = [...parsedDates].sort((a, b) => b - a);
        expect(parsedDates).to.deep.equal(sortedDates);

    });

}
DigitalCampaignsTestPage_300() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('.recurring-frequency-badge').then(($badges) => {
        expect($badges.length).to.be.greaterThan(0);
        const randomIndex = Cypress._.random(0, $badges.length - 1);
        cy.log(`Random Badge Index: ${randomIndex}`);
        cy.wrap($badges.eq(randomIndex))
            .invoke('text')
            .then((badgeText) => {
                cy.log(`Badge Text: ${badgeText.trim()}`);
                expect(badgeText.trim()).to.contain('Daily');
            });
    });
}


DigitalCampaignsTestPage_301() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row: ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Set Recurring', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
    cy.wait(2000);
    cy.contains('Mark as Recurring').should('be.visible');

}



DigitalCampaignsTestPage_302() {

    let campaignName = "";
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr').then(($rows) => {
        const validRows = [...$rows].filter(row =>
            !row.querySelector('.recurring-frequency-badge')
        );
        expect(validRows.length).to.be.greaterThan(0);
        const randomIndex = Cypress._.random(0, validRows.length - 1);
        cy.log(`Selected Row: ${randomIndex + 1}`);
        cy.wrap(validRows[randomIndex]).within(() => {
            cy.get('.actions')
                .invoke('text')
                .then((text) => {

                    campaignName = text.trim();

                    cy.log(`Campaign Name: ${campaignName}`);
                    cy.get('.action-icon-button')
                        .click({ force: true });
                });
        });

        cy.wait(2000);
        cy.contains('Set Recurring').click({ force: true });
        cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
        cy.get('.card-content > :nth-child(2)')
            .should('contain.text', campaignName);

    });

}

DigitalCampaignsTestPage_303() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr').then(($rows) => {

        const validRows = [...$rows].filter(row =>
            !row.querySelector('.recurring-frequency-badge')
        );

        expect(validRows.length).to.be.greaterThan(0);

        const randomIndex = Cypress._.random(0, validRows.length - 1);

        cy.log(`Selected Row: ${randomIndex + 1}`);

        cy.wrap(validRows[randomIndex]).within(() => {

            // Click Action button
            cy.get('.action-icon-button')
                .click({ force: true });

        });

    });
    cy.contains('Set Recurring').click({ force: true });
    cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
    cy.get(this.locators.RecurringFrequencyDropdown).should('be.visible').and('be.enabled');
}

DigitalCampaignsTestPage_304() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr').then(($rows) => {

        const validRows = [...$rows].filter(row =>
            !row.querySelector('.recurring-frequency-badge')
        );

        expect(validRows.length).to.be.greaterThan(0);

        const randomIndex = Cypress._.random(0, validRows.length - 1);

        cy.log(`Selected Row: ${randomIndex + 1}`);

        cy.wrap(validRows[randomIndex]).within(() => {
            cy.get('.action-icon-button')
                .click({ force: true });
        });

    });

    cy.wait(2000);
    cy.contains('Set Recurring').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.MarkAsRecurringPopup).within(() => {
        cy.get('select')
            .should('exist')
            .should('be.visible')
            .should('be.enabled');
        cy.get('select')
            .find('option')
            .should('have.length.greaterThan', 0);
        cy.get('select option').then(($options) => {
            const options = [...$options].map(option => option.text.trim());
            cy.log('Frequency Options: ' + options.join(', '));
        });

    });

}
DigitalCampaignsTestPage_305() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);

    // Select a random campaign that is NOT already recurring
    cy.get('tbody tr').then(($rows) => {

        const validRows = [...$rows].filter(row =>
            !row.querySelector('.recurring-frequency-badge')
        );

        expect(validRows.length).to.be.greaterThan(0);

        const randomIndex = Cypress._.random(0, validRows.length - 1);

        cy.wrap(validRows[randomIndex]).within(() => {
            cy.get('.action-icon-button').click({ force: true });
        });

    });

    cy.contains('Set Recurring')
        .should('be.visible')
        .scrollIntoView()
        .click({ force: true });
    cy.get(this.locators.MarkAsRecurringPopup)
        .should('be.visible');

    cy.wait(2000);

    // Find the Frequency dropdown directly inside the popup
    cy.get(this.locators.MarkAsRecurringPopup)
        .find('select')
        .should('exist')
        .should('be.visible')
        .should('be.enabled')
        .then(($select) => {

            const options = [...$select[0].options].filter(option =>
                option.value !== '' &&
                option.text.trim() !== 'Select'
            );

            expect(options.length).to.be.greaterThan(0);

            const randomOption =
                options[Cypress._.random(0, options.length - 1)];

            cy.wrap($select)
                .select(randomOption.value, { force: true });

            cy.wrap($select)
                .find(':selected')
                .should('have.text', randomOption.text);
        });

}

DigitalCampaignsTestPage_306() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns) .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr').then(($rows) => {
        const validRows = [...$rows].filter(row =>
            !row.querySelector('.recurring-frequency-badge')
        );

        expect(validRows.length).to.be.greaterThan(0);

        const randomIndex = Cypress._.random(0, validRows.length - 1);

        cy.wrap(validRows[randomIndex]).within(() => {
            cy.get('.action-icon-button')
                .click({ force: true });
        });

    });
    cy.contains('Set Recurring').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
    cy.wait(2000);
    cy.contains('Mark as Recurring').should('be.visible').click({ force: true });

}
DigitalCampaignsTestPage_307() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr').then(($rows) => {

        const validRows = [...$rows].filter(row =>
            !row.querySelector('.recurring-frequency-badge')
        );

        expect(validRows.length).to.be.greaterThan(0);

        const randomIndex = Cypress._.random(0, validRows.length - 1);

        cy.log(`Selected Campaign : ${randomIndex + 1}`);

        cy.wrap(validRows[randomIndex])
            .find('.action-icon-button')
            .scrollIntoView()
            .click({ force: true });

    });

    cy.wait(2000);

    cy.contains('Set Recurring').should('be.visible').scrollIntoView() .click({ force: true });
    cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.MarkAsRecurringPopup).find('select').should('be.visible')
        .then(($select) => {

            const options = [...$select[0].options].filter(option =>
                option.value !== "" &&
                option.text.trim() !== "Select"
            );

            expect(options.length).to.be.greaterThan(0);

            const randomOption = options[Cypress._.random(0, options.length - 1)];

            cy.wrap($select).select(randomOption.value, { force: true });

            cy.wrap($select)
                .find(':selected')
                .should('have.text', randomOption.text);
        });

    cy.wait(1000);

    cy.get(".btn-secondary").contains("Mark as Recurring").should('be.visible').click({ force: true });
    cy.wait(5000);
    cy.get(".form-control").type("1");
    cy.wait(2000);
    cy.get(".btn-secondary").contains("Start Campaign Run").scrollIntoView().should('be.visible').click({ force: true });    
    cy.contains('Success!', { timeout: 10000 }).should('be.visible');
 
}

DigitalCampaignsTestPage_308() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Campaign : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Set Recurring', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.MarkAsRecurringPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.CancelButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RecurringPopup).should("not.exist");

}



DigitalCampaignsTestPage_311() {
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Campaign : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Configure & Schedule Run').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedulePopup).should('be.visible');

}

DigitalCampaignsTestPage_312() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedule_Run).click({ force: true });
    cy.wait(2000);
    cy.contains("Run today").should('be.visible');
    cy.get('.form-radio-group > :nth-child(1) input[type="radio"]').should('be.visible').should('be.checked');

}

DigitalCampaignsTestPage_313() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.contains("Schedule run for later").click({ force: true });
    cy.wait(2000);
    cy.get(".form-radio-group > :nth-child(2) > .ng-untouched").should("be.checked");

}


DigitalCampaignsTestPage_314() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).should("be.visible").and("be.enabled");

}

DigitalCampaignsTestPage_315() {
    
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear() .type("100");
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).should("have.value", "100");

}

DigitalCampaignsTestPage_316() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear().type("ABC");


}

DigitalCampaignsTestPage_317() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.wait(2000);
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear();
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({ force: true });
    cy.wait(2000);
    cy.contains("Error! Max accounts must be greater than 0.").should("be.visible");

}

DigitalCampaignsTestPage_318() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveResolved).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle) .should("exist");

}

DigitalCampaignsTestPage_319() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceased).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).should("exist");

}

DigitalCampaignsTestPage_320() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveLegal).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RemoveLegalToggle).should("exist");

}

DigitalCampaignsTestPage_321() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ActiveRulesCount).scrollIntoView().should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignsTestPage_322() {
     cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('.form-select').select("50");
    cy.wait(2000);
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear().type("100");
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({ force: true });
    cy.wait(2000);
    cy.contains('Success!', { timeout: 10000 }).should('be.visible');
    cy.contains('Campaign run scheduled! View it in Digital Campaign Runs.', { timeout: 10000 }).should('be.visible');


}

DigitalCampaignsTestPage_324() {

       cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get('.form-select').select("50");
    cy.get('tbody tr td:nth-child(1) div:nth-child(1) button:nth-child(1)')
    .should('have.length.greaterThan', 0)
    .then(($buttons) => {

        const randomIndex = Cypress._.random(0, $buttons.length - 1);

        cy.wrap($buttons[randomIndex])
            .scrollIntoView()
            .click({ force: true });

    });
    cy.get(this.locators.ConfigureSchedule_Run).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear().type("100");
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CancelButton).click({force:true});

}

DigitalCampaignsTestPage_326() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });
    cy.contains("Configure & Schedule Run").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear().type("@#$abc");
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts) .should('have.class', 'ng-invalid').and('have.class', 'ng-touched');

}


DigitalCampaignsTestPage_327(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });
    cy.contains("Configure & Schedule Run").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear() .type("100");
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveLegalToggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({force:true});
    cy.wait(2000);
    cy.contains("Success!").should("be.visible");
    cy.contains("Campaign run scheduled!").should("be.visible");

}

DigitalCampaignsTestPage_328(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });
    cy.contains("Configure & Schedule Run").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).clear() .type("100");
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveLegalToggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({force:true});
    cy.wait(2000);
    cy.contains("Success!").should("be.visible");

}

DigitalCampaignsTestPage_329() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button').then(($btn) => {

        const random = Cypress._.random(0, $btn.length - 1);

        cy.wrap($btn[random]).click({ force: true });

    });
    cy.contains("Configure & Schedule Run") .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.ScheduleLaterRadio) .check({ force: true });
    cy.wait(1000);
    const randomAccounts = Cypress._.random(1, 10);

    cy.get("input[placeholder='Enter max accounts']")
        .clear()
        .type(randomAccounts.toString(), { force: true })
        .should('have.value', randomAccounts.toString());

    cy.log(`Selected Max Accounts: ${randomAccounts}`);

    cy.wait(1000);
    cy.get(this.locators.StartCampaignRun)
        .click({ force: true });
    cy.contains("Success!", { timeout: 10000 })
        .should("be.visible");
    cy.contains("Campaign run scheduled!", { timeout: 10000 })
        .should("be.visible");

}

DigitalCampaignsTestPage_330(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });
    cy.contains("Configure & Schedule Run").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ScheduleLaterRadio).check({force:true});
    cy.wait(2000);
    const randomAccounts = Cypress._.random(1, 10);
    cy.get("input[placeholder='Enter max accounts']").clear().type(randomAccounts.toString()).should('have.value', randomAccounts.toString());
    cy.wait(2000);
    cy.log(`Selected Max Accounts: ${randomAccounts}`);
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).dblclick({force:true});
    cy.contains("Success!").should("be.visible");
    cy.get("#toast-container").should("have.length",1);

}
DigitalCampaignsTestPage_331(){
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });
    cy.wait(2000);
    cy.contains("Set Recurring").click({force:true});
    cy.wait(2000);
    cy.get(".btn-secondary").contains("Mark as Recurring").dblclick({force:true});
    cy.wait(2000);
    cy.get(".form-control").type("100", { force: true });
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).click({ force: true });
    cy.wait(2000);
    cy.contains("Success!").should("be.visible");
    cy.wait(2000);
    cy.get(".toast").should("have.length",1);

}
DigitalCampaignsTestPage_334(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });

    cy.contains("Configure & Schedule Run")
    .click({force:true});

    cy.get(this.locators.ConfigureSchedulePopup)
    .should("be.visible");

}

DigitalCampaignsTestPage_335(){
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").scrollIntoView().click();
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).scrollIntoView().click();
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50",{force:true});
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
    .then(($btn)=>{

        const random=Cypress._.random(0,$btn.length-1);

        cy.wrap($btn[random]).click({force:true});

    });
    cy.contains('Configure & Schedule Run').scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RunTodayRadio).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ScheduleLaterRadio).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ScheduleLaterRadio).scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DatePicker).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.MaxAccounts).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.RemoveLegalToggle).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.StartCampaignRun).scrollIntoView().should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.CancelButton).scrollIntoView().should("be.visible");

}
DigitalCampaignsTestPage_336() {

    let campaignName;
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy) .contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody tr').then(($rows) => {

        const validRows = [...$rows].filter(row =>
            row.querySelector('.action-icon-button')
        );

        expect(validRows.length).to.be.greaterThan(0);

        const randomIndex = Cypress._.random(0, validRows.length - 1);

        cy.wrap(validRows[randomIndex]).within(() => {

            // Get campaign name from second column
            cy.get('td')
                .eq(1)
                .invoke('text')
                .then((text) => {

                    campaignName = text.trim();

                    cy.log("Campaign Name: " + campaignName);

                });

            // Click action button
            cy.get('.action-icon-button')
                .click({ force: true });

        });

    });

    cy.wait(2000);
    cy.contains('Configure & Schedule Run').click({ force: true });
    cy.wait(2000);
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']")
        .should('be.visible')
        .clear({ force: true })
        .type("5", { force: true });
    cy.wait(1000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.contains("Success!", { timeout: 15000 }).should("be.visible");
    cy.contains("Campaign run scheduled! View it in Digital Campaign Runs.", { timeout: 15000 }).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy) .contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.contains("tbody tr td", campaignName, { timeout: 20000 }).should("be.visible");

}

DigitalCampaignsTestPage_337() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Campaign : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Configure & Schedule Run').click({ force: true });
    cy.wait(2000);
    cy.contains('Schedule run for later').click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").should("be.visible").and("not.be.disabled").click({ force: true });

}

DigitalCampaignsTestPage_338() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").clear().type('13-07-47');
    cy.wait(1000);
    cy.get("input[placeholder='Select date']").click({force:true});
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").type("9");
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Success!").should("be.visible");

    

}

DigitalCampaignsTestPage_339() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {
            const randomIndex = Cypress._.random(0, $buttons.length - 1);
            cy.wrap($buttons[randomIndex]).click({ force: true });
        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").click({ force: true });
    cy.wait(2000);
    cy.get(".bs-datepicker .disabled").should("have.length.greaterThan", 0);
    cy.get(".bs-datepicker .disabled").first().should("have.class", "disabled");

}


DigitalCampaignsTestPage_340() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({ force: true });
    cy.wait(2000);
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").invoke("val").should("not.be.empty");

}

DigitalCampaignsTestPage_341() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").click({ force: true });
    cy.wait(2000);
    cy.get("button[class='next']").last().click({ force: true });
    cy.wait(2000);
    cy.get("button[class='previous']").first().click({ force: true });

}

DigitalCampaignsTestPage_342() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").click({ force: true });
    cy.wait(2000);
    cy.contains('button', '2026').click({ force: true });
    cy.contains('2027').click({ force: true });
    cy.contains('button', '2027').should('be.visible');


}

DigitalCampaignsTestPage_343() {
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    const randomNumber = Cypress._.random(1, 10);

    cy.get("input[placeholder='Enter max accounts']")
        .clear()
        .type(randomNumber.toString())
        .should("have.value", randomNumber.toString());

}


DigitalCampaignsTestPage_344() {
      cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("abcdef");
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']")
        .invoke("val")
        .then((value) => {

            cy.log("Entered Value: " + value);

            expect(value).to.not.equal("abcdef");

        });

}

DigitalCampaignsTestPage_345() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("@#$%^&*()");
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']")
        .invoke("val")
        .then((value) => {

            cy.log("Entered Value: " + value);

            expect(value).to.not.equal("@#$%^&*()");

        });

}


DigitalCampaignsTestPage_346() {
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']") .clear();
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.get("input[placeholder='Enter max accounts']")
        .then(($input) => {

            if ($input[0].checkValidity()) {

                cy.contains("Success!", { timeout: 10000 }).should("be.visible");

            } else {

                cy.get("input[placeholder='Enter max accounts']")
                    .then(($field) => {

                        expect($field[0].validationMessage).to.not.equal("");

                    });

            }

        });

}


DigitalCampaignsTestPage_346() {
      cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear();
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']")
        .then(($input) => {

            if ($input[0].checkValidity()) {

                cy.contains("Success!", { timeout: 10000 }).should("be.visible");

            } else {

                cy.get("input[placeholder='Enter max accounts']")
                    .then(($field) => {

                        expect($field[0].validationMessage).to.not.equal("");

                    });

            }

        });

}


DigitalCampaignsTestPage_347() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("994586869457689675894764586758967453479999999");
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Error! Invalid request payload").scrollIntoView().should("be.visible");
    
}

DigitalCampaignsTestPage_348() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);

    cy.get('tbody .action-icon-button').should('have.length.greaterThan', 0).then(($buttons) => {
        const randomIndex = Cypress._.random(0, $buttons.length - 1);
        cy.wrap($buttons[randomIndex]).click({ force: true });
    });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("0");
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").should("have.class", "ng-invalid");
}

DigitalCampaignsTestPage_349() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle).click({ force: true })
        

}

DigitalCampaignsTestPage_350() {
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveResolvedToggle).click({ force: true }).click({ force: true });

}

DigitalCampaignsTestPage_351() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).click({ force: true });

}

DigitalCampaignsTestPage_352() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveDeceasedToggle).click({ force: true }).click({ force: true });

}
DigitalCampaignsTestPage_353() {
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveLegalToggle).click({ force: true });

}

DigitalCampaignsTestPage_354() {
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RemoveLegalToggle).click({ force: true }).click({ force: true });

}

DigitalCampaignsTestPage_355() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button').first().click({ force: true });
    cy.wait(2000);
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);

    cy.get('.segment-list > :nth-child(1) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });

    cy.get('.segment-list > :nth-child(2) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });

    cy.get('.segment-list > :nth-child(3) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });

    cy.get('.segment-list > :nth-child(1) input[type="checkbox"]').should('be.checked');
    cy.get('.segment-list > :nth-child(2) input[type="checkbox"]').should('be.checked');
    cy.get('.segment-list > :nth-child(3) input[type="checkbox"]').should('be.checked');
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("5");
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Success!").should("be.visible");
    cy.contains("Campaign run scheduled! View it in Digital Campaign Runs.").should("be.visible");

}

DigitalCampaignsTestPage_356() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button').first().click({ force: true });
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get('.segment-list > :nth-child(1) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });
    cy.wait(2000);
    cy.get('.segment-list > :nth-child(2) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });

    cy.wait(2000);
    cy.get('.segment-list > :nth-child(3) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });

    cy.wait(2000);
    cy.get(this.locators.CancelButton).click({ force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button').first().click({ force: true });
    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get('.segment-list > :nth-child(1) input[type="checkbox"]').should('be.checked');
    cy.get('.segment-list > :nth-child(2) input[type="checkbox"]').should('be.checked');
      cy.wait(2000);
    cy.get('.segment-list > :nth-child(3) input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.prop('checked')) {
            cy.wrap($checkbox).click({ force: true });
        }
    });
    cy.get('.segment-list > :nth-child(3) input[type="checkbox"]').should('be.checked');

}

DigitalCampaignsTestPage_357() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").type("5");
    cy.contains("Start Campaign Run").click({ force: true });
    cy.contains("Success!", { timeout: 10000 }).should("be.visible");
    cy.contains("Campaign run scheduled! View it in Digital Campaign Runs.").should("be.visible");

}

DigitalCampaignsTestPage_358() {
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("5");
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.contains("Success!").should("be.visible");
    cy.wait(2000);
    cy.contains("Campaign run scheduled! View it in Digital Campaign Runs.")
        .should("be.visible");

}


DigitalCampaignsTestPage_359() {

    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).should("be.visible").select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button').should('have.length.greaterThan', 0) .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });
    cy.wait(2000);
    cy.contains("Configure & Schedule Run").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get(".bs-datepicker").should("be.visible");
    cy.wait(2000);
    cy.get(".bs-datepicker").find("span:not(.disabled)").contains(/^\d+$/) .first().click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']") .should("be.visible").clear().type("5");
    cy.wait(2000);
    cy.contains("Start Campaign Run").should("be.visible").click({ force: true });
    cy.contains("Success!", { timeout: 10000 }).should("be.visible");
    cy.contains("Campaign run scheduled! View it in Digital Campaign Runs.", { timeout: 10000 }).should("be.visible");
}
DigitalCampaignsTestPage_360() {
     cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex]).click({ force: true });

        });

    cy.contains("Configure & Schedule Run").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Enter max accounts']").clear().type("5");
    cy.wait(2000);
    cy.contains("Start Campaign Run").click({ force: true });
    cy.wait(2000);
    cy.get("body").then(($body) => {

        if ($body.text().includes("Success!")) {

            cy.contains("Success!").should("be.visible");

        } else {

            cy.contains("validation", { matchCase: false }).should("exist");

        }

    });

}

DigitalCampaignsTestPage_361() {
    cy.wait(6000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy") .click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.DigitalCampaigns).should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page) .should("be.visible").select("50", { force: true });
    cy.wait(2000);
    cy.get("tbody .action-icon-button")
        .should("have.length.greaterThan", 0)
        .then(($buttons) => {
            const randomIndex = Cypress._.random(0, $buttons.length - 1);
            cy.wrap($buttons[randomIndex]).click({ force: true });
        });

    cy.contains("Configure & Schedule Run").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.contains("Schedule run for later") .should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get("input[placeholder='Select date']") .should("be.visible").clear().type("01/01/2020{enter}", { force: true });
    cy.wait(2000);
    cy.contains("Start Campaign Run").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.contains("Invalid date").should("be.visible");
}


DigitalCampaignRunsTestPage_414() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible");

}

DigitalCampaignRunsTestPage_415() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.TotalRunsTile).should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignRunsTestPage_416() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.YetToStartTile).should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignRunsTestPage_417() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.ScheduledTile).should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignRunsTestPage_418() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.AllocatedTile).should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignRunsTestPage_419() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CompletedTile).should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignRunsTestPage_420() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CancelledTile).should("be.visible").invoke("text").should("not.be.empty");

}

DigitalCampaignRunsTestPage_421() {

    
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Campaign").scrollIntoView().should("be.visible");
    cy.contains("Campaign Run ID").scrollIntoView().should("be.visible");
    cy.contains("Run Start Date").scrollIntoView().should("be.visible");
    cy.contains("Status").scrollIntoView().should("exist");
    cy.contains("Accounts").scrollIntoView().should("be.visible");

}

DigitalCampaignRunsTestPage_422() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignRunsRows).should("have.length.greaterThan",0);

}

DigitalCampaignRunsTestPage_423() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Accounts").scrollIntoView().should("exist");
    cy.get('tbody tr td:nth-child(1)').should('have.length.greaterThan', 0).then(($rows) => {
    const randomIndex = Cypress._.random(0, $rows.length - 1);
    cy.wrap($rows[randomIndex]).invoke('text').then((text) => {
        const runId = text.trim();
        cy.log("Selected Run ID: " + runId);
        expect(runId).to.match(/^Run_\d+_\d{14}$/);

      });

  });

}

DigitalCampaignRunsTestPage_424() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.RunStartDate).should("be.visible");
    cy.get('tbody tr td:nth-child(3)').should('have.length.greaterThan', 0).then(($dates) => {
    const randomIndex = Cypress._.random(0, $dates.length - 1);
    cy.wrap($dates[randomIndex])
      .invoke('text')
      .then((text) => {
        const date = text.trim();
        cy.log("Selected Date: " + date);
        expect(date).to.match(
          /^(0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{2}$/
        );

      });

  });
}

DigitalCampaignRunsTestPage_425() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Accounts").scrollIntoView().should("exist");
    cy.get('tbody tr td:nth-child(5)').should('have.length.greaterThan', 0).then(($counts) => {
    const randomIndex = Cypress._.random(0, $counts.length - 1);
    cy.wrap($counts[randomIndex])
      .invoke('text')
      .then((text) => {
        const count = text.trim();
        cy.log("Selected Count: " + count);
        expect(count).to.match(/^\d+$/);

      });

  });

}

DigitalCampaignRunsTestPage_426() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Yet To Start").should("exist");

}

DigitalCampaignRunsTestPage_427() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Scheduled") .should("exist");

}

DigitalCampaignRunsTestPage_428() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Allocated").should("exist");

}

DigitalCampaignRunsTestPage_429() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Completed").should("exist");

}



DigitalCampaignRunsTestPage_430() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Cancelled").should("exist");

}


DigitalCampaignRunsTestPage_431() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get('.overview-cards').find('.overview-card-icon-circle').should('have.length', 8);
}

DigitalCampaignRunsTestPage_432() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get('.overview-cards').find('.overview-card-content .details .value').should('have.length', 8);

}

DigitalCampaignRunsTestPage_433() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get('.overview-cards > *').each(($card) => {
    cy.wrap($card).should('be.visible');
    cy.wrap($card).find('.overview-card-icon-circle').should('be.visible');
    cy.wait(2000);
    cy.wrap($card).find('.overview-card-content .details .value').should('be.visible').invoke('text').then((text) => {
          expect(text.trim()).to.match(/^\d+$/);
      });

});

}

DigitalCampaignRunsTestPage_434() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").scrollIntoView().should("exist").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50");
    cy.wait(2000);
    cy.get('.action-icon-button').should('have.length.greaterThan', 0).then(($buttons) => {
    const randomIndex = Cypress._.random(0, $buttons.length - 1);
    cy.log(`Clicking Action Button: ${randomIndex + 1}`);
    cy.wrap($buttons[randomIndex]).scrollIntoView().click({ force: true });

  });
    cy.get(this.locators.CancelRunButton).should("be.visible");

}

DigitalCampaignRunsTestPage_435() {
    cy.wait(5000);
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button').should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Random Row Selected : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });
    cy.wait(2000);
   
    cy.wait(2000);
    cy.get('.dropdown-menu').within(() => {
    cy.contains('Cancel').click({ force: true });
  });
       
    cy.wait(2000);
    cy.get(this.locators.CancelConfirmationPopup, { timeout: 10000 }).should('be.visible');

}

DigitalCampaignRunsTestPage_436() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button').should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Random Row Selected : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });
    cy.wait(2000);
   
    cy.wait(2000);
    cy.get('.dropdown-menu').within(() => {
    cy.contains('Cancel').click({ force: true });
  });
    
    cy.contains("Cancelled").should("exist");

}

DigitalCampaignRunsTestPage_437() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Random Row Selected : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('.dropdown-item', 'Cancel', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Go_back).contains('Go Back').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CancelConfirmationPopup).should('not.exist');

}

DigitalCampaignRunsTestPage_438() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.contains("Completed").parents("tr").find(this.locators.CancelRunButton).should("be.disabled");

}

DigitalCampaignRunsTestPage_439() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody tr').then(($rows) => {

    $rows.each((index, row) => {

        const status = Cypress.$(row)
            .find('td:nth-child(4)')
            .text()
            .trim();

        if (status === 'Failed') {

            cy.get('tbody tr')
                .eq(index)
                .find('.action-icon-button')
                .should('be.disabled');   // or check for disabled class if applicable
        }

    });

});
   

}

DigitalCampaignRunsTestPage_440() {

   
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").should("exist").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.NextPageCR).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.PreviousPageCR).click({force:true});
    

}

DigitalCampaignRunsTestPage_441() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").should("exist").click({ force: true });
    cy.wait(3000);
    const pageSizes = ["5", "10", "15", "20", "30", "40", "50"];
    pageSizes.forEach((size) => {

        cy.log(`Selecting ${size} records per page`);

        cy.get(this.locators.Total_page)
            .select(size, { force: true });
        cy.wait(2000);
        cy.get(this.locators.Total_page)
            .should("have.value", size);
        cy.get("tbody tr").then(($rows) => {

            cy.log(`Displayed Rows: ${$rows.length}`);

            expect($rows.length).to.be.at.most(Number(size));

        });

    });

}

DigitalCampaignRunsTestPage_442() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Digital_Campaign_Runs)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Title : " + text.trim());
            expect(text.trim()).to.eq("Digital Campaign Runs");
        });

    cy.get(this.locators.Subtitle)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Subtitle : " + text.trim());
            expect(text.trim()).to.not.be.empty;
        });

 
    cy.get(this.locators.Tiles).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Table_heading)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Table Heading : " + text.trim());
            expect(text.trim()).to.not.be.empty;
        });

    cy.wait(2000);
    cy.get(this.locators.PageCounts)
    .scrollIntoView()
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Pagination Count : " + text.trim());
            expect(text.trim()).to.not.be.empty;
        });

    cy.wait(2000);
    cy.get(this.locators.Pagination).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.Campaign)
        .scrollIntoView()
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Campaign Column : " + text.trim());
            expect(text.trim()).to.eq("Campaign");
        });
    cy.wait(2000);
    
cy.get(this.locators.CampaignRunID)
    .should("be.visible")
    .invoke("text")
    .then((text) => {
        cy.log("Campaign Run ID Column : " + text.trim());
        expect(text.trim()).to.eq("Campaign Run ID");
    });

cy.wait(2000);
cy.get(this.locators.RunStartDate)
    .should("be.visible")
    .invoke("text")
    .then((text) => {
        cy.log("Run Start Date Column : " + text.trim());
        expect(text.trim()).to.eq("Run Start Date");
    });

cy.wait(2000);
cy.get(this.locators.Account)
    .should("be.visible")
    .invoke("text")
    .then((text) => {
        cy.log("Accounts Column : " + text.trim());
        expect(text.trim()).to.eq("Accounts");
    });

}




DigitalCampaignRunsTestPage_451() {
    cy.get('.global-loader-container', { timeout: 30000 }).should('not.exist');
    cy.get(this.locators.CollectionStrategy) .contains("Collection Strategy").click({ force: true });
    cy.get('.global-loader-container', { timeout: 30000 }).should('not.exist');
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.get('.global-loader-container', { timeout: 30000 }).should('not.exist');
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.get('.global-loader-container', { timeout: 30000 }).should('not.exist');
    cy.get('tbody tr').then(($rows) => {

        let scheduledRow = -1;

        $rows.each((index, row) => {

            const status = Cypress.$(row)
                .find('td:nth-child(4)')
                .text()
                .trim();

            cy.log(`Row ${index + 1} Status : ${status}`);

            if (status === "Scheduled" && scheduledRow === -1) {
                scheduledRow = index;
            }

        });

        expect(scheduledRow).to.not.equal(-1);
        cy.get('tbody tr')
            .eq(scheduledRow)
            .find('.action-icon-button')
            .scrollIntoView()
            .click({ force: true });

        cy.wait(2000);
        cy.contains('.dropdown-item', 'Cancel', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.CancelConfirmationPopup).should('be.visible');
        cy.wait(2000);
        cy.contains('button', 'Cancel Run').click({ force: true });
        cy.get('.global-loader-container', { timeout: 30000 }).should('not.exist');
        cy.get('tbody tr').eq(scheduledRow).find('td:nth-child(4)').should('contain.text', 'Cancelled');

    });

}

DigitalCampaignRunsTestPage_452() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(2000);
    cy.get('tbody tr').each(($row) => {

        cy.wrap($row)
            .find('td:nth-child(4)')
            .invoke('text')
            .then((status) => {

                if (status.trim() === 'Yet to Start') {

                    cy.wrap($row)
                        .find('.action-icon-button')
                        .click({ force: true });

                    cy.contains('.dropdown-item', 'Cancel')
                        .click({ force: true });

                    cy.contains('button', 'Cancel Run')
                        .click({ force: true });

                    cy.wait(3000);

                    cy.wrap($row)
                        .find('td:nth-child(4)')
                        .should('contain.text', 'Cancelled');

                    return false;
                }

            });

    });

}

DigitalCampaignRunsTestPage_453() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.reload();
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});

}



DigitalCampaignRunsTestPage_455() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({ force: true });
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(3000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CancelConfirmationPopup) .should('be.visible');
    cy.wait(2000);
    cy.contains('Cancel Run').should('be.visible').and('have.text', 'Cancel Campaign Run');

}
DigitalCampaignRunsTestPage_456() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CampaignDetails).should("be.visible");

}

DigitalCampaignRunsTestPage_457() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.WarningMessage).should('be.visible').invoke('text').then((text) => {
        cy.log("Warning Message: " + text.trim());
        expect(text.trim()).to.not.be.empty;
    });

}

DigitalCampaignRunsTestPage_458() {
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
  
    cy.contains("Cancel").should("be.visible").and("be.enabled");

}

DigitalCampaignRunsTestPage_459() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
     cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains("Go Back").should("be.visible");

}

DigitalCampaignRunsTestPage_460() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
     cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);

    cy.contains("Go Back").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.CancelConfirmationPopup).should("not.exist");

}

DigitalCampaignRunsTestPage_461() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
     cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('Success!', { timeout: 10000 }).should('be.visible');
    cy.contains('Campaign run cancelled successfully.', { timeout: 10000 }).should('be.visible');

}

DigitalCampaignRunsTestPage_462() {

    let campaignRunId;
    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    // Select a random row
    cy.get('tbody tr').then(($rows) => {

        const randomIndex = Cypress._.random(0, $rows.length - 1);

        cy.log(`Selected Row : ${randomIndex + 1}`);

        // Store Campaign Run ID
        cy.wrap($rows[randomIndex])
            .find('td:nth-child(2)')
            .invoke('text')
            .then((text) => {

                campaignRunId = text.trim();

                cy.log("Campaign Run ID : " + campaignRunId);

                // Click Action button
                cy.wrap($rows[randomIndex]).find('.action-icon-button').click({ force: true });
                cy.wait(2000);
                cy.contains('Cancel', { timeout: 10000 }).click({ force: true });
                cy.wait(2000);
                cy.contains('Cancel Run').click({ force: true });
                cy.contains('Success!', { timeout: 10000 }).should('be.visible');
                cy.contains('Campaign run cancelled successfully.', { timeout: 10000 }).should('be.visible');
                cy.reload();
                cy.wait(5000);
                cy.get(this.locators.Total_page).select("50", { force: true });
                cy.wait(3000);
                cy.contains('tbody tr td:nth-child(2)', campaignRunId).parent().find('td:nth-child(4)').should('contain.text', 'Cancelled');

            });

    });

}

DigitalCampaignRunsTestPage_464() {

    
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
     cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('Cancel Run').scrollIntoView().click().click({force:true});
    cy.wait(2000);
    cy.contains('Success!', { timeout: 10000 }).should('be.visible');
   
}

DigitalCampaignRunsTestPage_465() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
   cy.contains("Digital Campaign Runs").scrollIntoView().should("be.visible").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.CancelConfirmationPopup).should("not.exist");

}
DigitalCampaignRunsTestPage_466() {
     let beforeCount;
    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get('.red > .overview-card-content > .details > .value')
        .invoke('text')
        .then((text) => {

            beforeCount = parseInt(text.trim());

            cy.log("Before Count: " + beforeCount);

            cy.get(this.locators.Total_page)
                .select("50", { force: true });

            cy.wait(3000);

            // Click random action button
            cy.get('tbody .action-icon-button')
                .should('have.length.greaterThan', 0)
                .then(($buttons) => {

                    const randomIndex = Cypress._.random(0, $buttons.length - 1);

                    cy.log(`Selected Row : ${randomIndex + 1}`);

                    cy.wrap($buttons[randomIndex])
                        .scrollIntoView()
                        .click({ force: true });

                });

            cy.wait(2000);
            cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
            cy.wait(2000);
            cy.contains('Cancel Run').click({ force: true });
            cy.contains('Success!', { timeout: 10000 }).should('be.visible');
            cy.contains('Campaign run cancelled successfully.', { timeout: 10000 }).should('be.visible');
            cy.wait(3000);
            cy.get('.red > .overview-card-content > .details > .value')
                .invoke('text')
                .then((updatedText) => {

                    const afterCount = parseInt(updatedText.trim());

                    cy.log("After Count: " + afterCount);

                    expect(afterCount).to.equal(beforeCount + 1);

                });

        });


}

DigitalCampaignRunsTestPage_469() {

    cy.wait(2000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy") .click();
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button')
        .should('have.length.greaterThan', 0)
        .then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel').click({ force: true });
    cy.wait(2000);
    cy.contains('Cancel Run')
        .click({ force: true })
        .click({ force: true })
        .click({ force: true });

    cy.contains('Success!', { timeout: 10000 }).should('be.visible');
    cy.contains('Cancel Run').should('not.exist');
    cy.get(this.locators.CancelConfirmationPopup).should('not.exist');

}


DigitalCampaignRunsTestPage_480() {

    cy.wait(2000);
    cy.wait(5000);
    cy.get(this.locators.CollectionStrategy).contains("Collection Strategy").click({force:true});
    cy.wait(2000);
    cy.contains("Digital Campaign Runs").should("be.visible").click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.Total_page).select("50", { force: true });
    cy.wait(3000);
    cy.get('tbody .action-icon-button').should('have.length.greaterThan', 0).then(($buttons) => {

            const randomIndex = Cypress._.random(0, $buttons.length - 1);

            cy.log(`Selected Row : ${randomIndex + 1}`);

            cy.wrap($buttons[randomIndex])
                .scrollIntoView()
                .click({ force: true });

        });

    cy.wait(2000);
    cy.contains('Cancel', { timeout: 10000 }).scrollIntoView().click({ force: true });
    cy.wait(2000);
    cy.contains('Cancel Run').click({ force: true });
    cy.contains('Success!', { timeout: 10000 }).should('be.visible');
    cy.contains('Campaign run cancelled successfully.', { timeout: 10000 }).should('be.visible');
    cy.contains('Success!').should('have.length', 1);
    cy.contains('Campaign run cancelled successfully.').should('have.length', 1);

}


}


export default CollectionPage;