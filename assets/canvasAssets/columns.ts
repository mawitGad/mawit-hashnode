import { Column } from "./column";
import { Details } from "./details";

export class Columns {
	canvas: HTMLCanvasElement;
	columnHeights: number[];
	columns: Column[];
	column_details: Details;

	constructor(canvas: HTMLCanvasElement, columns: number[]) {
		this.canvas = canvas;
		this.columnHeights = columns;
		this.column_details = new Details(canvas);
		this.columns = columns.map((number, index) => {
			return new Column(this.canvas, index, columns.length, number, this.column_details);
		});
	}

	render() {
		this.columns.forEach((column) => {
			column.render();
		});
		this.column_details.render();
	}

	unsubscribe_to_mouse_move_events() {
		this.columns.forEach((column) => {
			column.unsubscribe_to_mouse_move_events();
		});
	}

	refresh_x_initial_variables() {
		this.columns.forEach((column) => {
			column.refresh_x_initial_variables();
		});
	}
}
