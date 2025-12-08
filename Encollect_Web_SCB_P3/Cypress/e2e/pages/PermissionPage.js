import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";
const path = require("path");
import { faker } from "@faker-js/faker";



class PermissionPage {
  constructor(locators) {
    this.locators = locators;
  }

  PermissionTestPage_01() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.contains("Define Permission Schemes").should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_02() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.contains("Permission Scheme Name").should("be.visible");
    cy.wait(2000);
    cy.contains("Permission Scheme Remarks").should("be.visible");
    cy.wait(2000);
    cy.contains("Create Using Existing Permission Scheme").should("be.visible");
    cy.wait(2000);
    cy.contains("Create New Permission Scheme").should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_03() {
    const schemeName = faker.word.noun(); // unique saheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
  }

  PermissionTestPage_04() {
    const schemeName = faker.word.noun(); // unique scheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOn2ndProceed).scrollIntoView().click();
    cy.wait(2000);
    //  cy.get('[role="alert"]', { timeout: 10000 }).invoke('text').should('include', 'Success!');
    //  cy.wait(2000);
  }

  PermissionTestPage_05() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 })
      .should("contain.text", "Please enter a scheme name")
      .and("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_06() {
    const schemeName = faker.word.noun(); // unique scheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOn2ndProceed).scrollIntoView().click();
    cy.wait(2000);
    cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_07() {
    const schemeName = faker.word.noun(); // unique saheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOn2ndProceed).scrollIntoView().click();
    cy.wait(2000);
    cy.contains(schemeName).should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_08() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(2000);
    cy.get(this.locators.TypeSchemeName).type("AAAA");
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn2ndProceed).scrollIntoView().click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 })
      .should("contain.text", "Permission scheme 'AAAA' already exists.")
      .and("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_09() {
    const schemeName = faker.word.noun(); // unique saheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.EnableAll_UserManagement).click();
    cy.wait(1000);
    cy.contains("Mark All No").should("be.visible");
    cy.wait(1000);
    cy.xpath('//*[@id="accordion-User Management"]/div/div[1]/div').click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOn2ndProceed).scrollIntoView().click();
    cy.wait(2000);
    cy.contains(schemeName).should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_10() {
    const schemeName = faker.word.noun(); // unique saheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_ExpandAll).click();
    cy.wait(2000);
    cy.get(
      "#accordion-User\\ Management > .panel > .panel-collapse > .panel-body"
    ).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_ExpandAll).click();
    cy.wait(2000);
  }

  PermissionTestPage_11() {
    const schemeName = faker.word.noun(); // unique saheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeName).type(schemeName);
    cy.wait(1000);
    cy.get(this.locators.TypeSchemeremarks).type("this is ok");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.EnableAll_profilesettings).click();
    cy.wait(2000);
    cy.contains("Mark All No").should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.ClickOnSavepermissionScheme).scrollIntoView().click();
    cy.wait(2000);
    cy.contains(schemeName).should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_12() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 })
      .should("contain.text", "Please select an existing scheme")
      .and("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_13() {
    const schemeName = faker.word.noun(); // unique scheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);

    // Step 1: Type a space to trigger the dropdown
    cy.get(".ng-input > input").click().type(" "); // or use .type('{downarrow}')
    cy.wait(1000);

    // Step 2: Get all visible options and pick one randomly
    cy.get(".ng-option") // Ensure this matches the option list class
      .should("have.length.greaterThan", 0)
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
      });

    cy.get(this.locators.type_create_exixting_Scheme_name).type(schemeName);
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
  }

  PermissionTestPage_14() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);

    // Step 1: Type a space to trigger the dropdown
    cy.get(".ng-input > input").click().type(" "); // or use .type('{downarrow}')
    cy.wait(1000);

    // Step 2: Get all visible options and pick one randomly
    cy.get(".ng-option") // Ensure this matches the option list class
      .should("have.length.greaterThan", 0)
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
      });

    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 })
      .should("contain.text", "Please enter a scheme name")
      .and("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_15() {
    const schemeName = faker.word.noun(); // unique scheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);

    // Step 1: Type a space to trigger the dropdown
    cy.get(".ng-input > input").click().type(" "); // or use .type('{downarrow}')
    cy.wait(1000);

    // Step 2: Get all visible options and pick one randomly
    cy.get(".ng-option") // Ensure this matches the option list class
      .should("have.length.greaterThan", 0)
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
      });

    cy.get(this.locators.type_create_exixting_Scheme_name).type(schemeName);
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.get(this.locators.EnableAll_UserManagement).click();
    cy.wait(1000);
    cy.contains("Mark All No").should("be.visible");
    cy.wait(1000);
    cy.xpath('//*[@id="accordion-User Management"]/div/div[1]/div').click();
    cy.wait(2000);
    cy.wait(2000);
    cy.get(this.locators.ClickOnSavepermissionScheme).scrollIntoView().click();
    cy.wait(2000);
    cy.contains(schemeName).should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_16() {
    const schemeName = faker.word.noun(); // unique scheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);

    // Step 1: Type a space to trigger the dropdown
    cy.get(".ng-input > input").click().type(" "); // or use .type('{downarrow}')
    cy.wait(1000);

    // Step 2: Get all visible options and pick one randomly
    cy.get(".ng-option") // Ensure this matches the option list class
      .should("have.length.greaterThan", 0)
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
      });

    cy.get(this.locators.type_create_exixting_Scheme_name).type(schemeName);
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);

    cy.get(this.locators.ClickOn_ExpandAll).click();
    cy.wait(2000);
    cy.get(
      "#accordion-User\\ Management > .panel > .panel-collapse > .panel-body"
    ).should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_ExpandAll).click();
    cy.wait(2000);
  }

  PermissionTestPage_17() {
    const schemeName = faker.word.noun(); // unique scheme names

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);

    // Step 1: Type a space to trigger the dropdown
    cy.get(".ng-input > input").click().type(" "); // or use .type('{downarrow}')
    cy.wait(1000);

    // Step 2: Get all visible options and pick one randomly
    cy.get(".ng-option") // Ensure this matches the option list class
      .should("have.length.greaterThan", 0)
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
      });

    cy.get(this.locators.type_create_exixting_Scheme_name).type(schemeName);
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);
    cy.contains("Grant Permissions").scrollIntoView().should("be.visible");
    cy.wait(1000);

    cy.get(this.locators.EnableAll_profilesettings).click();
    cy.wait(2000);
    // cy.contains("Mark All No").should("be.visible");
    // cy.wait(1000);
    cy.get(this.locators.ClickOnSavepermissionScheme).scrollIntoView().click();
    cy.wait(2000);
    cy.contains(schemeName).should("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_18() {
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOndefinePermissionScheme).click();
    cy.wait(1000);

    cy.get(this.locators.ClickOn_create_existing_Permissionscheme).click();
    cy.wait(2000);

    // Step 1: Type a space to trigger the dropdown
    cy.get(".ng-input > input").click().type(" "); // or use .type('{downarrow}')
    cy.wait(1000);

    // Step 2: Get all visible options and pick one randomly
    cy.get(".ng-option") // Ensure this matches the option list class
      .should("have.length.greaterThan", 0)
      .then(($options) => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        cy.wrap($options[randomIndex]).click();
      });

    cy.get(this.locators.type_create_exixting_Scheme_name).type("AAAA");
    cy.wait(2000);
    cy.get(this.locators.ClickOnProceed).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOnSavepermissionScheme).scrollIntoView().click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 })
      .should("contain.text", "Permission scheme 'AAAA' already exists.")
      .and("be.visible");
    cy.wait(2000);
  }

  PermissionTestPage_19() {

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.contains("Define Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_20() {

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_21(){

     cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
     cy.contains("Permission Scheme Name").should("be.visible");
    cy.wait(2000);
     cy.contains("Created By").should("be.visible");
    cy.wait(2000);
     cy.contains("Created Date").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_22(){

     cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
     cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);


  }
  PermissionTestPage_23(){

     cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.ClickON_plus).click();
    cy.wait(3000);
    cy.contains("Define Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_24(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Search).type("AAAA");
    cy.wait(2000);

  }

  PermissionTestPage_25(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Search).type("AAAA");
    cy.wait(2000);
     cy.contains("AAAA").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_26(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Search).type("AAAA");
    cy.wait(2000);
     cy.contains("AAAA").should("be.visible");
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Search).clear();
    cy.wait(2000);

  }

  PermissionTestPage_27(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get('select[name="itemsPerPage"]').select('50');
    cy.wait(5000);

  }

  PermissionTestPage_28(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
     cy.get(this.locators.ClickonNextPage).click();
    cy.wait(1000);
     cy.get(this.locators.ClickonNextPage).click();
    cy.wait(1000);
     cy.get(this.locators.ClickOnPrevious).click();
    cy.wait(1000);
     cy.get(this.locators.ClickOnPrevious).click();
    cy.wait(1000);

  }

  PermissionTestPage_29(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get(this.locators.ClickFull_Next).click();
    cy.wait(2000);
    cy.get(this.locators.Click_fullprev).click();
    cy.wait(1000);

  }

  PermissionTestPage_30(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
    cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);

  }

  PermissionTestPage_31(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
     cy.contains("View Scheme").should("be.visible");
    cy.wait(2000);
     cy.contains("Edit Scheme").should("be.visible");
    cy.wait(2000);
     cy.contains("View Assigned Designations").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_32(){

    
   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickon_viewscheme).click();
    cy.wait(1000);
      cy.contains("View Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_33(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickon_viewscheme).click();
    cy.wait(1000);
      cy.contains("View Permission Schemes").should("be.visible");
    cy.wait(2000);
      cy.contains("Change Log").scrollIntoView().should("be.visible");
    cy.wait(2000);
    //   cy.contains("Action").should("be.visible");
    // cy.wait(2000);
      cy.contains("Affected Permissions").should("be.visible");
    cy.wait(2000);
      cy.contains("User Name").should("be.visible");
    cy.wait(2000);
      cy.contains("User ID").should("be.visible");
    cy.wait(2000);
     cy.contains("Date").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_34(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickon_viewscheme).click();
    cy.wait(1000);
      cy.contains("View Permission Schemes").should("be.visible");
    cy.wait(2000);
     cy.get(this.locators.ClickOn_backBtn).click();
    cy.wait(1000);
      cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_35(){

     cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.ClickOn_viewAssignedDesignations).click();
    cy.wait(1000);
      cy.contains("View Assigned Designations to Permission Scheme").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_36(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.ClickOn_viewAssignedDesignations).click();
    cy.wait(1000);
      cy.contains("View Assigned Designations to Permission Scheme").should("be.visible");
    cy.wait(2000);
     cy.contains("Permission Scheme Name").should("be.visible");
    cy.wait(2000);
     cy.contains("Permission Scheme Remarks").should("be.visible");
    cy.wait(2000);
     cy.contains("Department Name").should("be.visible");
    cy.wait(2000);
     cy.contains("Designation Name").should("be.visible");
    cy.wait(2000);


  }

  PermissionTestPage_37(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_38(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);
      cy.get(this.locators.ClickOn_backBtn).click();
    cy.wait(1000);
      cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_39(){

    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);
       cy.get(this.locators.ClickOn_updateBtn).scrollIntoView().should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_40(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_updateBtn).click();
    cy.wait(2000);

  }

   PermissionTestPage_41(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_updateBtn).click();
    cy.wait(2000);
    cy.get('.modal-body').should("be.visible");
    cy.wait(2000);

  }

   PermissionTestPage_42(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_updateBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_update_No).click();
    cy.wait(2000);
    cy.get(this.locators.ClickOn_backBtn).scrollIntoView().click();
    cy.wait(1000);
      cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

  }

  PermissionTestPage_43(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);
    cy.get(this.locators.ClickOn_updateBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClikcOn_update_yes).click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 }).should('contain.text', 'Permissions updated successfully').and('be.visible');
    cy.wait(2000);
     cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

}

 PermissionTestPage_44(){

   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.Click_SearchPermissionScheme).click();
    cy.wait(1000);
     cy.get(this.locators.ClickOn_Search).type("AAAA");
    cy.wait(2000);
       cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
    cy.get(this.locators.clickOn_editscheme).click();
    cy.wait(1000);
      cy.contains("Edit Permission Schemes").should("be.visible");
    cy.wait(2000);

   cy.get(this.locators.EnableAll_profilesettings).click();
    cy.wait(2000);

    cy.get(this.locators.ClickOn_updateBtn).click();
    cy.wait(2000);
    cy.get(this.locators.ClikcOn_update_yes).click();
    cy.wait(2000);
    cy.get('[role="alert"]', { timeout: 10000 }).should('contain.text', 'Permissions updated successfully').and('be.visible');
    cy.wait(2000);
     cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

        cy.get(':nth-child(1) > .actions > .d-flex > .action-icon-button').click({force: true});
    cy.wait(1000);
     cy.get(this.locators.clickon_viewscheme).click();
    cy.wait(3000);
     cy.get(this.locators.ClickOn_backBtn).scrollIntoView().click();
    cy.wait(1000);
      cy.contains("Search Permission Schemes").should("be.visible");
    cy.wait(2000);

}

