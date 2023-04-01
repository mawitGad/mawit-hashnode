export class LeftAxis {
	private ctx: CanvasRenderingContext2D;
	private canvasWidth: number;
	private canvasHeight: number;

	constructor(canvas: HTMLCanvasElement) {
		this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvasWidth = canvas.width;
		this.canvasHeight = canvas.height;
	}
	render() {
		this.ctx.fillText("3", 5, this.heightPercentile(45 / 3) * 0 + this.heightPercentile(25));
		this.ctx.fillText("2", 5, this.heightPercentile(45 / 3) * 1 + this.heightPercentile(25));
		this.ctx.fillText("1", 5, this.heightPercentile(45 / 3) * 2 + this.heightPercentile(25));
		this.ctx.fillText("0", 5, this.heightPercentile(45 / 3) * 3 + this.heightPercentile(25));
	}
	private heightPercentile(percentage: number) {
		return (percentage / 100) * this.canvasHeight;
	}
}
