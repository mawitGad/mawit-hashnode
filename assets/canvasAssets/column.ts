export class Column {
	private position: number;
	private xInitialPosition: number;
	private yInitialPosition: number;
	private colWidth: number;
	private colHeightUnit: number;
	private ctx: CanvasRenderingContext2D;
	private maxColHeight: number;
	private canvasHeight: number;
	private canvasWidth: number;
	private canvas: HTMLCanvasElement;
	private x: number;
	private y: number;
	private width: number;
	private height: number;
	private event_listener_callback: ((e: MouseEvent) => void) | null;

	constructor(canvas: HTMLCanvasElement, position: number, numberOfCols: number, maxColHeight: number) {
		this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvasHeight = canvas.height;
		this.canvasWidth = canvas.width;
		this.position = position;
		this.xInitialPosition = this.widthPercentile(10);
		this.yInitialPosition = this.heightPercentile(70);
		this.colWidth = this.widthPercentile(90 / numberOfCols);
		this.colHeightUnit = this.heightPercentile(45 / 3);
		this.maxColHeight = maxColHeight;
		this.canvas = canvas;
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
		this.event_listener_callback = null;
	}

	render() {
		this.x = this.xInitialPosition + this.colWidth * this.position;
		this.y = this.yInitialPosition - this.colHeightUnit * this.maxColHeight;
		this.width = this.colWidth - 10;
		this.height = this.colHeightUnit * this.maxColHeight;
		const textWidth = this.ctx.measureText("1 Mar").width;

		this.ctx.fillRect(this.x, this.y, this.width, this.height);

		this.ctx.translate(this.x + this.width / 2, this.yInitialPosition + 12);
		this.ctx.rotate((-55 * Math.PI) / 180);
		this.ctx.fillText("1 Mar", -textWidth, 0);

		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
	}

	subscribe_to_mouse_move_events() {
		this.event_listener_callback = this.handleMouseMove.bind(this);
		window.addEventListener("click", this.event_listener_callback);
	}

	unsubscribe_to_mouse_move_events() {
		if (this.event_listener_callback) window.removeEventListener("click", this.event_listener_callback);
	}

	private widthPercentile(percentage: number): number {
		return (percentage / 100) * this.canvasWidth;
	}
	private heightPercentile(percentage: number): number {
		return (percentage / 100) * this.canvasHeight;
	}
	private handleMouseMove(e: MouseEvent) {
		const mouse_x_position_from_canvas_origin = e.x - this.canvas.getBoundingClientRect().x;
		const mouse_y_position_form_canvas_origin = e.y - this.canvas.getBoundingClientRect().y;
		const column_x_start = this.x;
		const column_x_end = this.x + this.width;
		const column_y_start = this.y;
		const column_y_end = this.y + this.height;

		function is_beyond_x_start() {
			return mouse_x_position_from_canvas_origin > column_x_start;
		}
		function is_before_x_end() {
			return mouse_x_position_from_canvas_origin < column_x_end;
		}
		function is_beyond_y_start() {
			return mouse_y_position_form_canvas_origin > column_y_start;
		}
		function is_before_y_end() {
			return mouse_y_position_form_canvas_origin < column_y_end;
		}

		if (is_beyond_x_start() && is_before_x_end() && is_beyond_y_start() && is_before_y_end()) {
			console.log("you clicked inside the column with max height of: " + this.maxColHeight);
		}
	}
}
