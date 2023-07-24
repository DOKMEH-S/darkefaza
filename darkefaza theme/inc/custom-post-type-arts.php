<?php
///////////////////////////////////////////////
//------- Custom Post type arts -----------//
///////////////////////////////////////////////
function dokmeh_custom_post_type_arts()
{
    $labels = array(
        'name'              => 'arts',
        'singular_name'     => 'art',
        'menu_name'         => 'arts',
        'name_admin_bar'    => 'arts',
        'add_new'           => 'add new art',
        'add_new_item'      => 'add new art item',
        'new_item'          => 'new art',
        'edit_item'         => 'edit art',
        'view_item'         => 'view art',
        'all_items'         => 'all arts',
        'search_items'      => 'search art',
        'parent_item_colon' => 'art parent',
        'not_found'         => 'no arts found',
        'not_found_in_trash'=> 'no arts found in trash',
    );
    $args = array(
        'labels'            => $labels,
        'description'       => 'Description.',
        'public'            => true,
        'publicly_queryable'=> true,
        'show_ui'           => true,
        'show_in_menu'      => true,
        'show_in_nav_menus' => true,
        'show_in_rest'      => true,
        'taxonomies'        => array('art-types'),
        'query_var'         => true,
        'rewrite'           => array('slug' => 'peace-of-arts'),
        'capability_type'   => 'post',
        'has_archive'       => true,
        'menu_icon'         => 'dashicons-art',
        'hierarchical'      => false,
        'menu_position'     => null,
        'supports'          => array('title', 'editor', 'author', 'thumbnail','excerpt')

    );
    register_post_type('arts', $args);
}
add_action('init','dokmeh_custom_post_type_arts');
