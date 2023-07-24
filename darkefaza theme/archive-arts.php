<?php get_header(); ?>
    <main class="wrapper artWrapper padding-class">
        <?php $args = array(
            'post_type' => 'arts',
            'posts_per_page' => -1,
        );
        $ArtsQuery = new WP_Query($args);
        if ($ArtsQuery->have_posts()): ?>
            <section class="artContainer mBox">
                <?php while ($ArtsQuery->have_posts()): $ArtsQuery->the_post();
                    $artID = get_the_ID(); ?>
                    <a href="<?php the_permalink(); ?>" class="itemBox artWrap menuItem">
                        <div class="itemBox-image">
                            <img src="<?php echo get_the_post_thumbnail_url($artID, 'full');?>" alt="">
                            <?php echo get_the_post_thumbnail($artID, 'full', array('class' => 'hover-img')); ?>
                            <div class="triangle"></div>
                        </div>
                        <div class="itemBox-text">
                            <p><?php the_title();?></p>
                        </div>
                    </a>
                <?php endwhile; ?>
            </section>
        <?php endif; ?>
    </main>
<?php get_footer();
