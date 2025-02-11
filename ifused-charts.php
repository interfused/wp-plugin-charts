<?php
/**
 * Plugin Name:       Ifused Charts
 * Description:       Basic integration of ChartJS charts for WordPress.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Jeremy Bernabe
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ifused-charts
 *
 * @package IfusedCharts
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function ifused_charts_ifused_charts_block_init() {
	
	$block_folders = ['/bar-chart','/line-chart','/donut-chart'];
	foreach($block_folders as $block_folder){
		register_block_type( __DIR__ . '/build'. $block_folder );
	}
}
add_action( 'init', 'ifused_charts_ifused_charts_block_init' );

add_filter( 'block_categories_all', 'my_plugin_add_block_category', 10, 2 );

function my_plugin_add_block_category( $categories, $post ) {
    // Add your custom block category
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'interfused-chartsjs',
                'title' => __( 'Charts', 'ifused-charts' ),
                'icon'  => null, // Optional: Add an icon here if desired
            ],
        ]
    );
}