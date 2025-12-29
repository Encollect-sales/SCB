const { defineConfig } = require('cypress');

const path = require('path');

const fs = require('fs');

const excelUtils = require('./cypress/e2e/utils/excelutils.js');  // Corrected path
 
module.exports = defineConfig({

  projectId: 'tb2cx2',

  reporter: 'cypress-mochawesome-reporter',
 
  e2e: {

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
 
      on('task', {

        fileExists(filePath) {

          return fs.existsSync(filePath);

        },
 
        // 🔧 CHANGED: accept object + correct path + support sheetName

        getExcelData({ filePath, sheetName }) {

          const resolvedFilePath = path.join(

            config.projectRoot,

            filePath

          );

          return excelUtils.readExcelFile(resolvedFilePath, sheetName);

        },
 
        updateExcelCell({ filePath, sheetName, data }) {

          return excelUtils.writeExcelFile(filePath, sheetName, data);

        },
 
        updateBulkContactTemplateCell({ filePath, sheetName, data }) {

          return excelUtils.writeExcelFile(filePath, sheetName, data);

        },
 
        updateBulktrailTemplateCell({ filePath, sheetName, data }) {

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
 
    // (optional but recommended)

    downloadsFolder: 'cypress/downloads'

  },

});

 