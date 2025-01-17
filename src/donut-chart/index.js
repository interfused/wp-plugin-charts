/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
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
