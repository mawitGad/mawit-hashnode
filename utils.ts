export function cn(...arg: string[]) {
	return arg.filter(Boolean).join(" ");
}
