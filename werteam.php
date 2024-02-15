<?php
/*
* Plugin Name:       We Are Team
* Plugin URI:        https://rashel.pro
* Description:       Nice way to show the team member
* Version:           1.0.0
* Requires at least: 5.2
* Requires PHP:      7.2
* Author:            Mahamud Hasan Rashel
* Author URI:        https://rashel.pro
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Update URI:        https://rashel.pro
* Text Domain:       we-are-team
* Domain Path:       /languages
*/

// Setup
define('PLUGIN_PATH', plugin_dir_path(__FILE__));

// Includes
include(PLUGIN_PATH . 'includes/register-blocks.php');
include(PLUGIN_PATH . 'includes/theme-settings.php');

// Hooks
add_action('init', 'up_register_blocks');
add_action('after_setup_theme', 'we_are_team_image_size');
add_filter('image_size_names_choose', 'we_are_team_image_size_add');