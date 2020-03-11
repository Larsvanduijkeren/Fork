<?php

// Add custom image sizes
add_theme_support('post-thumbnails');

function registerMenu() {
    register_nav_menu('header-nav', __('Header Nav'));
}

// to edit gutenberg editor
function custom_gutenberg_editor_stylesheet() {
    wp_enqueue_style('custom-gutenberg-stylesheet', get_template_directory_uri() . '/library/css/gutenberg-styles.css', [], wp_get_theme()->get('Version'), 'all');
}

add_action('enqueue_block_editor_assets', 'custom_gutenberg_editor_stylesheet');