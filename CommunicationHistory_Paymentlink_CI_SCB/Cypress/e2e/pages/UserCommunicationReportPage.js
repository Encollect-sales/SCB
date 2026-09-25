import { tr } from '@faker-js/faker';
import { getLocators } from '../utils/Locatorutils';

class UserCommunicationReportPage {

    constructor(locators) {

        this.locators = locators;

    }

    NavigateToUserCommunicationReport() {

        cy.contains('Reports', { timeout: 10000 }).scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);
        cy.contains('Communication History Report', { timeout: 10000 }).scrollIntoView().should('be.visible').click({force:true});
        cy.wait(2000);

    }
    verifySMSChannel(){
        cy.get(this.locators.CommunicationFromDate).type('01-Jan-26');
        cy.wait(2000);
        cy.get(this.locators.CommunicationToDate).type('03-Jan-26');
        cy.wait(2000);
        cy.get(this.locators.triggertype).select('On PTP Date');
        cy.wait(2000);
        cy.get(this.locators.channeltype).select('SMS');
        cy.wait(2000);
        cy.get(this.locators.generate).click({force:true});
        cy.get('tbody > tr > :nth-child(5)').contains('SMS').should('exist');
    }
    verifyChannel(){
         cy.get(this.locators.CommunicationFromDate).type('01-Jan-26');
        cy.wait(2000);
        cy.get(this.locators.CommunicationToDate).type('03-Jan-26');
        cy.wait(2000);
        cy.get(this.locators.triggertype).select('On PTP Date');
        cy.wait(2000);
        cy.get(this.locators.channeltype).select('SMS');
        cy.wait(2000);
        cy.get(this.locators.generate).click({force:true});
        cy.wait(2000);
        cy.get(this.locators.Download).click({force:true});
        cy.task('getLatestZipFile').then(zipFile => {
    expect(zipFile).to.not.be.null;
    cy.task('extractZipAndReadCSV', {
        zippath: `cypress/downloads/${zipFile}`
    }).then(result => {

        expect(result.records.length).to.be.greaterThan(0);

        const csvData = JSON.stringify(result.records);

        expect(csvData).to.contain('SMS');
    });
});

    }

    verifyReportAvailable() {

        cy.contains('Communication History Report', { timeout: 10000 }).should('be.visible');
        cy.wait(2000);
        cy.get('body').should('be.visible');

    }

    verifyCommunicationRecord() {

        cy.contains('Communication History Report', { timeout: 10000 }).should('be.visible');
        cy.wait(2000);
        cy.get('table', { timeout: 15000 }).should('be.visible');
        cy.wait(2000);
        cy.get('tbody tr', { timeout: 15000 })
            .should('have.length.greaterThan', 0);

    }
    verifyEmailChannel(){
        cy.get(this.locators.CommunicationFromDate).type('01-Jan-26');
        cy.wait(2000);
        cy.get(this.locators.CommunicationToDate).type('03-Jan-26');
        cy.wait(2000);
        cy.get(this.locators.triggertype).select('On PTP Date');
        cy.wait(2000);
        cy.get(this.locators.channeltype).select('Email');
        cy.wait(2000);
        cy.get(this.locators.generate).click({force:true});
        cy.get('tbody > tr > :nth-child(5)').contains('Email').should('exist');

    }
    verifyCommunicationIDUnique() {
    cy.get(this.locators.CommunicationFromDate).type('01-Jan-26');
    cy.wait(2000);
    cy.get(this.locators.CommunicationToDate).type('03-Jan-26');
    cy.wait(2000);
    cy.get(this.locators.triggertype).select('On PTP Date');
    cy.wait(2000);
    cy.get(this.locators.channeltype).select('SMS');
    cy.wait(2000);
    cy.get(this.locators.generate).click({force:true});
    cy.wait(3000);
    cy.get(this.locators.Download).click({force:true});
    cy.wait(5000);

    cy.task('getLatestZipFile').then(zipFile => {
        expect(zipFile).to.not.be.null;

        cy.task('extractZipAndReadCSV', {
            zippath: `cypress/downloads/${zipFile}`
        }).then(result => {
            expect(result.records.length).to.be.greaterThan(1);

            const communicationIds = result.records.map(
                row => row.CommunicationRefNumber
            );

            communicationIds.forEach(id => {
                expect(id).to.not.be.empty;
            });

            const uniqueCommunicationIds = new Set(communicationIds);

            expect(uniqueCommunicationIds.size).to.equal(
                communicationIds.length
            );
        });
    });
}

