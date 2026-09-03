const xlsx = require('xlsx');


//====================================================
// READ EXCEL FILE
//====================================================

const readExcelFile = (filePath) => {

    try {

        const workbook = xlsx.readFile(filePath);

        const sheetsData = {};

        workbook.SheetNames.forEach((sheetName) => {

            const sheet = workbook.Sheets[sheetName];

            sheetsData[sheetName] =
                xlsx.utils.sheet_to_json(sheet);

        });

        return sheetsData;

    } catch (error) {

        console.error(
            `Error reading Excel file: ${error.message}`
        );

        return null;
    }
};


//====================================================
// WRITE / UPDATE EXCEL FILE
//====================================================

const writeExcelFile = (
    filePath,
    sheetName,
    data
) => {

    let workbook;

    try {

        workbook = xlsx.readFile(filePath);

    } catch (e) {

        workbook = xlsx.utils.book_new();

    }

    let worksheet =
        workbook.Sheets[sheetName];

    if (!worksheet) {

        worksheet =
            xlsx.utils.aoa_to_sheet([[]]);

        xlsx.utils.book_append_sheet(
            workbook,
            worksheet,
            sheetName
        );
    }

    Object.entries(data).forEach(
        ([cellRef, value]) => {

            const cell =
                xlsx.utils.decode_cell(cellRef);

            xlsx.utils.sheet_add_aoa(
                worksheet,
                [[value]],
                {
                    origin: cell
                }
            );

        }
    );

    xlsx.writeFile(
        workbook,
        filePath
    );

    return null;
};


//====================================================
// CLEAR LEGAL BULK DATA ROWS
// Keeps Header Row and Removes All Existing Data Rows
//====================================================

const clearLegalBulkDataRows = (
    filePath,
    sheetName
) => {

    let workbook;

    try {

        workbook =
            xlsx.readFile(filePath);

    } catch (error) {

        throw new Error(
            `Unable to read Excel file: ${error.message}`
        );

    }

    // Get requested worksheet
    const worksheet =
        workbook.Sheets[sheetName];

    if (!worksheet) {

        throw new Error(
            `Sheet "${sheetName}" not found in file: ${filePath}`
        );

    }

    // Convert worksheet to array
    const sheetData =
        xlsx.utils.sheet_to_json(
            worksheet,
            {
                header: 1,
                defval: ''
            }
        );

    // If no data exists
    if (sheetData.length === 0) {

        return 'Sheet is already empty';

    }

    // Keep only first row/header
    const headerRow =
        sheetData[0];

    // Create new worksheet with header only
    const newWorksheet =
        xlsx.utils.aoa_to_sheet([
            headerRow
        ]);

    // Replace existing worksheet
    workbook.Sheets[sheetName] =
        newWorksheet;

    // Save updated workbook
    xlsx.writeFile(
        workbook,
        filePath
    );

    return 'Legal bulk data rows cleared successfully';
};


//====================================================
// EXPORT FUNCTIONS
//====================================================

module.exports = {

    readExcelFile,

    writeExcelFile,

    clearLegalBulkDataRows

};