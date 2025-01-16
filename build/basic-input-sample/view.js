/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/basic-input-sample/view.js ***!
  \****************************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from ifused-charts-basic-input-sample block)");
/* eslint-enable no-console */

/*
//import Chart from "chart.js/auto";

// Check if the block is rendered on the frontend (after page load)
document.addEventListener("DOMContentLoaded", () => {
	// Get all the chart elements (identified by a class in render.php)
	const charts = document.querySelectorAll(".ifused-chart .chart");

	charts.forEach((chart) => {
		// Get the canvas context
		const ctx = chart.getContext("2d");

		// Example data for Chart.js (you can replace this with dynamic data)
		const chartData = {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [
				{
					label: "Sample Dataset",
					data: [12, 19, 3, 5, 2],
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
					],
					borderColor: [
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
					],
					borderWidth: 1,
				},
			],
		};

		// Initialize the chart using Chart.js
		new Chart(ctx, {
			type: "bar", // Chart type (can be bar, line, pie, etc.)
			data: chartData,
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: true,
					},
					title: {
						display: true,
						text: "Sample Chart Title", // You can replace this dynamically with the chartTitle
					},
				},
			},
		});
	});
});

*/
/******/ })()
;
//# sourceMappingURL=view.js.map