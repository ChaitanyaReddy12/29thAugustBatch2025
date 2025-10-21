import * as XLSX from 'xlsx';
import * as path from 'path';

export class ExcelReader {
    static readExcelFile(filePath: string, sheetName: string): any[] {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        if (!worksheet) {
            throw new Error(`Sheet '${sheetName}' not found in Excel file.`);
        }
        return XLSX.utils.sheet_to_json(worksheet);
    }
}