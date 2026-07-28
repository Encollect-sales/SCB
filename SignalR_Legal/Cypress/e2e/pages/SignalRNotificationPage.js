class SignalRNotificationPage {
  constructor(locators) {
    this.locators = locators;
  }

  downloadTemplate() {

    cy.contains("Allocation").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Upload").click({force:true});
    cy.wait(2000);
    cy.contains("Agency Bulk Allocation Account Level").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioDownload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.downloadTemplateButton).click({ force: true });
  }

uploadFile(fileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput)
        .selectFile(`cypress/fixtures/${fileName}`, {
            force: true
        });

    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click();
}
  SignalRNotification_01() {

    cy.get(this.locators.icon).click({ force: true });
  }

  SignalRNotification_02() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
  }

  SignalRNotification_03() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.emptypanel).should('have.length', 0);
  }

  SignalRNotification_04() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.contains("Show Only Unread").should('exist');
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
  }

  SignalRNotification_05() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.contains("Show Only Unread").should('exist');
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_06() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Clear All').should('exist').should('be.disabled');
  }

  SignalRNotification_07() {
   cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('Mark All as Read').should('exist').should('be.disabled');;
  }

  SignalRNotification_08() {
    cy.wait(2000);
    cy.get(this.locators.clearAllButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_09() {
    cy.wait(2000);
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_10() {
    cy.wait(2000);
    cy.get(this.locators.icon).click({ force: true });
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
  }

SignalRNotification_11() {
    cy.wait(2000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('body').click(0, 0);
    cy.wait(2000);
    cy.get(this.locators.panel).should('not.exist');


}
SignalRNotification_12() {

    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('No notifications found').should('be.visible');
    cy.wait(2000);
    cy.contains('Show Only Unread').should('be.visible');
    cy.wait(2000);
    cy.contains('Clear All').should('be.visible');
    cy.wait(2000);
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").should('include', '/dashboard');
}

  SignalRNotification_13() {
    // Step: Open and close panel multiple times
    // Expected: Panel should work consistently
    for (let i = 0; i < 3; i++) {
            cy.get(this.locators.icon).click({ force: true });
            cy.get(this.locators.panel).scrollIntoView().should('be.visible');
            cy.get(this.locators.icon).click({ force: true });
        }
  }

  SignalRNotification_14() {
    cy.get(this.locators.icon).should('be.visible').click({ force: true });
  }

  SignalRNotification_15() {

    // Verify dashboard is loaded
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").then((currentUrl) => {
    cy.wait(2000);  
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);  
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains("Account Search").should('be.visible');
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").should('eq', currentUrl);
    });
}

  SignalRNotification_16() {
        cy.get(this.locators.icon).click({ force: true });
        cy.wait(2000);
        cy.get(this.locators.panel).scrollIntoView().should('be.visible');
        cy.wait(2000);
       cy.get('.notification-content-container').first().find('.notification-header').should('be.visible');
       cy.get('.notification-content-container').first().find('.notification-content').should('be.visible');

  }



  SignalRNotification_18() {
    cy.get(this.locators.icon).should('be.visible').click({ force: true });
    cy.wait(5000);
    cy.contains('.notification-header', 'Account Level Agency Bulk Allocation Processed').scrollIntoView().should('be.visible');
  }
  

  SignalRNotification_19() {
    cy.wait(2000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.notification-content-container').should('have.length.greaterThan', 0);
    cy.wait(2000);
   cy.get('.notification-content').then(($contents) => {

    const fileNames = [];

    [...$contents].forEach((el) => {

        const text = el.innerText;

        // Extract filename inside quotes
        const match = text.match(/"([^"]+\.xlsx)"/);

        if (match) {
            fileNames.push(match[1]);
        }
    });

    cy.log('File Names: ' + fileNames.join(', '));

    // Verify there are no duplicate filenames
    expect(new Set(fileNames).size).to.equal(fileNames.length);
});
}
SignalRNotification_20() {
    let latestFile;
    cy.wait(2000);
    cy.get(this.locators.panel).scrollIntoView.should('be.visible');
    cy.wait(2000);
   cy.get('.user-notification-list > :nth-child(1)')
  .find('.notification-content')
  .invoke('text')
  .then((text) => {

      const match = text.match(/PrimaryTeleCallingAgency_Accountlevel_\d+\.xlsx/);

      latestFile = match[0];

      cy.log(latestFile);

      // Example assertion
      expect(latestFile).to.contain('PrimaryTeleCallingAgency_Accountlevel_');
  });
}
  SignalRNotification_21() {
        cy.get(this.locators.panel).scrollIntoView().should('be.visible');
        cy.wait(5000);
        cy.get('.user-notification-container')
    .each(($el) => {
        cy.wrap($el)
            .should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
    cy.wait(2000);
    cy.contains("Mark All as Read").scrollIntoView().click({force:true});
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({force:true});
       cy.get('.user-notification-list > :nth-child(1)')
  .invoke('css', 'background-color')
  .then((unreadColor) => {

      cy.get('.user-notification-list > :nth-child(2)')
        .invoke('css', 'background-color')
        .then((readColor) => {

            expect(unreadColor).to.not.equal(readColor);

        });

  });
  }

  SignalRNotification_22() {

    cy.wait(5000);
    cy.contains('.notification-header', 'Account Level Agency Bulk Allocation Processed').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait(8000);
    cy.contains('Processed').should('be.visible');
  }

  SignalRNotification_23() {
     cy.get(this.locators.panel).scrollIntoView().should('be.visible');
     cy.wait(5000);
    cy.get(".user-notification-list > :nth-child(1)").click({force:true});

  }

  SignalRNotification_24() {
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(5000);
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_25() {
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(5000);
    cy.get(this.locators.clearAllButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_26() {
    cy.get(this.locators.panel).scrollIntoView().should('exist');
    cy.wait(5000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_27() {
    cy.get(this.locators.panel).scrollIntoView().should('exist');
    cy.wait(5000);
    cy.get(this.locators.unreadToggle).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_28() {
    cy.contains("Clear All").click({force:true});
    cy.wait(2000);
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_29(beforeCount) {

    // Verify badge exists after upload
    cy.get('.badge')
        .should('exist')
        .invoke('text')
        .then((text) => {

            const afterCount = Number(text.trim());

            cy.log('Before Count : ' + beforeCount);
            cy.log('After Count : ' + afterCount);

            expect(afterCount).to.equal(beforeCount + 1);

        });

}

  SignalRNotification_30() {
   cy.get('.user-notification-list').scrollTo('bottom');
  }


  SignalRNotification_33() {

    let notificationText = '';
    cy.get(this.locators.panel).should('exist');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1) .notification-content')
        .invoke('text')
        .then((text) => {

            notificationText = text.trim();

            cy.log('Notification Before Refresh: ' + notificationText);
            cy.reload();
            cy.wait(5000);
            cy.get(this.locators.icon).click({ force: true });
            cy.get(this.locators.panel)
                .should('exist');
            cy.get('.user-notification-list > :nth-child(1) .notification-content')
                .should('contain.text', notificationText);

        });

}


  SignalRNotification_36(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');


}

 SignalRNotification_37(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('contain.text', excelFileName);
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('contain.text', 'Confirm File Upload?');
}
 SignalRNotification_38(excelFileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true })
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('not.exist');
   
}

  SignalRNotification_39(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('contain.text', excelFileName);
    cy.wait(2000);
    cy.get(this.locators.closePopupButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_40(excelFileName) {
    cy.wait(2000);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.closePopupButton).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('not.exist');
}
 
  SignalRNotification_42(excelFileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.successToast).should('be.visible');
}

  SignalRNotification_43(excelFileName) {

    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.successToast)
        .invoke('text')
        .should('match', /Transaction\s*ID[:\s]*\d+/i);
}

  

  SignalRNotification_47(excelFileName) {
     cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.toastCloseIcon).should('be.visible').click({ force: true });
  }

 SignalRNotification_48(excelFileName) {

    this.uploadFile(excelFileName);
    cy.get(this.locators.teleCallingAgencyRadioUpload).check({ force: true });
    cy.wait(2000);
    cy.get(this.locators.chooseFileInput).selectFile(`cypress/fixtures/${excelFileName}`, { force: true });
    cy.wait(2000);
    cy.get(this.locators.uploadButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.errorToast).should('be.visible');

}

  SignalRNotification_49(excelFileName) {

    this.uploadFile(excelFileName);
    cy.get(this.locators.confirmationPopup).should('be.visible');
    cy.wait(2000);
    cy.get(this.locators.okButton).click({ force: true });
    cy.get(2000);
    cy.get(this.locators.errorToast)
        .should('be.visible')
        .invoke('text')
        .then((text) => {

            expect(text.trim()).to.not.equal('');

            cy.log(text);

        });

}

 

  SignalRNotification_67() {
    // Step: Click notification
    // Expected: Allocation Status page should open
    cy.get(this.locators.notificationItem).first().click({ force: true });
  }

  SignalRNotification_68() {
    // Step: Navigate via notification
    // Expected: Transaction ID should be prefilled
    cy.get(this.locators.notificationItem).first().click({ force: true });
  }

  SignalRNotification_69() {
    // Step: Click search
    // Expected: Correct record should be displayed
    cy.get(this.locators.searchButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_70() {
    cy.wait(8000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.contains('.xlsx').scrollIntoView().should('be.visible');
    cy.contains('Processed').scrollIntoView().should('be.visible');


}

  SignalRNotification_72() {
     cy.wait(8000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.downloadLink).scrollIntoView().click({ force: true });
  }

  SignalRNotification_73() {
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.pagination).should('be.visible');
  }

 

  SignalRNotification_76(excelFileName) {
    
    cy.wait(8000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(8000);
    cy.contains('Failed').should('exist');
        

}

  SignalRNotification_78() {
      cy.get(this.locators.panel).scrollIntoView().should('be.visible');
      cy.wait(2000);
      cy.contains("Failed").scrollIntoView().should('exist');
  }

  SignalRNotification_79() {
    cy.get(this.locators.panel).scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
  .invoke('text')
  .then((text) => {
      cy.log(text);
      console.log(text);
  });
  }

  SignalRNotification_80() {
        cy.get(this.locators.panel).scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.contains("Account Level Agency Bulk Allocation Failed").scrollIntoView().should('exist');
      
  }

  SignalRNotification_81() {
          cy.get(this.locators.timestamp).should('exist');
  }


  SignalRNotification_83() {
    cy.get(this.locators.removeIcon).first().should('be.visible').click({ force: true });
  }

  SignalRNotification_84() {

    cy.get(this.locators.clearAllButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_85() {
    cy.get(this.locators.markAllReadButton).should('be.visible').click({ force: true });
  }

  SignalRNotification_86() {
    cy.get(this.locators.unreadToggle).click({ force: true });
  }

  SignalRNotification_87() {
    cy.get('.user-notification-list > :nth-child(1)').should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .should('contain.text', 'Partially Processed');

}
SignalRNotification_88() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-header')
        .invoke('text')
        .then((text) => {

            cy.log(text);

            expect(text.trim()).to.contain('Partially Processed');

        });

}

SignalRNotification_89() {

    cy.wait(10000);

    cy.get(this.locators.icon).click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.panel)
        .should('be.visible');

    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((text) => {

            cy.log(text);

            expect(text.toLowerCase()).to.contain('partially');

            expect(text.toLowerCase()).to.contain('processed');

        });

}

SignalRNotification_90() {

    cy.wait(10000);

    cy.get(this.locators.icon).click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.panel)
        .should('be.visible');

    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((text) => {

            const match = text.match(/PrimaryTeleCallingAgency_Accountlevel_\d+\.xlsx/);

            expect(match).to.not.be.null;

            cy.log('Uploaded File : ' + match[0]);

        });

}

SignalRNotification_91() {

    cy.wait(10000);

    cy.get(this.locators.icon).click({ force: true });

    cy.wait(2000);

    cy.get(this.locators.panel)
        .should('be.visible');

    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .should('contain.text', 'Tele Calling Agency');

}

SignalRNotification_92() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-time')
        .should('be.visible')
        .invoke('text')
        .then((time) => {

            cy.log(time);

            expect(time.trim()).to.not.equal('');

        });

}


SignalRNotification_93() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((text) => {

            expect(text.toLowerCase()).to.contain('Partially');

            expect(text.toLowerCase()).to.contain('Processed');

        });

}

SignalRNotification_94() {
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .click({ force: true });

    cy.wait(5000);
    cy.url("https://scbdemo.sumeruentiger.com/web/#/login").should('include', 'allocation-status');

}

SignalRNotification_95() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.wait(2000);
    cy.get(this.locators.markAllAsRead).click({ force: true });
    cy.wait(3000);
    cy.get('.user-notification-list > :nth-child(1)').should('not.have.css', 'background-color', 'rgb(255, 255, 255)');

}

SignalRNotification_96() {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get(this.locators.panel).should('be.visible');
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').should('exist');
    cy.wait(2000);
    cy.get(this.locators.clearAll).click({ force: true });
    cy.wait(3000);
    cy.get('.user-notification-list').should('not.contain', 'Partially');

}
SignalRNotification_97(excelFileName) {
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.uploadedFileName).should('contain.text', excelFileName.replace('.xlsx', ''));

}


SignalRNotification_98(){
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.successCount)
        .invoke('text')
        .then((count) => {

            cy.log('Success Count : ' + count);

            expect(Number(count.trim())).to.equal(1);

        });

}



SignalRNotification_99() {
    cy.wait(10000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.failedCount)
        .invoke('text')
        .then((count) => {

            cy.log('Failed Count : ' + count);

            expect(Number(count.trim())).to.equal(1);

        });
      }


  SignalRNotification_100() {
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)').click({ force: true });
    cy.wait(5000);
    cy.get(this.locators.downloadStatusLink).should('be.visible').click({ force: true });
    cy.wait(5000);

}

SignalRNotification_101() {
    cy.wait(2000);
    cy.get('.user-notification-list > :nth-child(1)')
        .find('.notification-content')
        .invoke('text')
        .then((notificationText) => {

            cy.wrap(notificationText).as('notificationText');

        });

    cy.reload();
    cy.wait(8000);
    cy.get(this.locators.icon).click({ force: true });
    cy.wait(2000);
    cy.get('@notificationText').then((notificationText) => {

        cy.get('.user-notification-list > :nth-child(1)')
            .find('.notification-content')
            .should('contain.text', notificationText);

    });

}

}

export default SignalRNotificationPage;
