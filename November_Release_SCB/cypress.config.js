const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');
const excelUtils = require('./cypress/e2e/utils/excelutils.js');

module.exports = defineConfig({
  projectId: 'tb2cx2',
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    downloadsFolder: 'cypress/downloads', // ✅ keep this

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {

        fileExists(filePath) {
          return fs.existsSync(filePath);
        },

        // ✅ Get Excel Data
        getExcelData({ filePath, sheetName }) {
          const resolvedFilePath = path.join(
            config.projectRoot,
            filePath
          );
          return excelUtils.readExcelFile(resolvedFilePath, sheetName);
        },

        // ✅ Update Excel Tasks
        updateExcelCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateBulkContactTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateBulktrailTemplateCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateBulktrailCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },  // ✅ FIXED: properly closed

        // ✅ Move Downloads Task (Safe Version)
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

          let movedCount = 0;

          files.forEach((file) => {

            // ✅ Ignore incomplete Chrome downloads
            if (file.endsWith('.crdownload')) {
              return;
            }

            const sourcePath = path.join(downloadsFolder, file);
            const destPath = path.join(fixturesFolder, file);

            if (fs.existsSync(sourcePath)) {
              fs.renameSync(sourcePath, destPath);
              movedCount++;
            }

          });

          return `Moved ${movedCount} completed file(s) from downloads to fixtures.`;
        }

      });

      return config;
    },

    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    screenshotOnRunFailure: true,
    video: false
  }

});