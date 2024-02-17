<?php
/*
* Plugin Name:       We are team
* Plugin URI:        https://rashel.pro/we-are-team
* Description:       Introducing 'We Are Team' – a user-friendly Gutenberg plugin designed to effortlessly showcase a group of people on your website.
* Version:           1.0.0
* Requires at least: 5.2
* Requires PHP:      7.2
* Author:            Mahamud Hasan Rashel
* Author URI:        https://rashel.pro
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Update URI:        https://rashel.pro
* Text Domain:       werteam
* Domain Path:       /languages
*/

if (!function_exists('add_action')) {
    echo "Seems like you stumbled here by accident.😛 ";
    exit;
}

// Define the plugin path
define('PLUGIN_PATH', plugin_dir_path(__FILE__));

class WeAreTeam {
    // Define the plugin path
    private $pluginPath;

    // Constructor
    public function __construct() {
        $this->pluginPath = plugin_dir_path(__FILE__);

        // Include necessary files
        $this->includeFiles();

        // Register hooks
        add_action('init', [$this, 'registerBlocks']);
        add_action('after_setup_theme', [$this, 'registerImageSize']);
        add_filter('image_size_names_choose', [$this, 'addImageSize']);
    }

    // Include necessary files
    private function includeFiles() {
        include($this->pluginPath . 'includes/register-blocks.php');
        include($this->pluginPath . 'includes/theme-settings.php');
    }

    // Register blocks
    public function registerBlocks() {
        up_register_blocks();
    }

    // Register image size
    public function registerImageSize() {
        we_are_team_image_size();
    }

    // Add image size to choose list
    public function addImageSize($sizes) {
        return we_are_team_image_size_add($sizes);
    }
}

// Instantiate the class on 'plugins_loaded'
function kickOff_weAreTeam_plugin() {
    $weAreTeamPlugin = new WeAreTeam();
}

add_action('plugins_loaded', 'kickOff_weAreTeam_plugin');
