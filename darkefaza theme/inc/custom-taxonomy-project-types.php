<?php
///////////////////////////////////////////////
//----- Register Taxonomy for projects ------//
///////////////////////////////////////////////

function dokmeh_create_taxonomies_projects()
{
    // Add new taxonomy, make it hierarchical (like categories)

    $labels = array(
        'name'              => 'project types',
        'singular_name'     => 'project types',
        'search_items'      => 'Search project types',
        'all_items'         => 'All project types',
        'parent_item'       => 'Parent project type',
        'parent_item_colon' => 'Parent project type:',
        'edit_item'         => 'Edit project type',
        'update_item'       => 'Update project type',
        'add_new_item'      => 'Add New project type',
        'new_item_name'     => 'New project type name',
        'menu_name'         => 'project types',
    );

    $args = array(
        'hierarchical'      => true,
        'label'             => 'project Types',
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'project-types','with_front'=>true,'hierarchical' => true ),
    );

    register_taxonomy('project-types', 'projects', $args);

}
// hook into the init action and call create_taxonomies when it fires

add_action( 'init', 'dokmeh_create_taxonomies_projects', 0 );
