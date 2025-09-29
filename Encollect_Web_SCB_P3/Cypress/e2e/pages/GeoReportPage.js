import { getLocators } from '../utils/Locatorutils';
import { getBaseUrl } from '../utils/configutils';
import 'cypress-file-upload';

class DbsToScb {
  constructor(locators) {
    this.locators = locators;
  }

GeoReportTestPage_1370(){
cy.get(this.locators.ClickGeoReport).click();
cy.wait(1000);
cy.get(this.locators.ClickUTR).click({force: true});
cy.wait(1000);
cy.contains('User Travel Report').should('be.visible')
cy.wait(800);

}


  GeoReportTestPage_1371(){
    cy.get(this.locators.ClickGeoReport).click();
    cy.wait(1000);
    cy.get(this.locators.ClickUTR).click({force: true});
    cy.wait(1000);
    cy.get(this.locators.SelectAgencyname).select('agency 1',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentName).type('AgentOne test',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentCode).type('1156',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterDate).type('03/07/2024',{force: true});
    cy.wait(800);
    cy.get(this.locators.ClickOnSearch).click({force: true});
    cy.wait(800);


  }
  GeoReportTestPage_1372(){
    cy.get(this.locators.ClickGeoReport).click();
    cy.wait(1000);
    cy.get(this.locators.ClickUTR).click({force: true});
    cy.wait(1000);
    cy.get(this.locators.SelectAgencyname).select('agency 1',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentCode).type('1156',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentName).type('AgentOne test',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterDate).type('03/07/2024',{force: true});
    cy.wait(800);
    cy.get(this.locators.ClickOnSearch).click({force: true});
    cy.wait(800);


  }
  GeoReportTestPage_1374(){

    cy.get(this.locators.ClickGeoReport).click();
    cy.wait(1000);
    cy.get(this.locators.ClickUTR).click({force: true});
    cy.wait(1000);
    cy.get(this.locators.SelectAgencyname).select('agency 1',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentCode).type('1156',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentName).type('AgentOne test',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterDate).type('03/07/2024',{force: true});
    cy.wait(800);
    cy.get(this.locators.ClickOnSearch).click({force: true});
    cy.wait(800);


  }
  GeoReportTestPage_1376(){
     cy.get(this.locators.ClickGeoReport).click();
    cy.wait(1000);
    cy.get(this.locators.ClickUTR).click({force: true});
    cy.wait(1000);
    cy.get(this.locators.SelectAgencyname).select('agency 1',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentCode).type('1156',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterAgentName).type('AgentOne test',{force: true});
    cy.wait(800);
    cy.get(this.locators.EnterDate).type('03/07/2024',{force: true});
    cy.wait(800);
    cy.get(this.locators.ClickOnSearch).click({force: true});
    cy.wait(800);


  }
  ReportsModule(){
    cy.wait(500);
    cy.get(this.locators.clickonreports).click();
  }
  ReportPaymentTestPage_314(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(1000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#inlineRadio1').click({force: true});
    cy.wait(500);
    cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('a');
    cy.wait(500);
 
  }
  ReportPaymentTestPage_316(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(1000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').click({force: true});
    cy.wait(700);
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').click({force: true});
    cy.wait(700);
    cy.get('.form-group > [type="button"]').click({force: true});
    cy.wait(700);
    cy.get('#toast-container').should('contain', 'Receipt date range is mandatory');
  }
 
  ReportPaymentTestPage_315(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(1000);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('15/07/2024',{force: true});
    cy.wait(700);
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('15/07/2024',{force: true});
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get('.form-group > [type="button"]').click({force: true});
    cy.wait(700);
    cy.get('#toast-container').should('contain.text', 'You can’t search for data more than 7 days at a time');
  }
 
  ReportPaymentTestPage_311(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-navbar:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1) > span:nth-child(2)').click();
    cy.wait(700);
    cy.get('input[name="branchName"]').type('a',{force: true});
    cy.wait(700);
 
  }
 
  TrailIntensityReportTestPage_400(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.TrailIntensityReport).click({force: true});
    cy.wait(700);
    cy.get(':nth-child(2) > :nth-child(1) > .form-control').should('contain','All',{force: true});
    cy.wait(700);
  }
 
