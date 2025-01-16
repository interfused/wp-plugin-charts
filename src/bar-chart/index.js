/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import metadata from "./block.json";

import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl } from "@wordpress/components";
import { useEffect, useRef } from "@wordpress/element";
import Chart from "chart.js/auto";

function renderChart(ref, type, data) {
	if (ref.current) {
		new Chart(ref.current, {
			type,
			data,
			options: { responsive: true },
		});
	}
}

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType(metadata.name, {
	edit: Edit,
});
/*
registerBlockType("my-charts/bar-chart", {
	edit({ attributes, setAttributes }) {
		const chartRef = useRef(null);

		useEffect(() => {
			try {
				const parsedData = JSON.parse(attributes.data);
				renderChart(chartRef, "bar", parsedData);
			} catch (e) {
				console.error("Invalid chart data", e);
			}
		}, [attributes.data]);

		return (
			<div>
				<InspectorControls>
					<PanelBody title="Chart Data">
						<TextareaControl
							label="Chart Data (JSON)"
							value={attributes.data}
							onChange={(data) => setAttributes({ data })}
						/>
					</PanelBody>
				</InspectorControls>
				<canvas
					ref={chartRef}
					style={{ width: "100%", height: "300px" }}
				></canvas>
			</div>
		);
	},
	save() {
		return <div>Chart will render on the front-end.</div>;
	},
});
*/
