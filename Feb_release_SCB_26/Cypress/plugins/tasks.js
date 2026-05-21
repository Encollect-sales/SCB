const fs = require('fs');
const { parse } = require('csv-parse');
const { createObjectCsvWriter } = require('csv-writer');
const xlsx = require('xlsx');
 
module.exports = {
  updateCSVFile({ filePath, data }) {
    return new Promise((resolve, reject) => {
      const rows = [];
 
      // Read the existing CSV file
      fs.createReadStream(filePath)
        .pipe(parse({ columns: true }))
        .on('data', (row) => {
          rows.push(row);
        })
        .on('end', () => {
          try {
            // Get the existing headers
            const existingHeaders = Object.keys(rows[0]);
 
            // Create new headers with the updates
            const updatedHeaders = [
              ...existingHeaders,
              'Dispatch id',
              'Date of dispatch'
            ].filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
 
            // Write the updated data back to the CSV file
            const csvWriter = createObjectCsvWriter({
              path: filePath,
              header: updatedHeaders.map((header) => ({ id: header, title: header })),
            });
 
            csvWriter
              .writeRecords(rows)
              .then(() => resolve('CSV file updated successfully'))
              .catch((error) => reject(error));
          } catch (error) {
            reject(error);
          }
        })
        .on('error', (error) => reject(error));
    });
  },
 
  convertCSVToXLSX({ csvFilePath, xlsxFilePath }) {
    return new Promise((resolve, reject) => {
      try {
        // Read the CSV file
        const csvData = fs.readFileSync(csvFilePath, 'utf8');
 
        // Parse the CSV data
        const rows = [];
        parse(csvData, { columns: true }, (err, parsedRows) => {
          if (err) return reject(err);
          rows.push(...parsedRows);
 
          // Create a new workbook and worksheet
          const wb = xlsx.utils.book_new();
          const ws = xlsx.utils.json_to_sheet(rows);
 
          // Append the worksheet to the workbook
          xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
 
          // Write the workbook to an XLSX file
          xlsx.writeFile(wb, xlsxFilePath);
 
          resolve('CSV file converted to XLSX successfully');
        });
      } catch (error) {
        reject(error);
      }
    });
  }
};