PermissionTestPage_44() {
  
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(1000);
     cy.contains("Assign Permission Scheme to Designation").should("be.visible");
    cy.wait(2000);
  
}

PermissionTestPage_45() {
  
    cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get(this.locators.Type_Designation_Search).type("Agent");
    cy.wait(2000);
    cy.get('tr.ng-star-inserted > :nth-child(2)').contains("Agent").should("be.visible");
    cy.wait(2000);
  
}

PermissionTestPage_46() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.contains("Department").should("be.visible");
    cy.wait(2000);
    cy.contains("Designation").should("be.visible");
    cy.wait(2000);
    cy.contains("Assigned Permission Scheme").should("be.visible");
    cy.wait(2000);
  
}

PermissionTestPage_47() {
  
   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get(':nth-child(3) > :nth-child(3) > .d-flex > .me-2').click({force: true });
    cy.wait(2000);
    cy.get('.modal-body').should("be.visible")
    cy.wait(2000);
}

PermissionTestPage_48() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get(':nth-child(3) > :nth-child(3) > .d-flex > .me-2').click({force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Arrow_Wrapper).click();
    cy.wait(2000);


cy.get('.ng-dropdown-panel .ng-option') 
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).click();
  });

  cy.wait(2000);
  cy.get(this.locators.ClickOn_Assign).click();
  cy.wait(2000);
  cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Permission scheme assigned successfully');
