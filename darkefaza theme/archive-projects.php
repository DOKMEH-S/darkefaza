<?php get_header(); ?>
    <main class="wrapper projectsWrapper">
        <?php $args = array(
            'post_type' => 'projects',
            'posts_per_page' => -1,
        );
        $projectsQuery = new WP_Query($args);
        if ($projectsQuery->have_posts()): ?>
            <section class="projectsContainer grid">
                <div class="grid-sizer"></div>
                <?php while ($projectsQuery->have_posts()): $projectsQuery->the_post();
                    $projectID = get_the_ID(); ?>
                    <div class="grid-item">
                       <?php $cats = wp_get_object_terms($projectID, 'project-types', array('parent' => 0));
                        $color = get_field('project_type_color', 'term_' . $cats[0]->term_id);
                        $cat_name = $cats[0]->name;?>
                        <div class="projectWrap" <?php if($cat_name) echo 'data-category="'.$cat_name.'"';?> <?php if($color){?>data-color="<?php echo $color;?>"<?php }?>>
                            <div class="projectMediaOverlayBoxWrap">
                                <div class="projectMedia">
                                    <?php echo get_the_post_thumbnail($projectID,'medium');?>
                                </div>
                                <a href="<?php the_permalink(); ?>"
                                   class="projectOverlayWrap menuItem"></a>
                                <div class="plus-box">
                                    <img src="<?php ThemeAssets('img/plus.svg');?>" alt="">
                                </div>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="project-title-code">
                                <p class="title"><?php echo get_field('project_code');?></p>
                                <span><?php the_title();?></span>
                            </a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </section>
        <?php endif; ?>
    </main>
<?php get_footer();
