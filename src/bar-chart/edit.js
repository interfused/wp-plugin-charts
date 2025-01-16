import { __ } from "@wordpress/i18n";
import { useEffect } from "react";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
	Button,
	ColorPicker,
} from "@wordpress/components";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function handleClick(e) {
	console.log("clicked to add");
}

export default function Edit({ attributes, setAttributes }) {
	const { chartTitle, chartId, datasetLabel, datasetBgColor, points } =
		attributes;

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

	return (
		<div {...useBlockProps()}>
			<p>{__(`This is the bar chart for ${chartTitle}! `, "ifused-charts")}</p>
			<p>It will be rendered on the frontend.</p>
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
					<label
						class="components-base-control__label ffda-b-cd-ae-fdacfdc-2o4jwd ej5x27r2"
						for="inspector-text-control-2"
					>
						DATASET COLOR
					</label>
					<ColorPicker
						color={datasetBgColor}
						onChangeComplete={(color) =>
							setAttributes({ datasetBgColor: color.hex })
						}
					/>

					{points.map((point, index) => (
						<div
							key={index}
							style={{
								border: "1px solid #ccc",
								padding: "10px",
								marginBottom: "10px",
							}}
						>
							{/* Input for pointLabel */}
							<TextControl
								label="Label"
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

							{/* Input for pointColor 
							<div>
								<label>Color</label>
								<ColorPicker
									color={point.pointColor}
									onChangeComplete={(color) =>
										handleUpdatePoint(index, "pointColor", color.hex)
									}
								/>
							</div>
							*/}

							{/* Remove Button */}
							<Button
								isDestructive
								onClick={() => handleRemovePoint(index)}
								style={{ marginTop: "10px" }}
							>
								Remove Point
							</Button>
						</div>
					))}

					{/* Add Button */}
					<Button isPrimary onClick={handleAddPoint}>
						Add Point
					</Button>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
