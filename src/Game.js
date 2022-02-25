export default class Game {
	constructor() {
		this.score = 0;
		this.lines = 0;
		this.level = 0;
		this.board = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		];
		this.active = {
			x: 0,
			y: 0,
			blocks: [
				[0, 1, 0],
				[1, 1, 1],
				[0, 0, 0],
			],
		};
	}

	movePieceLeft() {
		this.active.x -= 1;

		if (this.hasCollision()) {
			this.active.x += 1;
			this.lockPiece();
		}
	}
	movePieceRight() {
		this.active.x += 1;

		if (this.hasCollision()) {
			this.active.x -= 1;
			this.lockPiece();
		}
	}

	movePieceDown() {
		this.active.y += 1;

		if (this.hasCollision()) {
			this.active.y -= 1;
			this.lockPiece();
		}
	}

	hasCollision() {
		const { active, board } = this;
		const { x: pieceX, y: pieceY, blocks } = active;

		for (let y = 0; y < blocks.length; y++) {
			for (let x = 0; x < blocks[y].length; x++) {
				if (
					blocks[y][x] &&
					(board[pieceY + y] === undefined ||
						board[pieceY + y][pieceX + x] === undefined ||
						board[pieceY + y][pieceX + x])
				)
					return true;
			}
		}

		return false;
	}

	lockPiece() {
		const { active, board } = this;
		const { x: pieceX, y: pieceY, blocks } = active;

		for (let y = 0; y < blocks.length; y++) {
			for (let x = 0; x < blocks[y].length; x++) {
				if (blocks[y][x]) {
					board[pieceY + y][pieceX + x] = blocks[y][x];
				}
			}
		}
	}
}
