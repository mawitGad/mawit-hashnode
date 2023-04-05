import { Columns } from "./columns";
import { LeftAxis } from "./LeftAxis";
import { TopDetails } from "./topDetails";

export class Canvas {
	private canvas: HTMLCanvasElement;
	private container: HTMLDivElement;
	private ctx: CanvasRenderingContext2D;
	private topDetails: TopDetails;
	private leftAxis: LeftAxis;
	private columns: Columns;

	constructor() {
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
		this.container = document.getElementById("container") as HTMLDivElement;
		this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.columns = new Columns(this.canvas, [3, 2, 1, 1, 3, 1, 2]);
		this.topDetails = new TopDetails(this.canvas);
		this.leftAxis = new LeftAxis(this.canvas);
		this.setCanvasDimensions();
	}

	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.topDetails.render();
		this.leftAxis.render();
		this.columns.render();
		requestAnimationFrame(this.render.bind(this));
	}

	close() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.columns.unsubscribe_to_mouse_move_events();
	}

	private setCanvasDimensions() {
		this.canvas.height = 150;
		this.canvas.width = (19.95249406175772 / 100) * this.container.clientWidth;
		this.canvas.style.height = 150 + "px";
		this.canvas.style.width = (19.95249406175772 / 100) * this.container.clientWidth + "px";
	}
}
