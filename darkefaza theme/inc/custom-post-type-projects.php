<?php
///////////////////////////////////////////////
//------- Custom Post type projects -----------//
///////////////////////////////////////////////
function dokmeh_custom_post_type_projects()
{
    $labels = array(
        'name'              => 'projects',
        'singular_name'     => 'project',
        'menu_name'         => 'projects',
        'name_admin_bar'    => 'projects',
        'add_new'           => 'add new project',
        'add_new_item'      => 'add new project item',
        'new_item'          => 'new project',
        'edit_item'         => 'edit project',
        'view_item'         => 'view project',
        'all_items'         => 'all projects',
        'search_items'      => 'search project',
        'parent_item_colon' => 'project parent',
        'not_found'         => 'no projects found',
        'not_found_in_trash'=> 'no projects found in trash',
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
        'taxonomies'        => array('project-types'),
        'query_var'         => true,
        'rewrite'           => array('slug' => 'projects'),
        'capability_type'   => 'post',
        'has_archive'       => true,
        'menu_icon'         => 'dashicons-layout',
        'hierarchical'      => false,
        'menu_position'     => null,
        'supports'          => array('title', 'editor', 'author', 'thumbnail','excerpt')

    );
    register_post_type('projects', $args);
}
add_action('init','dokmeh_custom_post_type_projects');