verifyRecipientType() {
    cy.get(this.locators.CommunicationFromDate).type('01-Jan-26');
    cy.wait(2000);
    cy.get(this.locators.CommunicationToDate).type('03-Jan-26');
    cy.wait(2000);
    cy.get(this.locators.triggertype).select('On PTP Date');
    cy.wait(2000);
    cy.get(this.locators.channeltype).select('SMS');
    cy.wait(2000);
    cy.get(this.locators.generate).click({force:true});
    cy.wait(3000);
    cy.get(this.locators.Download).click({force:true});
    cy.wait(5000);

    cy.task('getLatestZipFile').then(zipFile => {
        expect(zipFile).to.not.be.null;

        cy.task('extractZipAndReadCSV', {
            zippath: `cypress/downloads/${zipFile}`
        }).then(result => {
            expect(result.records.length).to.be.greaterThan(0);

            result.records.forEach(row => {
                expect(row).to.have.property('RecipientType');
                expect(row.RecipientType).to.not.be.empty;
            });
        });
    });
}
verifyCommunicationDateTime() {
    cy.get(this.locators.CommunicationFromDate).type('01-Jan-26');
    cy.wait(2000);
    cy.get(this.locators.CommunicationToDate).type('03-Jan-26');
    cy.wait(2000);
    cy.get(this.locators.triggertype).select('On PTP Date');
    cy.wait(2000);
    cy.get(this.locators.channeltype).select('SMS');
    cy.wait(2000);
    cy.get(this.locators.generate).click({force:true});
    cy.wait(3000);
    cy.get(this.locators.Download).click({force:true});
    cy.wait(5000);

    cy.task('getLatestZipFile').then(zipFile => {
        expect(zipFile).to.not.be.null;

        cy.task('extractZipAndReadCSV', {
            zippath: `cypress/downloads/${zipFile}`
        }).then(result => {
            expect(result.records.length).to.be.greaterThan(0);

            result.records.forEach(row => {
                expect(row).to.have.property('CommunicationTriggerDate');
                expect(row.CommunicationTriggerDate).to.not.be.empty;
            });
        });
    });
}
Issuereceipt(){

const randomReceiptNo=Math.floor(1000+Math.random()*90000).toString();
cy.get(this.locators.accountnumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
cy.wait(2000);
cy.get(this.locators.selectoption).click({force:true});
cy.wait(1000);
cy.get(this.locators.issuereceipt).click({force:true});
cy.wait(2000);
cy.get(":nth-child(1) > .form-control-group > .form-control").clear().type(randomReceiptNo);
cy.wait(2000);
cy.get(this.locators.CollectorIDarrow).click({force:true});
cy.wait(2000);
cy.get('.ng-option').should('have.length.greaterThan',0).then($options=>{
const randomIndex=Math.floor(Math.random()*$options.length);
cy.wrap($options[randomIndex]).click({force:true});
});
cy.wait(2000);
cy.get(this.locators.RelationshipWithCustomer).select('Brother');
cy.wait(2000);
cy.get(".payment-input > .form-select").select('CASH');
cy.wait(2000);
cy.get(this.locators.othercharge).clear().type('100');
cy.wait(2000);
cy.get(this.locators.checkboxemail).click({force:true});
cy.wait(2000);
cy.get(this.locators.emailenter).type('kamnasingh1101@gmail.com');
cy.wait(2000);
cy.get(this.locators.checkboxsms).click({force:true});
cy.wait(2000);
cy.get(this.locators.mobilenoenter).type('8390336828');
cy.wait(2000);
cy.get(this.locators.submit).click({force:true});
cy.wait(3000);
cy.get(this.locators.okay).click({force:true});
cy.wait(2000);
cy.contains("Success!").should("be.visible");
}

Accountdetailscheckhistory(){
    cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('1667');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.togglebutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
 cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X{6}\d{2}$/);
});
    cy.wait(2000);
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain.text',currentDate);

}