   TrailIntensityReportTestPage_401(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.TrailIntensityReport).click({force: true});
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get(':nth-child(8) > .form-control').should('contain','All',{force: true});
    cy.wait(900);
 
   }
 
   TrailIntensityReportTestPage_402(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.TrailIntensityReport).click({force: true});
    cy.wait(700);
    cy.get('select[name="name"]').select('Kenya',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').select('North',{force: true});
    cy.wait(900);
    cy.get('select[name="region"]').should('contain','North',{force: true});
    cy.wait(900);
   }
 
   TrailIntensityReportTestPage_403(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.TrailIntensityReport).click({force: true});
    cy.wait(700);
    cy.get('select[name="name"]').select('Kenya',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').select('South',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').should('contain','South',{force: true});
    cy.wait(700);
    cy.get('select[name="state"]').select('Mombasa',{force: true});
    cy.wait(500);
    cy.get('select[name="state"]').should('contain','Mombasa',{force: true});
    cy.wait(500);
    cy.get('select[name="city"]').select('Mombasa',{force: true});
    cy.wait(500);
    cy.get('select[name="city"]').should('contain','Mombasa',{force: true});
    cy.wait(700);
  }
 
  TrailIntensityReportTestPage_404(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.TrailIntensityReport).click({force: true});
    cy.wait(700);
    cy.get('#inlineRadio2').click({force: true});
    cy.wait(700);
    cy.get('input[name="agencyName"]').type('y');
    cy.wait(500);
  }
 
  TrailIntensityReportTestPage_405(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.TrailIntensityReport).click({force: true});
    cy.wait(700);
    cy.get('#inlineRadio2').click({force: true});
    cy.wait(700);
    cy.get('input[name="agentName"]').type('a');
    cy.wait(500);
  }
 
  MoneyMovementReportTestPage_408(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get('input[name="fromReceiptDate"]').type('10/07/2024',{force: true});
    cy.wait(700);
    cy.get('input[name="toReceiptDate"]').type('12/07/2024',{force: true});
    cy.wait(700);
    cy.get('input[name="branchName"]').click({force: true});
    cy.wait(700);
    cy.get('div[class="form-group col-md-6"] button[type="button"]').click();
    cy.wait(500);
  }
 
  MoneyMovementReportTestPage_410(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get('input[name="fromReceiptDate"]').type('13/07/2024',{force: true});
    cy.wait(700);
    cy.get('input[name="toReceiptDate"]').type('15/07/2024',{force: true});
    cy.wait(700);
    cy.get('input[name="branchName"]').click({force: true});
    cy.wait(700);
    cy.get('div[class="form-group col-md-6"] button[type="button"]').click();
    cy.wait(500);
  }
 
  MoneyMovementReportTestPage_418(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').select('Avenue Loans',{force: true});
    cy.wait(700);
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').should('contain','All',{force: true});
    cy.wait(700);
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').select('All',{force: true});
    cy.wait(700);
   
  }
 
 MoneyMovementReportTestPage_419(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get('select[name="name"]').select('Kenya',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').select('North',{force: true});
    cy.wait(900);
    cy.get('select[name="region"]').should('contain','North',{force: true});
    cy.wait(900);
   }
 
   MoneyMovementReportTestPage_420(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get('select[name="name"]').select('Kenya',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').select('North',{force: true});
    cy.wait(900);
    cy.get('select[name="state"]').select('Nairobi',{force: true});
    cy.wait(900);
    cy.get('select[name="state"]').should('contain','Nairobi',{force: true});
    cy.wait(900);
   }
 
   MoneyMovementReportTestPage_421(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get('select[name="name"]').select('Kenya',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').select('North',{force: true});
    cy.wait(900);
    cy.get('select[name="state"]').select('Nairobi',{force: true});
    cy.wait(900);
    cy.get('select[name="city"]').select('Nairobi',{force: true});
    cy.wait(900);
    cy.get('select[name="city"]').should('contain','Nairobi',{force: true});
    cy.wait(900);
   }
 
   MoneyMovementReportTestPage_422(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get('select[name="name"]').select('Kenya',{force: true});
    cy.wait(500);
    cy.get('select[name="region"]').select('North',{force: true});
    cy.wait(900);
    cy.get('select[name="state"]').select('Nairobi',{force: true});
    cy.wait(900);
    cy.get('select[name="city"]').select('Nairobi',{force: true});
    cy.wait(900);
    cy.get('select[name="bucket"]').select('All',{force: true});
    cy.wait(900);
    cy.get('select[name="bucket"]').should('contain','All',{force: true});
    cy.wait(900);
   }
 
   MoneyMovementReportTestPage_423(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get('#reptypeRadio2').click({force: true});
    cy.wait(700);
    cy.get('input[name="agencyName"]').type('y');
    cy.wait(500);
  }
 
  MoneyMovementReportTestPage_424(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.MoneyMovementReport).click({force: true});
    cy.wait(700);
    cy.get('#reptypeRadio2').click({force: true});
    cy.wait(700);
    cy.get('input[name="agentName"]').type('k');
    cy.wait(500);
  }
 
  SupervisoryReportTestPage_425(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.SupervisoryReport).click({force: true});
    cy.wait(700);
    cy.get('accordion-group[heading="Product Filter"] div[role="button"]').click();
    cy.wait(700);
    cy.get('select[name="ProductGroup"]').select('Consumer Loan',{force: true});
    cy.wait(700);
    cy.get('select[name="Product"]').select('All',{force: true});
    cy.wait(700);
    cy.get('accordion-group[heading="Bucket Filter"] div[role="button"]').click();
    cy.wait(700);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > app-supervisory-report:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > accordion:nth-child(2) > accordion-group:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > select:nth-child(2)').select('1',{force: true});
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get('button[type="submit"]').click();
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
   // cy.get('div[class="search-result"] h3').should('contain','Search Result');
    //cy.wait(700);
    cy.get('div[class="search-result"] h3').should('be.visible');
    cy.wait(700);
  }
 
  SupervisoryReportTestPage_426(){
    cy.get(':nth-child(12) > .nav-item-hold > a > .nav-text').click();
    cy.wait(500);
    cy.get(this.locators.SupervisoryReport).click({force: true});
    cy.wait(700);
    cy.get('accordion-group[heading="Product Filter"] div[role="button"]').click();
    cy.wait(700);
    cy.get('select[name="ProductGroup"]').select('Consumer Loan',{force: true});
    cy.wait(700);
    cy.get('select[name="Product"]').select('All',{force: true});
    cy.wait(700);
    cy.get('accordion-group[heading="Bucket Filter"] div[role="button"]').click();
    cy.wait(700);
    cy.get('body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > app-supervisory-report:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > accordion:nth-child(2) > accordion-group:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > select:nth-child(2)').select('1',{force: true});
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get('button[type="submit"]').click();
    cy.wait(700);
    cy.scrollTo('bottom');
    cy.wait(700);
    cy.get('div[class="search-result"] h3').should('contain','Search Result');
    cy.wait(700);
    cy.get('div[class="search-result"] h3').should('be.visible');
    cy.wait(700);
  }
 

}

  export default DbsToScb;