cy.wait(2000);
  
}

PermissionTestPage_49() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get(':nth-child(3) > :nth-child(3) > .d-flex > .me-2').click({force: true });
    cy.wait(2000);
    cy.get(this.locators.ClickOn_Arrow_Wrapper).click();
    cy.wait(2000);

cy.get('.ng-dropdown-panel .ng-option')  
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).click();
  });

  cy.wait(2000);
  cy.get('.btn-close').click();
  cy.wait(2000);
  
}

PermissionTestPage_50() {
  
   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);

    const expectedOptions = ['All', 'Assigned', 'Unassigned'];

cy.get('select.form-select')
  .find('option')
  .then($options => {
    const actual = [...$options].map(o => o.text.trim());
    expectedOptions.forEach(opt => {
      expect(actual).to.include(opt);
    });
  });


}

PermissionTestPage_51() {
  
  
   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get('select.form-select').eq(0).select(1);
    cy.wait(2000);
  
}

PermissionTestPage_52() {
  
   cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get('select.form-select').eq(0).select(2);
    cy.wait(2000);

}

PermissionTestPage_53() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get('select.form-select').eq(0).select(2);
    cy.wait(2000);
    cy.get(this.locators.Clickon_assign_per_body).click({force: true});
    cy.wait(2000);
    cy.get('.modal-body').should("be.visible");
    cy.wait(2000);
  
}

