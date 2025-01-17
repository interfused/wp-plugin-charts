import { __ } from "@wordpress/i18n";
import { useEffect, useRef } from "react";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
	Button,
	ColorPicker,
} from "@wordpress/components";
import Chart from "chart.js/auto";
import "./editor.scss";

/**
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const { chartTitle, chartId, datasetLabel, points } = attributes;

	const chartRef = useRef(null); // Reference to the Chart.js instance
	const canvasRef = useRef(null); // Reference to the canvas DOM element

	// Function to add a new point to the array
	const handleAddPoint = () => {
		const newPoints = [
			...points,
			{ pointLabel: "", pointValue: 0, pointColor: "#000000" },
		];
		setAttributes({ points: newPoints });
	};

	// Function to update a specific property of an object in the array
	const handleUpdatePoint = (index, key, value) => {
		const newPoints = points.map((point, i) => {
			if (i === index) {
				return { ...point, [key]: value };
			}
			return point;
		});
		setAttributes({ points: newPoints });
	};

	// Function to remove a specific object from the array
	const handleRemovePoint = (index) => {
		const newPoints = points.filter((el, i) => i !== index); // Filter out the object at the given index
		setAttributes({ points: newPoints });
	};

	// Function to initialize or update the Chart.js instance
	const initializeChart = () => {
		const ctx = canvasRef.current;

		// Destroy existing chart instance if it exists
		if (chartRef.current) {
			chartRef.current.destroy();
		}

		// Create a new chart instance
		chartRef.current = new Chart(ctx, {
			type: "doughnut",

			data: {
				labels: points.map((el) => el.pointLabel),
				datasets: [
					{
						label: datasetLabel,
						data: points.map((el) => el.pointValue),
						backgroundColor: points.map((el) => el.pointColor),
						borderWidth: 1,
						hoverOffset: 4,
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
						text: chartTitle,
					},
				},
			},
		});
	};

	useEffect(() => {
		console.log("chart title changed");
		initializeChart();
	}, [chartTitle, datasetLabel, points]);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Chart Settings", "ifused-charts")}>
					<TextControl
						label="Chart Title"
						value={chartTitle}
						onChange={(value) => setAttributes({ chartTitle: value })}
					/>
					<TextControl
						label="Chart Id"
						value={chartId}
						help="set a unique css id selector"
						onChange={(value) => setAttributes({ chartId: value })}
					/>
				</PanelBody>

				<PanelBody title={__("Chart Data ", "ifused-charts")}>
					<TextControl
						label="Dataset Label"
						value={datasetLabel}
						onChange={(value) => setAttributes({ datasetLabel: value })}
					/>
					<h2 className="mt-4">DATA POINTS</h2>
					{points.map((point, index) => (
						<div key={index} className="datapoint">
							{/* Input for pointLabel */}
							<TextControl
								label="Data Point Label"
								value={point.pointLabel}
								onChange={(value) =>
									handleUpdatePoint(index, "pointLabel", value)
								}
							/>

							{/* Input for pointValue */}
							<TextControl
								label="Value"
								type="number"
								value={point.pointValue}
								onChange={(value) =>
									handleUpdatePoint(index, "pointValue", parseInt(value, 10))
								}
							/>

							<div>
								<label>Color</label>
								<ColorPicker
									color={point.pointColor}
									onChangeComplete={(color) =>
										handleUpdatePoint(index, "pointColor", color.hex)
									}
								/>
							</div>

							{/* Remove Button */}
							<Button
								isDestructive
								onClick={() => handleRemovePoint(index)}
								style={{ marginTop: "10px" }}
							>
								Remove Data Point
							</Button>
						</div>
					))}

					{/* Add Button */}
					<Button className="mt-4" isPrimary onClick={handleAddPoint}>
						Add New Data Point
					</Button>
				</PanelBody>
			</InspectorControls>
			<div
				className="wp-block-ifused-donut-chart-block"
				data-pointslabel1={datasetLabel}
				data-chart-title={chartTitle}
				data-points={points}
			>
				<canvas ref={canvasRef} id={chartId} class="ifused_donutchart"></canvas>
			</div>
		</div>
	);
}
