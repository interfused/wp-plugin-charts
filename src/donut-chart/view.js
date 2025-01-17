import Chart from "chart.js/auto";

/* eslint-disable no-console */
console.log("Hello World! (from ifused-charts-donut-chart block)");
/* eslint-enable no-console */

// Check if the block is rendered on the frontend (after page load)
document.addEventListener("DOMContentLoaded", () => {
	// Get all the chart elements (identified by a class in render.php)
	const chartDivs = document.querySelectorAll(
		".wp-block-ifused-donut-chart-block",
	);

	chartDivs.forEach((div) => {
		console.log(`donut chart div has data-points`);
		const pointsData = JSON.parse(div.getAttribute("data-points")); // Assuming you saved it as a data attribute
		console.dir(pointsData);
		const ctx = div.querySelector(".ifused_donutchart");
		console.dir(ctx);
		new Chart(ctx, {
			type: "doughnut",
			data: {
				labels: pointsData.map((el) => el.pointLabel),
				datasets: [
					{
						label: div.getAttribute("data-pointslabel1"),
						backgroundColor: pointsData.map((el) => el.pointColor),
						data: pointsData.map((el) => el.pointValue),
						borderWidth: 1,
					},
				],
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "top",
					},
					title: {
						display: true,
						text: div.getAttribute("data-chart-title"),
					},
				},
			},
		});
	});
});