Issuereceiptpaymentac(){

const randomReceiptNo=Math.floor(1000+Math.random()*90000).toString();
cy.contains('Payments').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('Receipts').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('Issue Receipt to Walk-in Customer').scrollIntoView().click({force:true});
cy.wait(2000);
cy.get(":nth-child(1) > .form-control-group > .form-control").clear().type(randomReceiptNo);
cy.wait(2000);
cy.get(this.locators.CollectorIDarrow).click({force:true});
cy.wait(2000);
cy.get('.ng-option').should('have.length.greaterThan',0).then($options=>{
const randomIndex=Math.floor(Math.random()*$options.length);
cy.wrap($options[randomIndex]).click({force:true});
});
cy.get(this.locators.account_no).type('LXMUM33020211742684')
cy.wait(2000);
cy.get(this.locators.RelationshipWithCustomer).select('Brother');
cy.wait(2000);
cy.get(".payment-input > .form-select").select('CASH');
cy.wait(2000);
cy.get(this.locators.othercharge).clear().type('100');
cy.wait(2000);
cy.get(this.locators.checkboxemail).click({force:true});
cy.wait(2000);
cy.get(this.locators.emailenter).type('kamnasingh1101@gmail.com');
cy.wait(2000);
cy.get(this.locators.checkboxsms).click({force:true});
cy.wait(2000);
cy.get(this.locators.mobilenoenter).type('8390336828');
cy.wait(2000);
cy.get(this.locators.submit).click({force:true});
cy.wait(3000);
cy.get(this.locators.okay).click({force:true});
cy.wait(2000);
cy.contains("Success!").should("be.visible");
}


Accountdetailscheckhistory(){
    cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('LXMUM33020211742684');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.togglebutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
 cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X{6}\d{2}$/);
});
    cy.wait(2000);
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain.text',currentDate);

}

Issuereceiptcreditcard(){

const randomReceiptNo=Math.floor(1000+Math.random()*90000).toString();
cy.get(this.locators.creditcard).click({force:true});
cy.wait(2000);
cy.get(this.locators.accountnumber).clear().type('4726428046987990');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);
cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
cy.wait(2000);
cy.get(this.locators.togglebuttoncard).click({force:true});
cy.wait(1000);
cy.get(this.locators.issuereceipt).click({force:true});
cy.wait(2000);
cy.get(":nth-child(1) > .form-control-group > .form-control").clear().type(randomReceiptNo);
cy.wait(2000);
cy.get(this.locators.CollectorIDarrow).click({force:true});
cy.wait(2000);
cy.get('.ng-option').should('have.length.greaterThan',0).then($options=>{
const randomIndex=Math.floor(Math.random()*$options.length);
cy.wrap($options[randomIndex]).click({force:true});
});
cy.wait(2000);
cy.get(this.locators.RelationshipWithCustomer).select('Brother');
cy.wait(2000);
cy.get(".payment-input > .form-select").select('CASH');
cy.wait(2000);
cy.get(this.locators.othercharge).clear().type('100');
cy.wait(2000);
cy.get(this.locators.checkboxemail).click({force:true});
cy.wait(2000);
cy.get(this.locators.emailenter).type('kamnasingh1101@gmail.com');
cy.wait(2000);
cy.get(this.locators.checkboxsms).click({force:true});
cy.wait(2000);
cy.get(this.locators.mobilenoenter).type('8390336828');
cy.wait(2000);
cy.get(this.locators.submit).click({force:true});
cy.wait(3000);
cy.get(this.locators.okay).click({force:true});
cy.wait(2000);
cy.contains("Success!").should("be.visible");
}

