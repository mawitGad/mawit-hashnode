import { Column } from "./column";

export class Details {
	private width: number;
	private height: number;
	private ctx: CanvasRenderingContext2D;
	private column: Column | null;
	private x_velocity: number | null;
	private y_velocity: number | null;
	private duration_in_cycles: number;
	private x_position: number;
	private y_position: number;
	private prev_column: Column | null;
	private canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvas = canvas;
		this.width = 120;
		this.height = 50;
		this.column = null;
		this.prev_column = null;
		this.x_velocity = null;
		this.y_velocity = null;
		this.duration_in_cycles = 20;
		this.x_position = 0;
		this.y_position = 0;
	}

	render() {
		if (!this.column) return;
		const container_fill_style = "#000000eb";
		const half_height = this.height / 2;
		const column_width = this.column.colWidth - 5;
		const half_column_width = column_width / 2;
		let x_offset = 0;

		set_x_velocity.bind(this)();
		set_y_velocity.bind(this)();
		set_x_offset.bind(this)();
		calculate_and_set_coordinates.bind(this)();
		render_details_container.bind(this)();
		render_details_text.bind(this)();
		render_details_text_box.bind(this)();
		render_left_pointer_triangle.bind(this)();
		render_right_pointer_triangle.bind(this)();

		function set_x_velocity(this: Details) {
			if (this.x_velocity !== null) return;
			if (!this.column) return;
			const distance = this.column.x - (this.x_position || 0);
			this.x_velocity = distance / this.duration_in_cycles;
		}
		function set_y_velocity(this: Details) {
			if (this.y_velocity !== null) return;
			if (!this.column) return;
			const distance = this.column.y - (this.y_position || 0);
			this.y_velocity = distance / this.duration_in_cycles;
		}
		function set_x_offset(this: Details) {
			if (!this.column) return;
			if (this.canvas.width - this.column.x < this.width) {
				if (this.column.x < this.width) {
					x_offset = this.width / 2;
				} else {
					x_offset = this.width + 5;
				}
			} else {
				x_offset = 0;
			}
		}
		function render_details_container(this: Details) {
			if (!this.column) return;

			this.ctx.fillStyle = container_fill_style;
			this.ctx.beginPath();
			this.ctx.roundRect(this.x_position - x_offset + half_column_width, this.y_position - half_height, this.width, this.height, 4);
			this.ctx.fill();
		}
		function calculate_and_set_coordinates(this: Details) {
			if (!this.column) return;
			if (this.x_velocity === null) return;
			if (this.y_velocity === null) return;

			const distance_x = this.column.x - this.x_position;
			const distance_y = this.column.y - this.y_position;

			if (positive(distance_x) <= positive(this.x_velocity)) {
				this.x_position = this.column.x;
			} else {
				this.x_position += this.x_velocity;
			}

			if (positive(distance_y) <= positive(this.y_velocity)) {
				this.y_position = this.column.y;
			} else {
				this.y_position += this.y_velocity;
			}

			function positive(number: number) {
				if (number < 0) return number * -1;
				return number;
			}
		}
		function render_details_text(this: Details) {
			this.ctx.fillStyle = "white";
			this.ctx.textBaseline = "top";
			this.ctx.fillText(
				"page views: " + this.column?.maxColHeight,
				this.x_position + 25 - x_offset + half_column_width,
				this.y_position + 30 - half_height
			);
			this.ctx.fillText("1 march", this.x_position + 5 - x_offset + half_column_width, this.y_position + 10 - half_height);
		}
		function render_details_text_box(this: Details) {
			this.ctx.fillStyle = "#7994d1";
			this.ctx.strokeStyle = "white";
			this.ctx.fillRect(this.x_position + 5 - x_offset + half_column_width, this.y_position + 30 - half_height, 15, 15);
			this.ctx.strokeRect(this.x_position + 5 - x_offset + half_column_width, this.y_position + 30 - half_height, 15, 15);
		}
		function render_left_pointer_triangle(this: Details) {
			if (x_offset !== 0) return;
			this.ctx.fillStyle = container_fill_style;
			this.ctx.beginPath();
			this.ctx.moveTo(this.x_position - 5 + half_column_width, this.y_position + half_height - half_height);
			this.ctx.lineTo(this.x_position + half_column_width, half_height + this.y_position - 5 - half_height);
			this.ctx.lineTo(this.x_position + half_column_width, half_height + this.y_position + 5 - half_height);
			this.ctx.closePath();
			this.ctx.fill();
		}
		function render_right_pointer_triangle(this: Details) {
			if (x_offset !== this.width + 5) return;
			this.ctx.fillStyle = container_fill_style;
			this.ctx.beginPath();
			this.ctx.moveTo(this.x_position + half_column_width, this.y_position + half_height - half_height);
			this.ctx.lineTo(this.x_position - 5 + half_column_width, half_height + this.y_position - 5 - half_height);
			this.ctx.lineTo(this.x_position - 5 + half_column_width, half_height + this.y_position + 5 - half_height);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}
	subscribe(column: Column) {
		if (this.column) this.prev_column = this.column;
		this.column = column;
		if (this.prev_column?.position === column.position) return;
		this.x_velocity = null;
		this.y_velocity = null;
	}
	unsubscribe(column: Column) {
		if (!this.column) return;
		if (this.column.position === column.position) {
			this.prev_column = column;
			this.column = null;
		}
	}
}
