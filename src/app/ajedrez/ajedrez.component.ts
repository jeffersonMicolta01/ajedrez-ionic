import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
IonicModule


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
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.component.html',
  styleUrls: ['./ajedrez.component.scss'],
})
export class AjedrezComponent implements OnInit {
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
}
