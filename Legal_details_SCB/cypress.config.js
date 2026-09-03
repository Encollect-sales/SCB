const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parse/sync');
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
          // FIX: filePath may already be an ABSOLUTE path (e.g. returned by
          // findLatestFile, which builds it from an absolute downloads/fixtures
          // folder). Previously this always did:
          //   path.join(config.projectRoot, 'cypress', 'e2e', filePath)
          // path.join() does NOT reset on an absolute segment the way
          // path.resolve() does, so passing an absolute filePath produced a
          // broken, non-existent path like:
          //   <projectRoot>/cypress/e2e/Users/you/project/cypress/downloads/foo.xlsx
          // That caused readExcelFile to silently fail and return null,
          // which surfaced downstream as "expected null not to be null".
          //
          // Now: only join with cypress/e2e when filePath is relative.
          const resolvedFilePath = path.isAbsolute(filePath)
            ? filePath
            : path.join(config.projectRoot, 'cypress', 'e2e', filePath);

          if (!fs.existsSync(resolvedFilePath)) {
            throw new Error(
              `getExcelData: file not found at resolved path: ${resolvedFilePath} (input was: ${filePath})`
            );
          }

          const data = excelUtils.readExcelFile(resolvedFilePath);

          if (data === null || data === undefined) {
            throw new Error(
              `getExcelData: readExcelFile returned no data for: ${resolvedFilePath}`
            );
          }

          return data;
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

        updateBulkPaymentCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },

        updateagencybulkuploadCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
        updateLegalBulkCell({ filePath, sheetName, data }) {
          return excelUtils.writeExcelFile(filePath, sheetName, data);
        },
        clearLegalBulkDataRows({ filePath, sheetName }) {

          return excelUtils.clearLegalBulkDataRows(
            filePath,
            sheetName
          );

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
        },

        // ---- New tasks for downloading & verifying the status/error CSV ----

        findLatestFile({ folder, pattern }) {
          if (!fs.existsSync(folder)) {
            return null;
          }

          const files = fs.readdirSync(folder)
            .filter(f => f.includes(pattern))
            .map(f => ({
              name: f,
              time: fs.statSync(path.join(folder, f)).mtime.getTime()
            }))
            .sort((a, b) => b.time - a.time);

          return files.length ? path.join(folder, files[0].name) : null;
        },

        // NEW: wait until the downloaded file's size stops changing, to avoid
        // reading a partially-written file (common cause of "file exists but
        // parsing/returns null" flakiness right after a download).
        waitForFileStable({ filePath, timeout = 15000, interval = 300 }) {
          return new Promise((resolve, reject) => {
            const start = Date.now();
            let lastSize = -1;
            let stableHits = 0;

            const check = () => {
              if (!fs.existsSync(filePath)) {
                if (Date.now() - start > timeout) {
                  return reject(new Error(`File never appeared: ${filePath}`));
                }
                return setTimeout(check, interval);
              }

              const size = fs.statSync(filePath).size;

              if (size > 0 && size === lastSize) {
                stableHits += 1;
                // require 2 consecutive stable reads to be extra safe
                if (stableHits >= 2) {
                  return resolve(filePath);
                }
              } else {
                stableHits = 0;
              }

              lastSize = size;

              if (Date.now() - start > timeout) {
                return reject(new Error(`File never stabilized (last size ${lastSize}): ${filePath}`));
              }

              setTimeout(check, interval);
            };

            check();
          });
        },

        readCsv(filePath) {
          const content = fs.readFileSync(filePath, 'utf-8');
          return csv.parse(content, { columns: true, skip_empty_lines: true });
        }

      });
    },

    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    screenshotOnRunFailure: true,
    video: false,
  },
});