import Game from './src/game.js';

const game = new Game();

window.game = game;

// for (let index = 0; index < 4; index++) {
//     game.rotatePiece();
//     console.table(game.active.blocks)

// }

game.rotatePiece();
game.movePieceLeft();
game.rotatePiece();

console.table(game.active.blocks);

game.movePieceRight();
game.rotatePiece();
game.lockPiece();

console.table(game.active.blocks);
console.table(game.board);
