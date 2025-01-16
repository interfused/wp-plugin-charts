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
export default function Edit({ attributes, setAttributes }) {
	const { chartTitle } = attributes;
	return (
		<div {...useBlockProps()}>
			<p>{__("This is the basic input block!", "ifused-charts")}</p>
			<InspectorControls>
				<PanelBody title={__("Chart Settings", "ifused-charts")}>
					<TextControl
						label="my new chart title"
						value={chartTitle}
						onChange={(value) => setAttributes({ chartTitle: value })}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
