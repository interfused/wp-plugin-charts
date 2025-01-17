<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$chart_title = isset( $attributes['chartTitle'] ) ? esc_html( $attributes['chartTitle'] ) : 'Default Chart Title';
$chart_id = isset( $attributes['chartId'] ) ? esc_html( $attributes['chartId'] ) : 'ifused_chart_linechart';
// Retrieve points data
$points = isset( $attributes['points'] ) ? $attributes['points'] : [];

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
<p>
	<?php esc_html_e( 'Our line chart output', 'ifused-charts' ); ?>
</p>

<h3><?php echo $chart_title;?></h3>
<!--
	<?php if ( ! empty( $points ) ) : ?>
        <ul>
            <?php foreach ( $points as $index => $point ) : ?>
                <li style="color: <?php echo esc_attr( $point['pointColor'] ); ?>;">
                    <p><strong><?php echo esc_html( "Point Label " . ( $index + 1 ) . ": " . $point['pointLabel'] ); ?></strong></p>
                    <p><?php echo esc_html( "Point Value " . ( $index + 1 ) . ": " . $point['pointValue'] ); ?></p>
                    <p><?php echo esc_html( "Point Color " . ( $index + 1 ) . ": " . $point['pointColor'] ); ?></p>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <p><?php esc_html_e( 'No points data available', 'ifused-charts' ); ?></p>
    <?php endif; ?>
	-->
	<div class="wp-block-ifused-line-chart-block" data-set1Bgcolor="<?php echo $attributes['datasetBgColor'];?>" data-pointslabel1="<?php echo $attributes['datasetLabel'] ;?>"  data-chart-title="<?php echo $chart_title;?>" data-points='<?php echo esc_attr( json_encode( $points ) ); ?>'>
		<canvas id="<?php echo $chart_id;?>" class="ifused_linechart"></canvas>
	</div>
</div>
