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
	}

	render() {
		const x = this.xInitialPosition + this.colWidth * this.position;
		const y = this.yInitialPosition - this.colHeightUnit * this.maxColHeight;
		const width = this.colWidth - 10;
		const height = this.colHeightUnit * this.maxColHeight;
		const textWidth = this.ctx.measureText("1 Mar").width;

		this.ctx.fillRect(x, y, width, height);

		this.ctx.translate(x + width / 2, this.yInitialPosition + 12);
		this.ctx.rotate((-45 * Math.PI) / 180);
		this.ctx.fillText("1 Mar", -textWidth, 0);

		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
	}

	private widthPercentile(percentage: number): number {
		return (percentage / 100) * this.canvasWidth;
	}
	private heightPercentile(percentage: number): number {
		return (percentage / 100) * this.canvasHeight;
	}
}
