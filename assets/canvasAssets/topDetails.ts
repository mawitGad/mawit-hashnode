export class TopDetails {
	private canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}

	render() {
		const canvasCenterX = this.canvas.width / 2;
		const ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

		ctx.font = "14px sans-serif";
		ctx.fillStyle = "#95A3B8";
		ctx.textBaseline = "alphabetic";
		ctx.fillText("Pageviews", canvasCenterX, 19);
		ctx.fillRect(canvasCenterX - this.widthPercentile(20) - 10, 10, this.widthPercentile(20), 10);
	}

	private widthPercentile(percentage: number) {
		return (percentage / 100) * this.canvas.width;
	}
}