PermissionTestPage_54() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
    cy.get('select.form-select').eq(0).select(2);
    cy.wait(2000);
    cy.get(this.locators.Clickon_assign_per_body).click({force: true});
    cy.wait(2000);
     cy.get(this.locators.ClickOn_Arrow_Wrapper).click({force: true});
    cy.wait(2000);


cy.get('.ng-dropdown-panel .ng-option') 
  .then($options => {
    const count = $options.length;
    const randomIndex = Math.floor(Math.random() * count);
    cy.wrap($options[randomIndex]).click();
  });

  cy.wait(2000);
  cy.get(this.locators.ClickOn_Assign).click();
  cy.wait(2000);
  cy.get('[role="alert"]').should('be.visible').and('contain.text', 'Permission scheme assigned successfully');
cy.wait(2000);
  
}

PermissionTestPage_55() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
     cy.get('select[name="itemsPerPage"]').select('50');
    cy.wait(2000);

  
}

PermissionTestPage_56() {
  
  cy.get(this.locators.ClickOnSystemSetting).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnPermissions).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Assign_Permission).click();
    cy.wait(2000);
     cy.get(this.locators.ClickonNextPage).click();
    cy.wait(1000);
     cy.get(this.locators.ClickonNextPage).click();
    cy.wait(1000);
     cy.get(this.locators.ClickOnPrevious).click();
    cy.wait(1000);
     cy.get(this.locators.ClickOnPrevious).click();
    cy.wait(1000);
  
}

}

export default PermissionPage;
