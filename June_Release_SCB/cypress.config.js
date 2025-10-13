const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');
const excelUtils = require('./cypress/e2e/utils/excelutils.js');  // Corrected path

module.exports = defineConfig({
  projectId: 'tb2cx2',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // ✅ Added testIsolation: false
    // testIsolation: false,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      

      on('task', {
        fileExists(filePath) {
          return fs.existsSync(filePath);
        },
        getExcelData(filePath) {
          const resolvedFilePath = path.join(config.projectRoot, 'cypress', 'e2e', filePath);
          return excelUtils.readExcelFile(resolvedFilePath);
        },
        updateExcelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
        updateProductMasterTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
        updateBankMasterTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
        updateBulktrailCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
        updatePrimaryAgency_CustomerlevelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },     

        updateENCollectSecondaryAllocationCollectionStaff_CustomerlevelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },    

        updateAllocationToOwner_customeridLevelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },  

        updateUnAllocation_acclevelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },   

        updateUnAllocation_customeridlevelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },  

        updateBulkPaymentsUploadTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },  

        updateAgentCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateStaffCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateAgentTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateAgencyTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateStaffTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },



        moveAllDownloadsToFixtures() {
          const downloadsFolder = path.join(config.projectRoot, 'cypress', 'downloads');
          const fixturesFolder = path.join(config.projectRoot, 'cypress', 'fixtures');
        
          if (!fs.existsSync(downloadsFolder)) {
            return `Downloads folder not found: ${downloadsFolder}`;
          }
        
          const files = fs.readdirSync(downloadsFolder);
          if (files.length === 0) {
            return `No files found in ${downloadsFolder}`;
          }
        
          files.forEach((file) => {
            const sourcePath = path.join(downloadsFolder, file);
            const destPath = path.join(fixturesFolder, file);
        
            fs.renameSync(sourcePath, destPath);
          });
        
          return `Moved ${files.length} file(s) from downloads to fixtures.`;
        }
        
      });
    },
    
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    screenshotOnRunFailure: true,
    video: false,
  },
});
