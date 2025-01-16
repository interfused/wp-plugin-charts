<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get the chart title attribute from the block.
$chart_title = isset( $attributes['chartTitle'] ) ? esc_html( $attributes['chartTitle'] ) : 'Default Chart Title';

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<h3><?php echo $chart_title; ?></h3>
	<p>basic input block</p>

</div>
