const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');
const csv = require('csv-parse/sync');
const excelUtils = require('./cypress/e2e/utils/excelutils.js');

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

                getExcelData(filePath) {
                    const resolvedFilePath = path.join(
                        config.projectRoot,
                        'cypress',
                        'e2e',
                        filePath
                    );

                    return excelUtils.readExcelFile(resolvedFilePath);
                },

                updateExcelCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateProductMasterTemplateCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateBankMasterTemplateCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateBulktrailCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updatePrimaryAgency_CustomerlevelCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateENCollectSecondaryAllocationCollectionStaff_CustomerlevelCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateAllocationToOwner_customeridLevelCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateUnAllocation_acclevelCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateUnAllocation_customeridlevelCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateBulkPaymentsUploadTemplateCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateAgentCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateStaffCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateAgentTemplateCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateAgencyTemplateCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateStaffTemplateCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateBulkPaymentCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateagencybulkuploadCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                updateLegalBulkCell({ filePath, sheetName, data }) {
                    return excelUtils.writeExcelFile(
                        filePath,
                        sheetName,
                        data
                    );
                },

                moveAllDownloadsToFixtures() {

                    const downloadsFolder = path.join(
                        config.projectRoot,
                        'cypress',
                        'downloads'
                    );

                    const fixturesFolder = path.join(
                        config.projectRoot,
                        'cypress',
                        'fixtures'
                    );

                    if (!fs.existsSync(downloadsFolder)) {
                        return `Downloads folder not found: ${downloadsFolder}`;
                    }

                    const files = fs.readdirSync(downloadsFolder);

                    if (files.length === 0) {
                        return `No files found in ${downloadsFolder}`;
                    }

                    files.forEach((file) => {

                        const sourcePath = path.join(
                            downloadsFolder,
                            file
                        );

                        const destPath = path.join(
                            fixturesFolder,
                            file
                        );

                        fs.renameSync(
                            sourcePath,
                            destPath
                        );
                    });

                    return `Moved ${files.length} file(s) from downloads to fixtures.`;
                },

                findLatestFile({ folder, pattern }) {

                    const files = fs.readdirSync(folder)
                        .filter(f => f.includes(pattern))
                        .map(f => ({
                            name: f,
                            time: fs.statSync(
                                path.join(folder, f)
                            ).mtime.getTime()
                        }))
                        .sort((a, b) => b.time - a.time);

                    return files.length
                        ? path.join(folder, files[0].name)
                        : null;
                },

                readCsv(filePath) {

                    const content = fs.readFileSync(
                        filePath,
                        'utf-8'
                    );

                    return csv.parse(content, {
                        columns: true,
                        skip_empty_lines: true
                    });
                },

                zipFileExists() {

                    const downloadsFolder = path.join(
                        config.projectRoot,
                        'cypress',
                        'downloads'
                    );

                    if (!fs.existsSync(downloadsFolder)) {
                        return false;
                    }

                    const files = fs.readdirSync(
                        downloadsFolder
                    );

                    return files.some(file =>
                        file.toLowerCase().endsWith('.zip')
                    );
                },

                getLatestZipFile() {

                    const downloadsFolder = path.join(
                        config.projectRoot,
                        'cypress',
                        'downloads'
                    );

                    if (!fs.existsSync(downloadsFolder)) {
                        return null;
                    }

                    const files = fs.readdirSync(downloadsFolder)
                        .filter(file =>
                            file.toLowerCase().endsWith('.zip')
                        )
                        .map(file => ({
                            name: file,
                            time: fs.statSync(
                                path.join(
                                    downloadsFolder,
                                    file
                                )
                            ).mtime.getTime()
                        }))
                        .sort((a, b) => b.time - a.time);

                    return files.length
                        ? files[0].name
                        : null;
                },

                extractZipAndReadCSV({ zippath }) {

                    if (!zippath) {
                        throw new Error('ZIP path is required');
                    }

                    const zipPath = path.isAbsolute(zippath)
                        ? zippath
                        : path.join(
                            config.projectRoot,
                            zippath
                        );

                    if (!fs.existsSync(zipPath)) {
                        throw new Error(
                            `ZIP file not found: ${zipPath}`
                        );
                    }

                    const extractFolder = path.join(
                        config.projectRoot,
                        'cypress',
                        'downloads',
                        'extracted_report'
                    );

                    if (fs.existsSync(extractFolder)) {
                        fs.rmSync(
                            extractFolder,
                            {
                                recursive: true,
                                force: true
                            }
                        );
                    }

                    fs.mkdirSync(
                        extractFolder,
                        {
                            recursive: true
                        }
                    );

                    const zip = new AdmZip(zipPath);

                    zip.extractAllTo(
                        extractFolder,
                        true
                    );

                    const findCSVFile = (folder) => {

                        const items = fs.readdirSync(
                            folder,
                            {
                                withFileTypes: true
                            }
                        );

                        for (const item of items) {

                            const fullPath = path.join(
                                folder,
                                item.name
                            );

                            if (item.isDirectory()) {

                                const result =
                                    findCSVFile(fullPath);

                                if (result) {
                                    return result;
                                }
                            }

                            if (
                                item.isFile() &&
                                item.name
                                    .toLowerCase()
                                    .endsWith('.csv')
                            ) {
                                return fullPath;
                            }
                        }

                        return null;
                    };

                    const csvFilePath =
                        findCSVFile(extractFolder);

                    if (!csvFilePath) {
                        throw new Error(
                            'CSV file not found inside ZIP file'
                        );
                    }

                    const content =
                        fs.readFileSync(
                            csvFilePath,
                            'utf-8'
                        );

                    const records = csv.parse(
                        content,
                        {
                            columns: true,
                            skip_empty_lines: true
                        }
                    );

                    return {
                        csvFile: csvFilePath,
                        records: records
                    };
                }
            });
        },

        specPattern: 'cypress/e2e/tests/**/*.cy.js',

        screenshotOnRunFailure: true,

        video: false
    }
});