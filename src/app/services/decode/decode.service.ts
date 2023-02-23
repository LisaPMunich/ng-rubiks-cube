import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  errorMessage = 'This input is invalid.';
  rawLosungswort: string | undefined;

  constructor( ) { }


  validateLosungswort(rawLosungswort: string): void {
    const validInputPattern = /^[A-Z\s]+$/; // diese regEx erlaubt nur Großbuchstaben und Leerzeichen
    if (!validInputPattern.test(rawLosungswort)) {
      throw new Error('Validation Error.')
    }
  }

  decode(losungswort: string, encoded: string){
    this.validateLosungswort(losungswort);

    // Step 1: Sort and map unique characters of keyword
    const sortedLosungswort = losungswort.toUpperCase().split('').sort();

    // Create a map that associates each character with its position in the sorted array
    const positions = new Map(sortedLosungswort.map((char, i) => [char, i]));

    // Step 2: Create empty matrix
    const rows = Math.ceil(encoded.length / losungswort.length);
    const cols = losungswort.length;
    const matrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill('_'));

    // Step 3: Fill matrix column by column
    let index = 0;
    for (let col of sortedLosungswort) {
      const originalCol = positions.get(col)!;
      for (let row = 0; row < rows; row++) {
        matrix[row][originalCol] = encoded[index] !== undefined ? encoded[index] : ' ';
        index++;
      }
    }

    // Step 4: Read message from matrix row by row and concatenate characters
    let decoded = '';
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        decoded += matrix[row][col];
      }
    }

    return decoded.trim();
  }
}
