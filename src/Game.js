export default class Game {
	constructor() {
		this.score = 0;
		this.lines = 0;
		this.level = 0;
		this.board = [];
		this.active = {
			x: 0,
			y: 0,
			block: [
				[0, 1, 0],
				[0, 1, 0],
				[0, 0, 0],
			],
		};
	}
}