Accountdetailscheckhistorycreditcard(){
  
     cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
      cy.get(this.locators.creditcard).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('4726428046987990');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle).click({force:true});
    cy.wait(2000);
    cy.contains('Communication History').get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
 cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X{6}\d{2}$/);
});
    cy.wait(2000);
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain.text',currentDate);

}

Issuereceiptpayment(){

const randomReceiptNo=Math.floor(1000+Math.random()*90000).toString();
cy.contains('Payments').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('Receipts').scrollIntoView().click({force:true});
cy.wait(2000);
cy.contains('Issue Receipt to Walk-in Customer').scrollIntoView().click({force:true});
cy.wait(3000);
cy.get(this.locators.creditcardpayment).click({force:true});
cy.wait(2000);
cy.get(":nth-child(1) > .form-control-group > .form-control").clear().type(randomReceiptNo);
cy.wait(2000);
cy.get(this.locators.CollectorIDarrow).click({force:true});
cy.wait(2000);
cy.get('.ng-option').should('have.length.greaterThan',0).then($options=>{
const randomIndex=Math.floor(Math.random()*$options.length);
cy.wrap($options[randomIndex]).click({force:true});
});
cy.get(this.locators.account_no).type('4726428046987990')
cy.wait(2000);
cy.get(this.locators.RelationshipWithCustomer).select('Brother');
cy.wait(2000);
cy.get(".payment-input > .form-select").select('CASH');
cy.wait(2000);
cy.get(this.locators.othercharge).clear().type('100');
cy.wait(2000);
cy.get(this.locators.checkboxemail).click({force:true});
cy.wait(2000);
cy.get(this.locators.emailenter).type('kamnasingh1101@gmail.com');
cy.wait(2000);
cy.get(this.locators.checkboxsms).click({force:true});
cy.wait(2000);
cy.get(this.locators.mobilenoenter).type('8390336828');
cy.wait(2000);
cy.get(this.locators.submit).click({force:true});
cy.wait(3000);
cy.get(this.locators.okay).click({force:true});
cy.wait(2000);
cy.contains("Success!").should("be.visible");
}

NavigateToSendDuplicateReceipt(){
cy.contains('Payments',{timeout:10000}).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Receipts',{timeout:10000}).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
cy.contains('Send Duplicate Receipt',{timeout:10000}).scrollIntoView().should('be.visible').click({force:true});
cy.wait(2000);
}

enterAccountNumberAndCurrentDate(){
const today=new Date();
const fromDate=new Date(today.getFullYear(),today.getMonth()-1,1);

const formatDate=date=>{
const day=String(date.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const month=monthNames[date.getMonth()];
const year=String(date.getFullYear()).slice(-2);
return `${day}-${month}-${year}`;
};

const fromDateValue=formatDate(fromDate);
const toDateValue=formatDate(today);


cy.get(this.locators.CustomerAccountNumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.fromdate).clear().type(fromDateValue);
cy.wait(2000);
cy.get(this.locators.todate).clear().type(toDateValue);
cy.wait(2000);
cy.get(this.locators.button).click({force:true});
cy.wait(2000);
cy.get(this.locators.mail).click({force:true});
cy.wait(2000);
cy.contains('Success! Email notification sent!').should('exist');
cy.wait(2000);
}


Accountdetailscheckhistorymail(){
    cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('1667');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.togglebutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);


}

AccountdetailscheckhistorySMS(){
     cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('1667');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.togglebutton).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X+\d{2}$/);
});

  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);


}

