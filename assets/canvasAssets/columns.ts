import { Column } from "./column";

export class Columns {
	canvas: HTMLCanvasElement;
	columnHeights: number[];
	columns: Column[];

	constructor(canvas: HTMLCanvasElement, columns: number[]) {
		this.canvas = canvas;
		this.columnHeights = columns;
		this.columns = [];
	}

	render() {
		for (let i = 0; i < this.columnHeights.length; i++) {
			const column = new Column(this.canvas, i, this.columnHeights.length, this.columnHeights[i]);
			column.render();
			this.columns.push(column);
			column.subscribe_to_mouse_move_events();
		}
	}

	unsubscribe_to_mouse_move_events() {
		this.columns.forEach((column) => {
			column.unsubscribe_to_mouse_move_events();
		});
	}
}
