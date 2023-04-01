import { Column } from "./column";

export class Columns {
	canvas: HTMLCanvasElement;
	columns: number[];

	constructor(canvas: HTMLCanvasElement, columns: number[]) {
		this.canvas = canvas;
		this.columns = columns;
	}

	render() {
		for (let i = 0; i < this.columns.length; i++) {
			const column = new Column(this.canvas, i, this.columns.length, this.columns[i]);
			column.render();
		}
	}
}
