const XLSX = require('xlsx');
const fs = require('fs');

const readExcelFile = (filePath) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetsData = {};

    workbook.SheetNames.forEach(sheetName => {
      const sheet = workbook.Sheets[sheetName];
      sheetsData[sheetName] = XLSX.utils.sheet_to_json(sheet, {
        defval: ''   // preserve empty cells
      });
    });

    return sheetsData;
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
    return null;
  }
};

const writeExcelFile = (filePath, sheetName, data) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Excel file not found: ${filePath}`);
  }

  // Read existing workbook (DO NOT recreate)
  const workbook = XLSX.readFile(filePath);

  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet "${sheetName}" not found in Excel file`);
  }

  // Update only specified cells (A2, B2, etc.)
  Object.entries(data).forEach(([cellRef, value]) => {
    worksheet[cellRef] = {
      t: typeof value === 'number' ? 'n' : 's',
      v: value
    };
  });

  // Safely update sheet range
  const range = XLSX.utils.decode_range(worksheet['!ref']);
  Object.keys(data).forEach(cellRef => {
    const { r, c } = XLSX.utils.decode_cell(cellRef);
    if (r > range.e.r) range.e.r = r;
    if (c > range.e.c) range.e.c = c;
  });
  worksheet['!ref'] = XLSX.utils.encode_range(range);

  // Write back SAME file
  XLSX.writeFile(workbook, filePath);
  return true;
};

module.exports = { readExcelFile, writeExcelFile };
