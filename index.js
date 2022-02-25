import Game from './src/game.js';

const game = new Game();

window.game = game;


for (let index = 0; index < 25; index++) {
    game.movePieceDown();
    
}


console.log(game.board);
