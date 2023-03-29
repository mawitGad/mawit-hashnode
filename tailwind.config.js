/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				component_background: "var(--component-background)",
				white: "var(--white)",
				border: "var(--border)",
				gray_shade: "var(--gray-shade)",
				accent: "var(--accent)",
				red: "var(--red)",
				yellow: "var(--yellow)",
				twitter_color: "var(--twitter-color)",
				green: "var(--green)",
				canvas_data: "var(--canvas-data)",
				my_feed_blue: "var(--my-feed-blue)",
				rix_gray: "var(--rix-gray)",
				header_write_color: "var(--header-write-color)",
			},
		},
	},
	plugins: [],
};
