import { getLocators } from "../utils/locatorUtils";
import { getBaseUrl } from "../utils/configUtils";

class ScopeofWorkPage {
  constructor(locators) {
    this.locators = locators;
  }

  ScopeOfWorkTestPage_01() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.contains("Scope of Work").should("be.visible");
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_02() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_03() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    // cy.contains("Product").should("be.visible");
    // cy.wait(1000);
    cy.contains("Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("Geography").should("be.visible");
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_04() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(3000);
    cy.contains("Search and select your Product Group(s)").should("be.visible");
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_05() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.contains("Search and select your Product(s)").should("be.visible");
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_06() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.contains("Search and select your Sub Product(s)").should("be.visible");
    cy.wait(1000);
  }
  ScopeOfWorkTestPage_07() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_product_panel).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_08() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_09() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_10() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_11() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
  }
  ScopeOfWorkTestPage_12() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_13() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_14() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_15() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_16() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_17() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(4).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_18() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(4).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(5).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_19() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_20() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
  }

  ScopeOfWorkTestPage_21() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(2000);
  }

  ScopeOfWorkTestPage_22() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(6).click();
    cy.wait(2000);
  }

  ScopeOfWorkTestPage_23() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(4).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(5).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(6).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(7).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_24(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.contains("Search and select your Bucket(s)").should("be.visible");
    cy.wait(1000);

  }

  ScopeOfWorkTestPage_25(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonBucket_Dropdown).click();
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_26(){

 cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonBucket_Dropdown).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_27(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonBucket_Dropdown).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_28(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.contains("What is the highest level of responsibility within Country, Region, State, City and Branch?").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_29(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
     cy.contains("Search and select your Country(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_30(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
    cy.get(this.locators.Select_Country_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);


  }

  ScopeOfWorkTestPage_31(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL05').click();
    cy.wait(2000);
     cy.contains("Search and select your Region(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_32(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL05').click();
    cy.wait(2000);
    cy.get(this.locators.Select_region_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
     cy.get(".ng-option").eq(2).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_33(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL06').click();
    cy.wait(2000);
     cy.contains("Search and select your State(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_34(){

cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL06').click();
    cy.wait(2000);
    cy.get(this.locators.Select_State_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
     cy.get(".ng-option").eq(2).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_35(){

cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL07').click();
    cy.wait(2000);
     cy.contains("Search and select your City(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_36(){

cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL07').click();
    cy.wait(2000);
    cy.get(this.locators.Select_city_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_37(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL08').click();
    cy.wait(2000);
     cy.contains("Search and select your Branch(s)").should("be.visible");
    cy.wait(3000);


  }

  ScopeOfWorkTestPage_38(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL08').click();
    cy.wait(2000);
    cy.get(this.locators.Select_branch_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
    //  cy.get(".ng-option").eq(1).click();
    // cy.wait(2000);


  }

  ScopeOfWorkTestPage_39(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonSttafEmp).click();
    cy.wait(1000);
    cy.get(this.locators.Clickonaddstaff).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
    cy.get(this.locators.Product_Panel).click()
    cy.wait(2000);
     cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.Bucket_panel_open).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
    cy.get(this.locators.Geography_panel_open).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.geography_Panel_close).click();
    cy.wait(3000);


  }

  ScopeOfWorkTestPage_40(){

     cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    // cy.contains("Product").should("be.visible");
    // cy.wait(1000);
    cy.contains("Bucket").should("be.visible");
    cy.wait(1000);
    cy.contains("Geography").should("be.visible");
    cy.wait(1000);


  }

 ScopeOfWorkTestPage_41(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
  cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.contains("Search and select your Product Group(s)").should("be.visible");
    cy.wait(1000);
    
}
 ScopeOfWorkTestPage_42() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.contains("Search and select your Product(s)").should("be.visible");
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_43() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.contains("Search and select your Sub Product(s)").should("be.visible");
    cy.wait(1000);
  }
  ScopeOfWorkTestPage_44() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_product_panel).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_45() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_46() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_47() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_48() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
  }
  ScopeOfWorkTestPage_49() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_50() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_51() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_52() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_53() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_54() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(4).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_55() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Product).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(4).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(5).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_56() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_57() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
  }

  ScopeOfWorkTestPage_58() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(2000);
  }

  ScopeOfWorkTestPage_59() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(6).click();
    cy.wait(2000);
  }

  ScopeOfWorkTestPage_60() {
    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_SubProduct).click();
    cy.wait(1000);
    cy.get(this.locators.Select_Sub_product).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(3).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(4).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(5).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(6).click();
    cy.wait(1000);
    cy.get(".ng-option").eq(7).click();
    cy.wait(1000);
  }

  ScopeOfWorkTestPage_61(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.contains("Search and select your Bucket(s)").should("be.visible");
    cy.wait(1000);

  }

  ScopeOfWorkTestPage_62(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonBucket_Dropdown).click();
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_63(){

 cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonBucket_Dropdown).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_64(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.ClickonBucket_Dropdown).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
    cy.get(".ng-option").eq(2).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_65(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.contains("What is the highest level of responsibility within Country, Region, State, City and Branch?").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_66(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
     cy.contains("Search and select your Country(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_67(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
    cy.get(this.locators.Select_Country_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);


  }

  ScopeOfWorkTestPage_68(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL05').click();
    cy.wait(2000);
     cy.contains("Search and select your Region(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_69(){

   cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL05').click();
    cy.wait(2000);
    cy.get(this.locators.Select_region_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
     cy.get(".ng-option").eq(2).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_70(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL06').click();
    cy.wait(2000);
     cy.contains("Search and select your State(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_71(){

cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL06').click();
    cy.wait(2000);
    cy.get(this.locators.Select_State_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);
     cy.get(".ng-option").eq(2).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_72(){

cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL07').click();
    cy.wait(2000);
     cy.contains("Search and select your City(s)").should("be.visible");
    cy.wait(3000);

  }

  ScopeOfWorkTestPage_73(){

cy.get(this.locators.clickonum).click();
    cy.wait(1000);
   cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL07').click();
    cy.wait(2000);
    cy.get(this.locators.Select_city_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
     cy.get(".ng-option").eq(1).click();
    cy.wait(2000);

  }

  ScopeOfWorkTestPage_74(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL08').click();
    cy.wait(2000);
     cy.contains("Search and select your Branch(s)").should("be.visible");
    cy.wait(3000);


  }

  ScopeOfWorkTestPage_75(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL08').click();
    cy.wait(2000);
    cy.get(this.locators.Select_branch_Dropdown).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
    //  cy.get(".ng-option").eq(1).click();
    // cy.wait(2000);


  }

  ScopeOfWorkTestPage_76(){

    cy.get(this.locators.clickonum).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_AgentEmpanel).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Add_Agent).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_Agent_ScopeOfWork).click();
    cy.wait(1000);
    cy.get(this.locators.ClickOn_productgroup).click();
    cy.wait(1000);
    cy.get(this.locators.Select_product_group).click();
    cy.wait(1000);
    cy.get(".ng-option").first().click();
    cy.wait(1000);
    cy.get(this.locators.Product_Panel).click()
    cy.wait(2000);
     cy.get(this.locators.ClickOnBucket_head).click();
    cy.wait(1000);
    cy.get(this.locators.Bucket_panel_open).click();
    cy.wait(3000);
    cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.ClickOnGeography_head).click();
    cy.wait(1000);
    cy.get('#geo-scope-HL04').click();
    cy.wait(2000);
    cy.get(this.locators.Geography_panel_open).click();
    cy.wait(2000);
     cy.get(".ng-option").first().click();
    cy.wait(2000);
    cy.get(this.locators.geography_Panel_close).click();
    cy.wait(3000);


  }


  
}

export default ScopeofWorkPage;