enterAccountNumberAndCurrentDateSMS(){
const today=new Date();
const fromDate=new Date(today.getFullYear(),today.getMonth()-1,1);

const formatDate=date=>{
const day=String(date.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const month=monthNames[date.getMonth()];
const year=String(date.getFullYear()).slice(-2);
return `${day}-${month}-${year}`;
};

const fromDateValue=formatDate(fromDate);
const toDateValue=formatDate(today);


cy.get(this.locators.CustomerAccountNumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.fromdate).clear().type(fromDateValue);
cy.wait(2000);
cy.get(this.locators.todate).clear().type(toDateValue);
cy.wait(2000);
cy.get(this.locators.button).click({force:true});
cy.wait(2000);
cy.get(this.locators.sms).click({force:true});
cy.wait(2000);
cy.contains('Success! SMS notification sent!').should('exist');
cy.wait(2000);
}


enterAccountNumberAndCurrentDatecc(){
const today=new Date();
const fromDate=new Date(today.getFullYear(),today.getMonth()-1,1);

const formatDate=date=>{
const day=String(date.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const month=monthNames[date.getMonth()];
const year=String(date.getFullYear()).slice(-2);
return `${day}-${month}-${year}`;
};

const fromDateValue=formatDate(fromDate);
const toDateValue=formatDate(today);


cy.get(this.locators.CustomerAccountNumber).clear().type('4726428046987995');
cy.wait(2000);
cy.get(this.locators.fromdate).clear().type(fromDateValue);
cy.wait(2000);
cy.get(this.locators.todate).clear().type(toDateValue);
cy.wait(2000);
cy.get(this.locators.button).click({force:true});
cy.wait(2000);
cy.get(this.locators.mail).click({force:true});
cy.wait(2000);
cy.contains('Success! Email notification sent!').should('exist');
cy.wait(2000);
}



Accountdetailscheckhistorymailcc(){
    cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.creditcard).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('4726428046987995');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);


}

enterAccountNumberAndCurrentDateSMScc(){
const today=new Date();
const fromDate=new Date(today.getFullYear(),today.getMonth()-1,1);

const formatDate=date=>{
const day=String(date.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const month=monthNames[date.getMonth()];
const year=String(date.getFullYear()).slice(-2);
return `${day}-${month}-${year}`;
};

const fromDateValue=formatDate(fromDate);
const toDateValue=formatDate(today);


cy.get(this.locators.CustomerAccountNumber).clear().type('4726428046987995');
cy.wait(2000);
cy.get(this.locators.fromdate).clear().type(fromDateValue);
cy.wait(2000);
cy.get(this.locators.todate).clear().type(toDateValue);
cy.wait(2000);
cy.get(this.locators.button).click({force:true});
cy.wait(2000);
cy.get(this.locators.sms).click({force:true});
cy.wait(2000);
cy.contains('Success! SMS notification sent!').should('exist');
cy.wait(2000);
}

AccountdetailscheckhistorySMScc(){
    cy.get(this.locators.accountdetails).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.creditcard).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.accountnumber).clear().type('4726428046987995');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"]').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.toggle).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.Communicationhistory).click({force:true});
    cy.wait(2000);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X+\d{2}$/);
});

  const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;

cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);


}


Accountdetailscheckhistorysendpy(){
   cy.get(this.locators.accountdetails).click({force:true});
cy.wait(2000);
cy.get(this.locators.accountnumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);
cy.get(this.locators.actiontoggle).click({force:true});
cy.wait(2000);
cy.contains('Send Payment Link').click({force:true});
cy.wait(2000);
cy.get(this.locators.AmberPay).click({force:true});
cy.wait(2000);
cy.get(this.locators.newEmail).click({force:true});
cy.wait(2000);
cy.get(this.locators.mailid).type('skamna1101@gmail.com');
cy.wait(2000);
cy.get(this.locators.new).click({force:true});
cy.wait(2000);
cy.get(this.locators.mobileNumber).type('8390336828');
cy.wait(2000);
cy.get(this.locators.amount).type('100');
cy.wait(2000);
cy.get(this.locators.send).click({force:true});
cy.wait(2000);
cy.contains('Success!').should('be.visible');
cy.get('body').invoke('text').then(text=>{
const match=text.match(/Payment Link sent successfully with reference number:\s*(\d+)/);
expect(match).to.not.be.null;
const referenceNumber=match[1];
cy.log(`Payment Link Reference Number: ${referenceNumber}`);
});
}
accountdetailspy(){
cy.get(this.locators.accountnumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);    
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.Communicationhistory).click({force:true});
cy.wait(2000);
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;
cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X+\d{2}$/);
});
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
cy.get('tbody').should('contain.text','SMS');
cy.get('tbody').should('contain.text','Email');
}



