import { Canvas } from "@/assets/canvasAssets/canvas";
import { Columns } from "@/assets/canvasAssets/columns";
import { Details } from "@/assets/canvasAssets/details";
import { LeftAxis } from "@/assets/canvasAssets/LeftAxis";
import { TopDetails } from "@/assets/canvasAssets/topDetails";
import { useEffect } from "react";

export default function useRightNav() {
	useEffect(() => {
		const canvas = new Canvas();
		canvas.render();
		return () => canvas.close();
	}, []);

	return {};
}
