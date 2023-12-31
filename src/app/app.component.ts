import { Component, OnInit } from '@angular/core';


enum Pieezas {
  Empty,
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
}

enum Color {
  White,
  Black,
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {
  board: Pieezas[][] = [];

  constructor() {}

  ngOnInit() {
    this.iniciarTablero();
    
  }

  iniciarTablero(): void {
    for (let i = 0; i < 8; i++) {
      this.board[i] = Array(8).fill(Pieezas.Empty);
    }

    this.placeInitialPieces();
  }

  placeInitialPieces(): void {
    // Peones
    for (let i = 0; i < 8; i++) {
      this.board[1][i] = Pieezas.Pawn;
      this.board[6][i] = Pieezas.Pawn;
    }

    // Torres
    this.board[0][0] = this.board[0][7] = Pieezas.Rook;
    this.board[7][0] = this.board[7][7] = Pieezas.Rook;

    // Caballos
    this.board[0][1] = this.board[0][6] = Pieezas.Knight;
    this.board[7][1] = this.board[7][6] = Pieezas.Knight;

    // Alfiles
    this.board[0][2] = this.board[0][5] = Pieezas.Bishop;
    this.board[7][2] = this.board[7][5] = Pieezas.Bishop;

    // Reinas
    this.board[0][3] = Pieezas.Queen;
    this.board[7][3] = Pieezas.Queen;

    // Reyes
    this.board[0][4] = Pieezas.King;
    this.board[7][4] = Pieezas.King;
  }

  getColor(row: number, col: number): string {
    // Asignar colores alternos a las casillas
    return (row + col) % 2 === 0 ? 'white' : 'black';
  }

  getPieceClass(row: number, col: number): string {
    const piece = this.board[row][col];
    return `piece-${Pieezas[piece].toLowerCase()}`;
  }

  selectedPiece: { row: number, col: number } | null = null;

  // ...

  cellClicked(row: number, col: number): void {
    const piece = this.board[row][col];

    if (this.selectedPiece) {
      // Movimiento de la pieza seleccionada
      if (this.isValidMove(this.selectedPiece.row, this.selectedPiece.col, row, col)) {
        this.movePiece(this.selectedPiece.row, this.selectedPiece.col, row, col);
        this.selectedPiece = null;
      }
    } else {
      // Selección de la pieza
      if (piece !== Pieezas.Empty) {
        this.selectedPiece = { row, col };
      }
    }
  }

  // Lógica de movimiento básica, debes expandirla según las reglas del ajedrez
  isValidMove(startRow: number, startCol: number, endRow: number, endCol: number): boolean {
    // Implementa lógica específica para cada tipo de pieza
    return true;
  }

  movePiece(startRow: number, startCol: number, endRow: number, endCol: number): void {
    // Mueve la pieza en el tablero
    const piece = this.board[startRow][startCol];
    this.board[endRow][endCol] = piece;
    this.board[startRow][startCol] = Pieezas.Empty;
  }
}