Acnumbersendpayment(){
    cy.get(this.locators.accountnumber).type('1667');
    cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.selectoption).click({force:true});
    cy.wait(2000);
    cy.contains('Send Payment Link').scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.AmberPay).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.newEmail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.mailid).type('skamna1101@gmail.com');
    cy.wait(2000);
    cy.get(this.locators.new).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.mobileNumber).type('8390336828');
    cy.wait(2000);
cy.get(this.locators.amount).type('100');
cy.wait(2000);
cy.get(this.locators.send).click({force:true});
cy.wait(2000);
cy.contains('Success!').should('be.visible');
cy.get('body').invoke('text').then(text=>{
const match=text.match(/Payment Link sent successfully with reference number:\s*(\d+)/);
expect(match).to.not.be.null;
const referenceNumber=match[1];
cy.log(`Payment Link Reference Number: ${referenceNumber}`);
});

}

accountdetailspyac(){
cy.get(this.locators.accountdetails).click({force:true});
cy.wait(2000);    
cy.get(this.locators.accountnumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);    
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.Communicationhistory).click({force:true});
cy.wait(2000);
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;
cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X+\d{2}$/);
});
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
cy.get('tbody').should('contain.text','SMS');
cy.get('tbody').should('contain.text','Email');
}


AccountdetailscheckhistorysendpyCC(){
       cy.get(this.locators.accountdetails).click({force:true});
cy.wait(2000);
cy.get(this.locators.creditcard).click({force:true});
cy.wait(2000);
cy.get(this.locators.accountnumber).clear().type('4726428046987990');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);
cy.get(this.locators.actiontoggle).click({force:true});
cy.wait(2000);
cy.contains('Send Payment Link').click({force:true});
cy.wait(2000);
cy.get(this.locators.AmberPay).click({force:true});
cy.wait(2000);
cy.get(this.locators.newEmail).click({force:true});
cy.wait(2000);
cy.get(this.locators.mailid).type('skamna1101@gmail.com');
cy.wait(2000);
cy.get(this.locators.new).click({force:true});
cy.wait(2000);
cy.get(this.locators.mobileNumber).type('8390336828');
cy.wait(2000);
cy.get(this.locators.amount).type('100');
cy.wait(2000);
cy.get(this.locators.send).click({force:true});
cy.wait(2000);
cy.contains('Success!').should('be.visible');
cy.get('body').invoke('text').then(text=>{
const match=text.match(/Payment Link sent successfully with reference number:\s*(\d+)/);
expect(match).to.not.be.null;
const referenceNumber=match[1];
cy.log(`Payment Link Reference Number: ${referenceNumber}`);
});
}

accountdetailspycc(){
    cy.get(this.locators.creditcard).click({force:true});
cy.wait(2000);
cy.get(this.locators.accountnumber).clear().type('4726428046987990');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);    
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.Communicationhistory).click({force:true});
cy.wait(2000);
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;
cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X+\d{2}$/);
});
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
cy.get('tbody').should('contain.text','SMS');
cy.get('tbody').should('contain.text','Email');
}



AcnumbersendpaymentCC(){
    cy.get(this.locators.creditcard).click({force:true});
cy.wait(2000);
  cy.get(this.locators.accountnumber).clear().type('4726428046987990');
cy.wait(2000);
    cy.get(this.locators.searchbutton).click({force:true});
    cy.wait(2000);
    cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
    cy.wait(2000);
    cy.get(this.locators.togglebuttoncard).click({force:true});
    cy.wait(2000);
    cy.contains('Send Payment Link').scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.AmberPay).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.newEmail).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.mailid).type('skamna1101@gmail.com');
    cy.wait(2000);
    cy.get(this.locators.new).click({force:true});
    cy.wait(2000);
    cy.get(this.locators.mobileNumber).type('8390336828');
    cy.wait(2000);
