const XLSX = require('xlsx');

function writeDataToFile(data){
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // Write the workbook to a file
    XLSX.writeFile(workbook, 'output.xlsx');
}

module.exports = {writeDataToFile }