<?php
/**
 * Plugin Name:       Ifused Charts
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ifused-charts
 *
 * @package IfusedCharts
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ifused_charts_ifused_charts_block_init() {
	
	$block_folders = ['/second-block','/bar-chart','/basic-input-sample'];
	foreach($block_folders as $block_folder){
		register_block_type( __DIR__ . '/build'. $block_folder );
	}
}
add_action( 'init', 'ifused_charts_ifused_charts_block_init' );