cy.get(this.locators.amount).type('100');
cy.wait(2000);
cy.get(this.locators.send).click({force:true});
cy.wait(2000);
cy.contains('Success!').should('be.visible');
cy.get('body').invoke('text').then(text=>{
const match=text.match(/Payment Link sent successfully with reference number:\s*(\d+)/);
expect(match).to.not.be.null;
const referenceNumber=match[1];
cy.log(`Payment Link Reference Number: ${referenceNumber}`);
});

}



accountdetailspyacCC(){
cy.get(this.locators.accountdetails).click({force:true});
cy.wait(2000);    
cy.get(this.locators.creditcard).click({force:true});
cy.wait(2000);
cy.get(this.locators.accountnumber).clear().type('4726428046987990');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);    
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.Communicationhistory).click({force:true});
cy.wait(2000);
cy.get('tbody tr',{timeout:15000}).should('have.length.greaterThan',0);
const today=new Date();
const day=String(today.getDate()).padStart(2,'0');
const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const month=monthNames[today.getMonth()];
const year=String(today.getFullYear()).slice(-2);
const currentDate=`${day}-${month}-${year}`;
cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text',currentDate);
cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^\d{2}X+\d{2}$/);
});
cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then(value=>{
expect(value.trim()).to.match(/^[A-Za-z]{2}X+@[A-Za-z]X+\.com$/);
});
cy.get('tbody').should('contain.text','SMS');
cy.get('tbody').should('contain.text','Email');
}



Accountdetails(){
cy.get(this.locators.accountdetails).click({force:true});
cy.wait(2000);    
cy.get(this.locators.accountnumber).clear().type('1667');
cy.wait(2000);
cy.get(this.locators.searchbutton).click({force:true});
cy.wait(2000);    
cy.get('[style="text-wrap-mode: nowrap; position: relative;"] > span').click({force:true});
cy.wait(2000);
cy.get(this.locators.toggle).click({force:true});
cy.wait(2000);
cy.get(this.locators.Communicationhistory).click({force:true});
cy.wait(2000);
}
dateandtime(){
cy.get('table thead th',{timeout:15000}).should('contain.text','Date & Time');
}
verifyCommunicationHistoryEmailMobile(){
cy.get('table thead th',{timeout:15000}).should('contain.text','Email/Mobile');
}

verifyCommunicationHistoryTemplate(){
cy.get('table thead th',{timeout:15000}).should('contain.text','Communication Template');
}

verifyCommunicationHistoryTrigger(){
cy.get('table thead th',{timeout:15000}).should('contain.text','Communication Trigger');
}

verifyCommunicationHistoryStatus(){
cy.get('table thead th',{timeout:15000}).should('contain.text','Status');
}

verifyCommunicationHistoryChannel(){
cy.get('table thead th',{timeout:15000}).should('contain.text','Channel');
}

verifyCommunicationHistoryCommunicationID(){
cy.get(this.locators.togglehistorycomm).scrollIntoView().click({force:true});
cy.wait(2000);   
cy.contains('Communication ID').scrollIntoView().click({force:true});    
cy.wait(2000);
cy.get('table thead th',{timeout:15000}).then($headers=>{
const headerText=$headers.text();
expect(headerText).to.match(/Communication ID|CommunicationRefNumber/i);
});
}

verifyCommunicationHistoryVendorReferenceID(){
cy.get(this.locators.togglehistorycomm).scrollIntoView().click({force:true});
cy.wait(2000);   
cy.contains('Vendor Request ID').scrollIntoView().click({force:true});    
cy.wait(2000);
cy.get('table thead th',{timeout:15000}).then($headers=>{
const headerText=$headers.text();
expect(headerText).to.match(/Vendor Request ID|VendorReferenceID/i);
});
}

verifyCommunicationHistoryPagination(){
cy.get(this.locators.lastpage).click({force:true});
cy.wait(2000);
cy.get(this.locators.firstpage).click({force:true});
cy.wait(2000);
cy.get(this.locators.pageno).select('50');
}
}

export default UserCommunicationReportPage;