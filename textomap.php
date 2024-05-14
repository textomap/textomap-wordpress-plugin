<?php
/**
 * Plugin Name:       Textomap
 * Plugin URI: 
 * Description:       Create and embed maps in seconds
 * Author:            Textomap team
 * Version:           0.1.0
 * Requires at least: 5.1
 * Requires PHP:      7.0
 * Author URI:        https://textomap.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       textomap
 *
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
function textomap_textomap_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'textomap_textomap_block_init' );