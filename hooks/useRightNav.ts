import { Columns } from "@/assets/canvasAssets/columns";
import { LeftAxis } from "@/assets/canvasAssets/LeftAxis";
import { TopDetails } from "@/assets/canvasAssets/topDetails";
import { useEffect } from "react";

export default function useRightNav() {
	useEffect(() => {
		const canvas = document.getElementById("canvas") as HTMLCanvasElement;
		const container = document.getElementById("container") as HTMLDivElement;
		canvas.height = 150;
		canvas.width = (19.95249406175772 / 100) * container.clientWidth;
		canvas.style.height = 150 + "px";
		canvas.style.width = (19.95249406175772 / 100) * container.clientWidth + "px";

		const ctx = canvas.getContext("2d");
		const color = "#95A3B8";

		if (!ctx) return;
		ctx.fillStyle = color;
		const topDetails = new TopDetails(canvas);
		const leftAxis = new LeftAxis(canvas);
		const columns = new Columns(canvas, [2, 3, 3, 1, 3, 2, 1]);
		leftAxis.render();
		topDetails.render();
		columns.render();

		return () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			columns.unsubscribe_to_mouse_move_events();
		};
	}, []);

	return {};
}
