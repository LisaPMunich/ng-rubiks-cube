import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodeService {

  errorMessage = 'This input is invalid.';
  rawLosungswort: string | undefined;

  constructor( ) { }


  validateLosungswort(rawLosungswort: string): void {
    const validInputPattern = /^[A-Z\s]+$/; // diese regEx erlaubt nur Großbuchstaben und Leerzeichen
    if (!validInputPattern.test(rawLosungswort)) {
      throw new Error('Validation Error.')
    }
  }

  encode(rawLosungswort: string, rawInput: string){
    this.validateLosungswort(rawLosungswort);
    const losungswort = rawLosungswort.toUpperCase().split('');
    const sortedLosungswort = losungswort.slice().sort(); // create a copy of losungswort and sort it alphabetically
    const losungswortIndices = losungswort.map((letter, index) => index); // create an array of the original indices of the letters in losungswort
    losungswortIndices.sort((a, b) => sortedLosungswort[a].localeCompare(sortedLosungswort[b])); // sort losungswortIndices along with sortedLosungswort, based on alphabetical order of sortedLosungswort

    let rows = Math.ceil(rawInput.length / losungswort.length); // number of rows needed to display the characters of rawInput in a rectangular grid
    const cols = losungswort.length; // number of columns in the grid (= length of losungswort)
    const lastRowLength = rawInput.length % cols; // if length of last row is not zero, last row will be shorter than the other rows
    if (lastRowLength !== 0) {
      rows++; // add extra row to grid to accommodate the remaining characters
    }
    let cube = Array(cols).fill(null).map(() => Array(rows).fill('_')); // creates the columns and rows of the grid
    let inputIndex = 0;
    for (let row = 0; row < rows; row++) { // loops over rows of grid
      for (let col = 0; col < losungswort.length; col++) { // loops over columns of grid
        if (inputIndex < rawInput.length) { // checks whether there are still characters left in the input string to fill in
          cube[col][row] = rawInput[inputIndex]; // left characters assigned to the correct position in the cube
          inputIndex++;
        } else {
          cube[col][row] = ' '; // if places left in cube, filled with empty spaces
        }
      }
    }
    let output = '';
    for (let i = 0; i < losungswort.length; i++) {
      const currentLetter = losungswort[i];
      const currentLetterIndex = rawLosungswort.toUpperCase().indexOf(currentLetter);
      for (let row = 0; row < rows; row++) {
        output += cube[currentLetterIndex][row];
      }
    }
    return output;
  }
}
