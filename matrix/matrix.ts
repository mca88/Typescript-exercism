export class Matrix {

  public matrix: number[][] = [];
  public rowLength: number = 0;
  public columnLength: number = 0;

  constructor(matrixString: string) {

    const rows = matrixString.split('\n');

    for (let i = 0; i < rows.length; i++) {

      this.matrix[i] = [];

      const numbers = rows[i].split(' ');

      for (let j = 0; j < numbers.length; j++) {
        this.matrix[i][j] = Number(numbers[j]);
      }
    }

    this.rowLength = this.matrix.length;
    this.columnLength = this.matrix[0].length;
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {

    const columns: number[][] = [];

    for (let i = 0; i < this.columnLength; i++) {

      columns[i] = []

      for (let j = 0; j < this.rowLength; j++) {

        columns[i][j] = this.matrix[j][i];
      }
    }
    return columns;
  }
}
