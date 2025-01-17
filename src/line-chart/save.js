import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl, PanelBody, RangeControl } from "@wordpress/components";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Save({ attributes }) {
	const { chartTitle, chartId, datasetLabel, datasetBgColor, points } =
		attributes;
	return (
		<div {...useBlockProps.save()}>
			<p>{__("This is the line chart!", "ifused-charts")}</p>

			<h2>{chartTitle}</h2>
			<ul className={datasetLabel} data-set1Bbgcolor={datasetBgColor}>
				{points.map((point, index) => (
					<li key={index} style={{ color: point.pointColor }}>
						<strong>{point.pointLabel}</strong>: {point.pointValue}
					</li>
				))}
			</ul>

			<canvas id={chartId}></canvas>
		</div>
	);
}
