<?php
function Dokmeh_theme_setup()
{

    if (!defined('_S_VERSION')) {
        define('_S_VERSION', '1.0.4');
    }
    $menus = array(        'main-menu' => 'Main Menu');
//    register_nav_menus($menus);
    load_theme_textdomain('dokmeh', get_template_directory() . '/languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    if (function_exists('add_image_size')) {
        add_image_size('featured_medium', 600, 600, false);
    }
    //--Remove Admin Bar--//
    show_admin_bar(false);
}

add_action('after_setup_theme', 'Dokmeh_theme_setup');

/////////////////////////////////////////////////
define('ThemeURI', get_template_directory() . '/');
define('ThemeURL', get_template_directory_uri() . '/');
define('ThemeAssets', ThemeURL . 'assets/');
function ThemeAssets($url)
{
    echo ThemeAssets . $url;
}

///////////////////////////////////////////////
//------------ Scripts & Styles -------------//
///////////////////////////////////////////////

function Dokmeh_scripts()
{

    wp_enqueue_style('darkefaza-style', get_stylesheet_uri(), array(), _S_VERSION);
    wp_style_add_data('darkefaza-style', 'rtl', 'replace');

//    wp_enqueue_script('frontend-ajax', get_template_directory_uri() . '/assets/js/frontend-ajax.js', array(), null, true);
//    wp_localize_script('frontend-ajax', 'frontend_ajax_object',
//        array(
//            'ajaxurl' => admin_url('admin-ajax.php'),
//        )
//    );
}

add_action('wp_enqueue_scripts', 'Dokmeh_scripts');

///////////////////////////////////////////////
//----------- ACF INIT GOOGLE MAP -----------//
///////////////////////////////////////////////
function my_acf_init()
{
    acf_update_setting('google_api_key', 'AIzaSyCGSjuazfR5jJ4HLuqJ2DmyGkZR766ayRI');
}

add_action('acf/init', 'my_acf_init');
///////////////////////////////////////////////
//-------------- THEME SETTING --------------//
///////////////////////////////////////////////
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme Setting',
        'menu_title' => 'Theme Setting',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false,
        'icon_url' => 'dashicons-images-dokmeh',
        'position' => 3
    ));
}

///////////////////////////////////////////////
//-------------- SVG Support ----------------//
///////////////////////////////////////////////
function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

///////////////////////////////////////////////
//Remove Emoji Styles & Scripts in WordPress-//
///////////////////////////////////////////////
///
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

///////////////////////////////////////////////
//-------------- Requirements ---------------//
///////////////////////////////////////////////
//INC - Custom post types
include get_template_directory() . '/inc/custom-post-type-projects.php';
include get_template_directory() . '/inc/custom-post-type-arts.php';
//
////////INC - Custom Taxonomies
include get_template_directory() . '/inc/custom-taxonomy-project-types.php';
//--------------------------------------------


//Rest API show Image ID
// Custom API Data
function product_compact_post( $data, $post, $request ) {

    $categories = get_the_term_list( $data->data['id'], 'product_cat' );
    $categories = strip_tags( $categories );

    $product   = wc_get_product( $data->data['id'] );
    $image_id  = $product->get_image_id();
    $image_url = wp_get_attachment_image_url( $image_id, 'full' );

    $brands = get_the_term_list( $data->data['id'], 'product_brand' );
    $brands = strip_tags( $brands );

    $model = get_field('model', $data->data['id']);

    $sku = str_replace( array(' ', '&', '/'), array('_', '', ''), $model );

    return [
        'id'		=> $data->data['id'],
        'sku'		=> $data->sku = $sku,
        'name'		=> $data->data['title']['rendered'],
        'link'		=> $data->data['link'],
        'categories'=> $data->categories = $categories,
        'image' 	=> $data->image = $image_url,
        'manufacturer'	=> $data->manufacturer = $brands,
        'model'		=> $data->model = $model,
        'mpn' 		=> $data->mpn = $model,
        'ean' 		=> $data->ean = get_field('ean', $data->data['id'])
    ];
    return $data;
}
//add_filter( 'rest_prepare_product', 'product_compact_post', 10, 3 );





//add_filter( 'register_post_type_args', 'sb_add_cpts_to_api', 10, 2 );
//function sb_add_cpts_to_api( $args, $post_type ) {
//    if ( 'result' === $post_type ) {
//        $args['show_in_rest'] = true;
//    }
//    return $args;
//}

//-----------------------------------------------------------
add_action( 'rest_api_init', 'add_thumbnail_to_JSON' );
function add_thumbnail_to_JSON() {
//Add featured image
    register_rest_field(
        'projects', // Where to add the field (posts or custom post type)
        'featured_image_src', // Name of new field (You can call this anything)
        array(
            'get_callback'    => 'get_image_src',
            'update_callback' => null,
            'schema'          => null,

        )
    );
}
function get_image_src( $object, $field_name, $request ) {
    $feat_img_array = wp_get_attachment_image_src(
        $object['featured_media'], // Image attachment ID
        'full',  // Size.  Ex. "thumbnail", "large", "full", etc..
        true // Whether the image should be treated as an icon.
    );
    return $feat_img_array[0];
}
//-----------------------------------------------------------
add_action( 'rest_api_init', 'add_taxACF_to_JSON' );
function add_taxACF_to_JSON() {
//Add product-types color
    register_rest_field(
        'projects',
        'tax_acf',
        array(
            'get_callback'    => 'get_tax_acf',
            'update_callback' => null,
            'schema'          => null,

        )
    );
}
function get_tax_acf( $object, $field_name, $request ) {
    $resault = get_field('project_type_color', 'term_' . $object['project-types'][0]);

    return $resault;
}
//----------------------------------

//add_filter('template_include', 'catalogue_template_include');
//function catalogue_template_include($template)
//{
//    $URL = $_SERVER['REQUEST_URI'];
//        echo 'eeeeeeeeeeeeeeeeeeeeeeeeeee';
//}

//add_action( 'rest_api_init', 'remove_content_from_JSON' );
function remove_content_from_JSON() {


//    register_rest_route( 'wp-json/wp/v2','/projects?_embed', array(
//        'methods' => 'GET',
//
////        'callback' => 'my_awesome_func',
//        'args' => array(
//            'content' => null,
////            'id' => array(
////                'validate_callback' => function($param, $request, $key) {
////                    return is_numeric( $param );
////                }
////            ),
//        ),
//    ));


//    register_rest_field(
//        'projects', // Where to add the field (posts or custom post type)
//        'content', // Name of new field (You can call this anything)
//        array(
//            'get_callback'    => 'null',
//
//        )
//    );
}



//// Remove unnecessary image size
function remove_default_image_sizes($sizes)
{
    unset($sizes['1536x1536']);
    unset($sizes['2048x2048']);
    unset($sizes['medium_large']);
    return $sizes;
}

add_filter('intermediate_image_sizes_advanced', 'remove_default_image_sizes');

//Contact form 7 remove p tag container
add_filter('wpcf7_autop_or_not', '__return_false');

// Cookie
if (!isset($_COOKIE['theme_color'])) {
    setcookie('theme_color', 'blue', time() + 86400 * 30, '/', '.' . parse_url(site_url(''))['host']);
}

//--------- change Gutenberg direction in panel admin for ltr lang -------
if (is_admin()) {
    $wpml_current_lang = ICL_LANGUAGE_CODE;
    if ($wpml_current_lang == 'fa') {
        wp_enqueue_style('admin-gutenberg-css-rtl', ThemeURL . 'assets/css/gutenberg-style-rtl.css');
    }
}


